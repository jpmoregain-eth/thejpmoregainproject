"use client";

import { useRef, useState } from "react";
import type { Tier } from "../_lib/constants";

export type ScreenshotState = {
  name: string;
  previewUrl: string;
  text: string;
  words: number;
  status: "reading" | "ready" | "error";
  error?: string;
};

type Props = {
  tab: "text" | "image";
  onTabChange: (tab: "text" | "image") => void;
  text: string;
  onTextChange: (text: string) => void;
  screenshot: ScreenshotState | null;
  onFile: (file: File) => void;
  onRemoveScreenshot: () => void;
  tier: Tier;
  usageLabel: string;
  locked: boolean;
  busy: boolean;
  onTranslate: () => void;
};

const tabClass = (active: boolean) =>
  [
    "flex-1 cursor-pointer border-0 px-[18px] py-[15px] font-mono text-[12.5px] font-semibold uppercase tracking-[0.08em] transition-colors duration-[250ms]",
    active
      ? "bg-[#D4A843]/8 text-[#D4A843] border-b-2 border-[#D4A843]"
      : "border-b-2 border-transparent bg-transparent text-[#E5E5E5]/45 hover:text-[#E5E5E5]",
  ].join(" ");

export default function InputCard({
  tab,
  onTabChange,
  text,
  onTextChange,
  screenshot,
  onFile,
  onRemoveScreenshot,
  tier,
  usageLabel,
  locked,
  busy,
  onTranslate,
}: Props) {
  const fileInput = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    const file = files?.[0];
    if (file) onFile(file);
  };

  return (
    <section className="overflow-hidden rounded-xl border border-[#D4A843]/15 bg-[rgba(20,20,30,0.6)] backdrop-blur-[12px]">
      <div className="flex border-b border-[#D4A843]/12">
        <button
          type="button"
          onClick={() => onTabChange("text")}
          className={tabClass(tab === "text")}
          aria-pressed={tab === "text"}
        >
          Paste text
        </button>
        <button
          type="button"
          onClick={() => onTabChange("image")}
          className={tabClass(tab === "image")}
          aria-pressed={tab === "image"}
        >
          Upload screenshot
        </button>
      </div>

      {tab === "text" ? (
        <textarea
          rows={7}
          value={text}
          onChange={(event) => onTextChange(event.target.value)}
          placeholder="Paste the LinkedIn post you're tired of seeing..."
          aria-label="LinkedIn post text"
          className="block min-h-[176px] w-full resize-y border-0 bg-transparent px-6 py-[22px] text-[16px] leading-[1.7] text-[#E5E5E5] outline-none placeholder:text-[#E5E5E5]/35"
        />
      ) : (
        <div className="p-6">
          <input
            ref={fileInput}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            className="hidden"
            onChange={(event) => {
              handleFiles(event.target.files);
              event.target.value = "";
            }}
          />

          {!screenshot ? (
            <button
              type="button"
              onClick={() => fileInput.current?.click()}
              onDragOver={(event) => {
                event.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(event) => {
                event.preventDefault();
                setDragging(false);
                handleFiles(event.dataTransfer.files);
              }}
              className={[
                "flex w-full cursor-pointer flex-col items-center gap-[14px] rounded-[10px] border-2 border-dashed px-6 py-11 transition-colors duration-[250ms]",
                dragging
                  ? "border-[#D4A843]/60 bg-[#D4A843]/4"
                  : "border-[#D4A843]/30 bg-[rgba(10,10,15,0.5)] hover:border-[#D4A843]/60 hover:bg-[#D4A843]/4",
              ].join(" ")}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A843]/40 font-mono text-[18px] text-[#D4A843]">
                +
              </span>
              <span className="font-mono text-[13px] tracking-[0.04em] text-[#D4A843]">
                Drop a screenshot, or click to browse
              </span>
              <span className="text-[13px] text-[#E5E5E5]/45">
                Claude reads the post text out of the image
              </span>
            </button>
          ) : (
            <div
              className={[
                "flex items-center gap-4 rounded-[10px] border bg-[rgba(10,10,15,0.5)] px-[18px] py-4",
                screenshot.status === "error"
                  ? "border-[#FF5C5C]/45"
                  : "border-[#00FF88]/25",
              ].join(" ")}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={screenshot.previewUrl}
                alt=""
                className="h-14 w-14 flex-none rounded-md border border-[#E5E5E5]/15 object-cover"
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[14px] font-medium text-[#E5E5E5]">
                  {screenshot.name}
                </span>
                <span
                  className={[
                    "mt-1 block font-mono text-[12px]",
                    screenshot.status === "error"
                      ? "text-[#FF5C5C]"
                      : screenshot.status === "reading"
                        ? "text-[#E5E5E5]/50"
                        : "text-[#00FF88]",
                  ].join(" ")}
                >
                  {screenshot.status === "reading"
                    ? "Reading the screenshot..."
                    : screenshot.status === "error"
                      ? (screenshot.error ?? "Could not read that screenshot.")
                      : `Text extracted · ${screenshot.words} words`}
                </span>
              </span>
              <button
                type="button"
                onClick={onRemoveScreenshot}
                className="flex-none cursor-pointer border-0 bg-transparent p-[6px] font-mono text-[12px] text-[#E5E5E5]/50 transition-colors duration-[250ms] hover:text-[#D4A843]"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#D4A843]/12 bg-[rgba(10,10,15,0.35)] px-6 py-4">
        <div className="flex items-center gap-[14px]">
          <span className="font-mono text-[12px] tracking-[0.04em] text-[#E5E5E5]/40">
            {text.trim().length} chars
          </span>
          {tier === "free" && (
            <span className="rounded-full border border-[#D4A843]/30 bg-[#D4A843]/10 px-3 py-[5px] font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-[#D4A843]">
              {usageLabel}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onTranslate}
          disabled={busy}
          className={[
            "cursor-pointer rounded-lg border-0 px-[26px] py-[13px] font-mono text-[13.5px] font-semibold tracking-[0.04em] text-[#0A0A0F] transition-colors duration-[250ms]",
            locked ? "bg-[#D4A843]/45" : "bg-[#D4A843]",
            busy ? "opacity-70" : "hover:bg-[#F5A623]",
          ].join(" ")}
        >
          Translate &rarr;
        </button>
      </div>
    </section>
  );
}
