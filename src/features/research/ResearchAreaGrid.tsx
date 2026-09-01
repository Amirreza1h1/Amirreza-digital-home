import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { ResearchAreaCard } from './ResearchAreaCard';
import type { ResearchArea } from '@/types/research';

interface ResearchAreaGridProps {
  areas: ResearchArea[];
}

export function ResearchAreaGrid({ areas }: ResearchAreaGridProps) {
  if (areas.length === 0) {
    return <ContentPlaceholder description='Research areas have not been provided yet.' />;
  }

  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {areas.map((area, index) => (
        <AnimatedSection key={area.id} delay={index * 0.08} className='h-full'>
          <ResearchAreaCard area={area} />
        </AnimatedSection>
      ))}
    </div>
  );
}
