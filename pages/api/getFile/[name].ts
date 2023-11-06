// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { formatDirectory, getDocBySlug } from '../../../utils'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { name } = req.query as { name: string }

  let locale = req.headers['referer']?.includes('/zh') ? 'zh' : 'en'

  const { content, meta } = getDocBySlug(name, locale)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })

  res.status(200).json({ mdxSource, code: 200 })
}
