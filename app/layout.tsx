import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';

const inter = Inter({ 
  subsets: ['latin'], 
  preload:true
});

export const metadata: Metadata = {

  title: {
    default: "Вызов сантехника на дом в Тюмени | Быстрый ремонт за 30 минут",
    template: "%s | Сантехнические услуги в Тюмени"
  },
  description: 'Вызов сантехника на дом в Тюмени. Приедем в черте города за 30 минут. Гарантия на работы, скидки пенсионерам и новоселам. Оплата наличными или картой.',
  keywords: [
    'вызов сантехника Тюмень', 'сантехник на дом Тюмень', 'ремонт сантехники Тюмень', 
    'аварийный сантехник Тюмень', 'сантехнические услуги Тюмень', 'устранение засоров Тюмень',
    'ремонт труб Тюмень', 'установка сантехники Тюмень', 'скидки пенсионерам Тюмень',
    'гарантия на сантехработы', 'оплата картой сантехник', 'быстрый вызов сантехника'
  ],
  twitter: {
    card: 'summary_large_image',
    title: "Вызов сантехника на дом в Тюмени | Быстрый ремонт за 30 минут",
    description: 'Приедем в черте города за 30 минут. Гарантия на работы, скидки пенсионерам и новоселам. Оплата наличными или картой.',
    // image: 'https://ваш-сайт.ру/opengraph-image.png', 
    site: '@ваш-сайт'  
  },
  openGraph: {
    title: "Вызов сантехника на дом в Тюмени | Быстрый ремонт за 30 минут",
    description: 'Приедем в черте города за 30 минут. Гарантия на работы, скидки пенсионерам и новоселам. Оплата наличными или картой.',
    url: 'https://ваш-сайт.ру', 
    type: 'website',
    images: [
      {
        url: 'https://ваш-сайт.ру/opengraph-image.png',  
        width: 1200,
        height: 630,
        alt: 'Вызов сантехника на дом в Тюмени'
      }
    ]
  },
  // facebook: {
  //   app_id: '123456789012345'  
  // },
  // instagram: {
  //   url: 'https://www.instagram.com/ваш-сайт',  
  //   title: "Сантехнические услуги в Тюмени",
  //   description: 'Приедем в черте города за 30 минут. Гарантия на работы, скидки пенсионерам и новоселам. Оплата наличными или картой.'
  // }
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4169E1" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://ваш-сайт.ру" />
        {/* Additional Meta Tags for Local SEO */}
        <meta name="geo.region" content="RU-TYU" />
        <meta name="geo.placename" content="Тюмень" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.className}` } > 
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}