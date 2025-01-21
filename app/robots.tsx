// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/admin/'],
    },
    sitemap: [
      `${process.env.SITE_URL}/sitemap.xml`,
      `${process.env.SITE_URL}/sitemap-services.xml`
    ],
    host: process.env.SITE_URL,
  }
}