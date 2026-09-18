import Link from 'next/link';
import { navItems, isNavGroup } from '@/data/navigation';
import { profile } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { NavLink } from './NavLink';
import { NavDropdown } from './NavDropdown';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full px-3 pt-3 md:px-6'>
      <nav
        className='border-border bg-background/95 container mx-auto flex h-16 items-center justify-between rounded-2xl border shadow-sm backdrop-blur-xl'
        aria-label='Main navigation'
      >
        <Link href='/' className='transition-opacity hover:opacity-80' aria-label={`${profile.name} — home`}>
          <Logo className='h-7 md:h-8' priority />
        </Link>

        <ul className='hidden items-center gap-1 md:flex' role='list'>
          {navItems.map(entry =>
            isNavGroup(entry) ? (
              <NavDropdown key={entry.label} label={entry.label} items={entry.items} />
            ) : (
              <li key={entry.href}>
                <NavLink href={entry.href}>{entry.label}</NavLink>
              </li>
            ),
          )}
        </ul>

        <div className='flex items-center gap-1'>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
