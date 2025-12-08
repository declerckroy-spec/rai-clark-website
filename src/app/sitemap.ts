import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://raiclark.nl';
  const currentDate = new Date().toISOString();

  // All service pages
  const servicePages = [
    '/lied-laten-maken',
    '/trouwdag-lied',
    '/verjaardag-lied',
    '/vriendschap-lied',
    '/vaderdag-lied',
    '/moederdag-lied',
    '/lied-voor-opa',
    '/lied-voor-oma',
    '/pensioen-lied',
    '/afscheid-collega-lied',
    '/romantisch-lied',
    '/geboorte-kind-lied',
    '/herinneringslied',
    '/feest-lied',
    '/kerst-lied',
    '/carnaval-lied',
    '/suikerfeest-lied',
    '/muziekcadeau-lied',
  ];

  // Overview and info pages
  const overviewPages = [
    '/lied-op-maat',
    '/voorbeelden',
    '/over-mij',
    '/faq',
  ];

  return [
    // Homepage - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Overview pages - high priority
    ...overviewPages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    // Service pages - medium-high priority
    ...servicePages.map((page) => ({
      url: `${baseUrl}${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
