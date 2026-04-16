import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link   from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Altri Servizi — Photofast Napoli",
  description:
    "Sviluppo e digitalizzazione pellicole, diapositive, scansioni, riproduzioni, restauro fotografico e fotomontaggi. Photofast Napoli dal 1986.",
};

const SERVIZI = [
  {
    num:   "01",
    title: "Pellicole & Diapositive",
    desc:  "Sviluppo, stampa e digitalizzazione pellicole e diapositive di piccolo e medio formato.",
    voci: ["Pellicole 35mm", "Diapositive 35mm", "Medio formato", "Digitalizzazione su CD/USB"],
  },
  {
    num:   "02",
    title: "Scansioni",
    desc:  "Scansioni ad alta risoluzione da pellicole negative di medio e grande formato.",
    voci: ["Pellicole negative", "Medio formato", "Grande formato", "Alta risoluzione"],
  },
  {
    num:   "03",
    title: "Riproduzioni",
    desc:  "Riproduzioni da stampe fino al 30×45, con qualità professionale.",
    voci: ["Da stampe originali", "Fino al 30×45 cm", "Colore e B/N", "Carta lucida/satinata"],
  },
  {
    num:   "04",
    title: "Provini a Contatto",
    desc:  "Provini a contatto bianco/nero e colore per pellicole di piccolo e medio formato.",
    voci: ["Bianco/Nero", "Colore", "Piccolo formato", "Medio formato"],
  },
  {
    num:   "05",
    title: "Restauro fotografico",
    desc:  "Restauro digitale di fotografie danneggiate, sbiadite o rovinate dal tempo.",
    voci: ["Rimozione graffi", "Correzione colore", "Restauro volti", "Stampa restauro"],
  },
  {
    num:   "06",
    title: "Fotomontaggi",
    desc:  "Elaborazione di immagini e fotomontaggi professionali su richiesta.",
    voci: ["Compositing", "Ritocco avanzato", "Elaborazione creativa", "Stampa finale"],
  },
];

export default function AltriServiziPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        {/* Hero */}
        <section className="bg-pf-bg2 border-b border-pf-border py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-2xs text-pf-muted
                         hover:text-pf-warm transition-colors mb-6 tracking-wider uppercase"
            >
              ← Torna alla home
            </Link>
            <span className="section-label">Servizio 02</span>
            <h1 className="font-title text-[clamp(2.5rem,6vw,4rem)] font-bold italic
                           uppercase text-pf-red leading-none mb-4 tracking-wide">
              Altri Servizi
            </h1>
            <p className="text-pf-warm text-base max-w-2xl leading-relaxed">
              Sviluppo, stampa e digitalizzazione pellicole e diapositive di piccolo e
              medio formato, riproduzioni da stampe fino al 30×45, scansioni da pellicole
              negative di medio e grande formato, provini a contatto bianco/nero e colore,
              restauri, elaborazione di immagini, fotomontaggi.
            </p>
          </div>
        </section>

        {/* Grid servizi */}
        <section className="bg-pf-bg py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-5">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-pf-border">
              {SERVIZI.map((s) => (
                <div
                  key={s.num}
                  className="bg-pf-bg hover:bg-pf-card transition-colors p-7 relative group"
                >
                  <div
                    className="absolute top-4 right-5 font-title text-[3.5rem] font-bold
                               italic leading-none select-none"
                    style={{ color: "transparent", WebkitTextStroke: "1px var(--pf-border)" }}
                  >
                    {s.num}
                  </div>
                  <h3 className="font-title text-[1.4rem] font-bold italic uppercase
                                 text-pf-red group-hover:text-pf-redlt transition-colors
                                 tracking-wide mb-3">
                    {s.title}
                  </h3>
                  <p className="text-xs text-pf-warm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="space-y-1.5">
                    {s.voci.map((v) => (
                      <li key={v} className="flex items-center gap-2 text-2xs text-pf-muted">
                        <span className="w-1 h-1 rounded-full bg-pf-red flex-shrink-0" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-pf-bg2 border-t border-pf-border py-14">
          <div className="max-w-6xl mx-auto px-5 text-center">
            <p className="font-title text-xl font-bold italic uppercase text-pf-white mb-3">
              Per informazioni o preventivi
            </p>
            <p className="text-sm text-pf-warm mb-6">
              Contattaci telefonicamente o vieni direttamente in laboratorio.
            </p>
            <a href="tel:0815511987" className="btn-red">
              Chiama: 081 551 19 87
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
