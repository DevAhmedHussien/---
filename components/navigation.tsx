"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Wrench } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import { ContactForm } from "./ContactForm";
import { Button } from "./ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
 
  const links = [ {en:'services' , ru :'Услуги' },  {en:'about-us' , ru :'O нас' } ,  {en:'contact-us' , ru :'Контакты' }]
  return (
    < nav
      className="border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Wrench className="h-8 w-8 text-primary" />
              < span
                className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
               
              >
                Сантехник & Электрик 
              </ span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {links.map((item, index) => (
              < div
                key={index}
              >
                <Link
                  href={item.en}
                  className="text-sm hover:text-primary transition-colors text-upper"
                >
                  {item.ru}
                </Link>
              </ div>
            ))}
            <Button asChild onClick={() => setShowForm(true)} >
              <Link href="">Вызвать сантехника</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 ml-2 text-muted-foreground hover:text-foreground"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        < div
          className="md:hidden bg-background border-b"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((item,index) => (
              <Link
                key={index}
                href={item.en}
                className="block px-3 py-2 text-base hover:text-primary transition-colors"
              >
                {item.ru}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full" asChild>
              <Button size="lg" asChild>
              <Link href="" 
              onClick={() => setShowForm(true)}
              >
                Вызвать сантехника <FaArrowRight className="ml-2 h-4 w-4 inline" />
              </Link>
            </Button>
              </Button>
            </div>
          </div>
        </ div>

        // fom 
      )}
      {/* form  */}

         {/* Contact Form Popover */}
       <AnimatePresence>
         {showForm && (
           <ContactForm
             onClose={() => setShowForm(false)}
             onSuccess={() => setShowForm(false)}
           />
         )}
       </AnimatePresence>
    </ nav>
  );
}