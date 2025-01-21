"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import SocialMedia from "../SocialMedia";
import { ContactForm } from "../ContactForm";

export function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.section
      id="contact"
      className="py-20 px-4 md:px-6 lg:px-8 min-h-[85vh]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Нужна помощь с сантехникой?
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Оставьте заявку, и наш мастер приедет к вам в течение 30 минут для решения любых сантехнических проблем.
          </motion.p>
        </div>

        <div className="flex justify-center items-center gap-10">
          <motion.button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white font-bold w-24 h-24 rounded-full flex items-center justify-center shadow-md hover:bg-primary/90 transition-transform transform hover:scale-105"
            whileHover={{ rotate: -40 }}
          >
            <HiArrowRight size={24} />
          </motion.button>
          <h3 className="text-2xl font-bold text-muted-foreground">Свяжитесь с нами</h3>
        </div>
      </div>

      {/* Contact Form Popover */}
      <AnimatePresence>
        {showForm && (
          <ContactForm
            onClose={() => setShowForm(false)}
            onSuccess={() => setShowForm(false)}
          />
        )}
      </AnimatePresence>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{ marginTop: "4rem" }}
      >
        <SocialMedia />
      </motion.div>
    </motion.section>
  );
}