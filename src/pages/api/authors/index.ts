// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import NodeManager from '@/nodes';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
     try {
        let {page, size, query} = req.query;
            
            if (page === undefined || size === undefined) {
                    page = '1';
                    size = '10';
            }
           
            const results = await NodeManager.getAuthors(Number(page), Number(size), undefined, query as string);
            if (results.items === undefined) {
                throw new Error("items is undefined");
            }
            return res.status(200).json(results);

        }
        catch (e) {
            console.error(e);
            return res.status(200).json({
                type: "authors",
                items: []
            });
        }
    }
  
