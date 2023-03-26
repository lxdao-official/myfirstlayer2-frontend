import matter from 'gray-matter';
import path from 'path';
// import fs from 'fs';
import * as fs from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
console.log('fs-------------------', fs)
// const fs = require('fs');
export function getDocBySlug(slug, locale = 'en') {
  console.log('slug---------------', slug.default)
  const docsDirectory = path.join(process.cwd(), '/mdx/zh/MyFirst-Layer2_Content');
  console.log('docsDirectory', docsDirectory)
  const realSlug = slug.replace(/\.mdx$/, '');
  console.log('realSlug', realSlug);
  const fullPath = path.join(docsDirectory, `${realSlug}`);
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

export function getAllPosts() {
const markdownDir = path.join(process.cwd(), '/mdx/zh/MyFirst-Layer2_Content')

  const fileNames = fs.readdirSync(markdownDir)
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(markdownDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return { slug, ...data }
  })
  return posts
}

export async function getPostBySlug(slug) {
const markdownDir = path.join(process.cwd(), '/mdx/zh/MyFirst-Layer2_Content')

  const fullPath = path.join(markdownDir, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { content } = matter(fileContents)
  const mdxSource = await serialize(content)
  return { content, mdxSource }
}