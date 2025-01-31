import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '../components/navigation';
import { Footer } from '../components/footer';
import Link from 'next/link';

const inter = Inter({ 
  subsets: ['latin'], 
  preload: true,
  display: 'swap' // Better font loading
});

export const metadata: Metadata = {
  title: {
    default: "Вызов сантехник и электрик в Тюмени 24/7 | Ремонт за 30 минут",
    template: "%s | Сантехник и Электрик Тюмень"
  },
  description: 'Срочный вызов сантехника и электрика в Тюмени. Устранение протечек, засоров, ремонт электропроводки. Гарантия 2 года, скидки пенсионерам! Приедем за 30 минут. Работаем 24/7.',
  keywords: [
    'Вызов сантехник Тюмень', 'вызов электрика Тюмень срочно', 'аварийный сантехника тюмень','Вызов сантехник и электрик в Тюмени',
    'сантехнические услуги Тюмень недорого', 'устранение засоров канализации Тюмень',
    'ремонт сантехники с гарантией Тюмень', 'установка унитаза Тюмень цена',
    'электрик на дом Тюмень дешево', 'скидки на сантехработы пенсионерам Тюмень',
    'круглосуточный сантехник Тюмень', 'ремонт электропроводки в квартире Тюмень'
  ],
  alternates: {
    canonical: 'https://santikhink-electric.online'
  },
  twitter: {
    card: 'summary_large_image',
    title: "Срочный вызов сантехника и электрика в Тюмени 24/7",
    description: 'Устранение протечек, засоров, ремонт электропроводки. Гарантия 2 года! Приедем за 30 минут. ☎ +7 (909) 181-82-42',
    images: [{ 
      url: 'https://santikhink-electric.online/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Вызов сантехник и электрик Тюмень' 
    }]
  },
  openGraph: {
    locale: 'ru_RU',
    type: 'website',
    siteName: 'Сантехник & Электрик Тюмень',
    title: "Круглосуточный вызов сантехника и электрика в Тюмени | 24/7",
    description: 'Срочный ремонт сантехники и электропроводки. Гарантия 2 года, работаем без выходных! Приедем за 30 минут. ☎ +7 (909) 181-82-42',
    url: 'https://santikhink-electric.online',
    images: [{
      url: 'https://santikhink-electric.online/opengraph-image.png',
      width: 1200,
      height: 630,
      alt: 'Сантехнические услуги в Тюмени'
    }]
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add from Search Console
    yandex: '4986befe267638de'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Сантехник & Электрик Тюмень',
    image: 'https://santikhink-electric.online/opengraph-image.png',
    telephone: '+79091818242',
    email: 'vash72dom@gmail.com',
    priceRange: "₽₽",
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Примерная, 123',
      addressLocality: 'Тюмень',
      addressRegion: 'Тюменская область',
      postalCode: '625000'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '57.152985',
      longitude: '65.541227'
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    sameAs: [
      'https://vk.com/id1024184393',
      'https://t.me/+79091818242',
      'https://wa.me/79091818242'
    ]
  };
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://santikhink-electric.online" />
        <meta name="yandex-verification" content="4986befe267638de" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION" />
        <meta name="geo.position" content="57.152985;65.541227" />
        <meta name="geo.placename" content="Тюмень" />
        <meta name="geo.region" content="RU-TYU" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        {/* Social Media Floating Buttons */}
        <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
          <Link
            href="https://wa.me/79091818242"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </Link>

          <Link
            href="https://t.me/+79091818242"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            aria-label="Contact via Telegram"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.258-.428.258l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </Link>

          <Link
            href="https://vk.com/id1024184393"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
            aria-label="Our VK Page"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.073 2H8.938C3.332 2 2 3.333 2 8.927v6.136C2 20.667 3.323 22 8.927 22h6.136C20.667 22 22 20.677 22 15.073V8.938C22 3.332 20.677 2 15.073 2zm3.073 14.27h-1.459c-.552 0-.718-.447-1.708-1.437-.864-.834-1.229-.938-1.448-.938-.302 0-.385.083-.385.5v1.312c0 .354-.115.563-1.042.563-1.52 0-3.319-1.08-4.584-3.083-1.719-2.625-2.211-4.708-2.211-4.708 0-.24.083-.48.5-.48h1.457c.375 0 .51.167.656.552.708 2.084 1.886 3.896 2.406 3.896.188 0 .27-.083.27-.552V10.27c0-.98-.271-1.406-.52-1.406-.302 0-1.02.115-2.146 1.271-1.125 1.146-1.427 2.073-1.427 2.073 0 .24-.166.385-.375.385h-1.46c-.438 0-.625-.208-.625-.437 0-.708.833-2.229 1.875-3.302 1.562-1.562 3.271-2.01 4.021-2.01.25 0 .437.042.583.125.427.208.291.812.291 2.188v3.147c0 .312.135.416.229.416.188 0 .333-.104.688-.459 1.146-1.146 1.97-2.958 1.97-2.958.104-.208.302-.437.656-.437h1.458c.417 0 .5.208.417.437-.229.687-2.37 4.01-2.37 4.01-.187.291-.27.437 0 .77.167.229.73.729 1.125 1.177.78.78 1.38 1.44 1.38 1.859 0 .208-.167.333-.48.333z"/>
            </svg>
          </Link>
        </div>
      </body>
    </html>
  );
}