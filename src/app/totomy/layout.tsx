import type { Metadata } from "next";
import { Archivo, Noto_Sans_SC } from "next/font/google";
import "./totomy.css";

const archivo = Archivo({
  variable: "--font-totomy-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-totomy-noto-sc",
  weight: ["500", "700", "900"],
  display: "swap",
  preload: false,
});

const TITLE = "4D TOTO MY Lottery Results — Malaysian 4D, Toto & Lotto results, numbers and your fortune";
const DESCRIPTION =
  "4D TOTO MY Lottery Results: live results for Magnum, Sports Toto and Da Ma Cai, a number generator, Sifu bet scoring and daily lucky numbers read by 财神. For entertainment only.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "https://thejpmoregainproject.com/totomy",
  },
  openGraph: {
    type: "website",
    url: "https://thejpmoregainproject.com/totomy",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/images/totomy-icon.png", width: 512, height: 512, alt: "4D TOTO MY Lottery Results" }],
  },
};

export default function TotoMYLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${archivo.variable} ${notoSansSC.variable}`}>{children}</div>;
}
