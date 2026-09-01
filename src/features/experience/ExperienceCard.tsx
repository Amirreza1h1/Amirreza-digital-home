import { Badge } from '@/components/ui/badge';
import { TechBadge } from '@/components/shared/TechBadge';
import { formatDateRange } from '@/utils/date';
import type { Experience } from '@/types/experience';

interface ExperienceCardProps {
  experience: Experience;
  isLast?: boolean;
}

const typeLabel: Record<Experience['type'], string> = {
  'full-time': 'Full-time',
  freelance: 'Freelance',
  internship: 'Internship',
};

export function ExperienceCard({ experience, isLast = false }: ExperienceCardProps) {
  return (
    <div className='relative flex gap-6'>
      {/* Timeline line */}
      <div className='flex flex-col items-center'>
        <div className='border-primary bg-background mt-1 h-3 w-3 shrink-0 rounded-full border-2' />
        {!isLast && <div className='bg-border mt-2 w-px flex-1' />}
      </div>

      {/* Content */}
      <div className='flex flex-1 flex-col gap-4 pb-12'>
        {/* Header */}
        <div className='flex flex-wrap items-start justify-between gap-3'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-foreground font-semibold'>{experience.role}</h3>
            <div className='text-muted-foreground flex items-center gap-2 text-sm'>
              <span className='text-foreground font-medium'>{experience.company}</span>
              <span>·</span>
              <span>{experience.location}</span>
            </div>
          </div>
          <div className='flex shrink-0 flex-col items-end gap-1.5'>
            <span className='text-muted-foreground font-mono text-xs'>
              {formatDateRange(experience.startDate, experience.endDate)}
            </span>
            <Badge variant='outline'>{typeLabel[experience.type]}</Badge>
          </div>
        </div>

        {/* Description */}
        <p className='text-muted-foreground text-sm leading-relaxed'>{experience.description}</p>

        {/* Highlights */}
        {experience.highlights.length > 0 && (
          <ul className='flex flex-col gap-1.5'>
            {experience.highlights.map((highlight, i) => (
              <li key={i} className='text-muted-foreground flex items-start gap-2 text-sm'>
                <span className='bg-primary mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full' />
                <span className='leading-relaxed'>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tech stack */}
        <div className='flex flex-wrap gap-1.5'>
          {experience.techStack.map(tech => (
            <TechBadge key={tech} name={tech} size='sm' />
          ))}
        </div>
      </div>
    </div>
  );
}
