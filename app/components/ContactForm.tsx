"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { motion } from "framer-motion";
import { CurrencyDollarIcon, CodeBracketIcon, MegaphoneIcon, UserGroupIcon } from '@heroicons/react/24/outline';

interface FormData {
  name: string;
  email: string;
  role: string;
  message: string;
}

const roles = [
  {
    id: 'investor',
    title: 'Инвестор',
    description: 'Готовы инвестировать в развитие платформы',
    icon: CurrencyDollarIcon,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'developer',
    title: 'Разработчик',
    description: 'Хотите присоединиться к команде разработки',
    icon: CodeBracketIcon,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'marketer',
    title: 'Маркетолог',
    description: 'Можете помочь с продвижением платформы',
    icon: MegaphoneIcon,
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'other',
    title: 'Другое',
    description: 'У вас есть другие идеи для сотрудничества',
    icon: UserGroupIcon,
    color: 'from-gray-500 to-gray-600'
  }
];

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const selectedRole = watch('role');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Здесь будет логика отправки формы
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  return (
    <section id="early-access" className="w-full py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Присоединиться к проекту
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Выберите роль, в которой вы хотели бы участвовать в развитии платформы
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {isSubmitted ? (
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Спасибо за заявку!</h3>
              <p className="text-gray-300">
                Мы свяжемся с вами в ближайшее время для обсуждения деталей сотрудничества.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <motion.div
                      key={role.id}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative cursor-pointer group`}
                    >
                      <input
                        type="radio"
                        id={role.id}
                        value={role.id}
                        {...register('role', { required: true })}
                        className="hidden peer"
                      />
                      <label
                        htmlFor={role.id}
                        className={`block p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer
                          ${selectedRole === role.id 
                            ? 'border-blue-500 bg-blue-500/10' 
                            : 'border-white/10 bg-white/5 hover:border-white/20'}
                          peer-checked:border-blue-500 peer-checked:bg-blue-500/10`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-r ${role.color}`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white mb-1">{role.title}</h3>
                            <p className="text-sm text-gray-400">{role.description}</p>
                          </div>
                        </div>
                      </label>
                    </motion.div>
                  );
                })}
              </div>

              {errors.role && (
                <p className="text-red-500 text-sm text-center">Пожалуйста, выберите роль</p>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Ваше имя
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Иван Иванов"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">Это поле обязательно</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="ivan@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    Пожалуйста, введите корректный email
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Сообщение
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Расскажите о вашем опыте и почему вы хотите присоединиться к проекту..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Отправка..." : "Отправить заявку"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;