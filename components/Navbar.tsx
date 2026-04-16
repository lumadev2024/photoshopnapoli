"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "Home",                  href: "/",               active: true },
  {
    label: "Invia i tuoi Files",
    href: "#invia-files",
    sub: [
      { label: "Per la Stampa",    href: "/invia-files/stampa" },
      { label: "Per la Gallery",   href: "/invia-files/gallery" },
    ],
  },
  { label: "Servizi",              href: "#servizi" },
  { label: "Galleria",             href: "#galleria" },
  {
    label: "Collegamenti",
    href: "#",
    sub: [
      { label: "FR.net",                       href: "http://www.francescoruggieri.net" },
      { label: "Movimenti per la fotografia",  href: "http://www.movimentiperlafotografia.it/" },
    ],
  },
  { label: "Contatti",             href: "#contatti" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* ── Top bar ── */}
      <div className="bg-[#111] border-b border-pf-border/60">
        <div className="max-w-6xl mx-auto px-5 py-1 flex items-center justify-between">
          <span className="text-2xs text-pf-muted tracking-wide font-body">
            Mercoledì, 15 Aprile 2026
          </span>
          <a
            href="tel:0815511987"
            className="text-2xs text-pf-red hover:text-pf-redlt transition-colors font-semibold tracking-wider"
          >
            081 551 19 87 · Via Cisterna dell&apos;olio, 63a · Napoli
          </a>
        </div>
      </div>

      {/* ── Nav principale ── */}
      <div
        className={`transition-all duration-300 border-b border-pf-border ${
          scrolled ? "bg-pf-bg/97 backdrop-blur-sm shadow-xl" : "bg-[rgba(20,20,20,0.97)]"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between gap-6 py-3">

            {/* Logo */}
            <Link
              href="/"
              className="font-title text-[2rem] font-bold italic uppercase text-pf-red
                         hover:text-pf-redlt transition-colors leading-none flex-shrink-0"
            >
              Photofast
            </Link>

            {/* Links desktop */}
            <ul className="hidden lg:flex items-center gap-0 flex-1 justify-center">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.sub && setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 text-2xs font-semibold tracking-widest uppercase
                                transition-all duration-150 border border-transparent
                                ${item.active
                                  ? "bg-pf-red text-white border-pf-red"
                                  : "text-pf-warm hover:text-pf-white hover:border-pf-border hover:bg-white/[0.04]"
                                }`}
                  >
                    {item.label}
                    {item.sub && <span className="ml-1 opacity-60">▾</span>}
                  </Link>

                  {/* Dropdown */}
                  {item.sub && (
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.ul
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          transition={{ duration: 0.12 }}
                          className="absolute top-full left-0 w-52 bg-pf-card border border-pf-border shadow-2xl py-1 z-50"
                        >
                          {item.sub.map((s) => (
                            <li key={s.label}>
                              <Link
                                href={s.href}
                                className="block px-4 py-2.5 text-2xs text-pf-warm hover:text-pf-white
                                           hover:bg-pf-border/40 transition-colors tracking-wide"
                              >
                                {s.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            {/* Tagline + Search desktop */}
            <div className="hidden lg:block text-right flex-shrink-0">
              <p className="text-2xs text-pf-muted leading-snug max-w-[180px]">
                Laboratorio fotografico per la stampa professionale con tecnologia{" "}
                <strong className="text-pf-warm">Quick Service System</strong>
              </p>
            </div>

            {/* Hamburger mobile */}
            <button
              className="lg:hidden text-pf-text p-1.5 flex flex-col gap-1.5"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="lg:hidden overflow-hidden border-t border-pf-border"
            >
              <ul className="px-5 py-4 space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-xs font-semibold tracking-widest uppercase text-pf-warm hover:text-pf-white transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.sub && (
                      <ul className="ml-4 mt-1.5 space-y-1.5">
                        {item.sub.map((s) => (
                          <li key={s.label}>
                            <Link
                              href={s.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-2xs text-pf-muted hover:text-pf-warm transition-colors"
                            >
                              — {s.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
