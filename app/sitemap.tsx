// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllServiceSlugs } from '@/lib/api' // Example CMS integration

const BASE_URL = process.env.SITE_URL || 'https://santehnik-tyumen.ru'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
      images: [{
        url: '/opengraph-image.png',
        title: 'Главная страница - Сантехник Тюмень',
      }],
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [{
        url: '/images/recent/two.jpg',
        title: 'О нашей компании',
      }],
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [{
        url: '/images/recent/A.jpg',
        title: 'Наши услуги',
      }],
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]

  // Dynamic pages (example: services)
  const services = await getAllServiceSlugs()
  const dynamicPages: MetadataRoute.Sitemap = services.map(({ slug, updatedAt }) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: updatedAt,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  // Legal pages
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    }
  ]

  return [...staticPages, ...dynamicPages, ...legalPages]
}