import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The JPMoreGain Project | Where Technology Meets Alpha",
    template: "%s | The JPMoreGain Project",
  },
  description:
    "Building AI-powered tools, platforms, and experiments at the intersection of technology, finance, and creativity. Founded in Singapore.",
  keywords: [
    "AI",
    "artificial intelligence",
    "technology",
    "Singapore",
    "machine learning",
    "web development",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Derek", url: "https://thejpmoregainproject.com" }],
  creator: "The JPMoreGain Project",
  publisher: "The JPMoreGain Project",
  openGraph: {
    type: "website",
    locale: "en_SG",
    url: "https://thejpmoregainproject.com",
    siteName: "The JPMoreGain Project",
    title: "The JPMoreGain Project | Where Technology Meets Alpha",
    description:
      "Building AI-powered tools, platforms, and experiments at the intersection of technology, finance, and creativity.",
    images: [
      {
        url: "/images/og-share.jpg",
        width: 1200,
        height: 630,
        alt: "The JPMoreGain Project",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@jp_moregain",
    site: "@jp_moregain",
    title: "The JPMoreGain Project | Where Technology Meets Alpha",
    description:
      "Building AI-powered tools, platforms, and experiments at the intersection of technology, finance, and creativity.",
    images: ["/images/og-share.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-[#E5E5E5] bg-grid-pattern bg-noise">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script id="infolinks-vars" strategy="afterInteractive">
          {`var infolinks_pid = 3444508; var infolinks_wsid = 0;`}
        </Script>
        <Script
          src="//resources.infolinks.com/js/infolinks_main.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
