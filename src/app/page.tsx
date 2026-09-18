import { Hero } from '@/features/home/Hero';
import { HeroStats } from '@/features/home/HeroStats';
import { FeaturedProjects } from '@/features/home/FeaturedProjects';
import { ResearchSnapshot } from '@/features/home/ResearchSnapshot';
import { ContactCTA } from '@/features/home/ContactCTA';
import { constructMetadata } from '@/lib/seo';
import { heroStats } from '@/data/profile';
import { researchAreas } from '@/data/research';

export const metadata = constructMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      {heroStats.length > 0 && <HeroStats />}
      <FeaturedProjects />
      {researchAreas.length > 0 && <ResearchSnapshot />}
      <ContactCTA />
    </>
  );
}
