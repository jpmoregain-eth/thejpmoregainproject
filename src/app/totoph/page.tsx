import Image from "next/image";
import Link from "next/link";
import Faq from "./Faq";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.totoph";
// Set this once the iPhone version is live; until then the App Store button shows "Coming soon".
const APP_STORE_URL = "";

const SUPPORT_EMAIL = "moregainjp@gmail.com";
const ICON = "/images/totoph-icon.png";
const APP_NAME = "2D-6D Lotto PH Lottery Results";

const RED = "#CE1126";
const BLUE = "#0038A8";
const GOLD = "#FCD116";

// ── Store buttons ───────────────────────────────────────────────────────────
function StoreButtons({ center = false }: { center?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${center ? "justify-center" : ""}`}>
      <a href={PLAY_STORE_URL} aria-label="Get it on Google Play" className="phStore w-[190px]">
        <span>
          <span className="text-[10px] font-semibold tracking-[0.08em]">GET IT ON</span>
          <span className="text-[22px] font-bold tracking-[-0.01em]">Google Play</span>
        </span>
      </a>
      {APP_STORE_URL ? (
        <a href={APP_STORE_URL} aria-label="Download on the App Store" className="phStore w-[180px]">
          <span>
            <span className="text-[11px] font-medium tracking-[0.02em]">Download on the</span>
            <span className="text-[22px] font-bold tracking-[-0.01em]">App Store</span>
          </span>
        </a>
      ) : (
        <span aria-label="App Store, coming soon" className="phStore phStoreSoon w-[180px]">
          <span>
            <span className="text-[11px] font-medium tracking-[0.02em]">Coming soon to the</span>
            <span className="text-[22px] font-bold tracking-[-0.01em]">App Store</span>
          </span>
        </span>
      )}
    </div>
  );
}

// ── Phone mockups, drawn in the app's own style ─────────────────────────────
function Boxes({ nums, blue = false }: { nums: string[]; blue?: boolean }) {
  return (
    <span className="flex gap-1">
      {nums.map((n, i) => (
        <span key={i} className={`phBox ${blue ? "phBoxBlue" : ""}`}>
          {n}
        </span>
      ))}
    </span>
  );
}

function PhoneHeader({ tab }: { tab: "DIGIT" | "LOTTO" }) {
  return (
    <div className="phPhoneBar">
      <div className="flex items-start justify-between">
        <div>
          <div className="phHead text-[19px] leading-none">PH LOTTO</div>
          <div className="mt-1 text-[7px] tracking-[0.16em] text-white/80">2D–6D · LOTTO · PCSO RESULTS</div>
        </div>
        <div className="flex gap-1.5">
          <span className="phGlyph flex h-7 w-7 items-center justify-center text-[15px]" style={{ background: GOLD, color: RED }}>
            ᜐ
          </span>
          <span className="phGlyph flex h-7 w-7 items-center justify-center text-[15px] text-white" style={{ background: BLUE }}>
            ᜆ
          </span>
        </div>
      </div>
      <div className="mt-2.5 grid grid-cols-2 border border-white/60 text-center text-[8px] font-semibold tracking-[0.2em]">
        <span className={`py-1.5 ${tab === "DIGIT" ? "bg-white" : ""}`} style={{ color: tab === "DIGIT" ? RED : "#fff" }}>
          DIGIT
        </span>
        <span className={`py-1.5 ${tab === "LOTTO" ? "bg-white" : ""}`} style={{ color: tab === "LOTTO" ? RED : "#fff" }}>
          LOTTO
        </span>
      </div>
    </div>
  );
}

function PhoneTabs({ on }: { on: "RESULTS" | "HISTORY" | "LAB" }) {
  return (
    <div className="phTabs">
      {(["RESULTS", "HISTORY", "LAB"] as const).map((t) => (
        <span key={t} className={t === on ? "on" : ""}>
          {t}
        </span>
      ))}
    </div>
  );
}

function DigitPhone({ className = "" }: { className?: string }) {
  return (
    <div className={`phPhone ${className}`} role="img" aria-label="Today's 2D EZ2 and 3D Swertres results in the app">
      <PhoneHeader tab="DIGIT" />
      <div className="phPhoneBody">
        <div className="phCard">
          <div className="flex items-baseline justify-between">
            <span className="phCardTitle">2D EZ2</span>
            <span className="phMeta">2PM · 5PM · 9PM</span>
          </div>
          <div className="phSlot"><span className="phSlotT">2PM</span><Boxes nums={["14", "27"]} /></div>
          <div className="phSlot"><span className="phSlotT">5PM</span><Boxes nums={["03", "19"]} /></div>
          <div className="phSlot"><span className="phSlotT">9PM</span><span className="phBox phBoxPending">–</span><span className="phBox phBoxPending">–</span></div>
        </div>
        <div className="phCard">
          <div className="flex items-baseline justify-between">
            <span className="phCardTitle">3D Swertres</span>
            <span className="phMeta">2PM · 5PM · 9PM</span>
          </div>
          <div className="phSlot"><span className="phSlotT">2PM</span><Boxes nums={["9", "2", "4"]} /></div>
          <div className="phSlot"><span className="phSlotT">5PM</span><Boxes nums={["5", "8", "5"]} /></div>
          <div className="phSlot"><span className="phSlotT">9PM</span><span className="phBox phBoxPending">–</span><span className="phBox phBoxPending">–</span><span className="phBox phBoxPending">–</span></div>
        </div>
        <div className="phCard">
          <div className="flex items-baseline justify-between">
            <span className="phCardTitle">4D Lotto</span>
            <span className="phMeta">MON·WED·FRI</span>
          </div>
          <div className="phSlot"><span className="phSlotT">9PM</span><Boxes nums={["2", "7", "7", "0"]} /></div>
          <div className="phMeta mt-1.5">PRIZE ₱14,860 · 44 WINNERS</div>
        </div>
      </div>
      <PhoneTabs on="RESULTS" />
    </div>
  );
}

function LottoPhone({ className = "" }: { className?: string }) {
  return (
    <div className={`phPhone ${className}`} role="img" aria-label="Ultra Lotto 6/58 and Grand Lotto 6/55 results with jackpot rollover">
      <PhoneHeader tab="LOTTO" />
      <div className="phPhoneBody">
        <div className="phCard phCardRoll">
          <div className="flex items-baseline justify-between">
            <span className="phCardTitle">Ultra Lotto 6/58</span>
            <span className="phMeta">TUE·FRI·SUN</span>
          </div>
          <div className="mt-1.5"><Boxes nums={["18", "26", "43", "44", "49", "57"]} blue /></div>
          <div className="mt-2 flex items-end justify-between">
            <div>
              <div className="phMeta">JACKPOT</div>
              <div className="text-[15px] font-bold tracking-[-0.03em]">₱368,814,933</div>
            </div>
            <span className="px-1.5 py-1 text-[7px] font-bold tracking-[0.12em]" style={{ background: GOLD }}>
              ROLLS OVER
            </span>
          </div>
        </div>
        <div className="phCard">
          <div className="flex items-baseline justify-between">
            <span className="phCardTitle">Grand Lotto 6/55</span>
            <span className="phMeta">MON·WED·SAT</span>
          </div>
          <div className="mt-1.5"><Boxes nums={["05", "11", "23", "30", "41", "52"]} blue /></div>
          <div className="phMeta mt-1.5">JACKPOT ₱29,700,000 · 0 WINNERS</div>
        </div>
        <div className="phCard">
          <div className="flex items-baseline justify-between">
            <span className="phCardTitle">Mega Lotto 6/45</span>
            <span className="phMeta">MON·WED·FRI</span>
          </div>
          <div className="phMeta mt-2">NO DRAW TODAY</div>
        </div>
      </div>
      <PhoneTabs on="RESULTS" />
    </div>
  );
}

function LabPhone({ className = "" }: { className?: string }) {
  return (
    <div className={`phPhone ${className}`} role="img" aria-label="The Lab: number generator and What If history check">
      <div className="phPhoneBar !pb-0">
        <div className="phHead text-[19px] leading-none">PH LOTTO</div>
        <div className="mt-3 grid grid-cols-2 text-center text-[8px] font-semibold tracking-[0.2em]">
          <span className="border-b-[3px] border-white py-2">GENERATOR</span>
          <span className="py-2 text-white/60">WHAT IF?</span>
        </div>
      </div>
      <div className="phPhoneBody">
        <div className="phMeta" style={{ color: RED }}>PICK A GAME</div>
        <div className="grid grid-cols-4 gap-1 text-center text-[9px] font-semibold">
          {["2D", "3D", "4D", "6D"].map((g) => (
            <span key={g} className="border py-1.5" style={{ borderColor: RED, background: g === "3D" ? RED : "#fff", color: g === "3D" ? "#fff" : RED }}>
              {g}
            </span>
          ))}
        </div>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="phCardTitle">3D Swertres</span>
          <span className="phMeta">3 SETS</span>
        </div>
        {[["4", "1", "7"], ["0", "9", "3"], ["6", "6", "2"]].map((set, i) => (
          <div key={i} className="flex items-center gap-2">
            <span className="phMeta w-4">0{i + 1}</span>
            <span className="grid flex-1 grid-cols-3 gap-1">
              {set.map((n, j) => (
                <span key={j} className="phBox !h-7">{n}</span>
              ))}
            </span>
          </div>
        ))}
        <div className="phBtn mt-1">GENERATE AGAIN</div>
        <div className="mt-1 border p-2" style={{ borderColor: "#E4DEDE", background: "#FDF0F1" }}>
          <div className="flex items-center gap-2">
            <span className="phHead text-[26px] leading-none" style={{ color: RED }}>6×</span>
            <span className="text-[8.5px] leading-[1.5]">Since Oct 2021, 9-2-4 came out 6 times on 3D Swertres.</span>
          </div>
        </div>
      </div>
      <PhoneTabs on="LAB" />
    </div>
  );
}

// ── Content ─────────────────────────────────────────────────────────────────
const DIGIT_GAMES: [string, string][] = [
  ["2D EZ2", "Daily · 2PM, 5PM, 9PM"],
  ["3D Swertres", "Daily · 2PM, 5PM, 9PM"],
  ["4D Lotto", "Mon · Wed · Fri"],
  ["6D Lotto", "Tue · Thu · Sat"],
];

const LOTTO_GAMES: [string, string][] = [
  ["Lotto 6/42", "Tue · Thu · Sat"],
  ["Mega Lotto 6/45", "Mon · Wed · Fri"],
  ["Super Lotto 6/49", "Tue · Thu · Sun"],
  ["Grand Lotto 6/55", "Mon · Wed · Sat"],
  ["Ultra Lotto 6/58", "Tue · Fri · Sun"],
];

const RESULT_SPECS: [string, string][] = [
  ["Daily scorecard", "Resets at midnight, fills in as draws land"],
  ["History", "Any day back to October 2021"],
  ["Lotto jackpots", "Amount, winners and a rollover flag"],
];

const TITO_BARS = [
  { label: "Value", weight: "50%", fill: "72%" },
  { label: "Coverage", weight: "30%", fill: "58%" },
  { label: "Efficiency", weight: "20%", fill: "81%" },
];

export default function TotoPHPage() {
  return (
    <div className="phPage">
      {/* Nav + hero */}
      <header className="relative overflow-hidden text-white" style={{ background: RED, borderBottom: `6px solid ${BLUE}` }}>
        <nav className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-7 py-[22px]">
          <a href="#" className="flex items-center gap-3" style={{ color: "#fff" }}>
            <Image src={ICON} alt={APP_NAME} width={40} height={40} className="block h-10 w-10" />
            <span className="flex flex-col leading-[1.1]">
              <span className="phHead text-[21px] tracking-[0.02em]">PH LOTTO</span>
              <span className="text-[11px] font-semibold tracking-[0.12em]" style={{ color: GOLD }}>
                2D–6D · LOTTO RESULTS
              </span>
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-[22px] whitespace-nowrap text-[13px] font-semibold tracking-[0.08em]">
            <a href="#features" style={{ color: "#FFE3E6" }}>FEATURES</a>
            <a href="#swerte" style={{ color: "#FFE3E6" }}>SWERTE</a>
            <a href="#faq" style={{ color: "#FFE3E6" }}>FAQ</a>
            <a href="#download" className="flex-none px-[18px] py-2.5 font-bold" style={{ background: GOLD, color: "#1A1A1A" }}>
              GET THE APP
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-end gap-12 px-7 pt-10">
          <div className="pb-[88px] max-[520px]:pb-2">
            <div className="phEyebrow text-[#FFD0D6]">PCSO · EZ2 · Swertres · 4D · 6D · Lotto</div>
            <h1 className="phHead mt-[22px] text-[clamp(48px,7vw,92px)] leading-[0.95] tracking-[-0.01em] [text-wrap:balance]">
              Every PCSO draw. <span style={{ color: GOLD }}>Plus a little swerte.</span>
            </h1>
            <p className="mt-[22px] max-w-[520px] text-[16px] leading-[1.7] text-[#FFE3E6] [text-wrap:pretty]">
              Today&apos;s 2D, 3D, 4D, 6D and Lotto results on one scorecard, five years of history, lucky numbers from
              your birthday or last night&apos;s dream, and Tito to check your bet before you play.
            </p>
            <div className="mt-[34px]">
              <StoreButtons />
            </div>
            <div className="mt-[18px] text-[12px] tracking-[0.06em] text-[#FFD0D6]">
              Free · No account needed · English, 中文 &amp; Tagalog
            </div>
          </div>

          <div className="relative h-[clamp(460px,48vw,580px)] min-w-0 max-[520px]:h-[430px]">
            <div className="absolute bottom-[-150px] left-[2%] w-[54%] max-w-[290px] -rotate-[5deg] max-[520px]:hidden">
              <LottoPhone />
            </div>
            <div className="absolute bottom-[-60px] right-[2%] w-[56%] max-w-[300px] rotate-[3deg] max-[520px]:right-[11%] max-[520px]:w-[78%] max-[520px]:rotate-0">
              <DigitPhone />
            </div>
          </div>
        </div>
      </header>

      {/* Game strip */}
      <section className="mx-auto max-w-[1200px] px-7 pt-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-3">
          {[
            ["DIGIT", DIGIT_GAMES, RED],
            ["LOTTO · ALL DRAWS 9PM", LOTTO_GAMES, BLUE],
          ].map(([label, games, color]) => (
            <div key={label as string} className="border border-[#E4DEDE] bg-white p-5" style={{ borderTop: `4px solid ${color}` }}>
              <div className="phEyebrow" style={{ color: color as string }}>{label as string}</div>
              <div className="mt-3 flex flex-col">
                {(games as [string, string][]).map(([name, when]) => (
                  <div key={name} className="flex justify-between gap-4 border-t border-dotted border-[#E4DEDE] py-2 text-[14px]">
                    <span className="phHead text-[18px]">{name}</span>
                    <span className="text-right text-[#6E6E6E]">{when}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <main id="features" className="mx-auto flex max-w-[1200px] scroll-mt-6 flex-col gap-[110px] px-7 pb-10 pt-[100px]">
        {/* Results */}
        <section className="phRow">
          <div>
            <div className="phEyebrow flex items-center gap-2.5" style={{ color: RED }}>
              <span className="block h-2 w-2" style={{ background: RED }} />
              RESULTS
            </div>
            <h2 className="phH2">Today&apos;s draws on one notice board.</h2>
            <p className="phBody">
              Every game you follow sits on a single daily scorecard. 2D and 3D show all three slots, pending draws wait
              in dashed boxes, and Lotto cards put the jackpot up front with a gold flag when nobody wins and it rolls
              over.
            </p>
            <div className="mt-7 flex max-w-[480px] flex-col">
              {RESULT_SPECS.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex justify-between gap-4 border-t border-[#E4DEDE] py-3.5 text-[14px] ${i === RESULT_SPECS.length - 1 ? "border-b" : ""}`}
                >
                  <span className="font-semibold">{label}</span>
                  <span className="text-right text-[#6E6E6E]">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid w-full max-w-[600px] grid-cols-2 gap-5 justify-self-center max-[520px]:max-w-[300px] max-[520px]:grid-cols-1">
            <DigitPhone className="max-[520px]:hidden" />
            <LottoPhone className="mt-[60px] max-[520px]:mt-0" />
          </div>
        </section>

        {/* Lab */}
        <section className="phRow">
          <div className="w-full max-w-[300px] justify-self-center">
            <LabPhone />
          </div>
          <div>
            <div className="phEyebrow" style={{ color: RED }}>THE LAB · GENERATOR &amp; WHAT IF</div>
            <h2 className="phH2">Roll three sets, or ask &ldquo;what if?&rdquo;</h2>
            <p className="phBody">
              Pick a game and the Generator deals three fresh sets. One short ad unlocks it for the whole session. What If
              takes your own combination and checks it against five years of draws: every date it came out, and how many
              people won.
            </p>
          </div>
        </section>

        {/* Swerte */}
        <section id="swerte" className="grid scroll-mt-6 grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-12 p-[clamp(28px,5vw,60px)]" style={{ background: GOLD }}>
          <div>
            <div className="flex items-center gap-3">
              <span className="phGlyph flex h-11 w-11 items-center justify-center text-[24px] text-white" style={{ background: RED }}>
                ᜐ
              </span>
              <span className="phEyebrow" style={{ color: RED }}>SWERTE · LUCKY NUMBER READING</span>
            </div>
            <h2 className="phH2 !mt-[18px]">Your birthday or your dream, turned into numbers.</h2>
            <p className="phBody !text-[#3A3000]">
              <strong>Kaarawan:</strong> enter your birthday and lucky colour, and Swerte works out numbers from your
              zodiac, element, Kua number, Lo Shu gaps and the current hour.
            </p>
            <p className="phBody !mt-3 !text-[#3A3000]">
              <strong>Panaginip:</strong> tell it what you dreamt, a snake in Lola&apos;s house, a tooth falling out, and
              it matches the classic Pinoy dream-number list to plays for every game. Share the result as a card.
            </p>
            <p className="mt-5 text-[12px] tracking-[0.04em] text-[#5C4A00]">
              Metaphysics, not maths. These numbers have the same odds as any others.
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-self-center bg-white p-5" style={{ width: "min(100%, 340px)", borderTop: `4px solid ${RED}` }}>
            <div className="phEyebrow text-[10px]" style={{ color: RED }}>YOUR DREAM, PER GAME</div>
            <div className="mt-1 text-[13px] italic text-[#6E6E6E]">&ldquo;A big snake in Lola&apos;s house, then my tooth fell out.&rdquo;</div>
            {[
              ["2D", ["02", "14"], false],
              ["3D", ["2", "1", "4"], false],
              ["4D", ["2", "1", "4", "1"], false],
              ["6/42", ["02", "14", "16", "22", "34", "35"], true],
            ].map(([label, nums, blue]) => (
              <div key={label as string} className="mt-1 flex items-center gap-2">
                <span className="w-10 text-[10px] font-semibold text-[#6E6E6E]">{label as string}</span>
                <span className="flex gap-1">
                  {(nums as string[]).map((n, i) => (
                    <span key={i} className={`phBox !h-8 !min-w-[28px] ${blue ? "phBoxBlue" : ""}`}>{n}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Tito */}
        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-12 p-[clamp(28px,5vw,60px)] text-white" style={{ background: BLUE }}>
          <div className="flex flex-col gap-2 justify-self-center bg-white p-5 text-[#1A1A1A]" style={{ width: "min(100%, 340px)" }}>
            <div className="phEyebrow text-[10px]" style={{ color: BLUE }}>TITO AUDIT</div>
            <div className="flex items-end gap-2">
              <span className="phHead text-[72px] leading-none" style={{ color: BLUE }}>68</span>
              <span className="pb-2 text-[13px] text-[#6E6E6E]">/ 100</span>
            </div>
            <div className="text-[11px] font-semibold tracking-[0.16em]" style={{ color: BLUE }}>GOOD</div>
            <div className="phHead text-[20px] leading-[1.15]">&ldquo;Not bad, hijo. Big jackpot, sensible spend. Just don&apos;t touch the rent money, ha?&rdquo;</div>
            <div className="mt-2 flex flex-col gap-3">
              {TITO_BARS.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-[12px] font-semibold">
                    <span>{b.label}</span>
                    <span className="text-[#6E6E6E]">{b.weight}</span>
                  </div>
                  <div className="mt-1 h-2 bg-[#EEF2FB]">
                    <div className="h-full" style={{ width: b.fill, background: BLUE }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="phGlyph flex h-11 w-11 items-center justify-center bg-white text-[24px]" style={{ color: BLUE }}>
                ᜆ
              </span>
              <span className="phEyebrow text-[#C9D6F5]">TITO · BET QUALITY REVIEW</span>
            </div>
            <h2 className="phH2 !mt-[18px] !text-white">Let Tito check your bet first.</h2>
            <p className="phBody !text-[#DCE4F7]">
              Enter your tickets for any PH game and Tito scores the bet out of 100, weighing value, coverage and
              efficiency, with a straight-talking verdict in light Taglish. A high score means a better-built bet, never a
              likelier win.
            </p>
          </div>
        </section>

        {/* FAQ / support */}
        <section id="faq" className="grid scroll-mt-6 grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-12">
          <div>
            <div className="phEyebrow" style={{ color: RED }}>SUPPORT</div>
            <h2 className="phH2">Need a hand?</h2>
            <p className="phBody !max-w-[380px]">
              Questions, bug reports or feedback: email{" "}
              <a href={`mailto:${SUPPORT_EMAIL}?subject=PH%20Lotto%20support`} className="border-b-2 font-bold" style={{ borderColor: GOLD }}>
                {SUPPORT_EMAIL}
              </a>{" "}
              and we&apos;ll get back to you as soon as we can.
            </p>
          </div>
          <Faq />
        </section>
      </main>

      {/* Download CTA */}
      <section id="download" className="mx-auto mt-[60px] max-w-[1200px] scroll-mt-6 px-7">
        <div className="flex flex-col items-center px-[clamp(28px,5vw,64px)] py-[clamp(40px,6vw,80px)] text-center text-white" style={{ background: RED, borderBottom: `6px solid ${BLUE}` }}>
          <Image src={ICON} alt={APP_NAME} width={84} height={84} className="block h-[84px] w-[84px]" />
          <h2 className="phHead mt-[26px] text-[clamp(40px,5.6vw,72px)] leading-none">
            Tara, check <span style={{ color: GOLD }}>today&apos;s draws</span>.
          </h2>
          <p className="mt-4 text-[15px] text-[#FFE3E6]">Free on Android. No account needed.</p>
          <div className="mt-[30px]">
            <StoreButtons center />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-5 px-7 pb-12 pt-10 text-[13px] text-[#6E6E6E]">
        <div className="max-w-[560px] leading-[1.7]">
          Entertainment only. Not affiliated with PCSO or any lottery operator. 18+ · Play responsibly.
          <br />© 2026 <Link href="/">The JPMoreGain Project</Link>
        </div>
        <div className="flex flex-wrap gap-[22px] font-semibold">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
          <Link href="/">All projects</Link>
        </div>
      </footer>
    </div>
  );
}
