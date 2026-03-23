'use client';

import Image from 'next/image';
import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, X } from 'lucide-react';

const heroQuestions = [
  'Вы хотите быть спокойны, когда ребёнок находится в бассейне?',
  'Хотите видеть, как он преодолевает страх и становится смелее?',
  'Хотите, чтобы спорт формировал характер, а не только мышцы?',
] as const;

const marqueeItems = [...heroQuestions, ...heroQuestions];

export function HERO() {
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <>
      <section className="section-padding relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/photo.png"
            alt="Ребёнок на тренировке по плаванию"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,16,31,0.88)_0%,rgba(6,16,31,0.58)_38%,rgba(6,16,31,0.14)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,16,29,0.08)_0%,rgba(9,16,29,0.24)_100%)]" />
        </div>

        <div className="section-shell">
          <div className="max-w-4xl py-6 sm:py-10 lg:py-14">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-7 text-white"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/84 backdrop-blur">
                KUDRYASHOV PRO LAB
              </span>

              <div className="space-y-4">
                <h1 className="text-balance max-w-4xl text-4xl font-semibold leading-[0.92] tracking-tight sm:text-6xl lg:text-[88px]">
                  Ваш ребёнок готов чувствовать себя уверенно в воде?
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
                  Безопасное обучение плаванию с системой прогресса и поддержкой
                  тренера.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.62,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <button
                type="button"
                onClick={() => setRequestOpen(true)}
                className="cta-gradient inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold text-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
              >
                Оставить заявку
                <ArrowRight className="ml-2 size-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-slate-200 bg-white">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,#ffffff_0%,rgba(255,255,255,0)_100%)] sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,#ffffff_0%,rgba(255,255,255,0)_100%)] sm:w-28" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="py-5 sm:py-6"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex w-max items-center"
          >
            {marqueeItems.map((question, index) => (
              <div
                key={`${question}-${index}`}
                className="flex items-center gap-4 px-5 sm:px-7"
              >
                <span className="font-heading text-lg font-medium tracking-[-0.04em] text-slate-900 sm:text-2xl">
                  {question}
                </span>
                <span className="size-2 rounded-full bg-primary/70" />
              </div>
            ))}
          </motion.div>
        </motion.div>
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
              transition={{ duration: 0.2, ease: 'easeOut' }}
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
                {['Имя родителя', 'Телефон', 'Возраст ребёнка'].map((field) => (
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
