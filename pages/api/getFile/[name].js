// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

import { formatDirectory, getDocBySlug } from '../../../utils';

export default async function handler(req, res) {
  let { name } = req.query;

  console.log('name------------', name);
  const directoryPath = path.join(process.cwd(), '/mdx/zh');

  const files = fs.readdirSync('./mdx/zh');
  const fileNames = files.map((file) => file);
  const directory = formatDirectory(fileNames);
  const { content, meta } = getDocBySlug(name);
  const mdxSource = await serialize(content);

  res.status(200).json({ mdxSource, code: 200 });
}
