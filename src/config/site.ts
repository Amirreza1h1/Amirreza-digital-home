const defaultSiteUrl = 'http://localhost:3000';
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const siteConfig = {
  name: 'Personal Portfolio',
  title: 'Personal Portfolio',
  description: 'Portfolio content will be added after the owner provides their information.',
  url: configuredSiteUrl.replace(/\/+$/, ''),
  indexingEnabled: false,
  ogImage: '',
  keywords: [] as string[],
  author: {
    name: 'Portfolio Owner',
    email: '',
    github: '',
    linkedin: '',
  },
} as const;
