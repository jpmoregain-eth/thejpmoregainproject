import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quietude - The JPMoreGain Project",
  description: "Quietude - A music app by The JPMoreGain Project. Discover, play, and enjoy your favorite tunes.",
  alternates: {
    canonical: "https://thejpmoregainproject.com/quietude",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
