import { profile } from '@/data/profile';
import { socials } from '@/data/socials';

const defaultSiteUrl = 'http://localhost:3000';
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;
const github = socials.find(social => social.name === 'GitHub')?.url ?? '';
const linkedin = socials.find(social => social.name === 'LinkedIn')?.url ?? '';

export const siteConfig = {
  name: profile.name,
  title: profile.name,
  description: profile.headline ?? profile.name,
  url: configuredSiteUrl.replace(/\/+$/, ''),
  indexingEnabled: false,
  ogImage: '',
  keywords: [] as string[],
  author: {
    name: profile.name,
    email: '',
    github,
    linkedin,
  },
} as const;
