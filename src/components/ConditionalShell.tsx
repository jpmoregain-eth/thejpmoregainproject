"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPowerScale = pathname.startsWith("/powerscale");

  return (
    <>
      {!isPowerScale && <Navbar />}
      <main className="flex-1">{children}</main>
      {!isPowerScale && <Footer />}
    </>
  );
}
