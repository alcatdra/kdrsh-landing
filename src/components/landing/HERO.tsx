"use client";

import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, PlayCircle, Quote, ShieldCheck, X } from "lucide-react";

const heroQuestions = [
  "Вы хотите быть спокойны, когда ребёнок находится в бассейне?",
  "Хотите видеть, как он преодолевает страх и становится смелее?",
  "Хотите, чтобы спорт формировал характер, а не только мышцы?",
] as const;

export function HERO() {
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <>
      <section className="section-padding relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] hero-gradient" />
        <div className="pointer-events-none absolute right-0 top-16 -z-10 h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="pointer-events-none absolute left-0 top-32 -z-10 h-56 w-56 rounded-full bg-emerald-100/45 blur-3xl" />

        <div className="section-shell grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              <span className="eyebrow">Безопасное обучение плаванию</span>
              <div className="space-y-5">
                <h1 className="text-balance max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Ваш ребёнок готов чувствовать себя уверенно в воде?
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Безопасное обучение плаванию с системой прогресса, поддержкой
                  тренера и понятным сервисом для родителей.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.68,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-3"
            >
              {heroQuestions.map((question) => (
                <div
                  key={question}
                  className="glass-panel rounded-[24px] px-5 py-4 text-base leading-7 text-slate-700"
                >
                  {question}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.72,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => setRequestOpen(true)}
                className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-4 text-base font-semibold text-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
              >
                Оставить заявку
                <ArrowRight className="ml-2 size-4" />
              </button>

              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 shadow-[var(--shadow-soft)]">
                <ShieldCheck className="size-4 text-primary" />
                Мягкая адаптация с первой тренировки
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="surface-card relative overflow-hidden rounded-[32px] p-3"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px]">
                <Image
                  src="/images/photo.png"
                  alt="Ребёнок на тренировке по плаванию"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04)_0%,rgba(15,23,42,0.18)_100%)]" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
              className="surface-card absolute -left-3 bottom-8 max-w-[260px] rounded-[24px] p-4 sm:-left-8"
            >
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-100">
                  <Quote className="size-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">
                    Тренировка с понятной целью
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Ребёнок не просто плавает, а постепенно учится спокойствию,
                    дисциплине и уверенности в воде.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 top-6 rounded-full border border-white/70 bg-white/88 px-4 py-2 text-sm font-medium text-slate-700 shadow-[var(--shadow-card)] backdrop-blur md:-right-4"
            >
              <PlayCircle className="mr-2 inline size-4 text-primary" />
              прогресс без давления
            </motion.div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {requestOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/40 px-4 py-8 backdrop-blur-sm"
            onClick={() => setRequestOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="surface-card w-full max-w-lg rounded-[32px] p-6 sm:p-7"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold text-slate-950">
                    Оставить заявку
                  </h3>
                  <p className="text-sm leading-7 text-slate-600">
                    Здесь позже появится полноценная форма заявки. Пока оставил
                    аккуратную заглушку, чтобы можно было проверить сценарий.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setRequestOpen(false)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
                  aria-label="Закрыть"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="grid gap-3">
                {["Имя родителя", "Телефон", "Возраст ребёнка"].map((field) => (
                  <div
                    key={field}
                    className="rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-500"
                  >
                    {field}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  className="cta-gradient inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white"
                >
                  Отправить заявку
                </button>
                <button
                  type="button"
                  onClick={() => setRequestOpen(false)}
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Закрыть
                </button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
