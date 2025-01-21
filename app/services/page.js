import CTASection from "@/components/CtaSection";
import Head from "next/head";
import { FaTint, FaTools, FaWrench, FaShower, FaToilet, FaBath, FaUserCog } from "react-icons/fa";

// Services Data
const services = [
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
];

// Metadata and Keywords Configuration
const metadata = {
  title: "Услуги | Сантехник Тюмень",
  description:
    "Профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества и доступные цены.",
  keywords: [
    "сантехнические услуги Тюмень",
    "устранение протечек",
    "устранение засоров",
    "ремонт сантехники",
    "установка сантехники",
    "аренда сантехника",
    "вызов сантехника Тюмень",
  ],
  author: "Сантехник Тюмень",
  openGraph: {
    title: "Услуги | Сантехник Тюмень",
    description:
      "Профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества и доступные цены.",
    image: "/images/services-plumber.jpg",
    url: "https://ваш-сайт.ру/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="author" content={metadata.author} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="geo.region" content="RU-TYU" />
        <meta name="geo.placename" content="Тюмень" />
      </Head>

      <section className="py-20" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center mb-8">Наши услуги</h1>

          {/* Introduction Section */}
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем широкий спектр сантехнических услуг в Тюмени. Наши специалисты готовы решить любую проблему с сантехникой быстро и качественно.
            </p>
          </div>

          {/* Services Grid */}
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

          {/* Rent a Worker Section */}
         <CTASection/>
        </div>
      </section>
    </>
  );
}