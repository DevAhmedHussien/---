import Image from "next/image";
import { 
  Wrench, 
  Users, 
  Shield, 
  Clock,         
  Wallet,        
  CheckCircle    
} from "lucide-react";
import { Metadata } from "next";
import CTASection from "../../components/CtaSection";
import ServicesSection from "../../components/ServicesSection";
import FAQSection from "../faq/FAQSection";
import Head from "next/head";

// Metadata Configuration
export const metadata: Metadata = {
  title: "О нашей компании | Сантехник и Электрик Тюмень",
  description: " Сантехник и Электрик Тюмень — профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества.",
  keywords: [
    "сантехнические услуги Тюмень","Электрик ",
    "вызов сантехника",'Сантехник и Электрик ', "Электрик Тюмень " ,"Сантехник Тюмень",
    "устранение протечек",
    "ремонт сантехники",
    "установка сантехники",
    "сантехник на дом",
    "аварийный сантехник",
    "сантехнические работы",
    "сантехник круглосуточно",
  ],
  authors: [{ name: "Сантехник и Электрик Тюмень " }],
  metadataBase: new URL("https://santikhink-electric.online/about-us"),
  openGraph: {
    type: "website",
    url: "/about",
    title: "О нашей компании | Сантехник и Электрик Тюмень ",
    description: "Сантехник и Электрик Тюмень  — профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества.",
    images: [{
      url: "/opengraph-image.png", // Automatically handles OG image
      width: 1200,
      height: 630,
      alt: "Профессиональные сантехнические услуги в Тюмени",
    }]
  },
  alternates: {
    canonical: "https://www.santikhink-electric.online/about-us"
  },
  robots: "index, follow",
  other: {
    "geo.region": "RU-TYU",
    "geo.placename": "Тюмень",
    "revisit-after": "7 days",
    "language": "Russian"
  }
};

export default function AboutUsPage() {
  return (
    <>
     <Head>
    <link rel="canonical" href="https://www.santikhink-electric.online/about-us" />
    </Head>
    
    <section className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">О нашей компании</h1>

        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Сантехник и Электрик Тюмень — это команда профессионалов, предоставляющая качественные сантехнические услуги в Тюмени и области. Мы специализируемся на устранении протечек, засоров, установке и ремонте сантехники.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Наша миссия</h2>
            <p className="text-muted-foreground">
              Мы стремимся сделать жизнь наших клиентов комфортной, предоставляя быстрые, надежные и профессиональные сантехнические услуги. Наша цель — решить ваши проблемы с сантехникой в кратчайшие сроки.
            </p>
            <ul className="space-y-4">
                {[
                  {icon: Wrench, text: "Быстрый выезд мастера в течение 30 минут", prop: "actionableFeedbackPolicy"},
                  {icon: Shield, text: "Гарантия 2 года на все работы", prop: "serviceWarranty"},
                  {icon: Users, text: "Опытные мастера с допусками СРО", prop: "employee"},
                  {icon: Clock, text: "Круглосуточная служба поддержки", prop: "openingHours"},
                  {icon: Wallet, text: "Фиксированные цены без скрытых платежей", prop: "priceRange"},
                  {icon: CheckCircle, text: "Сертифицированное оборудование", prop: "itemReviewed"}
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-4"
                    itemProp={item.prop}
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                    <span itemProp="description">{item.text}</span>
                  </li>
                ))}
                </ul>
          </div>
          
          <div className="relative h-220" style={{height:"600px"}}>
            <Image
              src="/images/recent/three.png"
              alt="Наша команда сантехников"
              fill
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>
        <ServicesSection/>
        <CTASection />
        <FAQSection/>
      </div>
    </section>
    </>
   
  );
}