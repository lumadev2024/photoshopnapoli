import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link   from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invia Files per la Gallery — Photofast Napoli",
  description:
    "Invia le tue fotografie da pubblicare nella gallery del sito Photofast Napoli.",
};

export default function InviaFilesGalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">

        <section className="bg-pf-bg2 border-b border-pf-border py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-5">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-2xs text-pf-muted
                         hover:text-pf-warm transition-colors mb-6 tracking-wider uppercase"
            >
              ← Torna alla home
            </Link>
            <span className="section-label">Invia i tuoi files</span>
            <h1 className="font-title text-[clamp(2.5rem,6vw,4rem)] font-bold italic
                           uppercase text-pf-red leading-none mb-4 tracking-wide">
              Per la Gallery
            </h1>
            <p className="text-pf-warm text-base leading-relaxed mb-8">
              Carica le tue fotografie da pubblicare nella gallery del sito.
              Le immagini saranno visibili dopo approvazione.
            </p>

            <div className="bg-pf-card border border-pf-border border-l-[3px] border-l-pf-red p-8">
              <div className="space-y-5">

                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Nome e Cognome *
                  </label>
                  <input
                    type="text"
                    placeholder="Mario Rossi"
                    className="w-full bg-pf-bg border border-pf-border px-4 py-3
                               text-sm text-pf-text placeholder:text-pf-muted
                               focus:outline-none focus:border-pf-red transition-colors"
                  />
                </div>

                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="mario@email.it"
                    className="w-full bg-pf-bg border border-pf-border px-4 py-3
                               text-sm text-pf-text placeholder:text-pf-muted
                               focus:outline-none focus:border-pf-red transition-colors"
                  />
                </div>

                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Titolo / Descrizione foto
                  </label>
                  <input
                    type="text"
                    placeholder="Titolo della fotografia..."
                    className="w-full bg-pf-bg border border-pf-border px-4 py-3
                               text-sm text-pf-text placeholder:text-pf-muted
                               focus:outline-none focus:border-pf-red transition-colors"
                  />
                </div>

                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Fotografie da pubblicare *
                  </label>
                  <div className="border border-dashed border-pf-border hover:border-pf-red
                                  transition-colors p-8 text-center cursor-pointer bg-pf-bg">
                    <svg className="w-8 h-8 text-pf-muted mx-auto mb-3" fill="none" viewBox="0 0 24 24">
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm text-pf-warm mb-1">
                      Trascina le foto qui o clicca per selezionarle
                    </p>
                    <p className="text-2xs text-pf-muted">
                      JPEG, PNG — risoluzione minima 1000px
                    </p>
                  </div>
                </div>

                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Note
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Informazioni aggiuntive sulla fotografia..."
                    className="w-full bg-pf-bg border border-pf-border px-4 py-3
                               text-sm text-pf-text placeholder:text-pf-muted
                               focus:outline-none focus:border-pf-red transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-red w-full justify-center py-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Invia le fotografie
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
