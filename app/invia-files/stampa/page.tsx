import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link   from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invia Files per la Stampa — Photofast Napoli",
  description:
    "Invia i tuoi files fotografici per la stampa professionale. Al tuo arrivo in laboratorio troverai già tutto pronto.",
};

export default function InviaFilesStampaPage() {
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
              Per la Stampa
            </h1>
            <p className="text-pf-warm text-base leading-relaxed mb-8">
              Carica i tuoi files fotografici. Al tuo arrivo in laboratorio troverai
              già tutto pronto, risparmiando tempo prezioso.
            </p>

            {/* Form upload */}
            <div className="bg-pf-card border border-pf-border border-l-[3px] border-l-pf-red p-8">
              <div className="space-y-5">

                {/* Nome */}
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

                {/* Email */}
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

                {/* Telefono */}
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Telefono
                  </label>
                  <input
                    type="tel"
                    placeholder="333 1234567"
                    className="w-full bg-pf-bg border border-pf-border px-4 py-3
                               text-sm text-pf-text placeholder:text-pf-muted
                               focus:outline-none focus:border-pf-red transition-colors"
                  />
                </div>

                {/* Formato */}
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Formato desiderato
                  </label>
                  <select
                    className="w-full bg-pf-bg border border-pf-border px-4 py-3
                               text-sm text-pf-text focus:outline-none focus:border-pf-red
                               transition-colors"
                  >
                    <option value="">Seleziona formato</option>
                    <optgroup label="Standard">
                      <option>10×15 cm</option>
                      <option>13×18 cm</option>
                      <option>15×21 cm</option>
                      <option>20×25 cm</option>
                      <option>20×30 cm</option>
                    </optgroup>
                    <optgroup label="Panoramico">
                      <option>20×60 cm</option>
                      <option>30×90 cm</option>
                    </optgroup>
                    <optgroup label="Grande formato (Plotter)">
                      <option>40×50 cm</option>
                      <option>60×90 cm</option>
                      <option>60×170 cm</option>
                    </optgroup>
                  </select>
                </div>

                {/* Finitura */}
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Finitura
                  </label>
                  <div className="flex gap-3">
                    {["Lucida", "Satinata"].map((f) => (
                      <label key={f} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="finitura"
                          value={f.toLowerCase()}
                          className="accent-pf-red"
                        />
                        <span className="text-sm text-pf-warm">{f}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Upload file */}
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Files da stampare *
                  </label>
                  <div className="border border-dashed border-pf-border hover:border-pf-red
                                  transition-colors p-8 text-center cursor-pointer bg-pf-bg">
                    <svg className="w-8 h-8 text-pf-muted mx-auto mb-3" fill="none" viewBox="0 0 24 24">
                      <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm text-pf-warm mb-1">
                      Trascina i files qui o clicca per selezionarli
                    </p>
                    <p className="text-2xs text-pf-muted">
                      JPEG, TIFF, PNG — max 50MB per file
                    </p>
                  </div>
                </div>

                {/* Note */}
                <div>
                  <label className="text-2xs text-pf-warm tracking-widest uppercase font-semibold block mb-2">
                    Note aggiuntive
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Istruzioni particolari, orario di ritiro previsto..."
                    className="w-full bg-pf-bg border border-pf-border px-4 py-3
                               text-sm text-pf-text placeholder:text-pf-muted
                               focus:outline-none focus:border-pf-red transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="btn-red w-full justify-center py-3">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Invia l&apos;ordine
                </button>
              </div>
            </div>

            {/* Info sotto form */}
            <div className="mt-5 flex items-start gap-2.5 border border-pf-border bg-pf-card p-4">
              <svg className="w-4 h-4 text-pf-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="text-xs text-pf-warm leading-relaxed">
                Riceverai una conferma via email. Per urgenze chiama{" "}
                <a href="tel:0815511987" className="text-pf-red hover:text-pf-redlt">
                  081 551 19 87
                </a>.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
