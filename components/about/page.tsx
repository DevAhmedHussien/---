"use client";

import React from "react";
import { Wrench, Users } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import SocialMedia from "@/components/SocialMedia";

export default function AboutUs() {
  return (
    <section className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            О нашей компании
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Мы предоставляем профессиональные сантехнические услуги в Тюмени с гарантией качества и быстрым выездом мастера.
          </motion.p>
        </div>

        {/* CEO and Head of Workers Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* CEO - Sergey */}
          <motion.div
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/sergey.jpeg" // Replace with the actual image path
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
          </motion.div>

          {/* Head of Workers - Artur */}
          <motion.div
            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border hover:border-primary text-center"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/images/artur.jpeg" // Replace with the actual image path
              alt="Артур"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Артур</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Руководитель бригады мастеров. Артур отвечает за координацию работы мастеров и обеспечение высокого качества выполнения заказов.
            </p>
            <Users className="h-12 w-12 text-secondary mx-auto mb-2" />
            <p className="text-muted-foreground">
              Артур гарантирует, что каждый клиент получает профессиональный и своевременный сервис.
            </p>
          </motion.div>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
        </motion.div>
      </div>
    </section>
  );
}