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

// Metadata Configuration
export const metadata: Metadata = {
  title: "О нашей компании | Сантехник & Электрик Тюмень",
  description: " Сантехник & Электрик Тюмень — профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества.",
  keywords: [
    "сантехнические услуги Тюмень","Электрик ",
    "вызов сантехника",'Сантехник & Электрик ', "Электрик Тюмень " ,"Сантехник Тюмень",
    "устранение протечек",
    "ремонт сантехники",
    "установка сантехники",
    "сантехник на дом",
    "аварийный сантехник",
    "сантехнические работы",
    "сантехник круглосуточно",
  ],
  authors: [{ name: "Сантехник & Электрик Тюмень " }],
  metadataBase: new URL("https://santikhink-electric.online/about-us"),
  openGraph: {
    type: "website",
    url: "/about",
    title: "О нашей компании | Сантехник & Электрик Тюмень ",
    description: "ССантехник & Электрик Тюмень  — профессиональные сантехнические услуги в Тюмени. Устранение протечек, засоров, установка и ремонт сантехники. Гарантия качества.",
    images: [{
      url: "/opengraph-image.png", // Automatically handles OG image
      width: 1200,
      height: 630,
      alt: "Профессиональные сантехнические услуги в Тюмени",
    }]
  },
  alternates: {
    canonical: "/about"
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
    <section className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">О нашей компании</h1>

        <div className="text-center mb-16">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Сантехник Тюмень — это команда профессионалов, предоставляющая качественные сантехнические услуги в Тюмени и области. Мы специализируемся на устранении протечек, засоров, установке и ремонте сантехники.
          </p>
        </div>

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
                {/* New additional items */}
                <li className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-primary" /> {/* Add Clock icon import */}
                  <span>Круглосуточная служба поддержки</span>
                </li>
                <li className="flex items-center space-x-4">
                  <Wallet className="h-6 w-6 text-primary" /> {/* Add Wallet icon import */}
                  <span>Фиксированные цены без скрытых платежей</span>
                </li>
                <li className="flex items-center space-x-4">
                  <CheckCircle className="h-6 w-6 text-primary" /> {/* Add CheckCircle icon import */}
                  <span>Использование профессионального оборудования</span>
                </li>
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
{/* 
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center">
              <Image
                src="/images/recent/one.png"
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

            <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center">
              <Image
                src="/images/recent/two.png"
                alt="Артём"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Артём</h3>
              <p className="text-muted-foreground">Руководитель бригады мастеров</p>
              <p className="text-sm text-muted-foreground mt-4">
                Артём отвечает за координацию работы мастеров и обеспечение высокого качества выполнения заказов. Он гарантирует, что каждый клиент получает профессиональный и своевременный сервис.
              </p>
            </div>
          </div>
        </div> */}

        <CTASection />
      </div>
    </section>
  );
}