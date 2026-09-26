import Image from "next/image";
import Link from "next/link";
import s from "./verbum.module.css";

const PLAY = "https://play.google.com/store/apps/details?id=com.thejpmoregainproject.verbum";

// Screenshots are pre-cropped to 1080×1990 and exported at 720px wide
const SHOT_W = 720;
const SHOT_H = 1327;

function Phone({
  src,
  alt,
  variant = "md",
  priority,
  className = "",
}: {
  src: string;
  alt: string;
  variant?: "hero" | "md" | "sm";
  priority?: boolean;
  className?: string;
}) {
  const sizes = variant === "hero" ? "320px" : variant === "md" ? "300px" : "250px";
  const size = variant === "hero" ? s.phoneHero : variant === "md" ? s.phoneMd : s.phoneSm;
  return (
    <div className={`${s.phone} ${size} ${className}`}>
      <div className={s.screen}>
        <Image src={src} alt={alt} width={SHOT_W} height={SHOT_H} sizes={sizes} priority={priority} />
      </div>
    </div>
  );
}

function PlayButton({ wide }: { wide?: boolean }) {
  return (
    <a href={PLAY} className={`${s.play} ${wide ? s.playWide : ""}`}>
      <span className={s.playSmall}>Get it on</span>
      <span className={s.playBig}>Google Play</span>
    </a>
  );
}

function Rule({ children }: { children: string }) {
  return (
    <div className={s.rule}>
      <span>{children}</span>
      <span className={s.ruleLine} />
    </div>
  );
}

export default function VerbumPage() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headerInner}>
          <a href="#top" className={s.wordmark}>
            VERBUM
          </a>
          <nav className={s.nav}>
            <div className={s.navLinks}>
              <a href="#today">Today</a>
              <a href="#books">Books</a>
              <a href="#search">Search</a>
            </div>
            <a href={PLAY} className={s.download}>
              Download
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className={s.hero}>
        <div className={s.heroBg} aria-hidden="true" />
        <div className={s.heroShade} aria-hidden="true" />
        <div className={`${s.grid} ${s.heroGrid}`}>
          <div className={s.heroText}>
            <div className={`${s.eyebrow} ${s.gold}`}>Daily Bible Verse · Android</div>
            <h1 className={s.h1}>VERBUM</h1>
            <p className={s.tagline}>Lucerna pedibus meis verbum tuum.</p>
            <p className={s.heroBody}>
              One verse each morning, set in Jerome’s Latin Vulgate beside the King James Version.
              Then all 66 books and 30,000+ verses, whenever you want to go deeper.
            </p>
            <div className={s.ctaRow}>
              <PlayButton />
              <span className={s.ctaNote}>Free · No account needed</span>
            </div>
          </div>
          <div className={s.center}>
            <Phone src="/images/verbum/splash.webp" alt="Verbum splash screen" variant="hero" priority />
          </div>
        </div>
      </section>

      <section className={s.quote}>
        <div className={s.eyebrow}>Genesis 1 : 1</div>
        <p className={s.quoteLatin}>In principio creavit Deus caelum et terram.</p>
        <p className={s.quoteEnglish}>In the beginning God created the heaven and the earth.</p>
      </section>

      <section id="today" className={`${s.grid} ${s.feature} ${s.today}`}>
        <div className={s.center}>
          <Phone src="/images/verbum/today.webp" alt="Today's verse screen" />
        </div>
        <div className={s.copy}>
          <Rule>I · Today</Rule>
          <h2 className={s.h2}>A new verse, every morning.</h2>
          <p className={s.body}>
            Each day opens on a curated scripture from the most beloved passages of both
            Testaments — the Latin above, the English beneath, set against photography chosen for
            quiet reflection.
          </p>
          <div className={s.list}>
            <div className={s.listRow}>
              <span>Daily notification</span>
              <span className={s.muted}>The verse, delivered</span>
            </div>
            <div className={s.listRow}>
              <span>Ambient chant</span>
              <span className={s.muted}>For devotional time</span>
            </div>
            <div className={s.listRow}>
              <span>Adjustable text</span>
              <span className={s.muted}>Read comfortably</span>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className={s.band}>
        <div className={`${s.grid} ${s.feature}`}>
          <div className={s.copy}>
            <Rule>II · Books</Rule>
            <h2 className={s.h2}>Genesis to Revelation, grouped by canon.</h2>
            <p className={s.body}>
              Sixty-six books in ten groups — from the Pentateuch and the Prophets to the Gospels,
              the Letters and Revelation. Every book, every chapter, every verse.
            </p>
            <div className={s.stats}>
              {[
                ["66", "Books"],
                ["10", "Groups"],
                ["2", "Testaments"],
              ].map(([n, label]) => (
                <div key={label} className={s.stat}>
                  <span className={s.statNum}>{n}</span>
                  <span className={s.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={s.pair}>
            <Phone
              src="/images/verbum/books-old.webp"
              alt="Old Testament books"
              variant="sm"
              className={s.stagger}
            />
            <Phone src="/images/verbum/books-new.webp" alt="New Testament books" variant="sm" />
          </div>
        </div>
      </section>

      <section id="search" className={`${s.grid} ${s.feature}`}>
        <div className={s.center}>
          <Phone src="/images/verbum/search.webp" alt="Search screen" />
        </div>
        <div className={s.copy}>
          <Rule>III · Search</Rule>
          <h2 className={s.h2}>Search the Word, in either tongue.</h2>
          <p className={s.body}>
            Look up any of 30,000+ verses by Latin text, English keyword, or book name. Matched
            words are highlighted in gold.
          </p>
          <div className={s.chips} aria-hidden="true">
            <span className={s.chip}>LATIN</span>
            <span className={s.chip}>ENGLISH</span>
            <span className={s.chip}>BOOK</span>
          </div>
        </div>
      </section>

      <section className={s.closing}>
        <div className={s.closingInner}>
          <div className={`${s.eyebrow} ${s.gold}`}>The Latin Vulgate</div>
          <p className={s.statement}>
            Jerome’s fourth-century translation, paired with the King James — so you hear the Word
            as it has echoed through the centuries.
          </p>
          <p className={s.closingSub}>No clutter, no noise. No account, no sign-up.</p>
          <PlayButton wide />
        </div>
      </section>

      <footer className={s.footer}>
        <span className={s.footWordmark}>VERBUM</span>
        <div className={s.footLinks}>
          <Link href="/">The JPMoreGain Project</Link>
          <Link href="/privacy">Privacy</Link>
          <a href="mailto:moregainjp@gmail.com">Support</a>
        </div>
      </footer>
    </div>
  );
}
