import { Mail, Phone, Github, Linkedin, MapPin, Clock3, Send, Link2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ContentPlaceholder } from '@/components/shared/ContentPlaceholder';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  description: string;
}

const socialIconMap: Record<string, LucideIcon> = { Github, Linkedin, Send };

export function ContactSection() {
  const contactItems: ContactItem[] = [
    ...profile.emails.map((email, index) => ({
      icon: Mail,
      label: profile.emails.length > 1 ? `Email ${index + 1}` : 'Email',
      value: email,
      href: `mailto:${email}`,
      description: 'Public email address',
    })),
    ...profile.phones.map((phone, index) => ({
      icon: Phone,
      label: profile.phones.length > 1 ? `Phone ${index + 1}` : 'Phone',
      value: phone,
      href: `tel:${phone}`,
      description: 'Public phone number',
    })),
    ...socials.map(social => ({
      icon: socialIconMap[social.icon] ?? Link2,
      label: social.name,
      value: social.url ?? social.username,
      href: social.url,
      description: social.url ? 'Public profile' : 'Public handle',
    })),
    ...(profile.location
      ? [
          {
            icon: MapPin,
            label: 'Location',
            value: profile.location,
            description: 'Public location',
          },
        ]
      : []),
    ...(profile.timeZone
      ? [
          {
            icon: Clock3,
            label: 'Time Zone',
            value: profile.timeZone,
            description: 'Public time zone',
          },
        ]
      : []),
  ];

  return (
    <section className='py-12'>
      <div className='flex flex-col gap-12'>
        <AnimatedSection>
          <div className='border-border bg-surface/50 flex flex-col gap-4 rounded-2xl border p-8'>
            <h2 className='text-foreground text-xl font-semibold'>Get in Touch</h2>
            <p className='text-muted-foreground max-w-2xl text-sm leading-relaxed'>
              Use the public contact details below to reach Amirreza Hajizadeh.
            </p>
          </div>
        </AnimatedSection>

        {contactItems.length === 0 ? (
          <ContentPlaceholder description='No public contact details are available.' />
        ) : (
          <div className='grid gap-4 sm:grid-cols-2'>
            {contactItems.map((item, index) => (
              <AnimatedSection key={`${item.label}-${item.value}`} delay={index * 0.06}>
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
                      className='text-foreground hover:text-primary text-sm font-medium break-all transition-colors'
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className='text-foreground text-sm font-medium break-all'>{item.value}</span>
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
