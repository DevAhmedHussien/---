import { FaClock, FaShieldAlt, FaRubleSign, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const PlumbingElectricServices = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-[85vh]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Вызов сантехника и электрика на дом в Тюмени <span className="text-primary">24/7</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Экстренный выезд за 30 минут в любой район Тюмени | Гарантия до 3 лет | Скидки пенсионерам
        </p>
      </div>

      {/* USP Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mb-16">
        {[{
          icon: <FaClock className="text-4xl text-primary" />, 
          title: "Срочный выезд",
          description: "Приедем в любой район Тюмени (Калининский, Восточный, Центральный) за 30 минут"
        }, {
          icon: <FaShieldAlt className="text-4xl text-primary" />, 
          title: "Гарантия качества",
          description: "Официальный договор и гарантия до 3 лет на все виды работ"
        }, {
          icon: <FaRubleSign className="text-4xl text-primary" />, 
          title: "Особые условия",
          description: "Скидка 15% пенсионерам и новосёлам новых микрорайонов"
        }].map((item, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-xl transition-shadow text-left">
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8 border">
          <h2 className="text-3xl font-bold mb-6">Не откладывайте ремонт!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Работаем круглосуточно - выезжаем даже ночью!
          </p>
          <a 
            href="tel:+79091818242" 
            className="bg-primary text-white px-12 py-4 rounded-full text-lg hover:bg-primary-dark transition inline-flex items-center"
          >
            <FaPhone className="mr-2" />
            +7 (909) 181-82-42
          </a>
          <p className="mt-4 text-muted-foreground">
            Среднее время прибытия: 27 минут (по данным за 2024 год)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlumbingElectricServices;
