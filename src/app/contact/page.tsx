import { PageHero } from '@/components/shared/PageHero';
import { ContactSection } from '@/features/contact/ContactSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Contact',
  description: 'Contact methods and availability.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Let's Connect"
        title='Contact'
        description='Preferred contact methods, professional profiles, and availability.'
      />
      <div className='container mx-auto py-10 md:py-16'>
        <ContactSection />
      </div>
    </>
  );
}
