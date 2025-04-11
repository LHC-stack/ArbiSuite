"use client";

import { RocketLaunchIcon, WrenchScrewdriverIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function StatusSection() {
  return (
    <section className="w-full py-16 px-4 md:px-8 bg-white dark:bg-black" id="status">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Что сейчас?
        </h2>
        
        <div className="bg-blue-50 dark:bg-blue-950 rounded-2xl p-8 shadow-sm border border-blue-100 dark:border-blue-900">
          <div className="flex flex-col gap-6">
            <StatusItem 
              icon={<WrenchScrewdriverIcon className="w-6 h-6 text-blue-600" />}
              title="ArbiSuite в разработке"
              description="Мы создаём полноценную экосистему для арбитражников и маркетологов."
            />
            
            <StatusItem 
              icon={<UserGroupIcon className="w-6 h-6 text-indigo-600" />}
              title="Собираем первых пользователей"
              description="Формируем пул пользователей, которым нужна платформа all-in-one."
            />
            
            <StatusItem 
              icon={<RocketLaunchIcon className="w-6 h-6 text-purple-600" />}
              title="Хотите попробовать первыми?"
              description="Оставьте заявку на ранний доступ и получите приоритетное приглашение к бета-версии."
            />
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="#early-access" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Получить ранний доступ →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

interface StatusItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StatusItem({ icon, title, description }: StatusItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
      </div>
    </div>
  );
} 