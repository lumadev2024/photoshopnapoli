import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photofast Napoli — Laboratorio Fotografico Professionale",
  description:
    "Laboratorio fotografico professionale a Napoli dal 1986. Stampe digitali in 15 minuti, sviluppo pellicole, diapositive, scansioni. Tecnologia QSS Noritsu. Via Cisterna dell'olio 63a, Napoli.",
  keywords: [
    "laboratorio fotografico napoli",
    "stampe digitali napoli",
    "sviluppo pellicole napoli",
    "photofast napoli",
    "stampa foto professionale",
    "QSS Noritsu",
    "piazza dante napoli",
  ],
  openGraph: {
    title: "Photofast Napoli — Laboratorio Fotografico",
    description: "Tra i primi a Napoli con tecnologia QSS. Stampe professionali dal 1986.",
    locale: "it_IT",
    type: "website",
    url: "https://www.photofastnapoli.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,400;0,600;0,700;1,600;1,700&family=Barlow:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
