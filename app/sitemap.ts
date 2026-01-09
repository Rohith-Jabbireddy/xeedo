import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://xeedo.in'

  // Define all your routes here
  const routes = [
    '',
    '/home',
    '/about',
    '/about/management-team',
    '/about/leadership',
    '/services',
    '/services/semiconductor',
    '/services/embedded',
    '/services/iot-products',
    '/services/software',
    '/services/vlsi',
    '/services/oil-gas',
    '/careers',
    '/careers/apply',
    '/contact',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.8 : 0.6,
  }))
}