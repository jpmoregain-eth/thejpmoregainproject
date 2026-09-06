"use client";

import { useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import type { Tier } from "../_lib/constants";

const subscribe = () => () => {};

/**
 * Renders the tier indicator into the Navbar's action slot, so /reallinkedin
 * gets its own nav right-hand side without a page-local copy of the navbar.
 */
export default function NavTierIndicator({
  tier,
  onSignIn,
}: {
  tier: Tier;
  onSignIn: () => void;
}) {
  // The slot only exists once the Navbar has mounted on the client.
  const slot = useSyncExternalStore(
    subscribe,
    () => document.getElementById("navbar-action-slot"),
    () => null,
  );

  if (!slot) return null;

  return createPortal(
    tier === "paid" ? (
      <div className="flex items-center gap-[9px] rounded-full border border-[#00FF88]/30 bg-[#00FF88]/10 px-[13px] py-[6px] font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#00FF88]">
        <span className="h-[6px] w-[6px] rounded-full bg-[#00FF88]" aria-hidden />
        Pro
      </div>
    ) : (
      <button
        type="button"
        onClick={onSignIn}
        className="cursor-pointer rounded-md border-0 bg-[#D4A843] px-4 py-[9px] font-mono text-[12px] font-semibold uppercase tracking-[0.08em] text-[#0A0A0F] transition-colors duration-[250ms] hover:bg-[#F5A623]"
      >
        Sign in
      </button>
    ),
    slot,
  );
}
