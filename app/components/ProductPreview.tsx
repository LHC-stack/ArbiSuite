"use client";

import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Единый дашборд",
    description: "Управляйте всеми инструментами для арбитража трафика и маркетинга из одного интерфейса"
  },
  {
    title: "Антидетект-браузер",
    description: "Создавайте и управляйте профилями, эмулируйте отпечатки, интегрируйтесь с прокси"
  },
  {
    title: "AI-ассистент",
    description: "Генерируйте креативы, пишите тексты, анализируйте кампании с помощью ИИ"
  },
  {
    title: "Трекинг кампаний",
    description: "Отслеживайте и оптимизируйте ваши рекламные кампании в единой системе"
  },
  {
    title: "Управление креативами",
    description: "Создавайте и редактируйте визуальные материалы прямо в платформе"
  },
  {
    title: "Интеграция с рекламными сетями",
    description: "Работайте с Telegram Ads, Meta, TikTok и другими платформами"
  }
];

const ProductPreview = () => {
  return (
    <section id="product" className="w-full py-24 relative overflow-hidden">
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
            О продукте
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ArbiSuite находится в активной разработке. Вот что мы готовим для вас:
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-semibold mb-8 text-center text-white">Основные модули платформы</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CheckCircleIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl font-semibold text-gray-300 mb-4">
            Мы активно разрабатываем функциональность и улучшаем пользовательский опыт
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPreview; 