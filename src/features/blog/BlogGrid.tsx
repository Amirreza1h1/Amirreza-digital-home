import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { BlogCard } from './BlogCard';
import type { BlogPost } from '@/types/blog';

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className='border-border bg-surface/50 flex flex-col items-center gap-3 rounded-xl border py-16 text-center'>
        <p className='text-muted-foreground'>No posts yet. Check back soon.</p>
      </div>
    );
  }

  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {posts.map((post, i) => (
        <AnimatedSection key={post.slug} delay={i * 0.06} className='h-full'>
          <BlogCard post={post} />
        </AnimatedSection>
      ))}
    </div>
  );
}
