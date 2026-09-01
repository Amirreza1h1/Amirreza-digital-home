import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const badgeVariants = cva(
  'inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary/10 text-primary',
        outline: 'border-border text-muted-foreground',
        surface: 'border-border bg-surface text-muted-foreground',
        professional: 'border-blue-500/30 bg-blue-500/10 text-blue-400',
        academic: 'border-purple-500/30 bg-purple-500/10 text-purple-400',
        freelance: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
        ongoing: 'border-amber-500/30 bg-amber-500/10 text-amber-400',
        completed: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400',
      },
    },
    defaultVariants: { variant: 'default' },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
