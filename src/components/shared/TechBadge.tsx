import { cn } from '@/utils/cn';

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md';
}

export function TechBadge({ name, className, size = 'md' }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground inline-flex items-center rounded-md border font-mono font-medium transition-colors',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs',
        className,
      )}
    >
      {name}
    </span>
  );
}
