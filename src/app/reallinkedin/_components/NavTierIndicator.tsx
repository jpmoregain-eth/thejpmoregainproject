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
  signedIn,
  onSignIn,
}: {
  tier: Tier;
  signedIn: boolean;
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
    ) : signedIn ? (
      // Not in the handoff: a signed-in free visitor is neither "Sign in" nor
      // "Pro", so they get the same pill in gold.
      <div className="flex items-center gap-[9px] rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 px-[13px] py-[6px] font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#D4A843]">
        <span className="h-[6px] w-[6px] rounded-full bg-[#D4A843]" aria-hidden />
        Free
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
