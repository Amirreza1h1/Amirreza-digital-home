import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Mail, Send, Link2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { flatNavItems } from '@/data/navigation';
import { Separator } from '@/components/ui/separator';
import { Logo } from './Logo';

const socialIconMap: Record<string, LucideIcon> = { Github, Linkedin, Send };

const socialLinks = [
  ...socials
    .filter(social => social.url)
    .map(social => ({
      href: social.url as string,
      label: social.name,
      icon: socialIconMap[social.icon] ?? Link2,
    })),
  ...(profile.emails.length > 0 ? [{ href: '/contact', label: 'Contact', icon: Mail }] : []),
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
            {profile.headline && <p className='text-muted-foreground max-w-xs text-sm'>{profile.headline}</p>}
            {socialLinks.length > 0 && (
              <div className='flex items-center gap-3'>
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
          <div className='text-muted-foreground flex flex-wrap gap-x-4 gap-y-2 text-xs'>
            {profile.location && (
              <p className='flex items-center gap-2'>
                <Image
                  src='/Iran.png'
                  alt=''
                  width={24}
                  height={16}
                  className='h-4 w-6 shrink-0 object-contain'
                />
                {profile.location}
              </p>
            )}
            {profile.plannedLocation && (
              <p className='flex items-center gap-2'>
                <Image
                  src='/Canada.png'
                  alt=''
                  width={24}
                  height={16}
                  className='h-4 w-6 shrink-0 object-contain'
                />
                {profile.plannedLocation}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
