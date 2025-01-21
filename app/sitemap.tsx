// import { GetServerSideProps } from "next";

// export const getServerSideProps: GetServerSideProps = async ({ res }) => {
//   const baseUrl = "https://blockchainfl.com";

//   // Generate XML for the sitemap
//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
//   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//     <url>
//       <loc>${baseUrl}</loc>
//       <lastmod>${new Date().toISOString()}</lastmod>
//       <priority>1.0</priority>
//     </url>
//   </urlset>`;

//   // Set response headers and send the XML content
//   res.setHeader("Content-Type", "application/xml");
//   res.write(sitemap);
//   res.end();

//   // Return empty props since this page does not render anything
//   return {
//     props: {},
//   };
// };

// // Sitemap is an empty functional component as the content is handled server-side
// const Sitemap = () => null;

// export default Sitemap;

// app/sitemap.tsx
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://santehnik-tyumen.ru' // Replace with your domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Add more pages as needed
  ]
}