import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://portfolio.example.com';
  const routes = ['', '/about', '/services', '/projects', '/contact', '/privacy-policy', '/terms-and-conditions', '/blog', '/blog/nextjs-performance-optimization', '/blog/build-scalable-saas', '/blog/web-development-trends-2026'];
  return routes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() }));
}
