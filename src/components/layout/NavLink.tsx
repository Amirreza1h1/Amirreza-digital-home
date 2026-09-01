'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        'rounded-md px-3 py-1.5 text-sm transition-colors',
        isActive
          ? 'bg-surface text-foreground font-medium'
          : 'text-muted-foreground hover:text-foreground hover:bg-surface',
      )}
    >
      {children}
    </Link>
  );
}
