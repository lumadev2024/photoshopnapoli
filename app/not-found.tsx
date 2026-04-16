import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-pf-bg flex flex-col items-center justify-center px-5 text-center">
      <p className="section-label mb-4">Pagina non trovata</p>
      <h1
        className="font-title text-[clamp(6rem,20vw,12rem)] font-bold italic uppercase
                   leading-none mb-4 select-none"
        style={{ color: "transparent", WebkitTextStroke: "2px var(--pf-border)" }}
      >
        404
      </h1>
      <p className="text-pf-warm text-sm mb-8 max-w-sm">
        La pagina che cerchi non esiste o è stata spostata.
      </p>
      <Link href="/" className="btn-red">
        ← Torna alla home
      </Link>
    </div>
  );
}
