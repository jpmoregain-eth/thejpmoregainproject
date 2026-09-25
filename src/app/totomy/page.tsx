import Image from "next/image";
import Link from "next/link";

// Store listings are not live yet; swap these in when they are.
const IOS = "#";
const PLAY = "#";
const IMG = "/images/totomy";

const NAVY = "#05056B";
const GOLD = "#FFCC00";

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={`${IMG}/${src}`}
      alt={alt}
      width={899}
      height={1780}
      sizes="(max-width: 860px) 100vw, 360px"
      className="block h-auto w-full rounded-[28px] border border-black/5 shadow-[0_24px_60px_rgba(5,5,107,0.14)]"
    />
  );
}

function StoreButtons({ onNavy = false }: { onNavy?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={IOS}
        className="rounded-2xl bg-[#FFCC00] px-7 py-4 text-[15px] font-bold text-[#05056B] transition-transform hover:-translate-y-0.5"
      >
        Download for iPhone
      </a>
      <a
        href={PLAY}
        className={`rounded-2xl border-2 px-7 py-[14px] text-[15px] font-bold transition-colors ${
          onNavy
            ? "border-white text-white hover:bg-white hover:text-[#05056B]"
            : "border-[#05056B] text-[#05056B] hover:bg-[#05056B] hover:text-white"
        }`}
      >
        Get it on Google Play
      </a>
    </div>
  );
}

export default function TotoMYPage() {
  return (
    <main className="bg-[#F5F5F2] font-sans text-[#111114]">
      {/* Header */}
      <header className="bg-[#05056B] text-white">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/images/totomy-icon.png" alt="TotoMY" width={40} height={40} className="rounded-xl" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold tracking-tight">TotoMY</span>
              <span className="text-xs text-[#FFCC00]">财神到 · 恭喜发财</span>
            </div>
          </div>
          <a href={IOS} className="rounded-xl bg-[#FFCC00] px-4 py-2 text-sm font-bold text-[#05056B]">
            Get the app
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="rounded-b-[40px] bg-[#05056B] text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-12 px-6 pb-20 pt-10">
          <div className="min-w-0">
            <div className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-[#FFCC00]">
              3D · 4D · 5D · 6D · Lotto
            </div>
            <h1 className="mb-4 text-[clamp(38px,6vw,64px)] font-extrabold leading-[1.02] tracking-[-0.02em]">
              Malaysia Boleh!
              <br />
              Fortune for all Malaysians.
            </h1>
            <p className="mb-2 text-xl font-bold text-[#FFCC00]">财神到 · 恭喜发财</p>
            <p className="mb-8 max-w-[46ch] text-lg leading-relaxed text-white/75 text-pretty">
              Your daily lucky numbers, read from your birth chart by the God of Fortune. Enter your birthday, pick a
              lucky colour, and get fresh sets every day.
            </p>
            <StoreButtons onNavy />
            <p className="mt-4 text-sm text-white/55">Free · No account needed · Resets every midnight</p>
          </div>
          <div className="flex min-w-0 justify-center">
            <div className="w-full max-w-[340px]">
              <Shot src="4d.jpg" alt="TotoMY 4D lucky numbers screen" />
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="mx-auto max-w-[1180px] px-6 pb-8 pt-20">
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-[#05056B]/60">How it works</div>
        <h2 className="mb-12 max-w-[22ch] text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#05056B]">
          Three taps from birthday to lucky numbers.
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-10">
          {[
            {
              n: "01",
              title: "Tell 财神 about you",
              body: "Date of birth, gender and your lucky colour. Add your name if you like — it sharpens the reading.",
              src: "form.jpg",
              alt: "Birth chart input form",
            },
            {
              n: "02",
              title: "Your chart is read",
              body: "Your Kua number, Chinese zodiac, element and Lo Shu number are worked out from your birthday.",
              src: "chart.jpg",
              alt: "Birth chart summary with Kua, zodiac, element and Lo Shu",
            },
            {
              n: "03",
              title: "Reveal your numbers",
              body: "Four sets each for 3D, 4D, 5D and 6D, plus Lotto lines. Share your card with friends.",
              src: "3d.jpg",
              alt: "3D lucky numbers screen",
            },
          ].map((s) => (
            <div key={s.n} className="min-w-0">
              <div className="mx-auto mb-6 max-w-[320px]">
                <Shot src={s.src} alt={s.alt} />
              </div>
              <div className="mb-2 font-mono text-sm font-bold text-[#E0A800]">{s.n}</div>
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-[#05056B]">{s.title}</h3>
              <p className="text-[16px] leading-relaxed text-[#55555c]">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-[1180px] px-6 py-20">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {[
            ["Every game covered", "3D, 4D, 5D and 6D sets, plus Lotto lines for Supreme, Power, Star and Life."],
            ["Same stem, every length", "Your 4D pick carries through to 3D, 5D and 6D, so every length ends the same way."],
            ["Why these numbers", "See exactly what shaped your reading — Kua, zodiac, element, Lo Shu and your colour."],
            ["Fresh every day", "Numbers reset at midnight. Same inputs give the same numbers all day long."],
          ].map(([title, body]) => (
            <div key={title} className="rounded-3xl border border-black/5 bg-white p-7">
              <div className="mb-4 h-2 w-10 rounded-full bg-[#FFCC00]" />
              <h3 className="mb-2 text-lg font-bold text-[#05056B]">{title}</h3>
              <p className="text-[15px] leading-relaxed text-[#55555c]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other lengths */}
      <section className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-center gap-12 px-6 pb-20">
        <div className="mx-auto w-full max-w-[340px]">
          <Shot src="5d.jpg" alt="5D lucky numbers screen" />
        </div>
        <div className="min-w-0">
          <h2 className="mb-4 max-w-[20ch] text-[clamp(28px,4vw,42px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#05056B]">
            Switch games with one tap.
          </h2>
          <p className="max-w-[48ch] text-[17px] leading-relaxed text-[#55555c] text-pretty">
            Flip between 3D, 4D, 5D, 6D and Lotto at the top of the screen. Your first set is highlighted, and the
            other lengths are shown underneath — read them in the order shown.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: NAVY }} className="text-white">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-8 px-6 py-20">
          <div className="flex min-w-0 items-center gap-5">
            <Image src="/images/totomy-icon.png" alt="" width={88} height={88} className="rounded-3xl" />
            <div>
              <h2 className="mb-2 text-[clamp(28px,4vw,44px)] font-extrabold leading-none tracking-[-0.02em]">
                Ready for your <span style={{ color: GOLD }}>ong</span>?
              </h2>
              <p className="text-[17px] text-white/75">Free on iPhone and Android. No account needed.</p>
            </div>
          </div>
          <StoreButtons onNavy />
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1180px] flex-wrap items-baseline justify-between gap-4 px-6 pb-16 pt-10 text-sm text-[#8a8a92]">
        <div className="leading-relaxed">
          <div>Entertainment only. Not affiliated with any lottery operator. 18+ · Play responsibly.</div>
          <div>
            © 2026{" "}
            <Link href="/" className="font-semibold text-[#05056B] hover:underline">
              The JPMoreGain Project
            </Link>
          </div>
        </div>
        <div className="flex gap-5 font-semibold">
          <Link href="/privacy" className="text-[#05056B] hover:underline">Privacy</Link>
          <Link href="/terms" className="text-[#05056B] hover:underline">Terms</Link>
          <Link href="/" className="text-[#05056B] hover:underline">All projects</Link>
        </div>
      </footer>
    </main>
  );
}
