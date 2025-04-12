"use client";

import { 
  ShieldCheckIcon, 
  SparklesIcon, 
  ChartBarIcon, 
  PencilSquareIcon, 
  ServerIcon,
  CameraIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    icon: ShieldCheckIcon,
    title: "Антидетект-браузер",
    description: "Встроенный антидетект прямо в платформе, без необходимости скачивать сторонние приложения.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: SparklesIcon,
    title: "AI-ассистент",
    description: "Создавайте креативы, пишите тексты и анализируйте кампании с помощью искусственного интеллекта.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: ChartBarIcon,
    title: "Трекинг кампаний",
    description: "Мощный трекер, как у Keitaro, для отслеживания и оптимизации ваших рекламных кампаний.",
    gradient: "from-green-500 to-green-600"
  },
  {
    icon: PencilSquareIcon,
    title: "Редактор креативов",
    description: "Создавайте и редактируйте визуальный контент прямо в платформе без переключения между сервисами.",
    gradient: "from-pink-500 to-pink-600"
  },
  {
    icon: ServerIcon,
    title: "Управление инфраструктурой",
    description: "Прокси, аккаунты, мульти-рекламные кабинеты — всё под контролем в одном месте.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: CameraIcon,
    title: "Интеграции с рекламными сетями",
    description: "Telegram Ads, Meta Ads, TikTok и другие платформы в едином интерфейсе.",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

const SolutionSection = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Решение: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">ArbiSuite</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Одна платформа, чтобы работать. Антидетект, трекинг, AI, крео, прокси — всё в одном окне.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection; 