
import { Wrench, Users } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          < h2 className="text-3xl font-bold mb-4">
            О нашей компании
          </ h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" >
            Мы предоставляем профессиональные сантехнические услуги в Тюмени с гарантией качества и быстрым выездом мастера.
          </ p>
        </div>

        < div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" >
          {/* CEO - Sergey */}
          < div
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center">
            <Image
              src="/images/sergey.png" 
              alt="Сергей"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Сергей</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Генеральный директор компании. Сергей обладает многолетним опытом в сфере сантехнических услуг и управления бизнесом.
            </p>
            <Wrench className="h-12 w-12 text-primary mx-auto mb-2" />
            <p className="text-muted-foreground">
              Его стратегическое видение обеспечивает высокое качество услуг и удовлетворенность клиентов.
            </p>
          </div>

          < div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center" >
            <Image
              src="/images/artem.png" 
              alt="Артур"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Артём</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Руководитель бригады мастеров. Артём отвечает за координацию работы мастеров и обеспечение высокого качества выполнения заказов.
            </p>
            <Users className="h-12 w-12 text-secondary mx-auto mb-2" />
            <p className="text-muted-foreground">
            Артём гарантирует, что каждый клиент получает профессиональный и своевременный сервис.
            </p>
          </ div>
        </ div>

        <section className="seo-content">
        {/* Emergency Banner with CTA */}
        <div className="emergency-banner bg-blue-900 text-white py-12 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Аварийный сантехник и электрик в Тюмени - круглосуточный выезд 24/7
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Срочный вызов сантехника на дом в Тюмени | Срочный вызов электрика на дом в Тюмени с гарантией качества работ. 
              Устраним протечки, засоры, выполним ремонт сантехники и электропроводки 
              за 30-60 минут. Работаем со всеми районами Тюмени.
            </p>
            <a 
              href="tel:+79091818242" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-all"
            >
              <span>Срочный вызов</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.2 0-2.5-.2-3.6-.6h-.3c-.3 0-.5.1-.7.3l-2.2 2.2c-2.8-1.5-5.2-3.8-6.6-6.6l2.2-2.2c.4-.4.6-1 .3-1.5-.4-1.1-.6-2.4-.6-3.6 0-.5-.5-1-1-1H4c-.5 0-1 .5-1 1 0 9.4 7.6 17 17 17 .5 0 1-.5 1-1v-3c0-.5-.5-1-1-1z"/>
              </svg>
            </a>
          </div>
        </div>

    {/* Service Grid with Icons */}
    <article className="service-grid max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Сантехнические и электромонтажные услуги в Тюмени
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Plumbing Services */}
        <div className="service-category bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Экстренные услуги сантехника</h3>
          </div>
          <ul className="grid gap-3">
            {['Устранение протечек труб', 'Ликвидация засоров', 'Аварийный ремонт', 'Срочная замена труб'].map((service) => (
              <li key={service} className="flex items-center gap-3 text-gray-700">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                {service}
              </li>
            ))}
          </ul>
        </div>

      {/* Electrical Services */}
      <div className="service-category bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-blue-100 p-3 rounded-lg">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold">Электрика на дом</h3>
        </div>
        <ul className="grid gap-3">
          {['Ремонт проводки', 'Установка розеток', 'Монтаж щитков', 'Подключение техники'].map((service) => (
            <li key={service} className="flex items-center gap-3 text-gray-700">
              <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              {service}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </article>

      {/* Guarantees Section */}
      <div className="guarantees bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {title: 'Гарантия 2 года', icon: '🛡️'},
              {title: 'Оплата картой', icon: '💳'},
              {title: 'Скидки пенсионерам', icon: '👵'},
              {title: 'Бесплатный выезд', icon: '🚗'},
            ].map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
      </div>
    </section>
  );
}