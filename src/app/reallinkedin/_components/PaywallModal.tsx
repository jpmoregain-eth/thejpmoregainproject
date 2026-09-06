"use client";

import ModalShell from "./ModalShell";

type Props = {
  locked: boolean;
  onClose: () => void;
  onChoosePlan: (plan: "monthly" | "lifetime") => void;
};

export default function PaywallModal({ locked, onClose, onChoosePlan }: Props) {
  return (
    <ModalShell
      onClose={onClose}
      labelledBy="reallinkedin-paywall-title"
      maxWidth={620}
      padding="38px 34px 32px"
    >
      <div className="mb-[14px] font-mono text-[11.5px] font-semibold uppercase tracking-[0.22em] text-[#D4A843]">
        {locked ? "Free limit reached" : "RealLinkedIn Pro"}
      </div>
      <h2
        id="reallinkedin-paywall-title"
        className="m-0 mb-[10px] font-mono text-[27px] font-bold leading-[1.2] tracking-[-0.02em] text-[#E5E5E5]"
      >
        {locked ? "That was your fifth one." : "Get the good half."}
      </h2>
      <p className="m-0 mb-7 text-[15px] leading-[1.6] text-[#E5E5E5]/60 text-pretty">
        Unlimited translations, the shareable post card, no watermark, no ads.
      </p>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-[14px] min-[520px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <button
          type="button"
          onClick={() => onChoosePlan("monthly")}
          className="cursor-pointer rounded-[10px] border border-[#D4A843]/45 bg-[#D4A843]/7 px-5 py-[22px] text-left transition-colors duration-[250ms] hover:border-[#D4A843] hover:bg-[#D4A843]/13"
        >
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#D4A843]">
            Monthly
          </span>
          <span className="mt-[10px] block font-mono text-[30px] font-bold text-[#E5E5E5]">
            $1.99
          </span>
          <span className="mt-1 block text-[13px] text-[#E5E5E5]/50">
            per month, cancel anytime
          </span>
        </button>
        <button
          type="button"
          onClick={() => onChoosePlan("lifetime")}
          className="cursor-pointer rounded-[10px] border border-[#00FF88]/45 bg-[#00FF88]/6 px-5 py-[22px] text-left transition-colors duration-[250ms] hover:border-[#00FF88] hover:bg-[#00FF88]/12"
        >
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#00FF88]">
            Lifetime
          </span>
          <span className="mt-[10px] block font-mono text-[30px] font-bold text-[#E5E5E5]">
            $4.99
          </span>
          <span className="mt-1 block text-[13px] text-[#E5E5E5]/50">
            one payment, keep it forever
          </span>
        </button>
      </div>

      <div className="mt-[22px] font-mono text-[12px] text-[#E5E5E5]/35">
        Secure checkout via Stripe
      </div>
    </ModalShell>
  );
}
