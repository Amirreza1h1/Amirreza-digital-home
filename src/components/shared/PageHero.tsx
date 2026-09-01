import { AnimatedSection } from './AnimatedSection';
import { cn } from '@/utils/cn';

interface PageHeroProps {
  label?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHero({ label, title, description, children, className }: PageHeroProps) {
  return (
    <section className={cn('border-border bg-background border-b py-16 md:py-20', className)}>
      <div className='container mx-auto'>
        <AnimatedSection>
          <div className='flex max-w-2xl flex-col gap-4'>
            {label && (
              <span className='text-primary font-mono text-xs font-medium tracking-widest uppercase'>
                {label}
              </span>
            )}
            <h1 className='text-foreground text-3xl font-bold tracking-tight md:text-4xl'>{title}</h1>
            {description && (
              <p className='text-muted-foreground text-base leading-relaxed md:text-lg'>{description}</p>
            )}
            {children}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
