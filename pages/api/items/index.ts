// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Error, Post } from '../../../src/types'




async function get(req: NextApiRequest, res: NextApiResponse<Post[]>) {
  const index = req.query.id as any
  const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
  const data: Post[] = await rawData.json()

  const items = data.map((item) => {
    const imageUrl = `https://picsum.photos/id/${item.id}/300/200`
    return {
        ...item,
        image: {
        src: imageUrl
        }
    }
  })

  res.status(200).json(items)
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[] | Error>
) {
  if (req.method === "GET") {
    return get(req, res)
  }

  res.status(500).json({message: "Method not implemented!"})
}
