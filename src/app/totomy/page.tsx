import Image from "next/image";
import Link from "next/link";
import Faq from "./Faq";

// Swap in the real store listings when the app goes live, and flip COMING_SOON off.
const APP_STORE_URL = "";
const PLAY_STORE_URL = "";
const COMING_SOON = true;

const SUPPORT_EMAIL = "moregainjp@gmail.com";
const ICON = "/images/totomy-icon.png";
const IMG = "/images/totomy";
const APP_NAME = "4D TOTO MY Lottery Results";

function Phone({ src, alt, large = false, className = "" }: { src: string; alt: string; large?: boolean; className?: string }) {
  return (
    <div className={`tmPhone ${large ? "tmPhoneLg" : ""} ${className}`}>
      <Image src={`${IMG}/${src}`} alt={alt} width={1080} height={2400} sizes="(max-width: 700px) 50vw, 320px" />
    </div>
  );
}

function StoreButtons({ center = false }: { center?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center gap-3.5 ${center ? "justify-center" : ""}`}>
      <a href={APP_STORE_URL || "#download"} aria-label="Download on the App Store" className="tmStore w-[180px]">
        <span>
          <span className="text-[11px] font-medium tracking-[0.02em]">Download on the</span>
          <span className="text-[22px] font-bold tracking-[-0.01em]">App Store</span>
        </span>
      </a>
      <a href={PLAY_STORE_URL || "#download"} aria-label="Get it on Google Play" className="tmStore w-[190px]">
        <span>
          <span className="text-[10px] font-semibold tracking-[0.08em]">GET IT ON</span>
          <span className="text-[22px] font-bold tracking-[-0.01em]">Google Play</span>
        </span>
      </a>
    </div>
  );
}

function Eyebrow({ children, color = "#CC0000" }: { children: React.ReactNode; color?: string }) {
  return (
    <div className="tmMono text-[13px] tracking-[0.24em]" style={{ color }}>
      {children}
    </div>
  );
}

function GlyphTile({ glyph, bg }: { glyph: string; bg: string }) {
  return (
    <span
      className="flex h-10 w-10 items-center justify-center rounded-[10px] text-[22px] font-black text-[#FFCC00]"
      style={{ background: bg }}
    >
      {glyph}
    </span>
  );
}

const OPERATORS = [
  ["Magnum", "4D Classic · Life 8/36"],
  ["Sports Toto", "4D · Jackpot · Supreme · Power · Star"],
  ["Da Ma Cai", "3D · 4D · 5D · 6D"],
];

const RESULT_SPECS = [
  ["Lotto jackpots", "Supreme 6/58 · Power 6/55 · Star 6/50"],
  ["Draw history", "Filter by month, tap any draw"],
  ["Draw shape", "Odd/even, frequent digits, digit sum"],
];

const SIFU_BARS = [
  { label: "Value", weight: "50%", note: "Prize-to-cost ratio", fill: "70%", color: "#FFCC00" },
  { label: "Coverage", weight: "30%", note: "Combinations covered", fill: "44%", color: "#FFFFFF" },
  { label: "Efficiency", weight: "20%", note: "Bet type fits the game", fill: "24%", color: "#FF4B4B" },
];

const CAISHEN_STEPS = [
  ["01", "Tell 财神 about you", "Date of birth, gender and your lucky colour. Add your name if you like — it sharpens the reading."],
  ["02", "Your chart is read", "Kua number, Chinese zodiac, element and Lo Shu — nine parameters in total, four weighted strongest."],
  [
    "03",
    "Reveal your numbers",
    "Sets for 3D, 4D, 5D and 6D cut from one stem, a line each for Supreme, Power, Star and Life, and a share card in today's season artwork.",
  ],
];

const CAISHEN_CARDS = [
  ["Every game covered", "3D, 4D, 5D and 6D sets, plus Lotto lines for Supreme, Power, Star and Life."],
  ["Same stem, every length", "Your 4D pick carries through to 3D, 5D and 6D, so every length ends the same way."],
  ["Why these numbers", "See what shaped your reading — Kua, zodiac, element, Lo Shu and your colour."],
  ["Fresh every day", "Numbers reset at midnight. Same inputs give the same numbers all day long."],
];

export default function TotoMYPage() {
  return (
    <div className="tmPage">
      {/* Nav + hero */}
      <header className="relative overflow-hidden rounded-b-[48px] bg-[#00005F] text-white">
        <nav className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-7 py-[22px]">
          <a href="#" className="flex items-center gap-3" style={{ color: "#fff" }}>
            <Image src={ICON} alt={APP_NAME} width={40} height={40} className="block h-10 w-10 rounded-[10px] bg-[#1B1B7A]" />
            <span className="flex flex-col leading-[1.1]">
              <span className="text-[19px] font-extrabold tracking-[-0.01em]">4D TOTO MY</span>
              <span className="text-xs font-bold text-[#FFCC00]">Lottery Results</span>
            </span>
          </a>
          <div className="flex flex-wrap items-center gap-[22px] whitespace-nowrap text-[15px] font-semibold">
            <a href="#features" style={{ color: "#C9C9F0" }}>Features</a>
            <a href="#caishen" style={{ color: "#C9C9F0" }}>Cai Shen</a>
            <a href="#faq" style={{ color: "#C9C9F0" }}>FAQ</a>
            <a href="#download" className="flex-none rounded-xl bg-[#FFCC00] px-[18px] py-2.5 font-extrabold" style={{ color: "#00005F" }}>
              Get the app
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-end gap-12 px-7 pt-12">
          <div className="pb-[88px] max-[520px]:pb-2">
            <div className="tmMono text-[13px] uppercase tracking-[0.28em] text-[#9C9CE0]">Magnum · Sports Toto · Da Ma Cai</div>
            <h1 className="mt-[22px] text-[clamp(44px,6.4vw,80px)] font-black leading-[0.98] tracking-[-0.03em] [text-wrap:balance]">
              Malaysia Boleh! <span className="text-[#FFCC00]">Fortune</span> for all Malaysians.
            </h1>
            <div className="mt-[18px] text-2xl font-bold tracking-[0.04em] text-[#FFCC00]">财神到 · 恭喜发财</div>
            <p className="mt-[22px] max-w-[520px] text-[19px] leading-[1.55] text-[#D6D6F2] [text-wrap:pretty]">
              Every 3D, 4D, 5D, 6D and Lotto result the moment it&apos;s drawn. Generate sets from each operator&apos;s
              history, let Sifu score your slip, and get daily lucky numbers read from your birth chart by the God of
              Fortune.
            </p>
            <div className="mt-[34px]">
              <StoreButtons />
            </div>
            <div className="tmMono mt-[18px] flex flex-wrap gap-2.5 text-[13px] tracking-[0.04em] text-[#9C9CE0]">
              {COMING_SOON && <span className="text-[#FFCC00]">Coming soon ·</span>}
              <span>Free · No account needed · 中文 &amp; English</span>
            </div>
          </div>

          <div className="relative h-[clamp(460px,48vw,600px)] min-w-0 max-[520px]:h-[340px]">
            <div className="absolute bottom-[-120px] left-[4%] w-[52%] max-w-[300px] -rotate-[5deg]">
              <Phone
                src="caishen-chart.jpg"
                alt="Cai Shen reads your birth chart"
                large
                className="!shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]"
              />
            </div>
            <div className="absolute bottom-[-40px] right-[2%] w-[56%] max-w-[320px] rotate-[3deg]">
              <Phone
                src="magnum-4d.jpg"
                alt="Magnum 4D Classic results"
                large
                className="!rounded-[38px] !shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Operator strip */}
      <section className="mx-auto max-w-[1200px] px-7 pt-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
          {OPERATORS.map(([name, games]) => (
            <div key={name} className="rounded-[20px] border border-[#E6E4DC] bg-white px-[22px] py-5">
              <div className="tmMono text-xs tracking-[0.2em] text-[#8A8A96]">OPERATOR</div>
              <div className="mt-1.5 text-[22px] font-extrabold text-[#00005F]">{name}</div>
              <div className="mt-1 text-sm text-[#6B6B78]">{games}</div>
            </div>
          ))}
          <div className="flex flex-col justify-between rounded-[20px] bg-[#FFCC00] px-[22px] py-5">
            <div className="tmMono text-xs tracking-[0.2em] text-[#5C4A00]">EVERY DRAW</div>
            <div className="mt-1.5 text-[22px] font-extrabold leading-[1.15] text-[#00005F]">
              Results, history &amp; jackpots in one app
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <main id="features" className="mx-auto flex max-w-[1200px] flex-col gap-[120px] px-7 pb-10 pt-[110px]">
        {/* Results */}
        <section className="tmRow">
          <div>
            <div className="tmMono flex items-center gap-2.5 text-[13px] tracking-[0.24em] text-[#CC0000]">
              <span className="block h-2 w-2 rounded-full bg-[#CC0000]" />
              RESULTS
            </div>
            <h2 className="tmH2">Every draw, the moment it lands.</h2>
            <p className="tmBody">
              1st, 2nd and 3rd prize up top, all 23 Special and Consolation numbers underneath. Numbers that also came
              out last draw are highlighted in yellow, and Toto 4D Jackpot shows every winning pair.
            </p>
            <div className="mt-7 flex max-w-[480px] flex-col">
              {RESULT_SPECS.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex justify-between gap-4 border-t border-[#E1DFD6] py-3.5 ${i === RESULT_SPECS.length - 1 ? "border-b" : ""}`}
                >
                  <span className="font-bold">{label}</span>
                  <span className="text-right text-[#6B6B78]">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid w-full max-w-[560px] grid-cols-2 gap-5 justify-self-center">
            <Phone src="toto-jackpot.jpg" alt="Toto 4D Jackpot winning pairs" />
            <Phone src="toto-lotto.jpg" alt="Supreme, Power and Star Toto results" className="mt-[60px]" />
          </div>
        </section>

        {/* Generate */}
        <section className="tmRow">
          <div className="w-full max-w-[300px] justify-self-center">
            <Phone src="generate.jpg" alt="Generate number sets per operator" large />
          </div>
          <div>
            <Eyebrow>GENERATE · WHAT IF?</Eyebrow>
            <h2 className="tmH2">Fresh sets, built from each operator&apos;s own history.</h2>
            <p className="tmBody">
              Pick Magnum, Sports Toto or Da Ma Cai, choose how many sets per game, and switch off repeated digits if
              you like. Star the ones you want, copy them, or save them all.
            </p>
          </div>
        </section>

        {/* Sifu */}
        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-12 overflow-hidden rounded-[40px] bg-[#00005F] p-[clamp(32px,5vw,64px)] text-white">
          <div>
            <div className="flex items-center gap-3">
              <GlyphTile glyph="师" bg="#1B1B7A" />
              <Eyebrow color="#9C9CE0">SIFU</Eyebrow>
            </div>
            <h2 className="tmH2 !mt-[18px] !text-white">Have Sifu score your bet.</h2>
            <p className="tmBody !max-w-[470px] !text-[#D6D6F2]">
              Enter your slip and get a score out of 100, with a plain-spoken verdict and a breakdown of where your
              money actually sits. Then adjust and try again.
            </p>
            <div className="mt-8 flex max-w-[440px] flex-col gap-[18px]">
              {SIFU_BARS.map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between font-bold">
                    <span>
                      {b.label} <span className="text-sm font-medium text-[#9C9CE0]">{b.weight}</span>
                    </span>
                    <span className="font-medium text-[#9C9CE0]">{b.note}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-lg bg-[#23237F]">
                    <div className="h-full rounded-lg" style={{ width: b.fill, background: b.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-[300px] justify-self-center">
            <Phone
              src="sifu-score.jpg"
              alt="Sifu bet score of 45 out of 100"
              large
              className="!bg-white !shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6)]"
            />
          </div>
        </section>

        {/* Cai Shen */}
        <section id="caishen" className="flex scroll-mt-6 flex-col gap-12">
          <div className="tmRow">
            <div>
              <div className="flex items-center gap-3">
                <GlyphTile glyph="财" bg="#CC0000" />
                <Eyebrow>CAI SHEN · 财神</Eyebrow>
              </div>
              <h2 className="tmH2 !mt-[18px]">Three taps from birthday to lucky numbers.</h2>
              <div className="mt-3.5 text-[22px] font-bold text-[#CC0000]">财神已看过你的命盘</div>
              <div className="mt-[30px] flex max-w-[500px] flex-col">
                {CAISHEN_STEPS.map(([n, title, body], i) => (
                  <div
                    key={n}
                    className={`grid grid-cols-[56px_1fr] gap-3 border-t border-[#E1DFD6] py-[18px] ${i === CAISHEN_STEPS.length - 1 ? "border-b" : ""}`}
                  >
                    <span className="tmMono text-[15px] font-semibold text-[#CC0000]">{n}</span>
                    <div>
                      <div className="text-[19px] font-extrabold text-[#00005F]">{title}</div>
                      <div className="mt-1 leading-[1.55] text-[#4A4A58]">{body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid w-full max-w-[560px] grid-cols-2 gap-5 justify-self-center">
              <Phone src="caishen-chart.jpg" alt="Your chart is read" className="mt-[60px] !bg-white" />
              <Phone src="toto-4d.jpg" alt="Toto 4D draw detail" />
            </div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-3">
            {CAISHEN_CARDS.map(([title, body]) => (
              <div key={title} className="rounded-[20px] border border-[#F0E2A8] bg-[#FFF6D6] p-6">
                <div className="text-lg font-extrabold text-[#00005F]">{title}</div>
                <div className="mt-2 text-[15px] leading-[1.55] text-[#4A4A58]">{body}</div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ / support */}
        <section id="faq" className="grid scroll-mt-6 grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-12">
          <div>
            <Eyebrow>SUPPORT</Eyebrow>
            <h2 className="tmH2">Need a hand?</h2>
            <p className="tmBody !max-w-[380px]">
              Questions, bug reports or feedback — email{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}?subject=4D%20TOTO%20MY%20support`}
                className="border-b-2 border-[#FFCC00] font-bold"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              and we&apos;ll get back to you as soon as we can.
            </p>
          </div>
          <Faq />
        </section>
      </main>

      {/* Download CTA */}
      <section id="download" className="mx-auto mt-[60px] max-w-[1200px] px-7">
        <div className="flex flex-col items-center rounded-[40px] bg-[#CC0000] px-[clamp(28px,5vw,64px)] py-[clamp(40px,6vw,80px)] text-center text-white">
          <Image src={ICON} alt={APP_NAME} width={84} height={84} className="block h-[84px] w-[84px] rounded-[20px] bg-[#A30000]" />
          <h2 className="mt-[26px] text-[clamp(38px,5.4vw,68px)] font-black leading-none tracking-[-0.03em]">
            Ready for your <span className="text-[#FFCC00]">ong</span>?
          </h2>
          <div className="mt-3 text-[22px] font-bold text-[#FFE27A]">恭喜发财</div>
          <p className="mt-4 text-lg text-[#FFE1E1]">Free on iPhone and Android. No account needed.</p>
          <div className="mt-[30px]">
            <StoreButtons center />
          </div>
          {COMING_SOON && (
            <div className="tmMono mt-[18px] text-[13px] tracking-[0.16em] text-[#FFE27A]">
              COMING SOON TO IPHONE &amp; ANDROID
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1200px] flex-wrap justify-between gap-5 px-7 pb-12 pt-10 text-sm text-[#6B6B78]">
        <div className="max-w-[560px] leading-[1.6]">
          Entertainment only. Not affiliated with Magnum, Sports Toto, Da Ma Cai or any lottery operator. 18+ · Play
          responsibly.
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
