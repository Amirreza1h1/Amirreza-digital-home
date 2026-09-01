'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems, isNavGroup } from '@/data/navigation';
import { cn } from '@/utils/cn';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string) =>
    cn(
      'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
      pathname === href
        ? 'bg-surface text-foreground'
        : 'text-muted-foreground hover:bg-surface hover:text-foreground',
    );

  return (
    <div className='md:hidden'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
      </Button>

      {open && (
        <>
          <div
            className='bg-background/80 fixed inset-0 top-14 z-40 backdrop-blur-sm'
            onClick={() => setOpen(false)}
          />
          <nav
            className='border-border bg-background fixed top-14 right-0 left-0 z-50 border-b p-6 shadow-lg'
            aria-label='Mobile navigation'
          >
            <ul className='flex flex-col gap-1'>
              {navItems.map(entry =>
                isNavGroup(entry) ? (
                  <li key={entry.label} className='mt-2 first:mt-0'>
                    <span className='text-muted-foreground/70 block px-3 py-1.5 text-xs font-medium tracking-wide uppercase'>
                      {entry.label}
                    </span>
                    <ul className='flex flex-col gap-1'>
                      {entry.items.map(item => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={linkClass(item.href)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={entry.href}>
                    <Link href={entry.href} onClick={() => setOpen(false)} className={linkClass(entry.href)}>
                      {entry.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}
