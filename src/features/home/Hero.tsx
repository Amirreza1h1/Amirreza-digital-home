import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ProfileImage } from '@/components/shared/ProfileImage';
import { profile } from '@/data/profile';

export function Hero() {
  const status = [profile.currentRole, profile.academicRole].filter(Boolean).join(' • ');
  const hasResume = Boolean(profile.workResume || profile.academicResume);
  const hasSocials = Boolean(profile.github || profile.linkedin || profile.email);

  return (
    <section className='border-border relative flex min-h-[88vh] items-center border-b'>
      <div className='relative container mx-auto py-16 md:py-24'>
        <AnimatedSection>
          <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16'>
            <div className='flex min-w-0 flex-1 flex-col gap-6'>
              <div className='flex'>
                <span className='border-primary/20 bg-primary/5 text-primary inline-flex max-w-full items-center gap-2 rounded-2xl border px-3 py-1 font-mono text-xs'>
                  <span className='bg-primary mt-1 h-1.5 w-1.5 shrink-0 animate-pulse self-start rounded-full sm:mt-0 sm:self-center' />
                  <span className='min-w-0'>{status || 'Portfolio details pending'}</span>
                </span>
              </div>

              <h1 className='text-foreground text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
                {profile.name}
              </h1>
              <p className='text-primary font-mono text-sm md:text-base lg:text-lg'>{profile.tagline}</p>
              <p className='text-muted-foreground max-w-xl text-sm leading-relaxed md:text-base lg:text-lg'>
                {profile.headline}
              </p>

              <div className='flex flex-wrap items-center gap-3 pt-2'>
                <Button asChild size='lg'>
                  <Link href='/projects'>
                    View Projects <ArrowRight className='h-4 w-4' />
                  </Link>
                </Button>
                <Button variant='outline' size='lg' asChild>
                  <Link href='/contact'>Get in Touch</Link>
                </Button>
              </div>

              {hasResume && (
                <div className='flex flex-wrap items-center gap-2'>
                  {profile.workResume && (
                    <a href={profile.workResume} download>
                      <Button variant='outline' size='sm'>
                        <Download className='h-3.5 w-3.5' />
                        Work CV
                      </Button>
                    </a>
                  )}
                  {profile.academicResume && (
                    <a href={profile.academicResume} download>
                      <Button variant='outline' size='sm'>
                        <Download className='h-3.5 w-3.5' />
                        Academic CV
                      </Button>
                    </a>
                  )}
                </div>
              )}

              {hasSocials && (
                <div className='flex items-center gap-4 pt-2'>
                  {profile.github && (
                    <a
                      href={`https://github.com/${profile.github}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='GitHub'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      <Github className='h-5 w-5' />
                    </a>
                  )}
                  {profile.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${profile.linkedin}`}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label='LinkedIn'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      <Linkedin className='h-5 w-5' />
                    </a>
                  )}
                  {profile.email && (
                    <a
                      href={`mailto:${profile.email}`}
                      aria-label='Email'
                      className='text-muted-foreground hover:text-foreground transition-colors'
                    >
                      <Mail className='h-5 w-5' />
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className='flex shrink-0 justify-center lg:justify-end'>
              <div className='relative w-80 max-w-full md:w-88'>
                <div className='bg-primary/20 absolute -inset-1 rounded-2xl blur-xl' />
                <div className='border-border bg-surface relative h-100 overflow-hidden rounded-2xl border md:h-110'>
                  <ProfileImage priority sizes='(min-width: 768px) 352px, 320px' />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
