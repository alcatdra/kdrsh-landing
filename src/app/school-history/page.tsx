import Link from "next/link";

export default function SchoolHistoryPage() {
  return (
    <main className="section-shell section-padding">
      <div className="surface-card mx-auto max-w-3xl rounded-[32px] p-8 sm:p-10">
        <h1 className="text-4xl font-semibold text-slate-950">История школы</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Здесь будет отдельная страница с историей школы.
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
