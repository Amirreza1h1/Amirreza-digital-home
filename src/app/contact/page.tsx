import { PageHero } from '@/components/shared/PageHero';
import { ContactSection } from '@/features/contact/ContactSection';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Contact',
  description: 'Public contact details for Amirreza Hajizadeh.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Let's Connect"
        title='Contact'
        description='Public contact details and professional profiles.'
      />
      <div className='container mx-auto py-10 md:py-16'>
        <ContactSection />
      </div>
    </>
  );
}
