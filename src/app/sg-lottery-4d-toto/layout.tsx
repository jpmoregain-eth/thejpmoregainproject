import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SG Lottery 4D TOTO - The JPMoreGain Project",
  description:
    "SG Lottery 4D TOTO - Singapore Pools 4D and TOTO results, archive, and a numbers lab, free on iOS and Android.",
  alternates: {
    canonical: "https://thejpmoregainproject.com/sg-lottery-4d-toto",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
