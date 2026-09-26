import type { Metadata } from "next";
import { EB_Garamond, Work_Sans } from "next/font/google";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const TITLE = "Verbum — Daily Bible Verse in Latin & English";
const DESCRIPTION = "Daily Bible verse in Latin Vulgate & King James — 66 books, 30,000+ verses.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: "https://thejpmoregainproject.com/verbum",
  },
  openGraph: {
    type: "website",
    url: "https://thejpmoregainproject.com/verbum",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/verbum/og.jpg", width: 1200, height: 630, alt: "Verbum — The Word" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/verbum/og.jpg"],
  },
};

export default function VerbumLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${ebGaramond.variable} ${workSans.variable}`}>{children}</div>;
}
