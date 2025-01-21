"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const works = [
  {
    title: "Устранение протечек",
    image: "/images/recent/leak-repair.webp",
    link: "#",
    public: true,
    category: "Ремонт сантехники",
  },
  {
    title: "Устранение засоров",
    image: "/images/recent/clog-removal.webp",
    link: "#",
    public: true,
    category: "Чистка канализации",
  },
  {
    title: "Установка смесителей",
    image: "/images/recent/faucet-installation.webp",
    link: "#",
    public: true,
    category: "Монтаж сантехники",
  },
  {
    title: "Ремонт душевой кабины",
    image: "/images/recent/shower-repair.webp",
    link: "#",
    public: true,
    category: "Ремонт сантехники",
  },
  {
    title: "Установка унитаза",
    image: "/images/recent/toilet-installation.webp",
    link: "#",
    public: true,
    category: "Монтаж сантехники",
  },
  {
    title: "Замена труб",
    image: "/images/recent/pipe-replacement.webp",
    link: "#",
    public: true,
    category: "Ремонт сантехники",
  },
  {
    title: "Герметизация ванной",
    image: "/images/recent/bathroom-sealing.webp",
    link: "#",
    public: true,
    category: "Ремонт сантехники",
  },
  {
    title: "Установка водонагревателя",
    image: "/images/recent/water-heater-installation.webp",
    link: "#",
    public: true,
    category: "Монтаж сантехники",
  },
];

export function RecentWorks() {
  return (
    <section id="проекты" className="py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto p-5">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Наши работы
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Примеры наших работ по ремонту и установке сантехники в Тюмени.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg hover:shadow-xl transition-shadow border hover:border-primary"
            >
              <Image
                src={work.image}
                alt={work.title}
                width={300}
                height={200}
                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center text-center items-center text-white p-6">
                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                <p className="text-sm">{work.category}</p>
                {work.public && (
                  <a
                    href={work.link}
                    target="_blank"
                    className="bg-gradient-to-r from-primary to-secondary text-white hover:bg-yellow-500 px-5 py-1 rounded-md mt-3 text-sm"
                  >
                    Подробнее
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          <motion.div
            key="more"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 7 * 0.1 }}
            className="relative group overflow-hidden rounded-lg bg-primary"
          >
            <div className="text-4xl flex items-center justify-center w-full h-[200px] text-white">
              +300
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}