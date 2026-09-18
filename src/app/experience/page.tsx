import { PageHero } from '@/components/shared/PageHero';
import { ExperienceTimeline } from '@/features/experience/ExperienceTimeline';
import { constructMetadata } from '@/lib/seo';
import { experience } from '@/data/experience';
import { notFound } from 'next/navigation';
import { isRouteVisible } from '@/config/visibility';

export const metadata = constructMetadata({
  title: 'Experience',
  description: 'Professional roles, responsibilities, and outcomes.',
  path: '/experience',
});

export default function ExperiencePage() {
  if (!isRouteVisible('/experience')) notFound();
  return (
    <>
      <PageHero
        label='Career'
        title='Work Experience'
        description='Professional roles, responsibilities, achievements, and technologies.'
      />
      <div className='container mx-auto py-10 md:py-16'>
        <ExperienceTimeline experience={experience} />
      </div>
    </>
  );
}
