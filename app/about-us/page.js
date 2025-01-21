import Head from "next/head";
import Image from "next/image";
import { Wrench, Users, Shield } from "lucide-react";
import CTASection from "@/components/CtaSection";

// Metadata and Keywords Configuration
const metadata = {
  title: "О нашей компании | Сантехник Тюмень",
  description:
    "Сантехник Тюмень — профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества.",
  keywords: [
    "сантехнические услуги Тюмень",
    "вызов сантехника",
    "устранение протечек",
    "ремонт сантехники",
    "установка сантехники",
    "сантехник на дом",
    "аварийный сантехник",
    "сантехнические работы",
    "сантехник круглосуточно",
  ],
  author: "Сантехник Тюмень",
  openGraph: {
    title: "О нашей компании | Сантехник Тюмень",
    description:
      "Сантехник Тюмень — профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества.",
    image: "/images/about-us-plumber.jpg",
    url: "https://ваш-сайт.ру/about",
  },
};

export default function AboutUsPage() {
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

      <section className="py-20" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center mb-8">О нашей компании</h1>

          {/* Introduction Section */}
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Сантехник Тюмень — это команда профессионалов, предоставляющая качественные сантехнические услуги в Тюмени и области. Мы специализируемся на устранении протечек, засоров, установке и ремонте сантехники.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
              <p className="text-muted-foreground">
                Мы стремимся сделать жизнь наших клиентов комфортной, предоставляя быстрые, надежные и профессиональные сантехнические услуги. Наша цель — решить ваши проблемы с сантехникой в кратчайшие сроки.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <Wrench className="h-6 w-6 text-primary" />
                  <span>Быстрый выезд мастера в течение 30 минут</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Shield className="h-6 w-6 text-primary" />
                  <span>Гарантия на все виды работ</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Users className="h-6 w-6 text-primary" />
                  <span>Опытные и квалифицированные мастера</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/about-us-plumber.jpg"
                alt="О нашей компании"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-8">Наша команда</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CEO - Сергей */}
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center">
                <Image
                  src="/images/sergey.jpeg"
                  alt="Сергей"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">Сергей</h3>
                <p className="text-muted-foreground">Генеральный директор</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Сергей обладает многолетним опытом в сфере сантехнических услуг и управления бизнесом. Его стратегическое видение обеспечивает высокое качество услуг и удовлетворенность клиентов.
                </p>
              </div>

              {/* Head of Workers - Артур */}
              <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center">
                <Image
                  src="/images/artur.jpeg"
                  alt="Артур"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">Артур</h3>
                <p className="text-muted-foreground">Руководитель бригады мастеров</p>
                <p className="text-sm text-muted-foreground mt-4">
                  Артур отвечает за координацию работы мастеров и обеспечение высокого качества выполнения заказов. Он гарантирует, что каждый клиент получает профессиональный и своевременный сервис.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <CTASection />
        </div>
      </section>
    </>
  );
}