// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' });
}

export default function getFiles(req, res) {
  const files = fs.readdirSync('.//mdx/zh/MyFirst-Layer2_Content');
  res.status(200).json({ files });
}