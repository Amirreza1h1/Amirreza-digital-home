import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { Separator } from '@/components/ui/separator';
import { heroStats as stats } from '@/data/profile';

export function HeroStats() {
  return (
    <section className='border-border bg-surface/50 border-b py-8'>
      <div className='container mx-auto'>
        <AnimatedSection delay={0.1}>
          {stats.length === 0 ? (
            <ContentPlaceholder
              className='py-6'
              title='Profile highlights pending'
              description='Career and portfolio statistics have not been provided yet.'
            />
          ) : (
            <div className='flex flex-col items-center gap-6 sm:flex-row sm:justify-center'>
              {stats.map((stat, index) => (
                <div key={stat.label} className='flex items-center gap-6'>
                  <div className='flex flex-col items-center gap-0.5 text-center'>
                    <span className='text-foreground font-mono text-2xl font-bold'>{stat.value}</span>
                    <span className='text-muted-foreground text-xs'>{stat.label}</span>
                  </div>
                  {index < stats.length - 1 && (
                    <Separator orientation='vertical' className='hidden h-8 sm:block' />
                  )}
                </div>
              ))}
            </div>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
