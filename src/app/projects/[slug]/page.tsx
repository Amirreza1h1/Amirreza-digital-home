import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProjectDetail } from '@/features/projects/detail/ProjectDetail';
import { constructMetadata } from '@/lib/seo';
import { projects } from '@/data/projects';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: project.title,
    description: project.overview,
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) notFound();

  const categoryLabel = {
    professional: 'Professional',
    academic: 'Academic',
    freelance: 'Freelance',
  }[project.category];

  return (
    <div className='container mx-auto py-12'>
      {/* Back link */}
      <Button variant='ghost' size='sm' asChild className='mb-8 -ml-1'>
        <Link href='/projects'>
          <ArrowLeft className='h-4 w-4' />
          All Projects
        </Link>
      </Button>

      {/* Project header */}
      <div className='border-border flex flex-col gap-4 border-b pb-8'>
        <div className='flex flex-wrap gap-2'>
          <Badge
            variant={
              project.category === 'professional'
                ? 'professional'
                : project.category === 'academic'
                  ? 'academic'
                  : 'freelance'
            }
          >
            {categoryLabel}
          </Badge>
          <Badge variant={project.status === 'ongoing' ? 'ongoing' : 'completed'}>
            {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
          </Badge>
        </div>
        <h1 className='text-foreground text-3xl font-bold tracking-tight md:text-4xl'>{project.title}</h1>
        <p className='text-muted-foreground max-w-2xl text-base leading-relaxed'>{project.overview}</p>
      </div>

      <ProjectDetail project={project} />
    </div>
  );
}
