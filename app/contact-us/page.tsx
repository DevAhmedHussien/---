import Head from "next/head";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FAQSection from "../faq/FAQSection";

// Metadata and Keywords Configuration
const metadata = {
  title: "Контакты | Сантехник и Электрик Тюмень ",
  description:
    "Свяжитесь с нами для профессиональных сантехнических услуг в Тюмени. Мы готовы помочь с устранением протечек, засоров, установкой и ремонтом сантехники.",
  keywords: [
    "контакты сантехника Тюмень",'Сантехник и Электрик ','Сантехник и Электрик ', "Электрик Тюмень " ,"Сантехник Тюмень",
    "вызов сантехника Тюмень",
    "сантехнические услуги Тюмень",
    "экстренный вызов сантехника",
    "ремонт сантехники Тюмень",
  ],
  author: "Сантехник Тюмень",
  openGraph: {
    title: "Контакты | Сантехник и Электрик Тюмень ",
    description:
      "Свяжитесь с нами для профессиональных сантехнических услуг в Тюмени. Мы готовы помочь с устранением протечек, засоров, установкой и ремонтом сантехники.",
    image: "/images/contact-us-plumber.jpg",
    url: "https://www.santikhink-electric.online/contact-us",
  },
};

export default function ContactUsPage() {
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

      <section className="py-20" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h1 className="text-4xl font-bold text-center mb-8">Контакты</h1>

          {/* Introduction Section */}
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами для профессиональных сантехнических услуг в Тюмени. Мы готовы помочь с устранением протечек, засоров, установкой и ремонтом сантехники.
            </p>
          </div>

          {/* Contact Information and Form Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold mb-6">Наши контакты</h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Адрес</h3>
                    <p className="text-muted-foreground">
                      г. Тюмень, ул. Примерная, д. 123, офис 456
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Телефон</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+79091818242" className="hover:text-primary">
                        +7 (909) 181-82-42
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Электронная почта</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:vash72dom@gmail.com" className="hover:text-primary">
                        vash72dom@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold">Часы работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Пт: 8:00 - 20:00 <br />
                      Сб-Вс: 9:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Map Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Мы на карте</h2>
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2168.1234567890123!2d65.534328!3d57.152547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTfCsDA5JzA5LjIiTiA2NcKwMzInMDMuNiJF!5e0!3m2!1sen!2sru!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <FAQSection/>

    </>
  );
}