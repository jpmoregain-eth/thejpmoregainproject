"use client";

import { WATERMARK, type Tier } from "../_lib/constants";
import SectionLabel from "./SectionLabel";

type Props = {
  output: string;
  tier: Tier;
  copied: boolean;
  shareOpen: boolean;
  onCopy: () => void;
  onToggleShare: () => void;
};

export default function OutputCard({
  output,
  tier,
  copied,
  shareOpen,
  onCopy,
  onToggleShare,
}: Props) {
  const free = tier === "free";

  return (
    <>
      <SectionLabel label="The translation" />
      <div className="rounded-xl border border-[#D4A843]/25 bg-[rgba(20,20,30,0.6)] px-8 py-[30px] backdrop-blur-[12px]">
        <p
          className={[
            "m-0 whitespace-pre-wrap text-[17px] leading-[1.72] text-[#E5E5E5] text-pretty",
            free ? "select-none" : "",
          ].join(" ")}
        >
          {output}
        </p>

        {free ? (
          <div className="mt-[26px] border-t border-dashed border-[#D4A843]/25 pt-[18px] font-mono text-[11.5px] tracking-[0.05em] text-[#D4A843]/55">
            {WATERMARK}
          </div>
        ) : (
          <div className="mt-[26px] flex flex-wrap gap-3 border-t border-[#D4A843]/15 pt-[22px]">
            <button
              type="button"
              onClick={onCopy}
              className="inline-flex cursor-pointer items-center gap-[9px] rounded-lg border border-[#E5E5E5]/20 bg-[#E5E5E5]/6 px-[18px] py-[11px] font-mono text-[13px] font-semibold text-[#E5E5E5] transition-colors duration-[250ms] hover:border-[#D4A843] hover:text-[#D4A843]"
            >
              {copied ? "Copied" : "Copy to clipboard"}
            </button>
            <button
              type="button"
              onClick={onToggleShare}
              className="inline-flex cursor-pointer items-center gap-[9px] rounded-lg border-0 bg-[#D4A843] px-[18px] py-[11px] font-mono text-[13px] font-semibold text-[#0A0A0F] transition-colors duration-[250ms] hover:bg-[#F5A623]"
            >
              {shareOpen ? "Hide share card" : "Share as post card"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
