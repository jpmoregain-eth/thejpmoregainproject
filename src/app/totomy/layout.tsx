import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TotoMY - The JPMoreGain Project",
  description:
    "TotoMY - daily lucky numbers for Malaysian 3D, 4D, 5D, 6D and Lotto, read from your birth chart by the God of Fortune. For entertainment only.",
  alternates: {
    canonical: "https://thejpmoregainproject.com/totomy",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
