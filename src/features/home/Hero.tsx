import Link from 'next/link';
import { Github, Linkedin, Mail, Send, Link2, ArrowRight, Download } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { ProfileImage } from '@/components/shared/ProfileImage';
import { SimulationDownload } from '@/components/shared/SimulationDownload';
import { profile } from '@/data/profile';
import { socials } from '@/data/socials';
import { FlowArtwork } from '@/components/shared/FlowArtwork';

const socialIconMap: Record<string, LucideIcon> = { Github, Linkedin, Send };

export function Hero() {
  const linkedSocials = socials.filter(social => social.url);
  const hasContact = profile.emails.length > 0;

  return (
    <section className='friendly-hero border-border relative isolate flex min-h-[85vh] items-center overflow-hidden border-b'>
      <FlowArtwork />
      <div className='relative container mx-auto min-w-0 py-16 md:py-24'>
        <AnimatedSection>
          <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16'>
            <div className='flex min-w-0 flex-1 flex-col gap-6'>
              <p className='welcome-note'>
                <span aria-hidden='true'>✳</span> Hello, welcome to my little corner of the web.
              </p>
              {profile.roles.length > 0 && (
                <div className='flex'>
                  <span className='text-muted-foreground inline-flex max-w-full items-center gap-2 font-mono text-xs'>
                    <span className='min-w-0'>{profile.roles.join(' • ')}</span>
                  </span>
                </div>
              )}

              <h1 className='editorial-title text-foreground max-w-2xl text-6xl sm:text-7xl lg:text-8xl'>
                {profile.name}
              </h1>
              {profile.headline && (
                <p className='text-muted-foreground max-w-lg text-lg leading-relaxed md:text-xl'>
                  {profile.headline}
                </p>
              )}

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

              {
                <div className='flex flex-wrap items-center gap-2'>
                  {profile.workResume && (
                    <Button asChild variant='outline' size='sm'>
                      <a href={profile.workResume} download>
                        <Download className='h-3.5 w-3.5' />
                        Work CV
                      </a>
                    </Button>
                  )}
                  {profile.academicResume && (
                    <Button asChild variant='outline' size='sm'>
                      <a href={profile.academicResume} download>
                        <Download className='h-3.5 w-3.5' />
                        Academic CV
                      </a>
                    </Button>
                  )}
                  <SimulationDownload />
                </div>
              }

              {(linkedSocials.length > 0 || hasContact) && (
                <div className='flex items-center gap-4 pt-2'>
                  {linkedSocials.map(social => {
                    const Icon = socialIconMap[social.icon] ?? Link2;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.name}
                        className='border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-full border p-3 transition-colors'
                      >
                        <Icon className='h-5 w-5' />
                      </a>
                    );
                  })}
                  {hasContact && (
                    <Link
                      href='/contact'
                      aria-label='Contact'
                      className='border-border text-muted-foreground hover:bg-primary hover:text-primary-foreground rounded-full border p-3 transition-colors'
                    >
                      <Mail className='h-5 w-5' />
                    </Link>
                  )}
                </div>
              )}
            </div>

            <div className='flex shrink-0 justify-center lg:justify-end'>
              <div className='portrait-scene relative mx-4 my-8 w-72 max-w-full md:w-88'>
                <div className='portrait-orbit' aria-hidden='true' />
                <span className='portrait-spark' aria-hidden='true'>
                  ✳
                </span>
                <div className='portrait-frame relative h-96 md:h-110'>
                  <ProfileImage priority sizes='(min-width: 768px) 352px, 320px' />
                </div>
                <div className='portrait-caption border-border bg-card relative -mt-4 ml-6 rounded-2xl border p-4 shadow-sm'>
                  <p className='text-primary font-mono text-xs'>{profile.initials}</p>
                  <p className='text-muted-foreground mt-1 text-sm'>{profile.location}</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
