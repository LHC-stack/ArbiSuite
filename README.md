# ArbiSuite Landing Page

Лендинг-страница для проекта ArbiSuite - универсальной платформы для арбитражников и digital-маркетологов.

## О проекте

ArbiSuite - это платформа all-in-one, которая объединяет в себе все необходимые инструменты для арбитража трафика и digital-маркетинга:

- Антидетект-браузер
- AI-ассистент
- Трекинг кампаний
- Редактор креативов
- Управление инфраструктурой
- Интеграции с рекламными сетями

## Технический стек

- Next.js 15
- TypeScript
- Tailwind CSS 4
- React Hook Form
- Framer Motion
- i18next для интернационализации

## Установка и запуск

```bash
# Клонирование репозитория
git clone https://github.com/your-username/arbisuite-landing.git
cd arbisuite-landing

# Установка зависимостей
npm install

# Запуск сервера разработки
npm run dev

# Сборка для продакшн
npm run build

# Запуск продакшн-версии
npm run start
```

## Деплой на Vercel

Проект оптимизирован для развертывания на Vercel.

### Автоматический деплой через GitHub

1. Создайте репозиторий в GitHub и загрузите код
2. Войдите на [Vercel](https://vercel.com/)
3. Выберите "Add New... > Project"
4. Импортируйте GitHub репозиторий
5. Выберите созданный репозиторий arbisuite-landing
6. В настройках деплоя все значения по умолчанию должны быть правильными:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
7. Нажмите "Deploy"

### Деплой с локального компьютера (через CLI)

1. Установите Vercel CLI:
```bash
npm install -g vercel
```

2. Авторизуйтесь:
```bash
vercel login
```

3. Деплой
```bash
# Деплой в preview среду
vercel

# Деплой в production среду
vercel --prod
```

### Переменные окружения

Если требуются переменные окружения, их можно добавить:
1. В интерфейсе Vercel: Project > Settings > Environment Variables
2. Или в файле `.env.local` (не включать в git) для локальной разработки

## Структура проекта

```
arbisuite-landing/
├── app/                    # Директория приложения Next.js
│   ├── components/         # React компоненты
│   ├── globals.css         # Глобальные стили
│   ├── layout.tsx          # Корневой layout
│   └── page.tsx            # Главная страница
├── public/                 # Статические файлы
├── .gitignore              # Git ignore файл
├── next.config.ts          # Конфигурация Next.js
├── package.json            # Зависимости и скрипты
├── postcss.config.mjs      # Конфигурация PostCSS
├── vercel.json             # Конфигурация Vercel
└── tsconfig.json           # Конфигурация TypeScript
```

## Контакты

Email: hello@arbisuite.io
Telegram: https://t.me/arbisuite
