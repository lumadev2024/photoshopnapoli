"use client";

import { motion } from "motion/react";

const VP = { once: true, margin: "-60px" } as const;
const fv = (delay = 0) => ({
  initial:     { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    VP,
  transition:  { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const CARDS = [
  {
    href:  "https://maps.google.com/?q=Via+Cisterna+dell+olio+63a+Napoli",
    external: true,
    label: "Indirizzo",
    value: "Via Cisterna dell'olio, 63a",
    sub:   "Napoli — vicino Piazza Dante",
    icon:  <MapIcon />,
  },
  {
    href:  "tel:0815511987",
    external: false,
    label: "Telefono",
    value: "081 551 19 87",
    sub:   "Chiama per informazioni",
    icon:  <PhoneIcon />,
  },
  {
    href:  null,
    external: false,
    label: "Orari",
    value: "Lun–Ven · 9:00–19:00",
    sub:   "Sabato · 9:00–13:00",
    icon:  <ClockIcon />,
  },
];

export default function ContactSection() {
  return (
    <section id="contatti" className="bg-pf-bg section-divider py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">

        <motion.div {...fv(0)} className="mb-10">
          <span className="section-label">Dove siamo</span>
          <h2 className="section-title">Contatti</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 items-start">

          {/* ── Sinistra — info cards ── */}
          <div className="space-y-1.5">
            {CARDS.map((card, i) => {
              const inner = (
                <>
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                       style={{ background: "rgba(204,17,17,0.1)" }}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-2xs text-pf-muted tracking-widest uppercase mb-0.5">
                      {card.label}
                    </p>
                    <p className="text-sm font-semibold text-pf-text">{card.value}</p>
                    {card.sub && (
                      <p className="text-2xs text-pf-warm mt-0.5">{card.sub}</p>
                    )}
                  </div>
                </>
              );

              return (
                <motion.div key={card.label} {...fv(i * 0.08)}>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 bg-pf-card border border-pf-border
                                 border-l-2 border-l-transparent hover:border-l-pf-red
                                 hover:bg-pf-card/80 transition-all duration-200 p-4"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 bg-pf-card border border-pf-border p-4">
                      {inner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ── Destra — mappa + nota ── */}
          <motion.div {...fv(0.2)}>
            <div className="relative w-full aspect-video border border-pf-border overflow-hidden bg-pf-card mb-2.5">
              <iframe
                title="Photofast Napoli — Via Cisterna dell'olio 63a"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.1!2d14.2514!3d40.8490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08489ba38fcf%3A0x6c5a2a06d4f7b1fa!2sVia%20Cisterna%20dell&#39;Olio%2C%2063a%2C%2080135%20Napoli%20NA!5e0!3m2!1sit!2sit!4v1"
                className="absolute inset-0 w-full h-full"
                style={{ filter: "grayscale(1) brightness(.6) contrast(.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Pin overlay */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2
                              bg-[rgba(18,18,18,0.92)] border border-pf-red/30 px-3 py-1.5 whitespace-nowrap">
                <p className="text-2xs font-semibold text-pf-white">Photofast · Napoli</p>
                <p className="text-2xs text-pf-warm">Via Cisterna dell&apos;olio, 63a</p>
              </div>
            </div>

            {/* Nota metro */}
            <div className="flex items-start gap-2.5 border border-pf-border bg-pf-card p-3.5">
              <InfoIcon />
              <p className="text-xs text-pf-warm leading-relaxed">
                Nei pressi della centralissima{" "}
                <strong className="text-pf-text">Piazza Dante</strong> — metropolitana
                Linea 1, fermata Dante.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── SVG icons ── */
function MapIcon() {
  return (
    <svg className="w-4.5 h-4.5" style={{ color: "var(--pf-red)", width: "1.1rem", height: "1.1rem" }} fill="none" viewBox="0 0 24 24">
      <path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg style={{ color: "var(--pf-red)", width: "1.1rem", height: "1.1rem" }} fill="none" viewBox="0 0 24 24">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg style={{ color: "var(--pf-red)", width: "1.1rem", height: "1.1rem" }} fill="none" viewBox="0 0 24 24">
      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg className="flex-shrink-0 mt-0.5" style={{ color: "var(--pf-red)", width: "1rem", height: "1rem" }} fill="none" viewBox="0 0 24 24">
      <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
