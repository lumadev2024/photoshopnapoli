# Photofast Napoli — Restyling 2026

Restyling moderno del sito [photofastnapoli.com](https://www.photofastnapoli.com), realizzato con Next.js 15, Tailwind CSS e Motion.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS 3**
- **Motion** (animazioni)
- **TypeScript**

## Avvio rapido

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build produzione

```bash
npm run build
npm run start
```

## Deploy su Vercel

Il progetto include `vercel.json` preconfigurato. Basta collegare la repo su [vercel.com](https://vercel.com).

## Struttura

```
app/
  page.tsx                  # Homepage
  layout.tsx                # Root layout
  globals.css               # Stili globali + CSS variables
  stampe-digitali/          # Pagina servizio stampe
  altri-servizi/            # Pagina altri servizi
  invia-files/
    stampa/                 # Form upload files per stampa
    gallery/                # Form upload files per gallery
  concorso/                 # Pagina concorso fotografico
  registrati/               # Form registrazione
  not-found.tsx             # Pagina 404

components/
  Navbar.tsx                # Navbar fissa con dropdown
  HeroSection.tsx           # Hero con immagine B/N Napoli
  AboutSection.tsx          # Storia Photofast dal 1986
  ServicesSection.tsx       # Cards servizi con specs tecniche
  SendFilesSection.tsx      # CTA invio files (busta modernizzata)
  GallerySection.tsx        # Gallery stile laboratorio
  ContestSection.tsx        # Concorsi fotografici
  ContactSection.tsx        # Contatti + mappa
  Footer.tsx                # Footer con links e crediti

lib/
  utils.ts                  # Utilities condivise
```

## Palette colori

| Nome     | Hex       | Uso                          |
|----------|-----------|------------------------------|
| bg       | `#1c1c1c` | Sfondo principale            |
| bg2      | `#242424` | Sfondo sezioni alternate     |
| card     | `#2a2a2a` | Sfondo card/pannelli         |
| border   | `#3a3a3a` | Bordi                        |
| muted    | `#555555` | Testo secondario             |
| warm     | `#999999` | Testo grigio medio           |
| text     | `#d8d8d8` | Testo principale             |
| red      | `#cc1111` | **Accento principale** ← logo, titoli, CTA |
| redlt    | `#e52222` | Hover rosso                  |

## Font

- **Barlow Condensed** Bold Italic → logo, titoli, numeri decorativi
- **Barlow** Regular/Semibold → corpo del testo, UI

## Note sul design

Il restyling mantiene **identità, colori e struttura** del sito originale:
- Rosso `#cc1111` come nell'originale
- Logo bold italic condensed — come il font originale
- Testi originali non riscritti
- Stessa struttura logica delle sezioni
- P.IVA, crediti FR.net, link partner — tutti conservati
