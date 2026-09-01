import { Hero } from '@/features/home/Hero';
import { HeroStats } from '@/features/home/HeroStats';
import { FeaturedProjects } from '@/features/home/FeaturedProjects';
import { ResearchSnapshot } from '@/features/home/ResearchSnapshot';
import { ContactCTA } from '@/features/home/ContactCTA';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroStats />
      <FeaturedProjects />
      <ResearchSnapshot />
      <ContactCTA />
    </>
  );
}
