"use client";

import { FaArrowRight } from "react-icons/fa";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ContactForm } from "./ContactForm";

const CTASection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-16 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Готовы решить ваши сантехнические проблемы?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Оставьте заявку, и наш мастер приедет к вам в течение 30 минут.
          </p>
            <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={()=>{setIsOpen(true)}}
              >
                Вызвать сантехника
                <FaArrowRight className="ml-2 h-4 w-4 inline" />
            </Button>
            <AnimatePresence >
              {isOpen && (
                <ContactForm
                  onClose={() => setIsOpen(false)}
                  onSuccess={() => setIsOpen(false)}
                />
              )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CTASection;