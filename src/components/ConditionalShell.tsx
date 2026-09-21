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
  const isJing = pathname.startsWith("/jing");
  const isSgLottery = pathname.startsWith("/sg-lottery-4d-toto");
  const hideShell = isPowerScale || isJing || isSgLottery;

  return (
    <>
      {!hideShell && <Navbar />}
      <main className="flex-1">{children}</main>
      {!hideShell && <Footer />}
    </>
  );
}
