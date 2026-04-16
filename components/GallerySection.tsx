"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const VP = { once: true, margin: "-60px" } as const;

const ITEMS = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=75",
    alt: "Stampa fotografica professionale",
    cap: "Stampa su carta fotografica",
    tall: true,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=75",
    alt: "Pellicola fotografica 35mm",
    cap: "Pellicola 35mm",
    tall: false,
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1520549233664-03f65c1d1327?w=800&q=75",
    alt: "Fotografie sviluppate",
    cap: "Stampe sviluppate",
    tall: false,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=800&q=75",
    alt: "Macchina fotografica analogica",
    cap: "Fotografia analogica",
    tall: false,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1548094990-c16ca90f1f0d?w=800&q=75",
    alt: "Stampe grandi formati",
    cap: "Grandi formati",
    tall: false,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=800&q=75",
    alt: "Processo fotografico analogico",
    cap: "Processo analogico",
    tall: true,
  },
];

export default function GallerySection() {
  return (
    <section id="galleria" className="bg-pf-bg section-divider py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
        >
          <div>
            <span className="section-label">Galleria</span>
            <h2 className="section-title">Il nostro lavoro</h2>
          </div>
          <p className="text-pf-warm text-sm max-w-xs leading-relaxed">
            Fotografie, stampe e lavorazioni realizzate nel nostro
            laboratorio napoletano.
          </p>
        </motion.div>

        {/* Grid — 3 col, righe variabili, B/N */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5"
          style={{ gridTemplateRows: "220px 220px" }}
        >
          {ITEMS.map((item, i) => (
            <GalleryItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Item = (typeof ITEMS)[number];

function GalleryItem({ item, index }: { item: Item; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VP}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden bg-pf-card border border-pf-border cursor-pointer
                  ${item.tall ? "lg:row-span-2" : ""}`}
      style={{ minHeight: item.tall ? "445px" : "220px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover grayscale brightness-75"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
      </motion.div>

      {/* Overlay sfumato */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,.65))" }}
      />

      {/* Caption */}
      <motion.p
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 5 }}
        transition={{ duration: 0.22 }}
        className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-2xs text-pf-white
                   tracking-widest uppercase"
      >
        {item.cap}
      </motion.p>
    </motion.div>
  );
}
