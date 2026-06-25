import Link from "next/link";

export const metadata = {
  title: "Logout | My App",
  description: "Página de cierre de sesión",
};

export default function LogoutPage() {
  return (
    
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-20 text-zinc-900">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Sesión pdpdpdp</p>
        <h1 className="mt-3 text-3xl font-semibold">Has cerrado sesión</h1>
        <p className="mt-4 text-zinc-600">
          Tu sesión se ha cerrado correctamente. Puedes volver a entrar cuando quieras.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
