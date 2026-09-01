import Link from 'next/link';
import { ArrowRight, Cpu, Network, Cloud, BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { researchAreas } from '@/data/research';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Network,
  Cloud,
  BrainCircuit,
};

export function ResearchSnapshot() {
  return (
    <section className='border-border bg-surface/30 border-b py-14 md:py-20 lg:py-28'>
      <div className='container mx-auto flex flex-col gap-12'>
        <AnimatedSection>
          <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
            <SectionHeader
              label='Academic Direction'
              title='Research Interests'
              description='Research areas and academic goals will appear here.'
            />
            <Button variant='outline' asChild>
              <Link href='/research'>
                Full Overview <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        {researchAreas.length === 0 ? (
          <ContentPlaceholder description='Research interests have not been provided yet.' />
        ) : (
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {researchAreas.map((area, index) => {
              const Icon = iconMap[area.icon] ?? Cpu;
              return (
                <AnimatedSection key={area.id} delay={index * 0.06} className='h-full'>
                  <div className='border-border bg-card hover:border-primary/30 flex h-full flex-col gap-3 rounded-xl border p-5 transition-colors'>
                    <div className='bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg'>
                      <Icon className='text-primary h-5 w-5' />
                    </div>
                    <h3 className='text-foreground text-sm leading-snug font-semibold'>{area.title}</h3>
                    <p className='text-muted-foreground line-clamp-3 text-xs leading-relaxed'>
                      {area.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
