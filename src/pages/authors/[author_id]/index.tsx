import React, { useState, Fragment } from 'react'
import { GetServerSideProps } from 'next';
import Button from '@/components/Button';
import { NextPage } from 'next';
import Link from 'next/link';
import SideBar from '@/components/Sidebar';
import Post from '@/components/Post';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Head from 'next/head';
import { GitHub, X } from 'react-feather';
import { useRouter } from 'next/router';
import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import {NodeManager} from '@/nodes';
import { Author, Post as PostType } from '@/index';
import { Transition, Dialog } from '@headlessui/react';
import ProfilePreview from '@/components/ProfilePreview';
interface Props {
	author:Author
	posts: PostType[]
	followers: Author[]
	followStatus: 'not_friends' | 'friends' | 'true_friends' | 'pending'
}

const Page: NextPage<Props> = ({author:{id, displayName, github, profileImage}, author,  posts, followStatus, followers}) => {
	
  	const user = useUser()
	const [followStatusState, setFollowStatusState] = useState<'not_friends' | 'friends' | 'true_friends' | 'pending'>(followStatus)
	const [isModalOpen, setIsModalOpen] = useState(false)

	const router = useRouter()


	const closeModal = () => {
		setIsModalOpen(false)
	}


		return (
		<div className='flex flex-col h-screen'>
		<Head>
			<title>Author Profile</title>
		</Head>
		
		<div className='flex flex-1 overflow-hidden'>
		<SideBar/>
		<div className='flex flex-1 flex-col overflow-y-auto w-full py-12'>
			<div className='max-w-4xl w-full mx-auto px-8'>
			<div className='flex flex-col border-b border-slate-200 pb-4'>
			<img className='rounded-full w-24 h-24 object-cover mb-3 ' src={profileImage} width={100} height={100} alt={displayName}/>
			<div className='flex flex-row items-center justify-between'>
			<div className='text-xl font-medium'>{displayName}</div>
			<div className='flex flex-row space-x-3' >
				<Button name="Followers" className='text-white bg-indigo-500 hover:bg-indigo-600' onClick={() => setIsModalOpen(true)} /> 
			{id?.includes(user?.id || 'user') ? <Button name='Edit Profile' onClick={() => {
				let author_id = router.query.author_id as string
				router.push('/authors/' + author_id + '/edit')
			}} className='bg-white text-gray-600 border-2 border-gray-100 hover:bg-gray-50 focus:ring-gray-100'/>:
			
			<Button
			onClick={async () => {
				try {
					if (followStatusState === 'not_friends') {
					let authorTo = await NodeManager.getAuthor(id?.split('/').pop() || '')
					let userAuthor = await NodeManager.getAuthor(user?.id || '')
					if (authorTo && userAuthor) {
					await NodeManager.sendFollowRequest(authorTo, userAuthor)
					setFollowStatusState('pending')
					}
				} else if (followStatusState === 'friends') {
					await NodeManager.removeFollower(id?.split('/').pop() || '', user?.id || '');
					setFollowStatusState('not_friends')
				} else if (followStatusState === 'true_friends') {
					await NodeManager.removeFollower(id?.split('/').pop() || '', user?.id || '');
					setFollowStatusState('not_friends')
				}
				}
				catch {
					console.log('error')
				}
			}}
			name={
				followStatusState === 'not_friends' ? 'Follow' : followStatusState === 'friends' ? 'Unfollow' : followStatusState === 'true_friends' ? 'Unfriend' : 'Pending'
			} className='text-white'/>}</div>
			</div>
			<div className='text-gray'>
			<Link href={github || 'https://github.com/'} >
				<GitHub className='inline-block w-5 h-5 text-gray-500 hover:text-gray-700'/>
			</Link>
			</div>
			</div>
			<div className='my-4'>
			{posts.map((post) => {
				return <Post key={post.id} post={post}/>
			})}
			
			</div>
			<Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <>
				  <X className='w-5 h-5 text-gray-500 hover:text-gray-700 cursor-pointer absolute top-4 right-4' onClick={closeModal}/>
				  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-700 pb-4"
                  >
					{author?.displayName || 'Your'} Followers
                  </Dialog.Title>
				 	<div className="space-y-2">{followers.map((follower) => {
						return <ProfilePreview author={follower} key={follower.id} closeFunction={closeModal}/>
					})}
					</div>
					{followers.length === 0 && <div className='text-gray-500'>No followers found.</div>}
                 </>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
	  let res = null;
	
		
	  
	
	  	let posts = await NodeManager.getPosts(context.params?.author_id as string);
		let author = await NodeManager.getAuthor(context.params?.author_id as string);
		let followers = await NodeManager.getFollowers(context.params?.author_id as string);
	  	
		if (!author) {
			return {
				redirect: {
					destination: '/onboarding',
					permanent: false,
				}
			}
		}

		console.log(posts)

		//@ts-ignore
		if (author.items) {
			//@ts-ignore
			author = author.items
		}
		
		let followStatus;
		if (user.id !== context.params?.author_id) {
			followStatus = await NodeManager.checkFollowerStatus(context.params?.author_id as string, user.id)
			if (followStatus === 'true_friends') {
				if (posts.items)
				posts.items = posts?.items.filter((post) => post.visibility === 'PUBLIC' || post.visibility === 'PRIVATE');
			} else {
				if (posts.items)
				posts.items = posts?.items.filter((post) => post.visibility === 'PUBLIC');
			}
			
		return {
			props: {
				author: author,
				posts: posts.items || [],
				followStatus: followStatus,
				followers: followers.items || []
			}
		}
	} else {

		return {
			props: {
				author: author,
				posts: posts.items || [],
				followStatus: '',
				followers: followers.items || []
			}
		}
	}
}

	

export default Page;
