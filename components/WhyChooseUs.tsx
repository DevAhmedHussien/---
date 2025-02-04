import { FC } from "react";
import { Clock, PackageCheck, ShieldCheck, MessageCircle, CreditCard } from "lucide-react";
import Link from "next/link";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
}

const features: Feature[] = [
  {
    icon: <Clock className="w-10 h-10 text-blue-500" />,
    title: "Ремонт в день обращения",
    description:
      "Мы понимаем, как ценно Ваше время.Лучший сантехник электрик Тюмень с гарантией , Наши мастера могут быть у Вас уже через 30 минут и начать работу.",
    link: "/services",
  },
  {
    icon: <PackageCheck className="w-10 h-10 text-green-500" />,
    title: "Работаем со своим и вашим материалом",
    description:
      "Поможем с выбором материалов, купим и привезем сами или работаем с вашими материалами.",
    link: "#",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
    title: "Гарантия 1 год",
    description:
      "Качество работ подтверждено гарантией на 1 год. Доступно гарантийное и постгарантийное обслуживание.",
    link: "#",
  },
  {
    icon: <MessageCircle className="w-10 h-10 text-purple-500" />,
    title: "Отзывы клиентов",
    description:
      "Мы работаем для вашего комфорта и рады получать обратную связь, чтобы совершенствовать сервис.",
    link: "#",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-red-500" />,
    title: "Оплата удобным способом",
    description:
      "Вы можете оплатить наличными или картой. Мы честны с клиентами и не навязываем ненужные услуги.",
    link: "#",
  },
];

const WhyChooseUs: FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* 🔹 Header */}
        <h2 className="text-3xl font-bold text-gray-900">Почему выбирают нас?</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Мы предлагаем качественные сантехнические услуги в Тюмени с гарантией надежности и комфорта.
        </p>

        {/* 🔹 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center border border-gray-200"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mt-2">{feature.description}</p>
              <Link
                href='/services'
                className="mt-3 text-blue-500 font-semibold hover:underline"
              >
                Подробнее →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
