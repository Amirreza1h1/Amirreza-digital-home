'use client';

import { useState } from 'react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { ProjectCard } from './ProjectCard';
import { cn } from '@/utils/cn';
import type { Project, ProjectCategory } from '@/types/project';

interface ProjectGridProps {
  projects: Project[];
}

type FilterValue = 'all' | ProjectCategory;

const filters: { label: string; value: FilterValue }[] = [
  { label: 'All', value: 'all' },
  { label: 'Professional', value: 'professional' },
  { label: 'Academic', value: 'academic' },
  { label: 'Freelance', value: 'freelance' },
];

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [active, setActive] = useState<FilterValue>('all');

  if (projects.length === 0) {
    return <ContentPlaceholder description='Project records have not been provided yet.' />;
  }

  const filtered = active === 'all' ? projects : projects.filter(project => project.category === active);

  return (
    <div className='flex flex-col gap-8'>
      <div className='flex flex-wrap gap-2' role='group' aria-label='Filter projects'>
        {filters.map(filter => (
          <button
            key={filter.value}
            onClick={() => setActive(filter.value)}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              active === filter.value
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-surface text-muted-foreground hover:border-primary/50 hover:text-foreground',
            )}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {filtered.map((project, index) => (
          <AnimatedSection key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
