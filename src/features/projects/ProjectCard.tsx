import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { TechBadge } from '@/components/shared/TechBadge';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

const categoryVariant: Record<Project['category'], 'professional' | 'academic' | 'freelance'> = {
  professional: 'professional',
  academic: 'academic',
  freelance: 'freelance',
};

const categoryLabel: Record<Project['category'], string> = {
  professional: 'Professional',
  academic: 'Academic',
  freelance: 'Freelance',
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className='project-sheet group border-border bg-card flex h-full flex-col overflow-hidden rounded-2xl border p-6'
    >
      {project.demo && (
        <div className='bg-surface mb-6 overflow-hidden rounded-xl p-3'>
          <Image
            src={project.demo.image}
            alt={`${project.title} — example results`}
            width={1119}
            height={626}
            sizes='(min-width: 768px) 550px, 100vw'
            className='h-auto w-full rounded-lg'
          />
        </div>
      )}
      <div className='flex items-start justify-between gap-3'>
        <div className='flex flex-wrap gap-2'>
          <Badge variant={categoryVariant[project.category]}>{categoryLabel[project.category]}</Badge>
          {project.links.download && <Badge variant='outline'>Downloadable</Badge>}
          <Badge variant={project.status === 'ongoing' ? 'ongoing' : 'completed'}>
            {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
          </Badge>
        </div>
        <ArrowUpRight className='text-muted-foreground group-hover:text-primary h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5' />
      </div>

      <div className='mt-4 flex flex-1 flex-col gap-2'>
        <h3 className='editorial-title text-foreground group-hover:text-primary text-3xl transition-colors'>
          {project.title}
        </h3>
        <p className='text-muted-foreground line-clamp-3 text-sm leading-relaxed'>{project.overview}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-1.5'>
        {project.techStack.slice(0, 4).map(tech => (
          <TechBadge key={tech} name={tech} size='sm' />
        ))}
        {project.techStack.length > 4 && (
          <span className='border-border text-muted-foreground inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-xs'>
            +{project.techStack.length - 4}
          </span>
        )}
      </div>
    </Link>
  );
}
