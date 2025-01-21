import {
  FaWrench,
  FaTint,
  FaShower,
  FaBath,
  FaToilet,
  FaTools,
} from "react-icons/fa";

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
];

const ServicesSection: React.FC = () => {
  return (
    < section
      id="услуги"
      className="py-20 min-h-[85vh]"
     
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          < h2
            className="text-3xl font-bold mb-4"
           
          >
            Чем мы можем помочь
          </ h2>
          < p
            className="text-muted-foreground max-w-2xl mx-auto"
            
          >
            Профессиональные сантехнические услуги в Тюмени с гарантией качества.
          </ p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-20">
          {services.map((service, index) => (
            < div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-xl transition-shadow border hover:border-primary text-left"
          
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <p className="text-lg font-bold text-primary">{service.price}</p>
            </ div>
          ))}
        </div>
      </div>
    </ section>
  );
};

export default ServicesSection;