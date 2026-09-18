import Link from 'next/link';
import { Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { socials } from '@/data/socials';

export function ContactCTA() {
  const github = socials.find(social => social.name === 'GitHub');

  return (
    <section className='py-14 md:py-20 lg:py-28'>
      <div className='container mx-auto'>
        <AnimatedSection>
          <div className='border-primary/30 bg-surface flex flex-col items-start gap-6 rounded-[2rem] border px-6 py-10 sm:px-12 sm:py-14 md:py-16'>
            <span className='field-label'>Contact</span>
            <h2 className='editorial-title text-foreground max-w-xl text-5xl md:text-7xl'>Get in Touch</h2>
            <p className='text-muted-foreground max-w-lg text-base'>
              Public contact details and professional profiles are available on the contact page.
            </p>
            <div className='flex flex-wrap items-center justify-center gap-3'>
              <Button asChild size='lg'>
                <Link href='/contact'>
                  <Mail className='h-4 w-4' />
                  Contact Details
                </Link>
              </Button>
              {github?.url && (
                <Button variant='outline' size='lg' asChild>
                  <a href={github.url} target='_blank' rel='noopener noreferrer'>
                    <Github className='h-4 w-4' />
                    GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
