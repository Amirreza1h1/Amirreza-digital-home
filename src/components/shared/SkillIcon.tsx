import Image from 'next/image';
import { cn } from '@/utils/cn';

interface SkillIconProps {
  slug: string;
  name: string;
  size?: number;
  className?: string;
}

export function SkillIcon({ slug, name, size = 18, className }: SkillIconProps) {
  return (
    <Image
      src={`/icons/skills/${slug}.png`}
      alt={name}
      width={size}
      height={size}
      className={cn('shrink-0 transition-opacity', className)}
      unoptimized
    />
  );
}
