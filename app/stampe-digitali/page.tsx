import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link   from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stampe Digitali — Photofast Napoli",
  description:
    "Stampe digitali professionali in 15 minuti. Tutti i formati dal 10×15 al 30×90, plotter fino a 60×170. Carta lucida o satinata. Photofast Napoli.",
};

const FORMATI = [
  { cat: "Stampe Standard",    righe: ["10×15", "13×18", "15×21", "20×25", "20×27", "20×30"] },
  { cat: "Stampe Panoramiche", righe: ["20×60", "20×90", "30×60", "30×90"] },
  { cat: "Stampe Grande Formato (Plotter)", righe: ["40×50", "40×60", "50×70", "60×90", "60×170"] },
];

export default function StampeDigitaliPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Hero pagina */}
        <section className="bg-pf-bg2 border-b border-pf-border py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-2xs text-pf-muted
                         hover:text-pf-warm transition-colors mb-6 tracking-wider uppercase"
            >
              ← Torna alla home
            </Link>
            <span className="section-label">Servizio 01</span>
            <h1 className="font-title text-[clamp(2.5rem,6vw,4rem)] font-bold italic
                           uppercase text-pf-red leading-none mb-4 tracking-wide">
              Stampe Digitali
            </h1>
            <p className="text-pf-warm text-base max-w-2xl leading-relaxed">
              Stampe digitali in{" "}
              <strong className="text-pf-text">15 minuti</strong> su tutti i
              formati, dal 10×15 al 30×45 e su formati panoramici fino al 30×90,
              a colori e in bianco/nero, su carta fotografica lucida o satinata.
              Stampe con plotter dal formato 40×50 al 60×170 su carta fotografica,
              lucida o satinata, a colori e in bianco/nero.
            </p>
          </div>
        </section>

        {/* Specifiche */}
        <section className="bg-pf-bg py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-px bg-pf-border mb-12">
              {[
                { label: "Tempo di consegna", value: "15 minuti" },
                { label: "Tecnologia",         value: "QSS Noritsu" },
                { label: "Finitura",           value: "Lucida · Satinata" },
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

            {/* Tabella formati */}
            <h2 className="section-title mb-8">Formati disponibili</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {FORMATI.map((gruppo) => (
                <div key={gruppo.cat} className="bg-pf-card border border-pf-border p-6">
                  <p className="section-label">{gruppo.cat}</p>
                  <ul className="space-y-2">
                    {gruppo.righe.map((r) => (
                      <li
                        key={r}
                        className="flex items-center justify-between border-b border-pf-border
                                   pb-2 last:border-0 last:pb-0"
                      >
                        <span className="text-sm font-semibold text-pf-text font-title italic">
                          {r} cm
                        </span>
                        <span className="text-2xs text-pf-muted">disponibile</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA invia files */}
        <section className="bg-pf-bg2 border-t border-pf-border py-14">
          <div className="max-w-6xl mx-auto px-5">
            <div className="border border-pf-border border-l-[3px] border-l-pf-red
                            bg-pf-card p-8 flex flex-col sm:flex-row items-start
                            sm:items-center justify-between gap-6">
              <div>
                <p className="section-label">Risparmia tempo</p>
                <p className="font-title text-xl font-bold italic uppercase text-pf-white">
                  Invia i files prima di venire
                </p>
                <p className="text-sm text-pf-warm mt-1">
                  Al tuo arrivo troverai già tutto pronto.
                </p>
              </div>
              <Link href="/invia-files/stampa" className="btn-red flex-shrink-0">
                Invia i tuoi Files
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
