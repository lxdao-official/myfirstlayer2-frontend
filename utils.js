import matter from 'gray-matter';
import path from 'path';
import fs from 'fs'

export function getDocBySlug(slug, locale = 'en') {
  const docsDirectory = path.join(process.cwd(), '/mdx/zh/MyFirst-Layer2_Content');
  console.log('docsDirectory', docsDirectory)
  const realSlug = slug.replace(/\.mdx$/, '');
  console.log('realSlug', realSlug);
  const fullPath = path.join(docsDirectory, `${realSlug}.mdx`);
  console.log('fullPath', fullPath)
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function formatDirectory(fileNames) {
  const formatArr = fileNames.slice(2);

  let directory = [];

  formatArr.map((item, index) => directory.push({ text: item, status: false, main: false}));
  console.log('formatArr fileNames', formatArr)
  console.log('formatArr directory', directory)

  
  return directory;
}
