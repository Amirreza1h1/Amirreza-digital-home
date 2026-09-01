import { PageHero } from '@/components/shared/PageHero';
import { ProjectGrid } from '@/features/projects/ProjectGrid';
import { constructMetadata } from '@/lib/seo';
import { projects } from '@/data/projects';

export const metadata = constructMetadata({
  title: 'Projects',
  description: 'Selected projects and detailed case studies.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label='Work'
        title='Projects'
        description='Selected projects, prototypes, and case studies.'
      />
      <div className='container mx-auto py-10 md:py-16'>
        <ProjectGrid projects={projects} />
      </div>
    </>
  );
}
