import { PageHero } from '@/components/shared/PageHero';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { constructMetadata } from '@/lib/seo';
import { publications } from '@/data/publications';

export const metadata = constructMetadata({
  title: 'Publications',
  description: 'Academic publications and research output.',
  path: '/publications',
});

export default function PublicationsPage() {
  return (
    <>
      <PageHero
        label='Academic Output'
        title='Publications'
        description='Academic publications, preprints, theses, and other research contributions.'
      />

      <div className='container mx-auto py-10 md:py-16'>
        {publications.length === 0 ? (
          <AnimatedSection>
            <div className='border-border bg-surface/50 flex flex-col gap-4 rounded-2xl border px-4 py-10 text-center sm:px-8 sm:py-14'>
              <p className='text-foreground text-base font-medium'>No publications added</p>
              <p className='text-muted-foreground mx-auto max-w-lg text-sm leading-relaxed'>
                Publication records will appear here after the owner provides them.
              </p>
            </div>
          </AnimatedSection>
        ) : (
          <div className='flex flex-col gap-6'>
            {publications.map((publication, index) => (
              <AnimatedSection key={publication.title} delay={index * 0.06}>
                <div className='border-border bg-card flex flex-col gap-3 rounded-xl border p-6'>
                  <h3 className='text-foreground font-semibold'>{publication.title}</h3>
                  <p className='text-muted-foreground text-sm'>{publication.authors.join(', ')}</p>
                  <p className='text-muted-foreground text-sm'>
                    {publication.venue} • {publication.year}
                  </p>
                  <p className='text-muted-foreground text-sm leading-relaxed'>{publication.abstract}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
