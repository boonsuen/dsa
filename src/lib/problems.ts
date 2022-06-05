import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { Problem } from '../views/Problems';

const problemsDirectory = join(process.cwd(), 'src/mdx/problems');

export function getProblemSlugs() {
  return fs.readdirSync(problemsDirectory);
}

export function getProblemBySlug(slug: string, fields = []): Problem {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = join(problemsDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as Problem;
}

export function getAllProblems(fields = []) {
  const slugs = getProblemSlugs();
  const problems = slugs
    .map((slug) => getProblemBySlug(slug, fields))
    // sort posts by NUMBER in ascending order
    .sort((prob1, prob2) => (prob1.number > prob2.number ? 1 : -1));
  return problems;
}
