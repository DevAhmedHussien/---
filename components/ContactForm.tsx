"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

interface ContactFormProps {
  onClose: () => void;
  onSuccess: () => void;
}

export const ContactForm = ({ onClose, onSuccess }: ContactFormProps) => {
  const [formStatus, setFormStatus] = useState("idle");
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

  const validatePhone = (phone: string) => {
    const regex = /^\+?[0-9]{10,15}$/; // Validates international phone numbers
    return regex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name ? "" : "Имя обязательно.",
      phone: formData.phone
        ? validatePhone(formData.phone)
          ? ""
          : "Неверный номер телефона."
        : "Телефон обязателен.",
      message: formData.message ? "" : "Сообщение обязательно.",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setFormStatus("loading");

    emailjs
      .send(
        "your_service_id", // Замените на ваш EmailJS service ID
        "your_template_id", // Замените на ваш EmailJS template ID
        {
          from_name: formData.name,
          from_phone: formData.phone,
          message: formData.message,
        },
        "your_user_id" // Замените на ваш EmailJS user ID
      )
      .then(
        () => {
          setFormStatus("success");
          setFormData({ name: "", phone: "", message: "" });
          setErrors({ name: "", phone: "", message: "" });
          onSuccess();
        },
        () => setFormStatus("error")
      );
  };

  return (
    < div
      className="fixed inset-0 flex items-center justify-center h-[100vh] bg-black/70 z-50"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-[92vw] relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-primary/90 text-2xl font-bold"
        >
          &times;
        </button>
        <h3 className="text-3xl font-bold mb-6 text-center text-primary">
          Оставьте заявку
        </h3>
        <form className="space-y-6" onSubmit={handleSubmit}>
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
              required
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
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
              required
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
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
              required
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          < button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md font-bold hover:bg-primary/90 transition-transform transform hover:scale-105"
          >
            {formStatus === "loading"
              ? "Отправка..."
              : formStatus === "success"
              ? "Сообщение отправлено!"
              : "Отправить"}
          </ button>
          {formStatus === "error" && (
            <p className="text-red-500 text-sm text-center mt-2">
              Ошибка при отправке. Пожалуйста, попробуйте еще раз.
            </p>
          )}
        </form>
      </div>
    </ div>
  );
};