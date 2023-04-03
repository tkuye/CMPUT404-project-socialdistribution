import React, {useEffect} from 'react'
import {Comment as CommentProps} from '@/index'
import Link from 'next/link'
import { ThumbsUp } from 'react-feather'
import {NodeClient} from '@/nodes'
import { useUser } from '@supabase/auth-helpers-react'
import useAuthor from '@/hooks/useAuthor'
import {useAlert} from 'react-alert'
const Comment: React.FC<CommentProps> = ({
    id,
    author,
    comment,
    
}) => {

        const [commentLiked, setCommentLiked] = React.useState(false)
        const user = useUser()
        const userAuthor = useAuthor(user?.id || '')
        const alert = useAlert()

        useEffect(() => {
            if (!user) return
            let authorId  = author?.id?.split('/').pop() || ''
            let commentId = id?.split('/').pop() || ''
            NodeClient.isCommentLiked(commentId, user.id).then((liked) => {
                setCommentLiked(liked)
            })
        }, [user])


        const likeComment = async () => {
            if (!user) return
            
            if (!userAuthor) return
            let authorId  = author?.id?.split('/').pop() || ''
            await NodeClient.createCommentLike(authorId, {
                comment,
                id,
                contentType: 'text/plain',
                author: author,
                type:'comment'
            }, userAuthor)
            alert.success('Liked Comment')
            setCommentLiked(true)
        }

        return (<div className='bg-white border-gray-200 border-b p-3  shadow-md'>
        <div className="flex items-center justify-between">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={author?.profileImage} alt="Author Profile Image"/>
                </div>
                <div className="ml-4">
                    <Link className="text-sm font-medium text-gray-800 hover:underline" href={
                        '/authors/' + author?.id?.split('/').pop() || ''
                    }>
                        {author?.displayName || ''}
                    </Link>
                     <div className="flex-shrink-0 flex text-sm text-gray-600">
               {comment}
            </div>
                </div>
            </div>
            {!commentLiked && <ThumbsUp onClick={likeComment} className='w-6 h-6 text-gray-400 hover:text-gray-500 cursor-pointer'/>}
            {commentLiked && <ThumbsUp className='text-blue-500 w-6 h-6 hover:text-blue-500 cursor-pointer'/>}

           
        </div>
        </div>);
}
export default Comment