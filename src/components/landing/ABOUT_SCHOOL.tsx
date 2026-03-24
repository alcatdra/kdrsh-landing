'use client';

import Image from 'next/image';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { Trophy, Users, Waves } from 'lucide-react';

const aboutStats = [
  {
    icon: Users,
    value: '15 000+ учеников',
    label: 'прошли через систему подготовки',
  },
  {
    icon: Waves,
    value: '3 города',
    label: 'в которых работает школа',
  },
  {
    icon: Trophy,
    value: 'С нуля',
    label: 'до соревнований и устойчивого результата',
  },
] as const;

export function ABOUT_SCHOOL() {
  return (
    <section className="section-padding relative bg-transparent">
      <div className="section-shell space-y-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h2 className="text-balance max-w-3xl text-4xl font-semibold leading-[0.96] text-slate-950 sm:text-5xl lg:text-6xl">
              Я формирую сильное поколение
            </h2>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/school-history"
                className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                История школы
              </Link>
              <Link
                href="/about-founder"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary/25 hover:text-slate-950"
              >
                Обо мне
              </Link>
            </div>

            <div className="max-w-2xl space-y-2 text-lg leading-9 text-slate-600">
              <p>
                Здесь не просто учат плавать. Моя задача — передать правильные
                смыслы.
              </p>
              <p>
                Через спорт мы закаляем характер, учим дисциплине и уверенности
                в себе.
              </p>
              <p>Я сам прошёл этот путь и знаю, как спорт меняет личность.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-h-[560px] overflow-hidden rounded-[32px] bg-slate-100 sm:min-h-[680px] lg:min-h-[760px]"
          >
            <Image
              src="/images/founder.png"
              alt="Основатель школы"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-4 md:grid-cols-3"
        >
          {aboutStats.map((stat) => (
            <div
              key={stat.label}
              className="surface-card rounded-[28px] px-6 py-6"
            >
              <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-sky-100">
                <stat.icon className="size-5 text-primary" />
              </div>
              <div className="space-y-2">
                <p className="font-heading text-3xl font-semibold text-slate-950 sm:text-4xl">
                  {stat.value}
                </p>
                <p className="text-sm leading-7 text-slate-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
