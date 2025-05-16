// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { formatDirectory, getDocBySlug } from '../../../utils'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import remarkGfm from 'remark-gfm'

export default async function handler(req, res) {
	let { name } = req.query

	let locale = req.headers['referer'].includes('/zh') ? 'zh' : 'en'
	// console.log('req md name->', name);

	const { content, meta } = getDocBySlug(name, locale)
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [[remarkGfm]],
		},
	})

	res.status(200).json({ mdxSource, code: 200 })
}
