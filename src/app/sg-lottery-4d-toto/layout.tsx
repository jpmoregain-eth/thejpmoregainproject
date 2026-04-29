import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SG Lottery 4D TOTO - The JPMoreGain Project",
  description: "SG Lottery 4D TOTO - A Singapore lottery app by The JPMoreGain Project. Check results, generate numbers, and track your luck.",
  alternates: {
    canonical: "https://thejpmoregainproject.com/sg-lottery-4d-toto",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
