import { PageHero } from '@/components/shared/PageHero';
import { SkillsGrid } from '@/features/skills/SkillsGrid';
import { constructMetadata } from '@/lib/seo';
import { skillGroups } from '@/data/skills';

export const metadata = constructMetadata({
  title: 'Skills',
  description: 'Technical skills, tools, and areas of expertise.',
  path: '/skills',
});

export default function SkillsPage() {
  return (
    <>
      <PageHero
        label='Technical Expertise'
        title='Skills'
        description='Technologies, tools, and competencies organized by category.'
      />
      <div className='container mx-auto py-10 md:py-16'>
        <SkillsGrid groups={skillGroups} />
      </div>
    </>
  );
}
