import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

export default function getDocBySlug(slug, locale = 'en') {
  const docsDirectory = path.join(process.cwd(), '/mdx');
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDirectory, slug, `${realSlug}.${locale}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
