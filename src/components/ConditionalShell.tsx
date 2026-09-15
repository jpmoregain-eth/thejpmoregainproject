"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SiteScene = dynamic(() => import("@/components/three/SiteScene"), {
  ssr: false,
});

export default function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPowerScale = pathname.startsWith("/powerscale");

  return (
    <>
      {!isPowerScale && <SiteScene />}
      {!isPowerScale && <Navbar />}
      <main className="flex-1 relative z-10">{children}</main>
      {!isPowerScale && <Footer />}
    </>
  );
}
