import { profile } from '@/data/profile';
import { cn } from '@/utils/cn';

interface LogoProps {
  className?: string;
  priority?: boolean;
}

/** Text fallback that can later be replaced with owner-provided brand assets. */
export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        'text-foreground inline-flex items-center font-mono font-semibold tracking-tight select-none',
        className,
      )}
    >
      <span aria-hidden='true' className='text-primary mr-2 text-xl'>
        ✳
      </span>
      {profile.initials || profile.name}
    </span>
  );
}
