import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { ResearchAreaGrid } from '@/features/research/ResearchAreaGrid';
import { Separator } from '@/components/ui/separator';
import { constructMetadata } from '@/lib/seo';
import { researchAreas, researchContext } from '@/data/research';
import { profile } from '@/data/profile';
import { notFound } from 'next/navigation';
import { isRouteVisible } from '@/config/visibility';

export const metadata = constructMetadata({
  title: 'Research',
  description: 'Research interests, goals, and relevant background.',
  path: '/research',
});

export default function ResearchPage() {
  if (!isRouteVisible('/research')) notFound();
  return (
    <>
      <PageHero
        label='Academic Direction'
        title='Research Interests'
        description='Research areas, questions, and long-term goals.'
      />

      <div className='container mx-auto flex flex-col gap-10 py-10 md:gap-16 md:py-16'>
        <AnimatedSection>
          <ResearchAreaGrid areas={researchAreas} />
        </AnimatedSection>

        {profile.researchStatement && (
          <>
            <Separator />

            <AnimatedSection>
              <SectionHeader title='Research Statement' />
              <div className='mt-6 max-w-2xl'>
                <p className='text-muted-foreground text-base leading-relaxed'>{profile.researchStatement}</p>
              </div>
            </AnimatedSection>
          </>
        )}

        <Separator />

        <AnimatedSection>
          <SectionHeader title='Background & Context' />
          {researchContext.length === 0 ? (
            <ContentPlaceholder
              className='mt-6'
              description='Research background and academic goals have not been provided yet.'
            />
          ) : (
            <div className='mt-6 grid gap-6 md:grid-cols-2'>
              {researchContext.map(item => (
                <div
                  key={item.title}
                  className='border-border bg-card flex flex-col gap-2 rounded-xl border p-5'
                >
                  <h4 className='text-foreground font-medium'>{item.title}</h4>
                  <p className='text-muted-foreground text-sm leading-relaxed'>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </>
  );
}
