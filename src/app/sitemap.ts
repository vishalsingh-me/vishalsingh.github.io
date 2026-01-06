import { type MetadataRoute } from 'next';

const baseUrl = 'https://vishal-singh.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/projects', '/resume'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
  }));

  return routes;
}
