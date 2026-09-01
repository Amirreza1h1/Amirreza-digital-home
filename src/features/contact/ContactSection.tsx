import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { profile } from '@/data/profile';

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  description: string;
}

const contactItems: ContactItem[] = [
  ...(profile.email
    ? [
        {
          icon: Mail,
          label: 'Email',
          value: profile.email,
          href: `mailto:${profile.email}`,
          description: 'Preferred email address',
        },
      ]
    : []),
  ...(profile.phone
    ? [
        {
          icon: Phone,
          label: 'Phone',
          value: profile.phone,
          href: `tel:${profile.phone}`,
          description: 'Primary phone number',
        },
      ]
    : []),
  ...(profile.phoneAlt
    ? [
        {
          icon: Phone,
          label: 'Phone (Alt)',
          value: profile.phoneAlt,
          href: `tel:${profile.phoneAlt}`,
          description: 'Secondary phone number',
        },
      ]
    : []),
  ...(profile.github
    ? [
        {
          icon: Github,
          label: 'GitHub',
          value: `github.com/${profile.github}`,
          href: `https://github.com/${profile.github}`,
          description: 'Code and projects',
        },
      ]
    : []),
  ...(profile.linkedin
    ? [
        {
          icon: Linkedin,
          label: 'LinkedIn',
          value: `linkedin.com/in/${profile.linkedin}`,
          href: `https://linkedin.com/in/${profile.linkedin}`,
          description: 'Professional profile',
        },
      ]
    : []),
  ...(profile.location
    ? [
        {
          icon: MapPin,
          label: 'Location',
          value: profile.location,
          description: 'Current location or time zone',
        },
      ]
    : []),
];

export function ContactSection() {
  return (
    <section className='py-12'>
      <div className='flex flex-col gap-12'>
        <AnimatedSection>
          <div className='border-border bg-surface/50 flex flex-col gap-4 rounded-2xl border p-8'>
            <h2 className='text-foreground text-xl font-semibold'>Get in Touch</h2>
            <p className='text-muted-foreground max-w-2xl text-sm leading-relaxed'>
              Availability, preferred topics, and contact details will appear here after the owner provides
              them.
            </p>
            {(profile.email || profile.linkedin) && (
              <div className='flex flex-wrap gap-3'>
                {profile.email && (
                  <Button asChild>
                    <a href={`mailto:${profile.email}`}>
                      <Mail className='h-4 w-4' />
                      Send Email
                    </a>
                  </Button>
                )}
                {profile.linkedin && (
                  <Button variant='outline' asChild>
                    <a
                      href={`https://linkedin.com/in/${profile.linkedin}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Linkedin className='h-4 w-4' />
                      LinkedIn
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </AnimatedSection>

        {contactItems.length === 0 ? (
          <ContentPlaceholder description='Contact information has not been provided yet.' />
        ) : (
          <div className='grid gap-4 sm:grid-cols-2'>
            {contactItems.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.06}>
                <div className='border-border bg-card flex flex-col gap-2 rounded-xl border p-5'>
                  <div className='flex items-center gap-2'>
                    <div className='bg-primary/10 flex h-8 w-8 items-center justify-center rounded-lg'>
                      <item.icon className='text-primary h-4 w-4' />
                    </div>
                    <span className='text-muted-foreground text-xs font-medium tracking-wide uppercase'>
                      {item.label}
                    </span>
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={/^(mailto|tel):/.test(item.href) ? undefined : '_blank'}
                      rel={/^(mailto|tel):/.test(item.href) ? undefined : 'noopener noreferrer'}
                      className='text-foreground hover:text-primary text-sm font-medium transition-colors'
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className='text-foreground text-sm font-medium'>{item.value}</span>
                  )}
                  <p className='text-muted-foreground text-xs'>{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
