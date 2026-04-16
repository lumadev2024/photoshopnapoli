import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}

// Varianti riutilizzabili per Motion
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});

export const fadeUpViewport = (delay = 0) => ({
  initial:    { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true, margin: "-70px" },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
});
