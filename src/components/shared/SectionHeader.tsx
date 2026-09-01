import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ label, title, description, className, align = 'left' }: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-2', align === 'center' && 'items-center text-center', className)}>
      {label && (
        <span className='text-primary font-mono text-xs font-medium tracking-widest uppercase'>{label}</span>
      )}
      <h2 className='text-foreground text-2xl font-bold tracking-tight md:text-3xl'>{title}</h2>
      {description && (
        <p className='text-muted-foreground max-w-2xl text-base leading-relaxed'>{description}</p>
      )}
    </div>
  );
}
