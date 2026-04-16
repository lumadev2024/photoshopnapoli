"use client";

import { motion } from "motion/react";
import Link from "next/link";

const VP = { once: true, margin: "-60px" } as const;

const SERVICES = [
  {
    num:    "01",
    href:   "/stampe-digitali",
    label:  "Pronte in 15 minuti",
    title:  "Stampe Digitali",
    desc:   "Stampe digitali in 15 minuti su tutti i formati, dal 10×15 al 30×45 e su formati panoramici fino al 30×90, a colori e in bianco/nero, su carta fotografica lucida o satinata.",
    specs: [
      { k: "Formato standard",    v: "10×15 → 30×45 cm"   },
      { k: "Formato panoramico",  v: "fino a 30×90 cm"     },
      { k: "Plotter",             v: "40×50 → 60×170 cm"   },
      { k: "Finitura",            v: "Lucida o Satinata"   },
      { k: "Tempo di consegna",   v: "15 minuti"           },
    ],
  },
  {
    num:    "02",
    href:   "/altri-servizi",
    label:  "Pellicole · Scansioni · Restauro",
    title:  "Altri Servizi",
    desc:   "Sviluppo, stampa e digitalizzazione pellicole e diapositive di piccolo e medio formato, riproduzioni da stampe fino al 30×45, scansioni da pellicole negative di medio e grande formato.",
    specs: [
      { k: "Pellicole",          v: "Sviluppo e digitalizzazione" },
      { k: "Diapositive",        v: "Piccolo e medio formato"     },
      { k: "Riproduzioni",       v: "Stampe fino al 30×45"        },
      { k: "Provini contatto",   v: "B/N e colore"                },
      { k: "Post-produzione",    v: "Restauro · Fotomontaggi"     },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="servizi" className="bg-pf-bg section-divider py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="section-label">Cosa facciamo</span>
          <h2 className="section-title">Servizi del Laboratorio</h2>
        </motion.div>

        {/* Cards — griglia divisa da 1px */}
        <div className="grid md:grid-cols-2 gap-px bg-pf-border">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ backgroundColor: "var(--pf-card)" }}
              className="relative bg-pf-bg p-8 lg:p-10 overflow-hidden group"
            >
              {/* Numero decorativo */}
              <div
                className="absolute top-5 right-6 font-title text-[5rem] font-bold italic
                           leading-none select-none pointer-events-none"
                style={{ color: "transparent", WebkitTextStroke: "1px var(--pf-border)" }}
              >
                {s.num}
              </div>

              <span className="section-label">{s.label}</span>
              <h3
                className="font-title text-[1.75rem] font-bold italic uppercase tracking-wide
                           text-pf-red group-hover:text-pf-redlt transition-colors mb-3"
              >
                {s.title}
              </h3>
              <p className="text-pf-warm text-sm leading-relaxed mb-6 max-w-sm">
                {s.desc}
              </p>

              {/* Specifiche tecniche */}
              <ul className="space-y-0 mb-6">
                {s.specs.map((spec) => (
                  <li
                    key={spec.k}
                    className="flex justify-between items-center py-2 border-b border-pf-border
                               last:border-0 last:pb-0"
                  >
                    <span className="text-2xs text-pf-muted">{spec.k}</span>
                    <span className="text-2xs font-semibold text-pf-text">{spec.v}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-2xs font-semibold
                           tracking-widest uppercase text-pf-red hover:text-pf-redlt
                           transition-colors group/link"
              >
                Scopri di più
                <ArrowIcon />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1"
      fill="none" viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14M12 5l7 7-7 7"
        stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
