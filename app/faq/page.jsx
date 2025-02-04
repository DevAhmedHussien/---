import Head from "next/head";
import FAQSection from "./FAQSection";

const FAQPage = () => {


  const metadata = {
    title: "Часто задаваемые вопросы | Сантехник и Электрик Тюмень ",
    description:
      "Найдите ответы на часто задаваемые вопросы о наших сантехнических услугах в Тюмени. Узнайте больше о ценах, гарантиях и процессе работы.",
    keywords: [
      'сантехник и электрик' , "вопросы о сантехнике Тюмень", 'Сантехник и Электрик ','Сантехник и Электрик ', "Электрик Тюмень " ,"Сантехник Тюмень",
      "часто задаваемые вопросы сантехник",'Часто задаваемые вопросы','Какие районы Тюмени вы обслуживаете?','Мы предоставляем гарантию на все выполненные работы.',
      "сантехнические услуги Тюмень",
      "ремонт сантехники вопросы",
      "гарантия на сантехнические услуги",
    ],
    openGraph: {
      title: "Часто задаваемые вопросы | Сантехник и Электрик Тюмень ",
      description:
        "Найдите ответы на часто задаваемые вопросы о наших сантехнических услугах в Тюмени. Узнайте больше о ценах, гарантиях и процессе работы.",
      image: "/images/faq-plumber.jpg",
      url: "https://santikhink-electric.online/faq",
    },
  };


  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Russian" />
      </Head>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">
            <span className="font-bold text-3xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Часто задаваемые вопросы</span>
          </h1>
          <FAQSection/>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
