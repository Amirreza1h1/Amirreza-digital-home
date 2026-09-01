import Link from 'next/link';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { formatBlogDate } from '@/utils/date';
import type { BlogPost } from '@/types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className='group border-border bg-card hover:border-primary/30 flex h-full flex-col gap-4 rounded-xl border p-6 transition-all hover:shadow-md'
    >
      <div className='flex items-start justify-between gap-3'>
        <div className='flex flex-wrap gap-2'>
          <Badge variant='surface'>{post.category}</Badge>
          {post.tags.slice(0, 2).map(tag => (
            <Badge key={tag} variant='outline'>
              {tag}
            </Badge>
          ))}
        </div>
        <ArrowUpRight className='text-muted-foreground group-hover:text-primary h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
      </div>

      <div className='flex flex-col gap-2'>
        <h3 className='text-foreground group-hover:text-primary line-clamp-2 leading-snug font-semibold transition-colors'>
          {post.title}
        </h3>
        <p className='text-muted-foreground line-clamp-2 text-sm leading-relaxed'>{post.excerpt}</p>
      </div>

      <div className='text-muted-foreground mt-auto flex items-center gap-3 text-xs'>
        <span>{formatBlogDate(post.date)}</span>
        <span>·</span>
        <span className='flex items-center gap-1'>
          <Clock className='h-3 w-3' />
          {post.readingTime} min read
        </span>
      </div>
    </Link>
  );
}
