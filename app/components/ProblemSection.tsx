"use client";

import { ClockIcon, PuzzlePieceIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const problems = [
  {
    icon: PuzzlePieceIcon,
    title: "Разрозненные инструменты",
    description: "AdsPower, Incogniton, Keitaro, Canva, AI-генераторы — всё разбросано по разным сервисам и приложениям.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: ClockIcon,
    title: "Потеря времени",
    description: "Переключение между сервисами отнимает фокус и снижает эффективность работы.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: CurrencyDollarIcon,
    title: "Лишние расходы",
    description: "Каждый инструмент — отдельная подписка и дополнительные затраты на вашу инфраструктуру.",
    color: "from-green-500 to-green-600"
  }
];

const ProblemSection = () => {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Арбитраж трафика и digital-маркетинг — это <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">боль</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Мы знаем, с какими проблемами сталкиваются арбитражники и маркетологи каждый день
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full">
                <div className={`w-14 h-14 bg-gradient-to-r ${problem.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-gray-400">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection; 