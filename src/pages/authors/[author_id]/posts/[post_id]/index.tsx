import React from 'react'
import { GetServerSideProps } from 'next';
import Button from '@/components/Button';
import { NextPage } from 'next';
import Link from 'next/link';
import SideBar from '@/components/Sidebar';
import Post from '@/components/Post';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head';
import { useRouter } from 'next/router';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Author, Post as PostType, Comment } from '@/index';
import {NodeManager, NodeClient} from '@/nodes';
import {useQuery, QueryClient, dehydrate} from '@tanstack/react-query'
import { UserAuthorContextProvider } from '@/contexts/userAuthor';
import useAuthor from '@/hooks/useAuthor';
interface Props {
	authorId:string
	userId:string
	postId:string
}

const Page: NextPage<Props> = ({authorId, postId, userId}) => {
	let {data:post} = useQuery({queryKey: ['post', postId], queryFn: async () => await NodeClient.getPost(authorId, postId)})
	let {data:comments} = useQuery({queryKey: ['comments', postId], queryFn: async () => await NodeClient.getComments(authorId, postId)})
	const userAuthor = useAuthor(userId)
		return (
		<UserAuthorContextProvider value={userAuthor}>
		<div className='flex flex-col h-screen'>
		<Head>
			<title>{post?.title}</title>
		</Head>
		
		<div className='flex flex-1 overflow-hidden'>
		<SideBar/>
		<div className='flex flex-1 flex-col overflow-y-auto w-full py-12'>
            <div className='w-full mx-auto bg-white px-6 max-w-5xl'>
				{
					post && comments && <Post post={post} comments={comments.comments}/>
				}
            </div>
			</div>
		</div>
		</div>
		</UserAuthorContextProvider>
		);
}

export default Page

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


	let userId = user.id
	let  authorId = context.params?.author_id as string
	let postId = context.params?.post_id as string


	const queryClient = new QueryClient()
	
	const funcPost = async () => await NodeManager.getPost(authorId, postId)
	const funcComments = async () => await NodeManager.getComments(authorId, postId)
	await Promise.all([queryClient.prefetchQuery({queryKey: ['post', postId], queryFn: funcPost}) , queryClient.prefetchQuery({queryKey: ['comments', postId], queryFn: funcComments})])

	return {
	  props: {
		authorId,
		userId,
		postId
      }
	}
  }