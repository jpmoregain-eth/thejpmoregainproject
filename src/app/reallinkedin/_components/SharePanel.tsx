"use client";

import { useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

const PAGE_URL = "https://thejpmoregainproject.com/reallinkedin";
const AVATAR_STRIPES =
  "repeating-linear-gradient(135deg, #E4E4E4 0 5px, #F4F4F4 5px 10px)";

type Props = {
  output: string;
  name: string;
  title: string;
  onNameChange: (value: string) => void;
  onTitleChange: (value: string) => void;
  onToast: (message: string) => void;
};

const shareButton =
  "cursor-pointer rounded-lg border border-[#E5E5E5]/18 bg-[#E5E5E5]/6 px-4 py-[11px] font-mono text-[13px] text-[#E5E5E5] transition-colors duration-[250ms] hover:border-[#00FF88] hover:text-[#00FF88]";

export default function SharePanel({
  output,
  name,
  title,
  onNameChange,
  onTitleChange,
  onToast,
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [exporting, setExporting] = useState(false);

  const formattedText = `${output}\n\n— via RealLinkedIn · ${PAGE_URL}`;

  const renderPng = async () => {
    if (!cardRef.current) return null;
    // Loaded on demand so the export library stays out of the initial bundle.
    const { toPng } = await import("html-to-image");
    return toPng(cardRef.current, {
      pixelRatio: 2,
      backgroundColor: "#FFFFFF",
    });
  };

  const downloadPng = async () => {
    setExporting(true);
    try {
      const dataUrl = await renderPng();
      if (!dataUrl) return;
      const link = document.createElement("a");
      link.download = "realLinkedIn-card.png";
      link.href = dataUrl;
      link.click();
      onToast("realLinkedIn-card.png downloaded");
    } catch {
      onToast("Could not render the card");
    } finally {
      setExporting(false);
    }
  };

  const openShare = async (target: "linkedin" | "x" | "whatsapp") => {
    if (target === "linkedin") {
      // LinkedIn's intent URL will not carry an image, so the card is downloaded
      // for the visitor to attach in the composer that opens.
      await downloadPng();
      window.open(
        `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(formattedText)}`,
        "_blank",
        "noopener,noreferrer,width=720,height=680",
      );
      onToast("Card downloaded — attach it in the composer");
      return;
    }

    const url =
      target === "x"
        ? `https://x.com/intent/post?text=${encodeURIComponent(formattedText)}`
        : `https://wa.me/?text=${encodeURIComponent(formattedText)}`;
    window.open(url, "_blank", "noopener,noreferrer,width=720,height=680");
    onToast("Opening share dialog…");
  };

  const copyFormatted = async () => {
    try {
      await navigator.clipboard.writeText(formattedText);
      onToast("Formatted text copied");
    } catch {
      onToast("Clipboard blocked by your browser");
    }
  };

  return (
    <section className="mt-10" style={{ animation: "fadeInUp 0.45s ease" }}>
      <SectionLabel label="Share it back" tone="green" />

      <div className="rounded-xl border border-[#00FF88]/20 bg-[rgba(20,20,30,0.6)] p-[26px] backdrop-blur-[12px]">
        <div className="mb-[22px] grid grid-cols-[minmax(0,1fr)] gap-[14px] min-[560px]:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <label className="block">
            <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E5E5E5]/45">
              Display name
            </span>
            <input
              value={name}
              onChange={(event) => onNameChange(event.target.value)}
              placeholder="Your name"
              className="w-full rounded-lg border border-[#E5E5E5]/15 bg-[rgba(10,10,15,0.6)] px-[13px] py-[11px] text-[14px] text-[#E5E5E5] outline-none transition-colors duration-[250ms] focus:border-[#00FF88] placeholder:text-[#E5E5E5]/35"
            />
          </label>
          <label className="block">
            <span className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-[#E5E5E5]/45">
              Headline
            </span>
            <input
              value={title}
              onChange={(event) => onTitleChange(event.target.value)}
              placeholder="Senior Sufferer of Synergy"
              className="w-full rounded-lg border border-[#E5E5E5]/15 bg-[rgba(10,10,15,0.6)] px-[13px] py-[11px] text-[14px] text-[#E5E5E5] outline-none transition-colors duration-[250ms] focus:border-[#00FF88] placeholder:text-[#E5E5E5]/35"
            />
          </label>
        </div>

        {/* The export target: nothing outside this node ends up in the PNG. */}
        <div
          ref={cardRef}
          className="rounded-[10px] bg-white px-[22px] pb-4 pt-5 shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        >
          <div className="flex items-center gap-3">
            <span
              className="h-12 w-12 flex-none rounded-full"
              style={{ background: AVATAR_STRIPES }}
              aria-hidden
            />
            <span className="min-w-0">
              <span className="block truncate text-[15px] font-semibold text-[#191919]">
                {name.trim() || "Your Name Here"}
              </span>
              <span className="block truncate text-[12.5px] leading-[1.4] text-[#5F5F5F]">
                {title.trim() || "Senior Sufferer of Synergy | Open to Opportunities"}
              </span>
              <span className="mt-[2px] block text-[12px] text-[#8C8C8C]">
                Just now &middot; Public
              </span>
            </span>
          </div>
          <p className="mt-4 mb-0 whitespace-pre-wrap text-[15px] leading-[1.6] text-[#191919] text-pretty">
            {output}
          </p>
          <div className="mt-[18px] flex items-center justify-between gap-3 border-t border-[#E8E8E8] pt-3">
            <span className="flex min-w-0 gap-[22px] text-[13px] font-semibold text-[#5F5F5F]">
              <span>Like</span>
              <span>Comment</span>
              <span>Repost</span>
            </span>
            <span className="flex-none whitespace-nowrap font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#A3A3A3]">
              via RealLinkedIn
            </span>
          </div>
        </div>

        <div className="mt-[22px] flex flex-wrap gap-[10px]">
          <button
            type="button"
            onClick={downloadPng}
            disabled={exporting}
            className="inline-flex cursor-pointer items-center gap-[9px] rounded-lg border-0 bg-[#00FF88] px-[18px] py-[11px] font-mono text-[13px] font-semibold text-[#0A0A0F] transition-colors duration-[250ms] hover:bg-[#5CFFB0] disabled:opacity-70"
          >
            {exporting ? "Rendering…" : "Download PNG"}
          </button>
          <button type="button" onClick={() => openShare("linkedin")} className={shareButton}>
            LinkedIn
          </button>
          <button type="button" onClick={() => openShare("x")} className={shareButton}>
            X
          </button>
          <button type="button" onClick={() => openShare("whatsapp")} className={shareButton}>
            WhatsApp
          </button>
          <button
            type="button"
            onClick={copyFormatted}
            className="cursor-pointer border-0 bg-transparent px-2 py-[11px] font-mono text-[13px] text-[#E5E5E5]/60 transition-colors duration-[250ms] hover:text-[#D4A843]"
          >
            Copy formatted text
          </button>
        </div>

        <p className="mt-3 font-mono text-[11.5px] leading-[1.5] text-[#E5E5E5]/35">
          LinkedIn can&apos;t accept an image through a share link — we download the card
          so you can attach it in the composer.
        </p>
      </div>
    </section>
  );
}
