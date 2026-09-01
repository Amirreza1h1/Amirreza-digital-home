import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Providers } from './providers';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BackgroundSystem } from '@/components/layout/BackgroundSystem';
import { siteConfig } from '@/config/site';
import { personJsonLd } from '@/lib/seo';
import '@/styles/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.author.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: siteConfig.ogImage ? [{ url: siteConfig.ogImage, width: 1200, height: 630 }] : undefined,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: siteConfig.ogImage ? [siteConfig.ogImage] : undefined,
  },
  robots: { index: siteConfig.indexingEnabled, follow: siteConfig.indexingEnabled },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = personJsonLd();

  return (
    <html lang='en' suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body
        suppressHydrationWarning
        className='bg-background text-foreground min-h-dvh font-sans antialiased'
      >
        <Providers>
          <BackgroundSystem />
          <div className='flex min-h-dvh flex-col'>
            <Navbar />
            <main className='flex-1'>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
