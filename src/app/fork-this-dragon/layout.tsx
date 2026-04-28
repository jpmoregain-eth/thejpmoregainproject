import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fork This Dragon - The JPMoreGain Project",
  description: "Fork This Dragon - A fun game by The JPMoreGain Project. Available now on Google Play.",
  alternates: {
    canonical: "https://thejpmoregainproject.com/fork-this-dragon",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
