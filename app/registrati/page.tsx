import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link   from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registrati — Photofast Napoli",
  description: "Crea il tuo account Photofast per partecipare ai concorsi fotografici e inviare files.",
};

export default function RegistratiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="bg-pf-bg2 border-b border-pf-border py-16 lg:py-20">
          <div className="max-w-lg mx-auto px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-2xs text-pf-muted
                         hover:text-pf-warm transition-colors mb-6 tracking-wider uppercase"
            >
              ← Torna alla home
            </Link>
            <span className="section-label">Account</span>
            <h1 className="font-title text-[2.8rem] font-bold italic uppercase
                           text-pf-red leading-none mb-4 tracking-wide">
              Registrati
            </h1>
            <p className="text-pf-warm text-sm mb-8">
              Crea un account gratuito per partecipare ai concorsi fotografici
              e accedere a tutti i servizi online.
            </p>

            <div className="bg-pf-card border border-pf-border border-l-[3px] border-l-pf-red p-7">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-1.5">Nome *</label>
                    <input type="text" placeholder="Mario" className="w-full bg-pf-bg border border-pf-border px-3 py-2.5 text-sm text-pf-text placeholder:text-pf-muted focus:outline-none focus:border-pf-red transition-colors" />
                  </div>
                  <div>
                    <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-1.5">Cognome *</label>
                    <input type="text" placeholder="Rossi" className="w-full bg-pf-bg border border-pf-border px-3 py-2.5 text-sm text-pf-text placeholder:text-pf-muted focus:outline-none focus:border-pf-red transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-1.5">Email *</label>
                  <input type="email" placeholder="mario@email.it" className="w-full bg-pf-bg border border-pf-border px-3 py-2.5 text-sm text-pf-text placeholder:text-pf-muted focus:outline-none focus:border-pf-red transition-colors" />
                </div>
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-1.5">Username *</label>
                  <input type="text" placeholder="mario_fotografo" className="w-full bg-pf-bg border border-pf-border px-3 py-2.5 text-sm text-pf-text placeholder:text-pf-muted focus:outline-none focus:border-pf-red transition-colors" />
                </div>
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-1.5">Password *</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-pf-bg border border-pf-border px-3 py-2.5 text-sm text-pf-text placeholder:text-pf-muted focus:outline-none focus:border-pf-red transition-colors" />
                </div>
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-1.5">Conferma Password *</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-pf-bg border border-pf-border px-3 py-2.5 text-sm text-pf-text placeholder:text-pf-muted focus:outline-none focus:border-pf-red transition-colors" />
                </div>
                <div className="flex items-start gap-2 pt-1">
                  <input type="checkbox" id="privacy" className="mt-0.5 accent-pf-red" />
                  <label htmlFor="privacy" className="text-xs text-pf-warm cursor-pointer">
                    Ho letto e accetto la{" "}
                    <span className="text-pf-red hover:text-pf-redlt">Privacy Policy</span>
                  </label>
                </div>
                <button type="submit" className="btn-red w-full justify-center py-3">
                  Crea account
                </button>
                <p className="text-center text-xs text-pf-muted pt-1">
                  Hai già un account?{" "}
                  <Link href="/login" className="text-pf-red hover:text-pf-redlt">
                    Accedi
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
