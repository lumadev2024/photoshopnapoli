"use client";

import { motion } from "motion/react";
import Link from "next/link";

const VP = { once: true, margin: "-60px" } as const;
const fv = (delay = 0) => ({
  initial:     { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    VP,
  transition:  { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const SLOTS = [
  { n: 1, label: "1° classificato" },
  { n: 2, label: "2° classificato" },
  { n: 3, label: "3° classificato" },
  { n: 4, label: "4° classificato" },
];

export default function ContestSection() {
  return (
    <section id="concorsi" className="bg-pf-bg2 section-divider py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Sinistra — testo ── */}
          <div>
            <motion.div {...fv(0)}>
              <span className="section-label">Ogni due mesi</span>
              <h2 className="section-title mb-1">
                Concorsi Fotografici
              </h2>
              <h2 className="font-title text-[clamp(1.8rem,3vw,2.4rem)] font-bold italic
                             uppercase text-pf-red leading-none mb-6 tracking-wide">
                Photofast
              </h2>
            </motion.div>

            <motion.div {...fv(0.1)} className="space-y-3 text-pf-warm text-sm leading-relaxed mb-5">
              <p>
                I concorsi fotografici Photofast sono dedicati ai nostri clienti
                registrati al sito. Ogni due mesi premieremo i{" "}
                <strong className="text-pf-text">primi quattro classificati</strong>{" "}
                con sconti o buoni, che verranno comunicati all&apos;apertura di
                ogni concorso, da spendere nel nostro laboratorio.
              </p>
              <p>
                Ogni utente iscritto potrà votare la foto preferita dopo averla
                scelta dalla gallery. Alla conclusione del concorso, le quattro
                foto vincitrici verranno pubblicate negli appositi riquadri in basso.
              </p>
              <p>
                Per accedere alla galleria con le immagini in concorso, clicca
                sul pulsante.
              </p>
            </motion.div>

            {/* Badge stato */}
            <motion.div {...fv(0.15)}>
              <div className="inline-flex items-center gap-3 border border-pf-border
                              bg-pf-card px-4 py-2.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-pf-red anim-pulse flex-shrink-0" />
                <div>
                  <p className="text-2xs font-semibold text-pf-text">
                    A breve pubblicheremo modalità e regolamento
                  </p>
                  <p className="text-2xs text-pf-warm">
                    Nel frattempo, preparate la vostra foto migliore!
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fv(0.2)}>
              <Link href="/concorso" className="btn-outline">
                Accedi alla Gallery del concorso
              </Link>
            </motion.div>
          </div>

          {/* ── Destra — 4 slot vincitori ── */}
          <motion.div {...fv(0.15)}>
            <span className="section-label mb-4 block">Foto vincitrici</span>
            <div className="grid grid-cols-2 gap-1.5">
              {SLOTS.map((slot, i) => (
                <motion.div
                  key={slot.n}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  whileHover={{ borderColor: "rgba(204,17,17,0.35)" }}
                  className="aspect-square bg-pf-card border border-pf-border
                             flex flex-col items-center justify-center gap-2
                             relative cursor-default transition-colors group"
                >
                  {/* Numero angolo */}
                  <span
                    className="absolute top-2.5 left-3 font-title text-[1.8rem] font-bold
                               italic leading-none select-none"
                    style={{ color: "var(--pf-border)" }}
                  >
                    {slot.n}
                  </span>

                  <CameraIcon active={slot.n === 1} />
                  <span className="text-2xs text-pf-muted tracking-widest uppercase">
                    {slot.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function CameraIcon({ active }: { active?: boolean }) {
  const color = active ? "var(--pf-red)" : "var(--pf-border)";
  return (
    <svg
      className="w-6 h-6 transition-all duration-200 group-hover:opacity-70"
      style={{ opacity: active ? 0.8 : 0.3 }}
      fill="none" viewBox="0 0 24 24"
    >
      <path
        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        stroke={color} strokeWidth="1.3"
      />
      <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" stroke={color} strokeWidth="1.3" />
    </svg>
  );
}
