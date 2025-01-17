import React from 'react'
import { GetServerSideProps } from 'next';
import Button from '@/components/Button';
import { NextPage } from 'next';
import Link from 'next/link';
import SideBar from '@/components/Sidebar';
import Post from '@/components/Post';
import { Auth } from '@supabase/auth-ui-react'
import {ThemeSupa} from '@supabase/auth-ui-shared'
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head';
import { GitHub } from 'react-feather';
import { useRouter } from 'next/router';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import axios from '@/utils/axios';
import { Author, Post as PostType } from '@/index';

interface Props {
	post: PostType
}

const Page: NextPage<Props> = ({post}) => {
	const supabaseClient = useSupabaseClient()
  	const user = useUser()
	const router = useRouter()

	if (!user)
    return (
		<div className='container mx-auto mt-12'>
      <Auth
        redirectTo={process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}
        appearance={{ theme: ThemeSupa }}
        supabaseClient={supabaseClient}
        socialLayout="horizontal"
		providers={[]}
      />
	  </div>
    )
		return (
		<div className='flex flex-col h-screen'>
		<Head>
			<title>{post.title}</title>
		</Head>
		
		<div className='flex flex-1 overflow-hidden'>
		<SideBar/>
		<div className='flex flex-1 flex-col overflow-y-auto w-full py-12'>
            <div className='w-full mx-auto bg-white px-6 max-w-5xl'>
	        <Post {...post}/>
            </div>
			</div>
		</div></div>);
}

export const getServerSideProps:GetServerSideProps = async (context) => {
	
	const supabaseServerClient = createServerSupabaseClient(context)
	  const {
		data: { user },
	  } = await supabaseServerClient.auth.getUser();

	  if (!user) {
		return {
		  redirect: {
			destination: '/auth',
			permanent: false
		  }
		}
	  }

	  try {

        let post = await axios.get(`authors/${user.id}/posts/${context.params?.slug}`)
     
		
		return {
			props: {
				post: post.data
			}
	}	
	  }
	  catch {
		return {
			redirect: {
				destination: '/onboarding',
				permanent: false
			}
		}
	  }

	
}

export default Page;


