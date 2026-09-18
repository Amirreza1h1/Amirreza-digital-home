import { Badge } from '@/components/ui/badge';
import { formatDateRange } from '@/utils/date';
import type { Education } from '@/types/education';

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <div className='border-border bg-card flex flex-col gap-4 rounded-xl border p-6'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between'>
        <div className='flex min-w-0 flex-col gap-1'>
          <h3 className='text-foreground font-semibold text-balance'>
            {education.degree} in {education.field}
          </h3>
          <p className='text-primary text-sm font-medium'>{education.institution}</p>
        </div>
        <div className='flex shrink-0 flex-wrap items-center gap-2 sm:flex-col sm:items-end'>
          <Badge variant={education.status === 'ongoing' ? 'ongoing' : 'completed'}>
            {education.status === 'ongoing' ? 'In Progress' : 'Graduated'}
          </Badge>
          <span className='text-muted-foreground font-mono text-xs whitespace-nowrap'>
            {formatDateRange(education.startDate, education.endDate)}
          </span>
        </div>
      </div>

      {education.gpa && (
        <div className='flex items-center gap-2 text-sm'>
          <span className='text-muted-foreground'>GPA:</span>
          <span className='text-foreground font-mono font-semibold'>
            {education.gpa} / {education.gpaScale}
          </span>
        </div>
      )}
      {education.project && (
        <div className='border-border border-t pt-4'>
          <h4 className='font-semibold'>Bachelor’s Project</h4>
          <a
            href={education.project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary mt-2 inline-block text-sm underline underline-offset-4'
          >
            {education.project.title} — View on GitHub
          </a>
        </div>
      )}
      {education.labResults && education.labResults.length > 0 && (
        <section className='border-border border-t pt-4' aria-label='Laboratory performance'>
          <h4 className='font-semibold'>Laboratory Strengths</h4>
          <p className='text-muted-foreground mt-2 text-sm'>
            Strong practical coursework results in digital logic, electronic circuits, microprocessors, and
            computer architecture.
          </p>
          <dl className='mt-3 space-y-2 text-sm'>
            {education.labResults.map(lab => (
              <div key={lab.title} className='flex flex-wrap justify-between gap-2'>
                <dt className='text-muted-foreground'>{lab.title}</dt>
                <dd className='font-mono font-semibold'>{lab.grade}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </div>
  );
}
