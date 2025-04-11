"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  email: string;
  telegram?: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      
      // Создаем данные формы
      const formData = new FormData();
      formData.append('email', data.email);
      formData.append('telegram', data.telegram || 'Не указан');
      formData.append('_subject', 'Новая заявка на ранний доступ к ArbiSuite');
      
      // Отправляем на Formspree
      const response = await fetch('https://formspree.io/f/xqapwezz', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error('Ошибка при отправке формы');
      }
      
      // Сохраняем в localStorage для резервной копии
      const existingData = localStorage.getItem('arbiSuiteLeads');
      const leads = existingData ? JSON.parse(existingData) : [];
      leads.push({
        ...data,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('arbiSuiteLeads', JSON.stringify(leads));
      
      // Логирование
      console.log('Form data:', data);
      console.log('Total leads collected:', leads.length);
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Произошла ошибка при отправке формы. Пожалуйста, попробуйте ещё раз.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="w-full py-16 bg-muted" id="early-access">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Получить ранний доступ
        </h2>
        
        <p className="text-lg text-center mb-10 text-muted-foreground">
          Будьте в числе первых, кто испытает преимущества единой платформы для арбитража трафика и digital-маркетинга.
        </p>
        
        {isSubmitted ? (
          <div className="bg-green-50 dark:bg-green-900/30 p-8 rounded-xl border border-green-200 dark:border-green-900 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Спасибо!</h3>
            <p className="text-muted-foreground">
              Вы успешно зарегистрировались на ранний доступ к ArbiSuite. Мы свяжемся с вами, как только будем готовы!
            </p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            action="https://formspree.io/f/xqapwezz" 
            method="POST"
            className="bg-background p-8 rounded-xl border border-border"
          >
            {submitError && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-900">
                {submitError}
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email (обязательно) *
              </label>
              <input
                id="email"
                type="email"
                {...register('email', { 
                  required: 'Email обязателен',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Неверный формат email'
                  }
                })}
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-background"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="telegram" className="block text-sm font-medium mb-2">
                Telegram (по желанию)
              </label>
              <input
                id="telegram"
                type="text"
                {...register('telegram')}
                className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-background"
                placeholder="@username"
              />
            </div>
            
            <input type="hidden" name="_subject" value="Новая заявка на ранний доступ к ArbiSuite" />
            
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Отправка...' : 'Получить ранний доступ'}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
} 