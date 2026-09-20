'use client';

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { navItems, isNavGroup } from '@/data/navigation';
import { cn } from '@/utils/cn';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)');
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener('change', closeOnDesktop);
    return () => desktop.removeEventListener('change', closeOnDesktop);
  }, []);

  const linkClass = (href: string) =>
    cn(
      'block rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
      pathname.replace(/\/$/, '') === href.replace(/\/$/, '')
        ? 'bg-surface text-foreground'
        : 'text-muted-foreground hover:bg-surface hover:text-foreground',
    );

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button variant='ghost' size='icon' className='md:hidden' aria-label='Open menu'>
          <Menu className='h-5 w-5' />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='bg-background/80 fixed inset-0 z-[60] backdrop-blur-sm' />
        <Dialog.Content
          aria-describedby={undefined}
          className='border-border bg-background fixed top-3 right-3 left-3 z-[70] max-h-[calc(100dvh-1.5rem)] overflow-y-auto overscroll-contain rounded-2xl border p-4 shadow-lg'
        >
          <div className='bg-background sticky -top-4 z-10 flex items-center justify-between pb-3'>
            <Dialog.Title className='font-semibold'>Navigation</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant='ghost' size='icon' aria-label='Close menu'>
                <X className='h-5 w-5' />
              </Button>
            </Dialog.Close>
          </div>
          <nav aria-label='Mobile navigation'>
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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
