// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {NodeManager} from '@/nodes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'GET') {
         try {
        let {author_id, post_id} = req.query;
        
        const results = await NodeManager.getPost(author_id as string, post_id as string);

        return res.status(200).json(results);
            
        }
        catch (e) {
            console.error(e);
            return res.status(200).json(false);
        }
    }

    if (req.method === 'PUT') {
            try {
            let {author_id, post_id} = req.query;
            const results = await NodeManager.updatePost(author_id as string, post_id as string, req.body);
    
            return res.status(200).json(results);
                
            }
            catch (e) {
                console.error(e);
                return res.status(200).json(false);
            }
    }

    if (req.method === 'DELETE') {
         try {
        let {author_id, post_id} = req.query;
        const results = await NodeManager.deletePost(author_id as string, post_id as string);

        return res.status(200).json(results);
            
        }
        catch (e) {
            console.error(e);
            return res.status(200).json(false);
        }
    }
    
}
  