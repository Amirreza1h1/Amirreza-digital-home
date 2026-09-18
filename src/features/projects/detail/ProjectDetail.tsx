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
          <Section title='Try the Simulation'>
            <p className='text-muted-foreground text-sm'>{project.demo.note}</p>
            <ol className='text-muted-foreground list-decimal space-y-2 pl-5 text-sm'>
              {project.demo.instructions.map(step => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <figure>
              <a
                href={project.demo.image}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Open full-size simulation results'
              >
                <Image
                  src={project.demo.image}
                  alt='Bot Society simulation result charts'
                  width={1119}
                  height={626}
                  sizes='(min-width: 1200px) 1136px, 100vw'
                  className='border-border h-auto w-full rounded-xl border'
                />
              </a>
              <figcaption className='text-muted-foreground mt-3 text-sm'>{project.demo.caption}</figcaption>
            </figure>
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
            <Badge
              variant={
                project.category === 'professional'
                  ? 'professional'
                  : project.category === 'academic'
                    ? 'academic'
                    : 'freelance'
              }
            >
              {categoryLabel[project.category]}
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
