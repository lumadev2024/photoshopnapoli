"use client";

import { motion } from "motion/react";

const VP = { once: true, margin: "-70px" } as const;
const fv = (delay = 0) => ({
  initial:     { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    VP,
  transition:  { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
});

const DOTS = [
  { label: "Apertura laboratorio",    active: true  },
  { label: "Piazza Dante · Napoli",   active: false },
  { label: "Tecnologia QSS Noritsu",  active: false },
  { label: "Digitale dagli anni '90", active: false },
];

export default function AboutSection() {
  return (
    <section
      id="chi-siamo"
      className="bg-pf-bg2 section-divider py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-[200px_1fr] gap-10 lg:gap-14 items-start">

          {/* ── Colonna sinistra — anno decorativo ── */}
          <motion.div {...fv(0)} className="lg:sticky lg:top-28">
            <span className="section-label">La nostra storia</span>

            {/* Anno in outline */}
            <div
              className="font-title text-[5.5rem] font-bold italic leading-none mb-5 select-none"
              style={{ color: "transparent", WebkitTextStroke: "1px var(--pf-border)" }}
            >
              1986
            </div>

            <ul className="space-y-2">
              {DOTS.map((d) => (
                <li key={d.label} className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: d.active ? "var(--pf-red)" : "var(--pf-border)" }}
                  />
                  <span className="text-2xs text-pf-warm">{d.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Colonna destra — testo originale ── */}
          <div>
            <motion.h2 {...fv(0.1)} className="section-title mb-6">
              Photofast
            </motion.h2>

            <motion.div
              {...fv(0.15)}
              className="space-y-4 text-pf-warm text-sm leading-relaxed"
            >
              <p>
                Tra i primi a Napoli ad utilizzare la tecnologia{" "}
                <strong className="text-pf-text font-semibold">
                  QSS (Quick Service System)
                </strong>{" "}
                per la stampa veloce delle fotografie, Antonio e Salvatore
                Bellisario, già forti di una consolidata esperienza nel settore,
                aprono il laboratorio Photofast, nei pressi della centralissima{" "}
                <strong className="text-pf-text font-semibold">piazza Dante</strong>,
                nel settembre del 1986.
              </p>
              <p>
                Da sempre fedeli ai minilab della{" "}
                <strong className="text-pf-text font-semibold">Noritsu</strong>,
                incontrastata azienda leader dal 1979, che già da sola garantisce
                un&apos;elevatissima qualità di stampa, in breve tempo i gemelli
                Bellisario diventano punto di riferimento per la maggior parte dei
                fotografi professionisti napoletani.
              </p>
              <p>
                A conferma della loro innata capacità di anticipare i tempi, alla
                fine degli anni &apos;90 sono già attrezzati per affrontare
                l&apos;avvento della fotografia digitale.
              </p>
            </motion.div>

            {/* Citazione con bordo rosso */}
            <motion.blockquote
              {...fv(0.2)}
              className="font-title text-[1.05rem] font-semibold italic text-pf-text
                         border-l-2 border-pf-red pl-4 my-6"
            >
              Competenza, disponibilità e affidabilità sono i fattori che da sempre
              collocano Photofast tra i migliori laboratori di stampa professionale
              a Napoli.
            </motion.blockquote>

            {/* Tag tecnici */}
            <motion.div {...fv(0.25)} className="flex flex-wrap gap-1.5 mt-6">
              {[
                "Stampa digitale",
                "QSS · Noritsu",
                "Pellicole",
                "Diapositive",
                "Restauro",
                "Dal 1986",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-2xs font-semibold tracking-widest uppercase
                             text-pf-muted border border-pf-border"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
