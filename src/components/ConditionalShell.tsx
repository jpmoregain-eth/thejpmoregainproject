"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function ConditionalShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isPowerScale = pathname.startsWith("/powerscale");
  const isJing = pathname.startsWith("/jing");
  const isSgLottery = pathname.startsWith("/sg-lottery-4d-toto");
  const isTotoMY = pathname.startsWith("/totomy");
  const hideShell = isPowerScale || isJing || isSgLottery || isTotoMY;

  return (
    <>
      {!hideShell && <SiteHeader />}
      <main className="flex-1">{children}</main>
      {!hideShell && <SiteFooter />}
    </>
  );
}
