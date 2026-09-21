import Image from "next/image";

const IOS = "https://apps.apple.com/us/app/4d-toto-sg-lottery-results/id6795951972";
const PLAY = "https://play.google.com/store/apps/details?id=com.totosg";
const IMG = "/images/sg-lottery";

const mono = "font-mono uppercase";
const display = "font-[family-name:var(--font-archivo)]";

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={`${IMG}/${src}`}
      alt={alt}
      width={1260}
      height={2736}
      sizes="(max-width: 860px) 100vw, 420px"
      className="block h-auto w-full"
    />
  );
}

export default function SGLotteryPage() {
  return (
    <main className={`${display} bg-white text-[#111114]`}>
      {/* Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between gap-4 bg-[#E8323F] px-6 py-3.5 text-white">
        <div className="flex flex-col gap-0.5">
          <span className="text-xl font-extrabold leading-none tracking-tight">SG LOTTERY</span>
          <span className={`${mono} text-[10px] tracking-[0.22em] opacity-85`}>NOTICE BOARD · SINGAPORE POOLS</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className={`${mono} inline-flex items-center whitespace-nowrap border border-white/70 px-2.5 py-2 text-[10px] leading-none tracking-[0.18em]`}>
            EN / 中
          </span>
          <a href={IOS} className={`${mono} bg-white px-4 py-2.5 text-[11px] font-bold tracking-[0.16em] text-[#E8323F]`}>IOS</a>
          <a href={PLAY} className={`${mono} bg-white px-4 py-2.5 text-[11px] font-bold tracking-[0.16em] text-[#E8323F]`}>ANDROID</a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-12 px-6 py-18">
        <div className="min-w-0">
          <div className={`${mono} mb-5 text-[11px] tracking-[0.24em] text-[#E8323F]`}>4D &amp; TOTO · FREE · IOS &amp; ANDROID</div>
          <h1 className="mb-5 text-[clamp(40px,6vw,72px)] font-extrabold leading-[0.95] tracking-[-0.03em]">
            Every draw,<br />on one<br />notice board.
          </h1>
          <p className="mb-8 max-w-[46ch] text-lg leading-relaxed text-[#55555c] text-pretty">
            Singapore Pools 4D and TOTO results the moment they post — full prize tables, decades of archive, and a lab
            for people who like their superstition with a spreadsheet.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a href={IOS} className={`${mono} bg-[#E8323F] px-7 py-4.5 text-[13px] font-bold tracking-[0.14em] text-white transition-colors hover:bg-[#b21c28]`}>
              DOWNLOAD FOR IPHONE
            </a>
            <a href={PLAY} className={`${mono} border border-[#111114] px-7 py-4 text-[13px] font-bold tracking-[0.14em] text-[#111114] transition-colors hover:bg-[#111114] hover:text-white`}>
              GET IT ON GOOGLE PLAY
            </a>
            <span className={`${mono} text-[11px] tracking-[0.14em] text-[#8a8a92]`}>NO ACCOUNT · NO BET PLACING</span>
          </div>
        </div>
        <div className="flex min-w-0 justify-center">
          <div className="w-full max-w-[400px] shadow-[0_24px_60px_rgba(17,17,20,0.12)]">
            <Shot src="p_4d.png" alt="4D draw result screen" />
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <section className="border-y border-[#ececef] bg-[#fafafa]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
          {[
            ["DRAWS ARCHIVED", "5,536", false],
            ["HISTORY BACK TO", "1986", false],
            ["RESULT LAG", "< 1 min", false],
            ["PRICE", "Free", true],
          ].map(([label, value, red], i, arr) => (
            <div key={label as string} className={`px-6 py-7 ${i < arr.length - 1 ? "border-r border-[#ececef]" : ""}`}>
              <div className={`${mono} mb-2 text-[10px] tracking-[0.2em] text-[#8a8a92]`}>{label}</div>
              <div className={`text-[32px] font-bold tracking-[-0.02em] ${red ? "text-[#E8323F]" : ""}`}>{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 01 Results */}
      <section className="mx-auto max-w-[1180px] px-6 pb-6 pt-20">
        <div className={`${mono} mb-3 text-[11px] tracking-[0.24em] text-[#E8323F]`}>01 · RESULTS</div>
        <h2 className="mb-4 max-w-[18ch] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          The number first. Everything else after.
        </h2>
        <p className="mb-10 max-w-[60ch] text-[17px] leading-relaxed text-[#55555c] text-pretty">
          1st, 2nd, 3rd, starter and consolation for 4D. Winning numbers, additional, and the whole prize group table
          for TOTO — plus a countdown to the next close. Big and small payouts are labelled on every tier, so you know
          what a ticket is actually worth before you check it.
        </p>
        <div className="grid max-w-[860px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          <Shot src="p_4d.png" alt="4D results" />
          <Shot src="p_toto.png" alt="TOTO results" />
        </div>
      </section>

      {/* 02 Archive */}
      <section className="mx-auto max-w-[1180px] px-6 pb-6 pt-16">
        <div className={`${mono} mb-3 text-[11px] tracking-[0.24em] text-[#E8323F]`}>02 · ARCHIVE</div>
        <h2 className="mb-4 max-w-[20ch] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          Twenty draws a screen, four decades deep.
        </h2>
        <p className="mb-10 max-w-[60ch] text-[17px] leading-relaxed text-[#55555c] text-pretty">
          Filter by year, scan the list, tap any row for the full result. No pagination wheels, no loading spinners —
          and search by draw number or date when you already know what you are looking for.
        </p>
        <div className="grid max-w-[860px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-8">
          <Shot src="p_4d_arch.png" alt="4D archive" />
          <Shot src="p_toto_arch.png" alt="TOTO archive" />
        </div>
      </section>

      {/* 03 Lab */}
      <section className="mt-16 bg-[#111114] text-white">
        <div className="mx-auto max-w-[1180px] px-6 py-20">
          <div className={`${mono} mb-3 text-[11px] tracking-[0.24em] text-[#FF5A65]`}>03 · THE LAB</div>
          <h2 className="mb-4 max-w-[20ch] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
            Generate a slip. Then watch it lose.
          </h2>
          <p className="mb-10 max-w-[62ch] text-[17px] leading-relaxed text-white/70 text-pretty">
            Three strategies — sum range, mean reversion, frequency — each drawn from a stated historical window. Then
            backtest any number against every draw on record and see the honest running total. These are arrangements of
            past frequency, not predictions — the lab exists to show you that, in dollars.
          </p>
          <div className="grid max-w-[860px] grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-8">
            <Shot src="p_gen.png" alt="Lab generator" />
            <Shot src="p_back.png" alt="Lab backtest" />
          </div>
        </div>
      </section>

      {/* 04 财神 · 师父 */}
      <section className="mx-auto max-w-[1180px] px-6 py-20">
        <div className={`${mono} mb-3 text-[11px] tracking-[0.24em] text-[#E8323F]`}>04 · 财神 · 师父</div>
        <h2 className="mb-4 max-w-[20ch] text-[clamp(28px,4vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em]">
          Two advisors. One serious, one not.
        </h2>
        <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-10">
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-5">
            <Shot src="p_caishen.png" alt="God of Fortune" />
            <div>
              <h3 className="mb-2.5 text-[26px] font-bold tracking-tight">财神</h3>
              <p className="text-[15px] leading-relaxed text-[#55555c]">
                Zodiac, year element, Kua number, Lo Shu gaps and the current double-hour, weighted into three 4D sets.
                Seeded to the date — same inputs, same numbers until midnight.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start gap-5">
            <Shot src="p_sifu.png" alt="Sifu audit" />
            <div>
              <h3 className="mb-2.5 text-[26px] font-bold tracking-tight">师父</h3>
              <p className="text-[15px] leading-relaxed text-[#55555c]">
                Score a bet out of 100 on value, coverage and efficiency before you buy it. 师父 will tell you when a Big
                bet earns its extra dollars — and when it doesn&apos;t.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8323F] text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-8 px-6 py-20">
          <div className="min-w-0">
            <h2 className="mb-3 text-[clamp(30px,4.5vw,52px)] font-extrabold leading-none tracking-[-0.03em]">
              Check the board.
            </h2>
            <p className="max-w-[44ch] text-[17px] leading-relaxed text-white/85">
              Free on iPhone and Android, no account, and it never asks you to place a bet.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={IOS} className={`${mono} bg-white px-8 py-5 text-[13px] font-bold tracking-[0.14em] text-[#E8323F] transition-colors hover:bg-[#111114] hover:text-white`}>
              APP STORE
            </a>
            <a href={PLAY} className={`${mono} border border-white px-8 py-[19px] text-[13px] font-bold tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-[#E8323F]`}>
              GOOGLE PLAY
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1180px] flex-wrap items-baseline justify-between gap-4 px-6 pb-16 pt-12">
        <div className={`${mono} text-[11px] leading-[1.9] tracking-[0.14em] text-[#8a8a92]`}>
          <div>NOT AFFILIATED WITH SINGAPORE POOLS. 18+. GAMBLE RESPONSIBLY.</div>
          <div>© 2026 <a href="/" className="text-[#E8323F] hover:text-[#b21c28]">THE JPMOREGAIN PROJECT</a></div>
        </div>
        <div className={`${mono} flex gap-5 text-[11px] tracking-[0.14em]`}>
          <a href="/privacy" className="text-[#E8323F] hover:text-[#b21c28]">PRIVACY</a>
          <a href="/terms" className="text-[#E8323F] hover:text-[#b21c28]">TERMS</a>
          <a href="/" className="text-[#E8323F] hover:text-[#b21c28]">ALL PROJECTS</a>
        </div>
      </footer>
    </main>
  );
}
