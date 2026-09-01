import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { flatNavItems } from '@/data/navigation';
import { Separator } from '@/components/ui/separator';
import { Logo } from './Logo';

const socialLinks = [
  ...(profile.github
    ? [{ href: `https://github.com/${profile.github}`, label: 'GitHub', icon: Github }]
    : []),
  ...(profile.linkedin
    ? [{ href: `https://linkedin.com/in/${profile.linkedin}`, label: 'LinkedIn', icon: Linkedin }]
    : []),
  ...(profile.email ? [{ href: `mailto:${profile.email}`, label: 'Email', icon: Mail }] : []),
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='border-border bg-background border-t'>
      <div className='container mx-auto py-10'>
        <div className='flex flex-col gap-8 md:flex-row md:items-start md:justify-between'>
          <div className='flex flex-col gap-3'>
            <Link
              href='/'
              className='transition-opacity hover:opacity-80'
              aria-label={`${profile.name} - home`}
            >
              <Logo className='h-8' />
            </Link>
            <p className='text-muted-foreground max-w-xs text-sm'>{profile.tagline}</p>
            {socialLinks.length > 0 && (
              <div className='flex items-center gap-3'>
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    aria-label={label}
                    className='text-muted-foreground hover:text-foreground transition-colors'
                  >
                    <Icon className='h-4 w-4' />
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label='Footer navigation'>
            <ul className='flex flex-wrap gap-x-6 gap-y-2'>
              {flatNavItems.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className='text-muted-foreground hover:text-foreground text-sm transition-colors'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className='my-8' />

        <div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
          <p className='text-muted-foreground text-xs'>
            © {year} {profile.name}. All rights reserved.
          </p>
          {profile.location && <p className='text-muted-foreground text-xs'>{profile.location}</p>}
        </div>
      </div>
    </footer>
  );
}
