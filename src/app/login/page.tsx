import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="section-shell section-padding">
      <div className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-8 sm:p-10">
        <p className="eyebrow">Заглушка</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">
          Вход в личный кабинет
        </h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Страница входа пока не реализована. Маршрут уже создан, чтобы header
          работал как законченный интерфейсный сценарий.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Вернуться на главную
        </Link>
      </div>
    </main>
  );
}
