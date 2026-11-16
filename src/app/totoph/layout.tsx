import type { Metadata } from "next";
import { Archivo_Narrow, IBM_Plex_Mono, Noto_Sans_Tagalog } from "next/font/google";
import "./totoph.css";

const archivoNarrow = Archivo_Narrow({
  variable: "--font-totoph-head",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-totoph-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Baybayin glyphs for Swerte (ᜐ) and Tito (ᜆ)
const tagalog = Noto_Sans_Tagalog({
  variable: "--font-totoph-tagalog",
  subsets: ["tagalog"],
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
