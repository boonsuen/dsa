import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const docsDirectory = join(process.cwd(), 'src/mdx/docs');

function getDocSlugs() {
  return fs.readdirSync(docsDirectory);
}

export function getDocBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

export function getAllDocs() {
  const slugs = getDocSlugs();
  const docs = slugs.map((slug) => getDocBySlug(slug));
  return docs;
}