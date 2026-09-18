import { Hero } from '@/features/home/Hero';
import { HeroStats } from '@/features/home/HeroStats';
import { FeaturedProjects } from '@/features/home/FeaturedProjects';
import { ResearchSnapshot } from '@/features/home/ResearchSnapshot';
import { ContactCTA } from '@/features/home/ContactCTA';
import { constructMetadata } from '@/lib/seo';
import { heroStats } from '@/data/profile';
import { researchAreas } from '@/data/research';
import { isRouteVisible } from '@/config/visibility';

export const metadata = constructMetadata();

export default function HomePage() {
  return (
    <>
      <Hero />
      {heroStats.length > 0 && <HeroStats />}
      <FeaturedProjects />
      {isRouteVisible('/research') && researchAreas.length > 0 && <ResearchSnapshot />}
      <ContactCTA />
    </>
  );
}
