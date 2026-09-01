import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogPost } from '@/types/blog';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const filenames = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

  return filenames
    .map((filename): BlogPost => {
      const slug = filename.replace(/\.mdx$/, '');
      const filePath = path.join(BLOG_DIR, filename);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(raw);
      const stats = readingTime(content);

      return {
        slug,
        title: String(data['title'] ?? slug),
        date: String(data['date'] ?? ''),
        excerpt: String(data['excerpt'] ?? ''),
        tags: Array.isArray(data['tags']) ? (data['tags'] as string[]) : [],
        category: String(data['category'] ?? 'General'),
        readingTime: Math.ceil(stats.minutes),
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { post: BlogPost; rawContent: string } | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    post: {
      slug,
      title: String(data['title'] ?? slug),
      date: String(data['date'] ?? ''),
      excerpt: String(data['excerpt'] ?? ''),
      tags: Array.isArray(data['tags']) ? (data['tags'] as string[]) : [],
      category: String(data['category'] ?? 'General'),
      readingTime: Math.ceil(stats.minutes),
      content,
    },
    rawContent: content,
  };
}
