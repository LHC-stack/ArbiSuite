"use client";

import { ClockIcon, PuzzlePieceIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

export default function ProblemSection() {
  return (
    <section className="w-full py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Арбитраж трафика и digital-маркетинг — это <span className="text-red-500">боль</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-background p-6 rounded-xl border border-border">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <PuzzlePieceIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Разрозненные инструменты</h3>
            <p className="text-muted-foreground">
              AdsPower, Incogniton, Keitaro, Canva, AI-генераторы — всё разбросано по разным сервисам и приложениям.
            </p>
          </div>
          
          <div className="bg-background p-6 rounded-xl border border-border">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
              <ClockIcon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Потеря времени</h3>
            <p className="text-muted-foreground">
              Переключение между сервисами отнимает фокус и снижает эффективность работы.
            </p>
          </div>
          
          <div className="bg-background p-6 rounded-xl border border-border">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
              <CurrencyDollarIcon className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Лишние расходы</h3>
            <p className="text-muted-foreground">
              Каждый инструмент — отдельная подписка и дополнительные затраты на вашу инфраструктуру.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 