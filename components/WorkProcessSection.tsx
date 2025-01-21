"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const processes = [
  {
    title: "1. Заявка",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    description: "Вы звоните нам по телефону +7 (999) 366-82-22 или оставляете заявку на сайте.",
  },
  {
    title: "2. Уточнение заказа",
    image: "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?w=800&q=80",
    description: "Мы уточняем объем работ, удобное время приезда мастера и необходимость покупки материалов.",
  },
  {
    title: "3. Выезд мастера",
    image: "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?w=800&q=80",
    description: "Мастер приезжает в оговоренное время, без опоздания, со всем необходимым.",
  },
  {
    title: "4. Осмотр и выполнение работы",
    image: "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?w=800&q=80",
    description: "Мастер осматривает объект, называет финальную цену и выполняет работу после вашего согласия.",
  },
  {
    title: "5. Оплата",
    image: "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?w=800&q=80",
    description: "Вы принимаете работу и оплачиваете ее наличными или переводом на карту мастера.",
  },
];

const WorkProcessSection: React.FC = () => {
  return (
    <section className="py-20" id="процесс">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Как мы работаем
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Простой и прозрачный процесс работы с гарантией качества и удобной оплатой.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="relative group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border hover:border-primary text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                <Image
                  src={process.image}
                  alt={process.title}
                  width={400}
                  height={250}
                  className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold group-hover:text-primary mb-2 transition-colors">
                  {process.title}
                </h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;