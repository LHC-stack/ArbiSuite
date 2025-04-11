"use client";

import { 
  ShieldCheckIcon, 
  SparklesIcon, 
  ChartBarIcon, 
  PencilSquareIcon, 
  ServerIcon 
} from '@heroicons/react/24/outline';
import { ReactNode } from 'react';

export default function SolutionSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Решение: <span className="text-blue-400">ArbiSuite</span>
        </h2>
        
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Одна платформа, чтобы работать. Антидетект, трекинг, AI, крео, прокси — всё в одном окне.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ShieldCheckIcon className="w-6 h-6" />}
            title="Антидетект-браузер"
            description="Встроенный антидетект прямо в платформе, без необходимости скачивать сторонние приложения."
          />
          
          <FeatureCard 
            icon={<SparklesIcon className="w-6 h-6" />}
            title="AI-ассистент"
            description="Создавайте креативы, пишите тексты и анализируйте кампании с помощью искусственного интеллекта."
          />
          
          <FeatureCard 
            icon={<ChartBarIcon className="w-6 h-6" />}
            title="Трекинг кампаний"
            description="Мощный трекер, как у Keitaro, для отслеживания и оптимизации ваших рекламных кампаний."
          />
          
          <FeatureCard 
            icon={<PencilSquareIcon className="w-6 h-6" />}
            title="Редактор креативов"
            description="Создавайте и редактируйте визуальный контент прямо в платформе без переключения между сервисами."
          />
          
          <FeatureCard 
            icon={<ServerIcon className="w-6 h-6" />}
            title="Управление инфраструктурой"
            description="Прокси, аккаунты, мульти-рекламные кабинеты — всё под контролем в одном месте."
          />
          
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" />
                <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
                <path d="M17.5 7.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Интеграции с рекламными сетями</h3>
            <p className="text-gray-300">
              Telegram Ads, Meta Ads, TikTok и другие платформы в едином интерфейсе.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 flex flex-col items-center text-center">
      <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
} 