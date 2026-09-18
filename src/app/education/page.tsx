import { PageHero } from '@/components/shared/PageHero';
import Image from 'next/image';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { EducationCard } from '@/features/education/EducationCard';
import { CourseworkTable } from '@/features/education/CourseworkTable';
import { TeachingRoles } from '@/features/education/TeachingRoles';
import { Separator } from '@/components/ui/separator';
import { constructMetadata } from '@/lib/seo';
import { education, teachingRoles, certificates } from '@/data/education';
import { Badge } from '@/components/ui/badge';

export const metadata = constructMetadata({
  title: 'Education',
  description: 'Degrees, coursework, teaching experience, and certificates.',
  path: '/education',
});

export default function EducationPage() {
  const coursework = education.flatMap(entry => entry.coursework);

  return (
    <>
      <PageHero
        label='Academic Background'
        title='Education'
        description='Degrees, selected coursework, teaching experience, and professional learning.'
      />

      <div className='container mx-auto flex flex-col gap-10 py-10 md:gap-16 md:py-16'>
        <AnimatedSection>
          <SectionHeader title='Degrees' />
          {education.length === 0 ? (
            <ContentPlaceholder
              className='mt-6'
              description='Degree information has not been provided yet.'
            />
          ) : (
            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {education.map(edu => (
                <EducationCard key={`${edu.institution}-${edu.startDate}`} education={edu} />
              ))}
            </div>
          )}
        </AnimatedSection>

        <Separator />

        <AnimatedSection>
          <SectionHeader
            title='Relevant Coursework'
            description='Selected bachelor’s courses from Quchan University of Technology, verified against the academic transcript. Grades are out of 20.'
          />
          {coursework.length === 0 ? (
            <ContentPlaceholder className='mt-6' description='Coursework has not been provided yet.' />
          ) : (
            <div className='mt-6'>
              <CourseworkTable coursework={coursework} />
            </div>
          )}
        </AnimatedSection>

        <Separator />

        {teachingRoles.length > 0 && (
          <AnimatedSection>
            <SectionHeader
              title='Teaching Experience'
              description='Teaching assistant, instructor, and mentoring roles can be listed here.'
            />
            <div className='mt-6'>
              <TeachingRoles roles={teachingRoles} />
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection>
          <div id='certificates' className='scroll-mt-24'>
            <SectionHeader
              title='Certificates & Learning Goals'
              description='Earned credentials and planned training are labeled separately.'
            />
          </div>
          {certificates.length === 0 ? (
            <ContentPlaceholder className='mt-6' description='Certificates have not been provided yet.' />
          ) : (
            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {certificates.map(cert => (
                <div
                  key={cert.title}
                  className='border-border bg-card flex flex-col gap-2 rounded-xl border p-5'
                >
                  <div className='flex items-start justify-between gap-2'>
                    <h4 className='text-foreground font-medium'>{cert.title}</h4>
                    <Badge variant={cert.status === 'completed' ? 'completed' : 'ongoing'}>
                      {cert.status === 'completed'
                        ? 'Completed'
                        : cert.status === 'planned'
                          ? 'Planned · Not earned'
                          : 'In Progress'}
                    </Badge>
                  </div>
                  <p className='text-muted-foreground text-sm'>
                    {cert.issuer}
                    {cert.issuedDate
                      ? ` • Issued ${cert.issuedDate}`
                      : cert.duration
                        ? ` • ${cert.duration}`
                        : ''}
                  </p>
                  <p className='text-muted-foreground text-xs leading-relaxed'>{cert.description}</p>
                  {cert.image && (
                    <a
                      href={cert.image}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='mt-3 block rounded-lg'
                      aria-label={`View ${cert.title} certificate (opens in a new tab)`}
                    >
                      <Image
                        src={cert.image}
                        alt={`${cert.title} certificate issued by ${cert.issuer} to Amirreza Hajizadeh`}
                        width={1754}
                        height={1238}
                        sizes='(min-width: 768px) 50vw, 100vw'
                        className='border-border h-auto w-full rounded-lg border'
                      />
                      <span className='text-primary mt-2 inline-block text-sm underline'>
                        View certificate
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </>
  );
}
