# АкваСтарт Kids

Стартовый production-ready фронтенд для лендинга детской школы плавания. Репозиторий уже подготовлен под поэтапную разработку по блокам в логике spec-driven development.

## Стек

- Next.js App Router
- React + TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- lucide-react

## Команды

```bash
corepack pnpm dev
corepack pnpm lint
corepack pnpm build
```

## Структура

- `src/app` - app router, layout, page, global styles
- `src/components/landing` - секции лендинга
- `src/components/shared` - общие layout/motion примитивы
- `src/components/ui` - shadcn/ui компоненты
- `src/content/landing.ts` - контент и конфиги секций
- `specs` - базовые спецификации и дальнейшие итерации

## Подход к разработке

1. Формируем spec для конкретного блока.
2. Расширяем данные и контент-модель.
3. Реализуем секцию как независимый компонент.
4. Проверяем адаптивность и анимации.
5. Валидируем через lint/build.
