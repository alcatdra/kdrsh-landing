"use client";

import type { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  LogIn,
  MapPin,
  Menu,
  Tickets,
  X,
} from "lucide-react";

const locations = [
  "г. Новокузнецк",
  "г. Кемерово",
  "г. Новосибирск",
] as const;

const menuItems = [
  { label: "Тренеры", href: "#trainers" },
  { label: "Чемпионаты", href: "#championships" },
  { label: "Лагерь", href: "#camp" },
] as const;

export function HEADER() {
  const [selectedLocation, setSelectedLocation] = useState<
    (typeof locations)[number]
  >("г. Новокузнецк");
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [trialOpen, setTrialOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLocationOpen(false);
        setTrialOpen(false);
      }
    };

    const handlePointerDown = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <>
      <header className="relative z-40 border-b border-white/50 bg-white/70 backdrop-blur-2xl">
        <div className="absolute right-4 top-3 z-10 sm:right-6 lg:right-8">
          <button
            type="button"
            onClick={() => {
              setLocationOpen(true);
              setMenuOpen(false);
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/82 px-3 py-1.5 text-[11px] font-medium text-slate-500 shadow-[var(--shadow-soft)] transition hover:text-slate-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10 sm:text-xs"
          >
            <MapPin className="size-3.5 text-primary" />
            <span>ваш город: {selectedLocation.replace("г. ", "")}</span>
            <ChevronDown className="size-3.5 text-slate-400" />
          </button>
        </div>

        <div className="section-shell py-4 pt-12 sm:py-5 sm:pt-14">
          <div className="glass-panel rounded-[32px] px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
                <Link
                  href="/"
                  className="flex items-center gap-4 rounded-[24px] transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10"
                >
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[20px] bg-white shadow-[var(--shadow-card)] sm:h-16 sm:w-16">
                    <Image
                      src="/logo.png"
                      alt="KUDRYASHOV PRO LAB"
                      fill
                      className="object-contain p-2"
                      sizes="64px"
                      priority
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="font-heading text-base font-semibold uppercase tracking-[0.12em] text-slate-950 sm:text-lg">
                      KUDRYASHOV PRO LAB
                    </p>
                    <p className="text-sm font-medium text-slate-500">
                      школа плавания
                    </p>
                  </div>
                </Link>

                <Link
                  href="/abonements"
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-[var(--shadow-soft)] transition hover:border-primary/25 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10"
                >
                  <Tickets className="size-4 text-primary" />
                  Абонементы
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-3 xl:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setTrialOpen(true);
                    setMenuOpen(false);
                  }}
                  className="cta-gradient inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-hover)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
                >
                  Пробное занятие
                </button>

                <div ref={menuRef} className="relative">
                  <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-2 py-2 shadow-[var(--shadow-card)]">
                    <button
                      type="button"
                      onClick={() => {
                        setMenuOpen((prev) => !prev);
                        setLocationOpen(false);
                      }}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-medium text-slate-800 transition hover:bg-slate-50 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10"
                    >
                      <Menu className="size-5 text-primary" />
                      Меню
                    </button>
                    <span className="h-7 w-px bg-slate-200" />
                    <Link
                      href="/login"
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-medium text-slate-800 transition hover:bg-slate-50 hover:text-primary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/10"
                    >
                      <LogIn className="size-5 text-primary" />
                      Войти
                    </Link>
                  </div>

                  <AnimatePresence>
                    {menuOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="surface-card absolute right-0 top-[calc(100%+0.75rem)] w-64 p-3 backdrop-blur-xl"
                      >
                        <div className="mb-2 px-3 pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Меню
                        </div>
                        <div className="grid gap-1">
                          {menuItems.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className="rounded-[18px] px-4 py-3 text-base font-medium text-slate-700 transition hover:bg-slate-50 hover:text-primary"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {locationOpen ? (
          <HeaderModal
            title="Выберите локацию"
            onClose={() => setLocationOpen(false)}
          >
            <div className="grid gap-3">
              {locations.map((location) => {
                const active = location === selectedLocation;
                return (
                  <button
                    key={location}
                    type="button"
                    onClick={() => {
                      setSelectedLocation(location);
                      setLocationOpen(false);
                    }}
                    className={`flex items-center justify-between rounded-[20px] border px-4 py-4 text-left transition ${
                      active
                        ? "border-primary/20 bg-sky-50 text-slate-950"
                        : "border-slate-200 bg-white text-slate-600 hover:border-primary/20 hover:bg-slate-50"
                    }`}
                  >
                    <span className="font-medium">{location}</span>
                    {active ? (
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                        выбрано
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </HeaderModal>
        ) : null}
      </AnimatePresence>

      <AnimatePresence>
        {trialOpen ? (
          <HeaderModal
            title="Пробное занятие"
            description="Здесь позже появится полноценная форма записи. Пока это аккуратная заглушка, чтобы уже можно было тестировать сценарий открытия."
            onClose={() => setTrialOpen(false)}
          >
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
                onClick={() => setTrialOpen(false)}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Закрыть
              </button>
            </div>
          </HeaderModal>
        ) : null}
      </AnimatePresence>
    </>
  );
}

type HeaderModalProps = {
  title: string;
  description?: string;
  children: ReactNode;
  onClose: () => void;
};

function HeaderModal({
  title,
  description,
  children,
  onClose,
}: HeaderModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/40 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
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
            <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
            {description ? (
              <p className="text-sm leading-7 text-slate-600">{description}</p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-900"
            aria-label="Закрыть"
          >
            <X className="size-4" />
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  );
}
