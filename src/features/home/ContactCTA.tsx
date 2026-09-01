import Link from 'next/link';
import { Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { profile } from '@/data/profile';

export function ContactCTA() {
  const hasDirectContact = Boolean(profile.email || profile.github);

  return (
    <section className='py-14 md:py-20 lg:py-28'>
      <div className='container mx-auto'>
        <AnimatedSection>
          <div className='border-border bg-surface/50 flex flex-col items-center gap-6 rounded-2xl border px-4 py-10 text-center sm:px-8 sm:py-14 md:py-16'>
            <span className='text-primary font-mono text-xs font-medium tracking-widest uppercase'>
              Contact
            </span>
            <h2 className='text-foreground max-w-xl text-3xl font-bold tracking-tight md:text-4xl'>
              Contact details will be added soon
            </h2>
            <p className='text-muted-foreground max-w-lg text-base'>
              The portfolio owner&apos;s preferred contact methods and availability are still pending.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-3'>
              {profile.email && (
                <Button asChild size='lg'>
                  <a href={`mailto:${profile.email}`}>
                    <Mail className='h-4 w-4' />
                    Send an Email
                  </a>
                </Button>
              )}
              {profile.github && (
                <Button variant='outline' size='lg' asChild>
                  <a href={`https://github.com/${profile.github}`} target='_blank' rel='noopener noreferrer'>
                    <Github className='h-4 w-4' />
                    GitHub
                  </a>
                </Button>
              )}
              {!hasDirectContact && (
                <Button variant='outline' size='lg' asChild>
                  <Link href='/contact'>View Contact Page</Link>
                </Button>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
