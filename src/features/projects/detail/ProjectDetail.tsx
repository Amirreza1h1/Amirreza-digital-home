import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { TechBadge } from '@/components/shared/TechBadge';
import { Separator } from '@/components/ui/separator';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { CheckCircle, AlertCircle, Lightbulb, Users, CalendarDays, Github, ExternalLink } from 'lucide-react';
import { formatDateRange } from '@/utils/date';
import { ProjectCollaborators } from './ProjectCollaborators';
import type { Project } from '@/types/project';

interface ProjectDetailProps {
  project: Project;
}

const categoryLabel: Record<Project['category'], string> = {
  professional: 'Professional',
  academic: 'Academic',
  freelance: 'Freelance',
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const categories = [...new Set([project.category, ...(project.tags ?? [])])];
  const screenshots = project.demo?.screenshots?.length
    ? project.demo.screenshots
    : project.demo
      ? [{ src: project.demo.image, alt: project.demo.caption }]
      : [];

  return (
    <div className='flex flex-col gap-16 py-12'>
      {/* Overview */}
      <AnimatedSection>
        <Section title='Overview'>
          <p className='text-muted-foreground text-base leading-relaxed'>{project.overview}</p>
          <div className='mt-6 flex flex-wrap gap-2'>
            {project.techStack.map(tech => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
          {(project.links.live || project.links.github || project.links.download) && (
            <div className='mt-6 flex flex-wrap gap-3'>
              {project.links.download && (
                <Button asChild size='sm'>
                  <a href={project.links.download} download>
                    {project.demo?.downloadLabel ?? 'Download application'}
                  </a>
                </Button>
              )}
              {project.links.live && (
                <Button asChild size='sm'>
                  <a href={project.links.live} target='_blank' rel='noopener noreferrer'>
                    <ExternalLink className='h-4 w-4' />
                    Live Project
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant='outline' size='sm'>
                  <a href={project.links.github} target='_blank' rel='noopener noreferrer'>
                    <Github className='h-4 w-4' />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          )}
        </Section>
      </AnimatedSection>

      <Separator />

      {project.demo && (
        <AnimatedSection>
          <Section title={project.demo.title ?? 'Project Screens'}>
            <p className='text-muted-foreground text-sm'>{project.demo.note}</p>
            {project.demo.instructions.length > 0 && (
              <ol className='text-muted-foreground list-decimal space-y-2 pl-5 text-sm'>
                {project.demo.instructions.map(step => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            )}
            <div className='grid gap-5 md:grid-cols-2'>
              {screenshots.map((screenshot, index) => (
                <figure
                  key={screenshot.src}
                  className={index === 0 && screenshots.length === 1 ? 'md:col-span-2' : ''}
                >
                  <a
                    href={screenshot.src}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`Open ${screenshot.alt}`}
                  >
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={1119}
                      height={626}
                      sizes='(min-width: 1200px) 1136px, 100vw'
                      className='border-border h-auto w-full rounded-xl border transition-opacity hover:opacity-90'
                    />
                  </a>
                </figure>
              ))}
            </div>
            <p className='text-muted-foreground text-sm'>{project.demo.caption}</p>
          </Section>
        </AnimatedSection>
      )}

      {/* Problem & Solution */}
      <div className='grid gap-10 md:grid-cols-2'>
        <AnimatedSection>
          <Section title='Problem'>
            <p className='text-muted-foreground text-base leading-relaxed'>{project.problem}</p>
          </Section>
        </AnimatedSection>
        <AnimatedSection delay={0.08}>
          <Section title='Solution'>
            <p className='text-muted-foreground text-base leading-relaxed'>{project.solution}</p>
          </Section>
        </AnimatedSection>
      </div>

      <Separator />

      {/* Architecture */}
      <AnimatedSection>
        <Section title='Architecture'>
          <p className='text-muted-foreground text-base leading-relaxed'>{project.architecture}</p>
        </Section>
      </AnimatedSection>

      <Separator />

      {/* Challenges */}
      {project.challenges.length > 0 && (
        <AnimatedSection>
          <Section title='Challenges'>
            <ul className='flex flex-col gap-3'>
              {project.challenges.map((c, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <AlertCircle className='mt-0.5 h-4 w-4 shrink-0 text-amber-500' />
                  <p className='text-muted-foreground text-sm leading-relaxed'>{c}</p>
                </li>
              ))}
            </ul>
          </Section>
        </AnimatedSection>
      )}
      {/* Outcomes */}
      {project.outcomes.length > 0 && (
        <AnimatedSection>
          <Section title='Outcomes'>
            <ul className='flex flex-col gap-3'>
              {project.outcomes.map((o, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <CheckCircle className='mt-0.5 h-4 w-4 shrink-0 text-emerald-500' />
                  <p className='text-muted-foreground text-sm leading-relaxed'>{o}</p>
                </li>
              ))}
            </ul>
          </Section>
        </AnimatedSection>
      )}

      {/* Lessons Learned */}
      {project.lessonsLearned.length > 0 && (
        <AnimatedSection>
          <Section title='Lessons Learned'>
            <ul className='flex flex-col gap-3'>
              {project.lessonsLearned.map((l, i) => (
                <li key={i} className='flex items-start gap-3'>
                  <Lightbulb className='text-primary mt-0.5 h-4 w-4 shrink-0' />
                  <p className='text-muted-foreground text-sm leading-relaxed'>{l}</p>
                </li>
              ))}
            </ul>
          </Section>
        </AnimatedSection>
      )}

      {/* Team */}
      {(project.role || project.collaborators.length > 0) && (
        <AnimatedSection>
          <Section title='Team'>
            <ProjectCollaborators role={project.role} collaborators={project.collaborators} />
          </Section>
        </AnimatedSection>
      )}
      <Separator />

      {/* Meta */}
      <AnimatedSection>
        <div className='text-muted-foreground flex flex-wrap gap-6 text-sm'>
          <div className='flex items-center gap-2'>
            {categories.map(category => (
              <Badge key={category} variant={category}>
                {categoryLabel[category]}
              </Badge>
            ))}
            <Badge variant={project.status === 'ongoing' ? 'ongoing' : 'completed'}>
              {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
            </Badge>
          </div>
          {project.role && (
            <div className='flex items-center gap-1.5'>
              <Users className='h-4 w-4' />
              <span>{project.role}</span>
            </div>
          )}
          {project.teamSize && (
            <div className='flex items-center gap-1.5'>
              <Users className='h-4 w-4' />
              <span>Team of {project.teamSize}</span>
            </div>
          )}
          {project.startDate && (
            <div className='flex items-center gap-1.5'>
              <CalendarDays className='h-4 w-4' />
              <span>{formatDateRange(project.startDate, project.endDate)}</span>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className='flex flex-col gap-4'>
      <h2 className='text-foreground text-lg font-semibold'>{title}</h2>
      {children}
    </div>
  );
}
