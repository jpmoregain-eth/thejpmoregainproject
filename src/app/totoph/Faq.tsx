"use client";

import { useState } from "react";

const FAQS: [string, string][] = [
  ["Do I need an account?", "No. 2D-6D Lotto PH Lottery Results works without any sign-up or account."],
  [
    "Which games are covered?",
    "PCSO 2D EZ2 and 3D Swertres (2PM, 5PM and 9PM draws), 4D and 6D Lotto, and Lotto 6/42, Mega Lotto 6/45, Super Lotto 6/49, Grand Lotto 6/55 and Ultra Lotto 6/58. Small Town Lottery (STL) is not included.",
  ],
  [
    "How far back does the history go?",
    "Results go back to October 2021. Browse any past day in History, or check a combination against every draw with What If.",
  ],
  [
    "Why did my Swerte numbers change?",
    "Your birthday reading also uses the current hour, so the numbers shift through the day. Changing your birthday, energy or lucky colour gives a new reading too.",
  ],
  ["Why are there ads?", "Ads keep the app free. There is nothing to buy."],
  [
    "Can the app predict winning numbers?",
    "No. 2D-6D Lotto PH Lottery Results is for entertainment only and does not sell tickets or place bets. It is not affiliated with PCSO. You must be 18+ to play. Please play responsibly.",
  ],
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      {FAQS.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="border border-[#E4DEDE] bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="phHead flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left text-[19px] text-[#1A1A1A]"
            >
              <span>{q}</span>
              <span className="flex-none text-xl text-[#CE1126]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <div className="px-5 pb-5 text-[15px] leading-[1.7] text-[#4A4A4A] [text-wrap:pretty]">{a}</div>}
          </div>
        );
      })}
    </div>
  );
}
