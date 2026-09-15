import { PageHero } from '@/components/shared/PageHero';
import { SkillsGrid } from '@/features/skills/SkillsGrid';
import { constructMetadata } from '@/lib/seo';
import { skillGroups } from '@/data/skills';

export const metadata = constructMetadata({
  title: 'Skills',
  description: 'Technologies used in professional work, personal projects, coursework, and ongoing learning.',
  path: '/skills',
});

export default function SkillsPage() {
  return (
    <>
      <PageHero
        label='Tools & Technologies'
        title='Skills'
        description='Technologies organized by category, with the context in which I use and learn them.'
      />
      <div className='container mx-auto py-10 md:py-16'>
        <SkillsGrid groups={skillGroups} />
      </div>
    </>
  );
}
