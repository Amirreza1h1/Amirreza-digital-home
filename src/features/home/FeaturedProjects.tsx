import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlannedCompanion } from '@/features/projects/PlannedCompanion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ProjectCard } from '@/features/projects/ProjectCard';
import { featuredProjects } from '@/data/projects';

export function FeaturedProjects() {
  return (
    <section className='border-border border-b py-14 md:py-20 lg:py-28'>
      <div className='container mx-auto flex flex-col gap-12'>
        <AnimatedSection>
          <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
            <SectionHeader
              label='Selected Work'
              title='Featured Projects'
              description='My Applied AI project direction and selected work.'
            />
            <Button variant='outline' asChild>
              <Link href='/projects'>
                All Projects <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        {featuredProjects.length === 0 ? (
          <PlannedCompanion />
        ) : (
          <div className='grid gap-6 md:grid-cols-2'>
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.slug} delay={index * 0.08}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
            <PlannedCompanion />
          </div>
        )}
      </div>
    </section>
  );
}
