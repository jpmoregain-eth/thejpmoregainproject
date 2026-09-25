"use client";

import { useState } from "react";

const FAQS: [string, string][] = [
  ["Do I need an account?", "No. 4D TOTO MY Lottery Results works without any sign-up or account."],
  [
    "Which operators are covered?",
    "Magnum, Sports Toto and Da Ma Cai — 3D, 4D, 5D, 6D, Toto 4D Jackpot, Zodiac, Fireball and the Supreme, Power, Star and Life lotto games.",
  ],
  [
    "Why did my lucky numbers change?",
    "Cai Shen numbers reset at midnight each day. Changing your birthday, gender, colour or name also gives a new reading.",
  ],
  ["Why are there ads?", "Ads keep the app free — there is nothing to buy."],
  [
    "Can 4D TOTO MY Lottery Results predict winning numbers?",
    "No. 4D TOTO MY Lottery Results is for entertainment only and does not sell tickets or place bets. You must be 18+ to play any lottery. Please play responsibly.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-2.5">
      {FAQS.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="overflow-hidden rounded-[18px] border border-[#E6E4DC] bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-[22px] py-5 text-left text-[17px] font-extrabold text-[#00005F]"
            >
              <span>{q}</span>
              <span className="tmMono flex-none text-xl text-[#CC0000]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-[22px] pb-5 text-base leading-[1.6] text-[#4A4A58] [text-wrap:pretty]">{a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
