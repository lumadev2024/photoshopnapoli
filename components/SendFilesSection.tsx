"use client";

import { motion } from "motion/react";
import Link from "next/link";

const VP = { once: true, margin: "-60px" } as const;

export default function SendFilesSection() {
  return (
    <section id="invia-files" className="bg-pf-bg2 section-divider py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.55 }}
          className="border border-pf-border border-l-[3px] border-l-pf-red bg-pf-card
                     grid md:grid-cols-[1fr_auto] gap-8 items-center p-8 lg:p-12"
        >
          <div>
            <span className="section-label">Ottimizza i tuoi tempi</span>
            <h2 className="font-title text-[2rem] font-bold italic uppercase tracking-wide
                           text-pf-white leading-tight mb-3">
              Invia i tuoi Files{" "}
              <span className="text-pf-red">prima di venire</span>
            </h2>
            <p className="text-pf-warm text-sm leading-relaxed max-w-md">
              Clicca sulla busta e allega i files che devi stampare.
              Al tuo arrivo in laboratorio troverai già tutto pronto.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <Link href="/invia-files/stampa" className="btn-red justify-center">
              <EnvelopeIcon />
              Per la Stampa
            </Link>
            <Link href="/invia-files/gallery" className="btn-outline justify-center">
              <ImageIcon />
              Per la Gallery
            </Link>
          </div>
        </motion.div>
      </div>
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

function ImageIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}
