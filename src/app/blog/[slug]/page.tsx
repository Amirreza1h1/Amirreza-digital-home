import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, CalendarDays } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { constructMetadata } from '@/lib/seo';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { formatBlogDate } from '@/utils/date';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = getPostBySlug(slug);
  if (!result) return {};

  return constructMetadata({
    title: result.post.title,
    description: result.post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const result = getPostBySlug(slug);

  if (!result) notFound();

  const { post, rawContent } = result;

  return (
    <div className='container mx-auto py-12'>
      <Button variant='ghost' size='sm' asChild className='mb-8 -ml-1'>
        <Link href='/blog'>
          <ArrowLeft className='h-4 w-4' />
          All Posts
        </Link>
      </Button>

      <article className='mx-auto max-w-3xl'>
        {/* Header */}
        <header className='border-border mb-10 flex flex-col gap-4 border-b pb-8'>
          <div className='flex flex-wrap gap-2'>
            <Badge variant='surface'>{post.category}</Badge>
            {post.tags.map(tag => (
              <Badge key={tag} variant='outline'>
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className='text-foreground text-3xl font-bold tracking-tight md:text-4xl'>{post.title}</h1>

          <p className='text-muted-foreground text-base leading-relaxed'>{post.excerpt}</p>

          <div className='text-muted-foreground flex items-center gap-4 text-sm'>
            <span className='flex items-center gap-1.5'>
              <CalendarDays className='h-4 w-4' />
              {formatBlogDate(post.date)}
            </span>
            <span className='flex items-center gap-1.5'>
              <Clock className='h-4 w-4' />
              {post.readingTime} min read
            </span>
          </div>
        </header>

        {/* MDX Content */}
        <div className='prose'>
          <MDXRemote
            source={rawContent}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [rehypeSlug],
              },
            }}
          />
        </div>
      </article>
    </div>
  );
}
