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
    <section className={cn('border-border border-b py-16 md:py-24', className)}>
      <div className='container mx-auto'>
        <AnimatedSection>
          <div className='flex max-w-2xl flex-col gap-4'>
            {label && <span className='field-label'>{label}</span>}
            <h1 className='editorial-title text-foreground text-6xl md:text-8xl'>{title}</h1>
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
