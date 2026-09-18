import { PageHero } from '@/components/shared/PageHero';
import { ProjectGrid } from '@/features/projects/ProjectGrid';
import { constructMetadata } from '@/lib/seo';
import { projects } from '@/data/projects';
import { PlannedCompanion } from '@/features/projects/PlannedCompanion';

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
        {projects.length > 0 && (
          <div className='mb-10'>
            <ProjectGrid projects={projects} />
          </div>
        )}
        <PlannedCompanion />
      </div>
    </>
  );
}
