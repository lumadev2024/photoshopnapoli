import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link   from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concorso Fotografico — Photofast Napoli",
  description:
    "Partecipa al concorso fotografico Photofast. Ogni due mesi premi e buoni sconto per i clienti registrati.",
};

// Slot placeholder per le foto in concorso
const PLACEHOLDER_ITEMS = Array.from({ length: 12 }, (_, i) => ({
  id:    i + 1,
  label: `Foto #${String(i + 1).padStart(2, "0")}`,
  votes: 0,
}));

export default function ConcorsoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Header */}
        <section className="bg-pf-bg2 border-b border-pf-border py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-2xs text-pf-muted
                         hover:text-pf-warm transition-colors mb-6 tracking-wider uppercase"
            >
              ← Torna alla home
            </Link>
            <span className="section-label">Ogni due mesi</span>
            <h1 className="font-title text-[clamp(2.5rem,6vw,4rem)] font-bold italic
                           uppercase text-pf-red leading-none mb-2 tracking-wide">
              Concorso Fotografico
            </h1>
            <h2 className="font-title text-[clamp(1.6rem,4vw,2.5rem)] font-bold italic
                           uppercase text-pf-white leading-none mb-5 tracking-wide">
              Photofast
            </h2>
            <p className="text-pf-warm text-base max-w-2xl leading-relaxed">
              I concorsi fotografici Photofast sono dedicati ai nostri clienti registrati
              al sito. Ogni due mesi premieremo i{" "}
              <strong className="text-pf-text">primi quattro classificati</strong>{" "}
              con sconti o buoni da spendere nel nostro laboratorio.
            </p>
          </div>
        </section>

        {/* Status banner */}
        <section className="bg-pf-bg border-b border-pf-border py-6">
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-pf-red anim-pulse flex-shrink-0" />
              <p className="text-sm text-pf-text font-semibold">
                A breve pubblicheremo modalità e regolamento.{" "}
                <span className="text-pf-warm font-normal">
                  Nel frattempo, preparate la vostra foto migliore!
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Regolamento */}
        <section className="bg-pf-bg py-14">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-px bg-pf-border mb-14">
              {[
                { label: "Cadenza",   value: "Ogni 2 mesi" },
                { label: "Premi",     value: "Sconti & Buoni" },
                { label: "Vincitori", value: "4 classificati" },
              ].map((s) => (
                <div key={s.label} className="bg-pf-bg px-6 py-8">
                  <p className="text-2xs text-pf-muted tracking-widest uppercase mb-2">
                    {s.label}
                  </p>
                  <p className="font-title text-2xl font-bold italic text-pf-red uppercase">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Come partecipare */}
            <h2 className="section-title mb-6">Come partecipare</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-pf-border mb-14">
              {[
                { n: "01", title: "Registrati",    desc: "Crea un account gratuito sul sito." },
                { n: "02", title: "Carica la foto", desc: "Invia la tua foto dalla sezione Gallery." },
                { n: "03", title: "Vota",           desc: "Vota la foto preferita degli altri iscritti." },
                { n: "04", title: "Vinci",          desc: "I 4 più votati ricevono buoni sconto." },
              ].map((s) => (
                <div key={s.n} className="bg-pf-bg p-6 relative">
                  <div
                    className="absolute top-4 right-4 font-title text-[3rem] font-bold
                               italic leading-none select-none"
                    style={{ color: "transparent", WebkitTextStroke: "1px var(--pf-border)" }}
                  >
                    {s.n}
                  </div>
                  <h3 className="font-title text-lg font-bold italic uppercase text-pf-red mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs text-pf-warm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Grid foto placeholder */}
            <h2 className="section-title mb-6">Foto in concorso</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-pf-border">
              {PLACEHOLDER_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="bg-pf-card aspect-square flex flex-col items-center
                             justify-center gap-2 relative group hover:bg-pf-bg
                             transition-colors cursor-pointer"
                >
                  <svg
                    className="w-7 h-7 opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ color: "var(--pf-red)" }}
                    fill="none" viewBox="0 0 24 24"
                  >
                    <path
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      stroke="currentColor" strokeWidth="1.3"
                    />
                    <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                  <span className="text-2xs text-pf-muted tracking-widest">{item.label}</span>
                  <div className="absolute top-2 left-2.5 font-title text-[1.5rem] font-bold
                                  italic text-pf-border select-none leading-none">
                    {String(item.id).padStart(2, "0")}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA registrazione */}
            <div className="mt-10 border border-pf-border border-l-[3px] border-l-pf-red
                            bg-pf-card p-7 flex flex-col sm:flex-row items-start
                            sm:items-center justify-between gap-5">
              <div>
                <p className="font-title text-xl font-bold italic uppercase text-pf-white mb-1">
                  Partecipa al concorso
                </p>
                <p className="text-sm text-pf-warm">
                  Registrati gratuitamente per caricare le tue foto e votare.
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Link href="/registrati" className="btn-red flex-shrink-0">
                  Registrati
                </Link>
                <Link href="/invia-files/gallery" className="btn-outline flex-shrink-0">
                  Carica una foto
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
