'use client'
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "Как вызвать сантехника или электрика на дом?",
      answer: "Вы можете позвонить нам по телефону +7 (909) 181-82-42 или оставить заявку на сайте. Наш мастер приедет в течение 30 минут."
    },
    {
      question: "Какие районы Тюмени вы обслуживаете?",
      answer: "Мы обслуживаем все районы города Тюмени. Мастер приедет в течение 30 минут после заявки."
    },
    {
      question: "Какие услуги вы предоставляете?",
      answer: "Мы предоставляем услуги по устранению протечек, засоров, ремонту сантехники, установке смесителей, унитазов, светильников, розеток, и многое другое."
    },
    {
      question: "Сколько стоит устранение протечек?",
      answer: "Стоимость устранения протечек начинается от 1 200 ₽."
    },
    {
      question: "Сколько стоит установка светильника?",
      answer: "Установка потолочных, настенных и точечных светильников начинается от 1 500 ₽."
    },
    {
      question: "Вы работаете в выходные дни?",
      answer: "Да, мы работаем круглосуточно, включая выходные и праздничные дни."
    },
    {
      question: "Есть ли скидки?",
      answer: "Да, мы предоставляем скидки пенсионерам и новоселам."
    },
    {
      question: "Какая гарантия на работы?",
      answer: "Мы предоставляем гарантию на все выполненные работы."
    },
    {
      question: "Как оплачивается работа мастера?",
      answer: "Оплата производится наличными или переводом на карту мастера после выполнения работы."
    },
    {
      question: "Какие материалы нужно предоставлять клиенту?",
      answer: "Наши мастера приезжают с основными материалами, но мы уточняем необходимость дополнительных материалов заранее."
    },
    {
      question: "Можно ли вызвать мастера ночью?",
      answer: "Да, мы работаем 24/7 и готовы помочь в любое время суток."
    },
    {
      question: "Как быстро приедет мастер?",
      answer: "Мастер приедет в течение 30 минут в пределах города Тюмени."
    }
  ];

  return (
    <div className="space-y-6">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition-all duration-300"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h4 className="text-xl font-semibold text-primary">
              {item.question}
            </h4>
            {openIndex === index ? (
              <ChevronUp className="w-6 h-6 text-primary" />
            ) : (
              <ChevronDown className="w-6 h-6 text-secondary" />
            )}
          </div>
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === index 
                ? 'max-h-[500px] opacity-100 mt-4'
                : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-gray-500">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;