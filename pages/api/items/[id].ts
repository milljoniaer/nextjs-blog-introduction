// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Error, Post } from '../../../src/types'




async function get(req: NextApiRequest, res: NextApiResponse<Post>) {
  const index = req.query.id as any
  const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts/${index}`)
  const data = await rawData.json()
  const imageUrl = `https://picsum.photos/id/${data.id}/900/600`
  const item = {
    ...data,
    image: {
      src: imageUrl
    }
  }

  res.status(200).json(item)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post | Error>
) {
  if (req.method === "GET") {
    return get(req, res)
  }

  res.status(500).json({message: "Method not implemented!"})
}
