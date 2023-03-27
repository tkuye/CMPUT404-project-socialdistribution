// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {NodeManager} from '@/nodes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
     try {
        let {postId, author_id, commentId} = req.query;
        if (postId) {
            const results = await NodeManager.isPostLiked(postId as string, author_id as string);
            
            return res.status(200).json(results);
        }
        else if (commentId) {
            const results = await NodeManager.isCommentLiked(commentId as string, author_id as string);
            return res.status(200).json(results);
        } else {
            return res.status(200).json(false);
        }
            
        }
        catch (e) {
            console.error(e);
            return res.status(200).json(false);
        }
    }
  
