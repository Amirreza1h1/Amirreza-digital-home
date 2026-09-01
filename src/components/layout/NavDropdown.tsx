'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils/cn';
import type { NavItem } from '@/data/navigation';

interface NavDropdownProps {
  label: string;
  items: NavItem[];
}

/** Header dropdown for a group of nav links. Opens on hover and on keyboard focus. */
export function NavDropdown({ label, items }: NavDropdownProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActive = items.some(item => pathname === item.href);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    cancelClose();
    setOpen(true);
  };

  // Close on a short delay so crossing the gap into the menu doesn't dismiss it.
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  // Clear any pending timer on unmount.
  useEffect(() => cancelClose, []);

  // Close when navigating to another page.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape or a click outside the menu.
  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <li
      ref={containerRef}
      className='relative'
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onBlur={e => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type='button'
        aria-haspopup='menu'
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        className={cn(
          'flex items-center gap-1 rounded-md px-3 py-1.5 text-sm transition-colors',
          isActive
            ? 'bg-surface text-foreground font-medium'
            : 'text-muted-foreground hover:text-foreground hover:bg-surface',
        )}
      >
        {label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-180')}
          aria-hidden='true'
        />
      </button>

      {open && (
        // Transparent `pt-1` wrapper bridges the visual gap so the pointer never
        // leaves the item on its way from the button down to the menu.
        <div className='absolute top-full right-0 z-50 pt-1'>
          <ul
            role='menu'
            className='border-border bg-background min-w-44 overflow-hidden rounded-lg border p-1 shadow-lg'
          >
            {items.map(item => (
              <li key={item.href} role='none'>
                <Link
                  role='menuitem'
                  href={item.href}
                  className={cn(
                    'block rounded-md px-3 py-2 text-sm transition-colors',
                    pathname === item.href
                      ? 'bg-surface text-foreground font-medium'
                      : 'text-muted-foreground hover:bg-surface hover:text-foreground',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
