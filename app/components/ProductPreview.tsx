"use client";

import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ProductPreview() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          О продукте
        </h2>
        
        <p className="text-lg text-center mb-10 text-gray-700 dark:text-gray-300">
          ArbiSuite находится в активной разработке. Вот что мы готовим для вас:
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-10">
          <h3 className="text-2xl font-semibold mb-6 text-center">Основные модули платформы</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <FeatureItem 
                title="Единый дашборд"
                description="Управляйте всеми инструментами для арбитража трафика и маркетинга из одного интерфейса"
              />
              
              <FeatureItem 
                title="Антидетект-браузер"
                description="Создавайте и управляйте профилями, эмулируйте отпечатки, интегрируйтесь с прокси"
              />
              
              <FeatureItem 
                title="AI-ассистент"
                description="Генерируйте креативы, пишите тексты, анализируйте кампании с помощью ИИ"
              />
            </div>
            
            <div className="space-y-6">
              <FeatureItem 
                title="Трекинг кампаний"
                description="Отслеживайте и оптимизируйте ваши рекламные кампании в единой системе"
              />
              
              <FeatureItem 
                title="Управление креативами"
                description="Создавайте и редактируйте визуальные материалы прямо в платформе"
              />
              
              <FeatureItem 
                title="Интеграция с рекламными сетями"
                description="Работайте с Telegram Ads, Meta, TikTok и другими платформами"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
            Мы активно разрабатываем функциональность и улучшаем пользовательский опыт
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Оставьте заявку на ранний доступ, чтобы первыми опробовать платформу и участвовать в её развитии
          </p>
        </div>
      </div>
    </section>
  );
}

interface FeatureItemProps {
  title: string;
  description: string;
}

function FeatureItem({ title, description }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        <CheckCircleIcon className="h-5 w-5 text-blue-500" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
} 