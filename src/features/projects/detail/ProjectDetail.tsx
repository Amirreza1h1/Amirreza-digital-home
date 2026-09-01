import { Badge } from '@/components/ui/badge';
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
          {(project.links.live || project.links.github) && (
            <div className='mt-6 flex flex-wrap gap-3'>
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

      <Separator />

      {/* Team */}
      <AnimatedSection>
        <Section title='Team'>
          <ProjectCollaborators role={project.role} collaborators={project.collaborators} />
        </Section>
      </AnimatedSection>

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
          <div className='flex items-center gap-1.5'>
            <CalendarDays className='h-4 w-4' />
            <span>{formatDateRange(project.startDate, project.endDate)}</span>
          </div>
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
