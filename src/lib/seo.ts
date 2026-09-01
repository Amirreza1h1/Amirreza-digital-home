import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}

export function constructMetadata({ title, description, path = '', image }: SEOProps = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;
  const ogImage = image ?? siteConfig.ogImage;

  return {
    title,
    description: pageDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: url },
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author.name }],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: pageTitle }] : undefined,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: siteConfig.indexingEnabled,
      follow: siteConfig.indexingEnabled,
      googleBot: { index: siteConfig.indexingEnabled, follow: siteConfig.indexingEnabled },
    },
  };
}

export function personJsonLd() {
  const sameAs = [siteConfig.author.github, siteConfig.author.linkedin].filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.author.name,
    url: siteConfig.url,
    description: siteConfig.description,
    ...(siteConfig.author.email ? { email: siteConfig.author.email } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    ...(siteConfig.ogImage ? { image: `${siteConfig.url}${siteConfig.ogImage}` } : {}),
  };
}
