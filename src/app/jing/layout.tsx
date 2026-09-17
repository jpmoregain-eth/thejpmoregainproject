import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jing — Quiet your mind, one night at a time",
  description:
    "Jing is a sleep and focus companion: immersive soundscapes, gentle countdown sessions, and nothing that interrupts you.",
  alternates: {
    canonical: "https://thejpmoregainproject.com/jing",
  },
  openGraph: {
    type: "website",
    url: "https://thejpmoregainproject.com/jing",
    title: "Jing — Quiet your mind, one night at a time",
    description:
      "Jing is a sleep and focus companion: immersive soundscapes, gentle countdown sessions, and nothing that interrupts you.",
    images: [
      {
        url: "/images/jing/jingphone2.png",
        width: 1242,
        height: 2688,
        alt: "Jing app — choose your night",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jing — Quiet your mind, one night at a time",
    description:
      "Jing is a sleep and focus companion: immersive soundscapes, gentle countdown sessions, and nothing that interrupts you.",
    images: ["/images/jing/jingphone2.png"],
  },
};

export default function JingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cormorantGaramond.variable} ${jost.variable}`}>
      {children}
    </div>
  );
}
