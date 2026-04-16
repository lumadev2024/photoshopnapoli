import Link from "next/link";

const COL_NAV = [
  { label: "Home",      href: "/" },
  { label: "Servizi",   href: "#servizi" },
  { label: "Galleria",  href: "#galleria" },
  { label: "Concorsi",  href: "#concorsi" },
  { label: "Contatti",  href: "#contatti" },
];

const COL_SERVICES = [
  { label: "Invia files per la Stampa",  href: "/invia-files/stampa" },
  { label: "Invia files per la Gallery", href: "/invia-files/gallery" },
  { label: "Stampe Digitali",            href: "/stampe-digitali" },
  { label: "Altri Servizi",              href: "/altri-servizi" },
  { label: "Registrati",                 href: "/registrati" },
];

const COL_PARTNERS = [
  { label: "FR.net",                        href: "http://www.francescoruggieri.net",       ext: true },
  { label: "Movimenti per la fotografia",   href: "http://www.movimentiperlafotografia.it/", ext: true },
];

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-pf-border">

      {/* ── Corpo principale ── */}
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Colonna 1 — brand */}
          <div>
            <Link href="/">
              <span className="font-title text-[1.55rem] font-bold italic uppercase
                               text-pf-red hover:text-pf-redlt transition-colors block mb-0.5">
                Photofast
              </span>
            </Link>
            <span className="text-2xs text-pf-muted tracking-widest uppercase block mb-4">
              Laboratorio Fotografico · Napoli
            </span>
            <p className="text-xs text-pf-muted leading-relaxed mb-4">
              Laboratorio fotografico professionale a Napoli dal 1986.
              Tecnologia QSS Noritsu per la stampa veloce di alta qualità.
            </p>
            <address className="not-italic text-xs text-pf-muted leading-loose">
              Via Cisterna dell&apos;olio, 63a<br />
              80135 Napoli (NA)<br />
              <a
                href="tel:0815511987"
                className="text-pf-red hover:text-pf-redlt transition-colors"
              >
                081 551 19 87
              </a>
            </address>
          </div>

          {/* Colonna 2 — navigazione */}
          <div>
            <p className="text-2xs font-bold tracking-widest uppercase text-pf-muted mb-4">
              Navigazione
            </p>
            <ul className="space-y-2.5">
              {COL_NAV.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-xs text-pf-muted hover:text-pf-text transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3 — servizi */}
          <div>
            <p className="text-2xs font-bold tracking-widest uppercase text-pf-muted mb-4">
              Servizi
            </p>
            <ul className="space-y-2.5">
              {COL_SERVICES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-xs text-pf-muted hover:text-pf-text transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 4 — partner + badge QSS */}
          <div>
            <p className="text-2xs font-bold tracking-widest uppercase text-pf-muted mb-4">
              Collegati
            </p>
            <ul className="space-y-2.5 mb-6">
              {COL_PARTNERS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.ext ? "_blank" : undefined}
                    rel={l.ext ? "noopener noreferrer" : undefined}
                    className="text-xs text-pf-muted hover:text-pf-text transition-colors
                               inline-flex items-center gap-1"
                  >
                    {l.label}
                    {l.ext && <span className="opacity-50 text-2xs">↗</span>}
                  </a>
                </li>
              ))}
            </ul>

            {/* Badge tecnologia */}
            <div className="inline-block border border-pf-border px-3.5 py-2.5">
              <p className="text-2xs text-pf-muted tracking-widest uppercase mb-1">
                Tecnologia
              </p>
              <p className="font-title text-sm font-bold italic text-pf-text">
                QSS · Noritsu
              </p>
              <p className="text-2xs text-pf-muted">Quick Service System</p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-pf-border">
        <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col sm:flex-row
                        items-center justify-between gap-2">
          <p className="text-2xs text-pf-muted text-center sm:text-left">
            © {new Date().getFullYear()} Photofast — Laboratorio Fotografico ·{" "}
            P.IVA 04755720630
          </p>
          <p className="text-2xs text-pf-muted text-center sm:text-right">
            Webmaster:{" "}
            <a
              href="http://www.francescoruggieri.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pf-warm hover:text-pf-text transition-colors"
            >
              FR.net
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}
