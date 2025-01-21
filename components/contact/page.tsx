"use client";

import { useState } from "react";
import {  AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import SocialMedia from "../SocialMedia";
import { ContactForm } from "../ContactForm";

export function Contact() {
  const [showForm, setShowForm] = useState(false);

  return (
    < section
      id="contact"
      className="py-20 px-4 md:px-6 lg:px-8 min-h-[85vh]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          < h2
            className="text-3xl font-bold mb-4"
          
          >
            Нужна помощь с сантехникой?
          </ h2>
          < p
            className="text-muted-foreground max-w-2xl mx-auto mb-16"
          
          >
            Оставьте заявку, и наш мастер приедет к вам в течение 30 минут для решения любых сантехнических проблем.
          </ p>
        </div>

        <div className="flex justify-center items-center gap-10">
          < button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white font-bold w-24 h-24 rounded-full flex items-center justify-center shadow-md hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            <HiArrowRight size={24} />
          </ button>
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
      < div
        style={{ marginTop: "4rem" }}
      >
        <SocialMedia />
      </ div>
    </ section>
  );
}