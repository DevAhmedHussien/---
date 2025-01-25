"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const ContactForm = ({ onClose, onSuccess }: ContactFormProps) => {
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // Phone validation regex (supports Russian and international formats)
  const validatePhone = (phone: string) => {
    const regex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    return regex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() ? "" : "Имя обязательно",
      phone: formData.phone.trim() 
        ? validatePhone(formData.phone)
          ? ""
          : "Неверный формат телефона"
        : "Телефон обязателен",
      message: formData.message.trim() ? "" : "Сообщение обязательно",
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("loading");
    try {
      await emailjs.send(
        // process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        // process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
       "service_masq18v","template_sokielt",
        {
          from_name: formData.name.trim(),
          phone: formData.phone.trim(),
          message: formData.message.trim(),
        },
        'iD-NdEYfmuvsEgkoA'
        // process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
      );

      setFormStatus("success");
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(onSuccess, 2000); // Auto-close after 2sec
    } catch (error) {
      setFormStatus("error");
      console.error("Email sending failed:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center h-[100vh] bg-black/70 z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-[92vw] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-primary/90 text-2xl font-bold"
          aria-label="Close form"
        >
          &times;
        </button>

        <h3 className="text-3xl font-bold mb-6 text-center text-primary">
          Оставьте заявку
        </h3>

        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-left text-muted-foreground"
            >
              Имя
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-gray-800 focus:ring-primary focus:border-primary py-2 px-3"
              aria-invalid={!!errors.name}
              aria-describedby="name-error"
            />
            {errors.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm text-left font-medium text-muted-foreground"
            >
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-gray-800 focus:ring-primary focus:border-primary py-2 px-3"
              placeholder="+7 (XXX) XXX-XX-XX"
              pattern="^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$"
              aria-invalid={!!errors.phone}
              aria-describedby="phone-error"
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-500 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm text-left font-medium text-muted-foreground"
            >
              Сообщение
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm bg-white text-gray-800 focus:ring-primary focus:border-primary py-2 px-3"
              placeholder="Опишите вашу проблему"
              aria-invalid={!!errors.message}
              aria-describedby="message-error"
            />
            {errors.message && (
              <p id="message-error" className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-bold hover:bg-primary/90 transition-transform transform hover:scale-105 disabled:opacity-50"
            disabled={formStatus === "loading" || formStatus === "success"}
          >
            {formStatus === "loading" && "Отправка..."}
            {formStatus === "success" && "✓ Отправлено!"}
            {formStatus !== "loading" && formStatus !== "success" && "Отправить"}
          </button>

          {formStatus === "error" && (
            <p className="text-red-500 text-sm text-center mt-2">
              Ошибка при отправке. Пожалуйста, попробуйте еще раз.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};