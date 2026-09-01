import { PageHero } from '@/components/shared/PageHero';
import { BlogGrid } from '@/features/blog/BlogGrid';
import { constructMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/blog';

export const metadata = constructMetadata({
  title: 'Blog',
  description: 'Articles, notes, and long-form writing.',
  path: '/blog',
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero label='Writing' title='Blog' description='Articles, notes, and long-form writing.' />
      <div className='container mx-auto py-10 md:py-16'>
        <BlogGrid posts={posts} />
      </div>
    </>
  );
}
