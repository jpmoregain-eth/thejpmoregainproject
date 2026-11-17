import type { Metadata } from "next";
import localFont from "next/font/local";
import "./totoph.css";

// Fonts are bundled with the page (the same files the app ships) rather than fetched from
// Google Fonts at build time: the Archivo Narrow Google Fonts request breaks the Vercel build.
const archivoNarrow = localFont({
  variable: "--font-totoph-head",
  src: [{ path: "./fonts/ArchivoNarrow-Bold.ttf", weight: "700", style: "normal" }],
  display: "swap",
});

const plexMono = localFont({
  variable: "--font-totoph-mono",
  src: [
    { path: "./fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexMono-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/IBMPlexMono-Bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

// Baybayin glyphs for Swerte (ᜐ) and Tito (ᜆ)
const tagalog = localFont({
  variable: "--font-totoph-tagalog",
  src: "./fonts/NotoSansTagalog-Regular.ttf",
  weight: "400",
  display: "swap",
  preload: false,
});

const TITLE = "2D-6D Lotto PH Lottery Results — PCSO EZ2, Swertres, 4D, 6D and Lotto results";
const DESCRIPTION =
  "2D-6D Lotto PH Lottery Results: today's PCSO results for 2D EZ2, 3D Swertres, 4D, 6D and Lotto 6/42 to 6/58, five years of history, Swerte lucky numbers and Tito's bet audit. For entertainment only.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://thejpmoregainproject.com/totoph",
  },
  openGraph: {
    type: "website",
    url: "https://thejpmoregainproject.com/totoph",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/totoph-icon.png", width: 512, height: 512, alt: "2D-6D Lotto PH Lottery Results" }],
  },
};

export default function TotoPHLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${archivoNarrow.variable} ${plexMono.variable} ${tagalog.variable}`}>{children}</div>;
}
