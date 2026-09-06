import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RealLinkedIn - The LinkedIn Translator",
  description:
    "Paste a LinkedIn post, get what they actually meant. A cynical LinkedIn translator by The JPMoreGain Project.",
  alternates: {
    canonical: "https://thejpmoregainproject.com/reallinkedin",
  },
  openGraph: {
    title: "RealLinkedIn - The LinkedIn Translator",
    description: "Paste a post. Get what they actually meant.",
    url: "https://thejpmoregainproject.com/reallinkedin",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
