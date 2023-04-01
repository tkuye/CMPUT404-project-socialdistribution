// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {NodeManager} from '@/nodes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    if (req.method === 'POST') {
        try {
            await NodeManager.sendFollowRequest(req.body.object, req.body.actor)

            return res.status(200).json(null);
        }
        catch (e) {
            console.error(e);
            return res.status(200).json(null);
        }
    }


}

  