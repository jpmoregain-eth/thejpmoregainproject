"use client";

import { useState } from "react";
import ModalShell from "./ModalShell";

type Props = {
  mode: "signin" | "checkout";
  busy: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
};

export default function AuthModal({ mode, busy, onClose, onSubmit }: Props) {
  const [email, setEmail] = useState("");
  const checkout = mode === "checkout";

  return (
    <ModalShell
      onClose={onClose}
      labelledBy="reallinkedin-auth-title"
      maxWidth={400}
      padding="36px 32px 30px"
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onSubmit(email.trim());
        }}
      >
        <h2
          id="reallinkedin-auth-title"
          className="m-0 mb-2 font-mono text-[22px] font-bold tracking-[-0.02em] text-[#E5E5E5]"
        >
          {checkout ? "Almost there" : "Sign in"}
        </h2>
        <p className="m-0 mb-6 text-[14px] leading-[1.6] text-[#E5E5E5]/55">
          {checkout
            ? "We need an email to attach your subscription to."
            : "Magic link, no password. Your usage follows your account."}
        </p>

        <label className="mb-[14px] block">
          <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E5E5E5]/45">
            Email
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@work-email.com"
            className="w-full rounded-lg border border-[#E5E5E5]/15 bg-[rgba(10,10,15,0.6)] px-[13px] py-3 text-[14px] text-[#E5E5E5] outline-none transition-colors duration-[250ms] focus:border-[#D4A843] placeholder:text-[#E5E5E5]/35"
          />
        </label>

        <button
          type="submit"
          disabled={busy}
          className="w-full cursor-pointer rounded-lg border-0 bg-[#D4A843] px-[18px] py-[13px] font-mono text-[13px] font-semibold text-[#0A0A0F] transition-colors duration-[250ms] hover:bg-[#F5A623] disabled:opacity-70"
        >
          {checkout ? "Continue to Stripe" : "Send magic link"}
        </button>
      </form>

      <div className="mt-4 text-center font-mono text-[12px] text-[#E5E5E5]/35">
        Magic link via Supabase &middot; no password
      </div>
    </ModalShell>
  );
}
