import CTASection from "../components/CtaSection";
import HeroSection from "../components/HeroSection";
import PlumbingElectricServices from "../components/PlumbingElectricServices";
import { RecentWorks } from "../components/RecentWorks";
import CustomerReviews from "../components/Review";
import ServicesSection from "../components/ServicesSection";
import { WorkExperience } from "../components/WorkExperience";
import WorkProcessSection from "../components/WorkProcessSection";
import AboutUs from "../components/about/page";
import { Contact } from "../components/contact/page";
import FAQSection from "./faq/FAQSection";
import Head from "next/head";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Сантехник и Электрик",
    "image": "https://www.santikhink-electric.online/opengraph-image.png",
    "telephone": "+7 909 181 82 42",
    "email": "vash72dom@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Примерная, 123",
      "addressLocality": "Тюмень",
      "addressRegion": "Тюменская область",
      "postalCode": "625000",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "57.152985",
      "longitude": "65.541227"
    },
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": [
      "https://vk.com/id1024184393",
      "https://t.me/+79091818242",
      "https://wa.me/79091818242"
    ],
    "priceRange": "₽₽",
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": "Тюмень"
    },
    "description": "Срочный вызов сантехника и электрика на дом в Тюмени 24/7. Опытные специалисты с лицензией СРО приедут за 30 минут. Гарантия до 3 лет. Скидки пенсионерам и новоселам.",
    "serviceType": [
      "Ремонт сантехники",
      "Ремонт электропроводки",
      "Устранение засоров",
      "Замена и установка розеток",
      "Электромонтажные работы"
    ]
  };

  return (
    <>
      {/* Meta Tags for SEO */}
      <Head>
        <title>Вызов сантехник и электрик в Тюмени 24/7 | Быстрый ремонт за 30 минут</title>
        <meta 
          name="description" 
          content="Срочный вызов сантехника и электрика в Тюмени 24/7. Опытные специалисты с лицензией СРО приедут за 30 минут. Гарантия на все работы до 3 лет. Скидки пенсионерам и новоселам." 
        />
        <meta 
          name="keywords" 
          content="вызов сантехника Тюмень, электрик на дом Тюмень, срочный ремонт электропроводки, устранение засоров, установка унитаза, сантехнические услуги Тюмень, скидки пенсионерам Тюмень" 
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Вызов сантехника и электрика на дом в Тюмени 24/7 | Гарантия до 3 лет" />
        <meta property="og:description" content="Срочный вызов сантехника и электрика в Тюмени. Приедем за 30 минут. Работаем 24/7. Гарантия на все услуги, скидки пенсионерам и новоселам." />
        <meta property="og:image" content="https://www.santikhink-electric.online/opengraph-image.png" />
        <meta property="og:url" content="https://www.santikhink-electric.online/" />
        <meta property="og:site_name" content="Сантехник и Электрик Тюмень" />
        <link rel="canonical" href="https://www.santikhink-electric.online/" />
        <meta name="yandex-verification" content="4986befe267638de" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Page Content */}
      <div>
        {/* Hero Section */}
        <HeroSection />

        <PlumbingElectricServices />

        {/* Services Section */}
        <ServicesSection />

        {/* Work Process */}
        <WorkProcessSection />

        {/* Recent Works */}
        <RecentWorks />
        <WorkExperience />

        {/* Call to Action */}
        <CTASection />

        {/* Customer Reviews */}
        <CustomerReviews />

        {/* About Us */}
        <AboutUs />

        {/* Contact */}
        <Contact />

        {/* FAQ Section */}
        <div className="min-h-screen bg-gray-100 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8 text-blue-800">
              <span className="font-bold text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Часто задаваемые вопросы
              </span>
            </h3>
            <FAQSection />
          </div>
        </div>
      </div>
    </>
  );
}
