import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, VT323 } from "next/font/google";

const cinzel = Cinzel({
  variable: "--font-poe-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  variable: "--font-poe-deco",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-poe-pixel",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const TITLE = "Pathway of Eternity: Idle RPG — The JPMoreGain Project";
const DESCRIPTION =
  "An idle dungeon RPG in pixel art. Tap to strike, loot epic gear, craft your perfect build and see how deep you can go. Free on Google Play.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://thejpmoregainproject.com/pathway-of-eternity",
  },
  openGraph: {
    type: "website",
    url: "https://thejpmoregainproject.com/pathway-of-eternity",
    title: "Pathway of Eternity: Idle RPG",
    description: DESCRIPTION,
    images: [
      {
        url: "/images/pathway-of-eternity/feature.jpg",
        width: 1024,
        height: 500,
        alt: "Pathway of Eternity — a hero with a lantern at the start of an endless dungeon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathway of Eternity: Idle RPG",
    description: DESCRIPTION,
    images: ["/images/pathway-of-eternity/feature.jpg"],
  },
};

export default function PathwayLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cinzel.variable} ${cinzelDecorative.variable} ${vt323.variable}`}>
      {children}
    </div>
  );
}
