"use client";

import { ChartBarIcon, ArrowTrendingUpIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const statusItems = [
  {
    icon: ChartBarIcon,
    title: "$63,87 млрд к 2033 году",
    description: "Прогнозируемый объем рынка с ежегодным ростом (CAGR) 15,6% в период 2024-2033.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Высокий темп роста",
    description: "Стабильный рост рынка digital-маркетинга, особенно в сегментах дейтинга, нутры, гемблинга и финансов.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: GlobeAltIcon,
    title: "Глобальный охват",
    description: "Растущий спрос на инструменты автоматизации и управления трафиком во всех регионах мира.",
    gradient: "from-indigo-500 to-indigo-600"
  }
];

const StatusSection = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden" id="status">
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
            Потенциал рынка
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col gap-8">
              {statusItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatusSection; 