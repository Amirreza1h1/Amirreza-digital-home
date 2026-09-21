import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { ProfileImage } from '@/components/shared/ProfileImage';
import { SimulationDownload } from '@/components/shared/SimulationDownload';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { TechBadge } from '@/components/shared/TechBadge';
import { EducationCard } from '@/features/education/EducationCard';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { constructMetadata } from '@/lib/seo';
import { profile } from '@/data/profile';
import { workAreas, quickFacts, coreStack } from '@/data/about';
import { education } from '@/data/education';

export const metadata = constructMetadata({
  title: 'About',
  description: profile.headline,
  path: '/about',
});

export default function AboutPage() {
  const hasResume = Boolean(profile.workResume || profile.academicResume);

  return (
    <div className='container mx-auto py-10 md:py-16'>
      <AnimatedSection>
        <div className='flex flex-col gap-8 md:flex-row md:items-start md:gap-16'>
          <div className='flex shrink-0 justify-center md:justify-start'>
            <div className='relative w-60 max-w-full'>
              <div className='bg-primary/15 absolute -inset-1 rounded-2xl blur-xl' />
              <div className='border-border bg-surface relative h-75 overflow-hidden rounded-2xl border'>
                <ProfileImage priority sizes='240px' />
              </div>
            </div>
          </div>

          <div className='flex min-w-0 flex-col gap-4'>
            <span className='text-primary font-mono text-xs font-medium tracking-widest uppercase'>
              About Me
            </span>
            <h1 className='text-foreground text-3xl font-bold tracking-tight md:text-4xl'>{profile.name}</h1>
            {profile.headline && (
              <p className='text-muted-foreground font-mono text-sm'>{profile.headline}</p>
            )}
            {profile.bio && (
              <div className='text-muted-foreground mt-2 flex flex-col gap-3 text-sm leading-relaxed md:text-base'>
                <p>{profile.bio}</p>
              </div>
            )}
            {(profile.roles.length > 0 || profile.location) && (
              <div className='mt-2 flex flex-wrap gap-2'>
                {profile.roles.map(role => (
                  <span
                    key={role}
                    className='border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs'
                  >
                    {role}
                  </span>
                ))}
                {profile.location && (
                  <span className='border-border bg-surface text-muted-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs'>
                    {profile.location}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </AnimatedSection>

      <Separator className='my-10 md:my-16' />

      <div className='grid gap-10 lg:grid-cols-3 lg:gap-16'>
        <div className='flex flex-col gap-10 lg:col-span-2 lg:gap-12'>
          {profile.researchStatement && (
            <AnimatedSection>
              <SectionHeader title='Research Direction' />
              <p className='text-muted-foreground mt-4 text-sm leading-relaxed md:text-base'>
                {profile.researchStatement}
              </p>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.06}>
            <SectionHeader title='Experience & Direction' />
            {workAreas.length === 0 ? (
              <ContentPlaceholder
                className='mt-6'
                description='Professional focus areas have not been provided yet.'
              />
            ) : (
              <div className='mt-6 grid gap-4 sm:grid-cols-2'>
                {workAreas.map(area => (
                  <div
                    key={area.title}
                    className='border-border bg-card flex flex-col gap-1.5 rounded-xl border p-5'
                  >
                    <h4 className='text-foreground font-medium'>{area.title}</h4>
                    <p className='text-muted-foreground text-sm leading-relaxed'>{area.description}</p>
                  </div>
                ))}
              </div>
            )}
          </AnimatedSection>

          <AnimatedSection delay={0.12}>
            <SectionHeader title='Education' />
            <p className='text-muted-foreground mt-4 text-sm leading-relaxed md:text-base'>
              Degree and training history will be presented in reverse-chronological order.
            </p>
            {education.length === 0 ? (
              <ContentPlaceholder
                className='mt-6'
                description='Education history has not been provided yet.'
              />
            ) : (
              <div className='mt-6 flex flex-col gap-4'>
                {education.map(entry => (
                  <EducationCard key={`${entry.institution}-${entry.degree}`} education={entry} />
                ))}
              </div>
            )}
            <Button variant='outline' size='sm' asChild className='mt-6 w-full sm:w-auto'>
              <Link href='/education'>
                Coursework, teaching & certificates
                <ArrowRight className='h-3.5 w-3.5' />
              </Link>
            </Button>
          </AnimatedSection>
        </div>

        <div className='flex flex-col gap-6'>
          <AnimatedSection delay={0.08}>
            <div className='border-border bg-card flex flex-col gap-4 rounded-xl border p-6'>
              <h3 className='text-foreground font-semibold'>Downloads</h3>
              {hasResume ? (
                <div className='flex flex-col gap-2'>
                  {profile.workResume && (
                    <a href={profile.workResume} download className='w-full'>
                      <Button variant='outline' size='sm' className='w-full justify-start gap-2'>
                        <Download className='h-3.5 w-3.5 shrink-0' />
                        Work CV
                      </Button>
                    </a>
                  )}
                  {profile.academicResume && (
                    <a href={profile.academicResume} download className='w-full'>
                      <Button variant='outline' size='sm' className='w-full justify-start gap-2'>
                        <Download className='h-3.5 w-3.5 shrink-0' />
                        Academic CV
                      </Button>
                    </a>
                  )}
                </div>
              ) : (
                <p className='text-muted-foreground text-sm'>Resume files have not been provided yet.</p>
              )}
              <SimulationDownload />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className='border-border bg-card flex flex-col gap-4 rounded-xl border p-6'>
              <h3 className='text-foreground font-semibold'>Quick Facts</h3>
              {quickFacts.length === 0 ? (
                <p className='text-muted-foreground text-sm'>Profile facts have not been provided yet.</p>
              ) : (
                <ul className='flex flex-col gap-3'>
                  {quickFacts.map(fact => (
                    <li key={fact.label} className='flex flex-col gap-0.5'>
                      <span className='text-muted-foreground text-xs font-medium tracking-wide uppercase'>
                        {fact.label}
                      </span>
                      <span className='text-foreground text-sm'>{fact.value}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.14}>
            <div className='border-border bg-card flex flex-col gap-4 rounded-xl border p-6'>
              <h3 className='text-foreground font-semibold'>Technologies Used</h3>
              {coreStack.length === 0 ? (
                <p className='text-muted-foreground text-sm'>Core technologies have not been provided yet.</p>
              ) : (
                <div className='flex flex-wrap gap-1.5'>
                  {coreStack.map(tech => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
