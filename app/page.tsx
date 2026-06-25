import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-20 text-zinc-900">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Bienvenido
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Mi aplicación</h1>
        <p className="mt-4 text-zinc-600">
          Esta es una vista inicial sencilla. Desde aquí puedes acceder a la página de cierre de sesión.
        </p>

        <div className="mt-8">
          <Link
            href="/logout"
            className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Ir a logout
          </Link>
        </div>
      </div>
    </main>
  );
}
