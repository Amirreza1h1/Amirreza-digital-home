import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { ExperienceCard } from './ExperienceCard';
import type { Experience } from '@/types/experience';

interface ExperienceTimelineProps {
  experience: Experience[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  if (experience.length === 0) {
    return <ContentPlaceholder description='Work experience has not been provided yet.' />;
  }

  return (
    <div className='flex flex-col'>
      {experience.map((entry, index) => (
        <AnimatedSection key={`${entry.company}-${entry.startDate}`} delay={index * 0.08}>
          <ExperienceCard experience={entry} isLast={index === experience.length - 1} />
        </AnimatedSection>
      ))}
    </div>
  );
}
