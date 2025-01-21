import { Metadata } from "next";
import { FaTint, FaTools, FaWrench, FaShower, FaToilet, FaBath, FaUserCog } from "react-icons/fa";
import CTASection from "@/components/CtaSection";

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  price: string;
}

export const metadata: Metadata = {
  title: "Услуги | Сантехник Тюмень",
  description: "Профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества и доступные цены.",
  keywords: [
    "сантехнические услуги Тюмень",
    "устранение протечек Тюмень",
    "устранение засоров Тюмень",
    "ремонт сантехники Тюмень",
    "установка сантехники Тюмень",
    "аренда сантехника Тюмень",
    "вызов сантехника Тюмень",
  ],
  openGraph: {
    type: "website",
    url: "https://ваш-сайт.ру/services",
    title: "Услуги | Сантехник Тюмень",
    description: "Профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества и доступные цены.",
    images: [{
      url: "https://ваш-сайт.ру/images/services-plumber.jpg",
      width: 1200,
      height: 630,
      alt: "Наши сантехнические услуги в Тюмени",
    }],
    siteName: "Сантехник Тюмень",
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги | Сантехник Тюмень",
    description: "Профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества и доступные цены.",
    images: ["https://ваш-сайт.ру/images/services-plumber.jpg"],
  },
  alternates: {
    canonical: "https://ваш-сайт.ру/services",
  },
  authors: [{ name: "Сантехник Тюмень", url: "https://ваш-сайт.ру" }],
  robots: "index, follow",
  metadataBase: new URL("https://ваш-сайт.ру"),
  other: {
    "geo.region": "RU-TYU",
    "geo.placename": "Тюмень",
  },
};

const services: Service[] = [
  {
    icon: <FaTint className="h-12 w-12 mb-4 text-primary" />,
    title: "Устранение протечек",
    description: "Устранение протечек раковины, смесителя, унитаза, ванны или батареи.",
    price: "от 1 200 ₽",
  },
  {
    icon: <FaTools className="h-12 w-12 mb-4 text-primary" />,
    title: "Устранение засоров",
    description: "Устранение засоров раковины, туалета, ванны или канализации.",
    price: "от 1 190 ₽",
  },
  {
    icon: <FaWrench className="h-12 w-12 mb-4 text-primary" />,
    title: "Установка смесителей",
    description: "Установка смесителей на раковину, мойку, ванну или душевую кабину.",
    price: "от 1 190 ₽",
  },
  {
    icon: <FaShower className="h-12 w-12 mb-4 text-primary" />,
    title: "Ремонт душевой кабины",
    description: "Ремонт, герметизация и установка душевых кабин.",
    price: "от 2 890 ₽",
  },
  {
    icon: <FaToilet className="h-12 w-12 mb-4 text-primary" />,
    title: "Установка унитаза",
    description: "Установка напольных, подвесных унитазов и инсталляций.",
    price: "от 2 050 ₽",
  },
  {
    icon: <FaBath className="h-12 w-12 mb-4 text-primary" />,
    title: "Ремонт сантехники",
    description: "Ремонт и замена сантехнического оборудования любой сложности.",
    price: "от 1 500 ₽",
  },
  {
    icon: <FaUserCog className="h-12 w-12 mb-4 text-primary" />,
    title: "Аренда сантехника",
    description: "Аренда квалифицированного сантехника на почасовой или посуточной основе.",
    price: "от 1 000 ₽/час",
  },
] as const;

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "Service",
      position: index + 1,
      name: service.title,
      description: service.description,
      offers: {
        "@type": "Offer",
        price: service.price,
        priceCurrency: "RUB"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-8">Наши услуги</h1>

          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем широкий спектр сантехнических услуг в Тюмени. Наши специалисты готовы решить любую проблему с сантехникой быстро и качественно.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-xl font-semibold text-primary">{service.price}</p>
              </div>
            ))}
          </div>

          <CTASection />
        </div>
      </section>
    </>
  );
}