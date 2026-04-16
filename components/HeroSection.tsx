"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const SPECS = [
  { label: "Formato standard",   value: "10×15 → 30×45 cm" },
  { label: "Formato panoramico", value: "fino a 30×90 cm"   },
  { label: "Plotter",            value: "40×50 → 60×170 cm" },
  { label: "Tempo di stampa",    value: "15 minuti"          },
  { label: "Fondato",            value: "Settembre 1986"     },
];

const a = (delay = 0) => ({
  initial:    { opacity: 0, y: 18 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex flex-col justify-end overflow-hidden bg-pf-bg"
    >
      {/* ── Hero image — B/N Napoli ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1555993539-1732b0258235?w=1400&q=80"
          alt="Napoli — veduta panoramica"
          fill
          className="object-cover grayscale brightness-50"
          priority
        />
        {/* Sfumatura in basso verso lo sfondo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(28,28,28,.2) 0%, transparent 38%, rgba(28,28,28,.85) 78%, #1c1c1c 100%)",
          }}
        />
      </div>

      {/* ── Contenuto ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-5 w-full pt-36 pb-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-end">

          {/* Sinistra — titolo + CTA */}
          <div>
            <motion.span {...a(0)} className="section-label">
              dal 1986 · Napoli
            </motion.span>

            <motion.h1
              {...a(0.1)}
              className="font-title text-[clamp(3rem,8vw,5.5rem)] font-bold italic uppercase
                         text-pf-white leading-none mb-4 tracking-tight"
            >
              Photofast
            </motion.h1>

            <motion.p
              {...a(0.2)}
              className="text-pf-warm text-base leading-relaxed max-w-md mb-8"
            >
              Laboratorio fotografico per la stampa professionale
              con tecnologia{" "}
              <strong className="text-pf-text font-semibold">
                Quick Service System
              </strong>
            </motion.p>

            <motion.div {...a(0.3)} className="flex flex-wrap gap-3">
              <Link href="/invia-files/stampa" className="btn-red">
                <EnvelopeIcon />
                Invia i tuoi Files
              </Link>
              <Link href="#servizi" className="btn-outline">
                I nostri Servizi
              </Link>
            </motion.div>
          </div>

          {/* Destra — badge tecnico */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="hidden lg:block bg-[rgba(26,26,26,0.92)] border border-pf-border border-l-2
                       border-l-pf-red backdrop-blur-sm p-6"
          >
            <span className="section-label">Tecnologia</span>
            <p className="font-title text-lg font-bold italic uppercase text-pf-white tracking-wide mb-1">
              QSS · Noritsu
            </p>
            <p className="text-2xs text-pf-warm mb-5">
              Quick Service System per la stampa ad alta qualità
            </p>
            <ul className="space-y-0">
              {SPECS.map((s) => (
                <li
                  key={s.label}
                  className="flex justify-between items-center py-2 border-b border-pf-border last:border-0 last:pb-0"
                >
                  <span className="text-2xs text-pf-muted">{s.label}</span>
                  <span className="text-2xs font-semibold text-pf-text">{s.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="relative z-10 flex flex-col items-center gap-1.5 pb-8"
      >
        <span className="text-2xs text-pf-muted tracking-widest uppercase">Scopri</span>
        <div
          className="w-px h-8 anim-bounce"
          style={{ background: "linear-gradient(180deg, var(--pf-red), transparent)" }}
        />
      </motion.div>
    </section>
  );
}

function EnvelopeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
