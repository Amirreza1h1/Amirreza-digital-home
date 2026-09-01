import Image from 'next/image';
import { UserRound } from 'lucide-react';
import { profile } from '@/data/profile';

interface ProfileImageProps {
  priority?: boolean;
  sizes: string;
}

export function ProfileImage({ priority = false, sizes }: ProfileImageProps) {
  if (profile.photo) {
    return (
      <Image
        src={profile.photo}
        alt={profile.name}
        fill
        priority={priority}
        className='object-cover object-top'
        sizes={sizes}
      />
    );
  }

  return (
    <div className='text-muted-foreground absolute inset-0 flex flex-col items-center justify-center gap-3'>
      <UserRound className='h-16 w-16' aria-hidden />
      <span className='font-mono text-xs tracking-wide uppercase'>Profile photo pending</span>
    </div>
  );
}
