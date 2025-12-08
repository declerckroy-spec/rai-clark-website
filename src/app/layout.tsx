import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rai Clark | Producer & Componist | Custom Muziek voor Jouw Moment',
  description:
    'Rai Clark is een Nederlandse muziek producer gespecialiseerd in custom composities voor bruiloften, jubilea, corporate events en content creators. Van concept tot creatie - unieke muziek die raakt en blijft hangen.',
  keywords: [
    'muziek producer',
    'componist',
    'custom muziek',
    'bruiloft muziek',
    'corporate sound design',
    'podcast muziek',
    'Nederland producer',
    'muziek op maat',
    'sound design',
    'audio productie',
    'Rai Clark',
    'electronic music',
    'cinematic music',
    'ambient music',
  ],
  authors: [{ name: 'Rai Clark' }],
  creator: 'Rai Clark',
  publisher: 'Rai Clark',
  metadataBase: new URL('https://raiclark.nl'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon?v=2', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192?v=2', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512?v=2', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-icon?v=2', type: 'image/png', sizes: '180x180' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://raiclark.nl',
    title: 'Rai Clark | Producer & Componist',
    description: 'Custom muziek die jouw momenten transformeert in meesterwerken',
    siteName: 'Rai Clark Music',
    images: [
      {
        url: '/images/rai-clark-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Rai Clark - Music Producer & Composer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rai Clark | Producer & Componist',
    description: 'Custom muziek voor bruiloften, events en brands',
    images: ['/images/rai-clark-portrait.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MusicGroup',
              name: 'Rai Clark',
              description: 'Muziek producer en componist',
              url: 'https://raiclark.nl',
              sameAs: [
                'https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH',
                'https://instagram.com/raiclarkmusic',
              ],
              genre: ['Electronic', 'Cinematic', 'Ambient', 'Experimental'],
              location: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressCountry: 'NL',
                },
              },
              member: {
                '@type': 'Person',
                name: 'Rai Clark',
                jobTitle: 'Music Producer & Composer',
              },
            }),
          }}
        />

        {/* Additional Structured Data - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Rai Clark',
              jobTitle: 'Music Producer & Composer',
              description:
                'Professional music producer specializing in custom compositions for weddings, corporate events, and content creators',
              url: 'https://raiclark.nl',
              sameAs: [
                'https://open.spotify.com/artist/2fkKXGwlVqdj3FaPK7XLtH',
                'https://instagram.com/raiclarkmusic',
              ],
              email: 'rai@raiclark.nl',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NL',
              },
            }),
          }}
        />

        {/* Additional Structured Data - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Music Production',
              provider: {
                '@type': 'Person',
                name: 'Rai Clark',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Netherlands',
              },
              description:
                'Custom music composition and production services for weddings, corporate events, podcasts, and content creators',
              offers: {
                '@type': 'Offer',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="msapplication-TileColor" content="#0066FF" />

        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>{children}</body>
    </html>
  );
}
