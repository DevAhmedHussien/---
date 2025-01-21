"use client";

import { Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="border-t bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Wrench className="h-8 w-8 text-primary" />
                <motion.span
                  className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  Сантехник Тюмень
                </motion.span>
              </Link>
            </div>
            <p className="text-sm">
              Профессиональные сантехнические услуги с гарантией качества.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="services" className="text-muted-foreground hover:text-primary">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="about-us" className="text-muted-foreground hover:text-primary">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="contact-us" className="text-muted-foreground hover:text-primary">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="services" className="text-muted-foreground hover:text-primary">
                  Устранение протечек
                </Link>
              </li>
              <li>
                <Link href="services" className="text-muted-foreground hover:text-primary">
                  Устранение засоров
                </Link>
              </li>
              <li>
                <Link href="services" className="text-muted-foreground hover:text-primary">
                  Установка сантехники
                </Link>
              </li>
              <li>
                <Link href="services" className="text-muted-foreground hover:text-primary">
                  Ремонт сантехники
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+7-XXX-XXX-XX-XX" className="text-muted-foreground hover:text-primary">
                  +7 (XXX) XXX-XX-XX
                </a>
              </li>
              <li>
                <a href="mailto:info@santehnik-tyumen.ru" className="text-muted-foreground hover:text-primary">
                  info@santehnik-tyumen.ru
                </a>
              </li>
              <li>
                <p className="text-muted-foreground">
                  Тюмень, ул. Примерная, 123
                </p>
              </li>
            </ul>
          </div>
        </motion.div>

        <hr />

        {/* Additional Info */}
        <motion.div
          className="pt-8 text-center text-sm space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Сантехник Тюмень. Все права защищены.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}