import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import HeroCanvas from "./_home/HeroCanvas";
import ProjectGrid from "./_home/ProjectGrid";
import { projects } from "./_home/projects";
import styles from "./_home/home.module.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const X_URL = "https://x.com/jp_moregain";

export default function Home() {
  return (
    <div className={`${styles.page} ${spaceGrotesk.className}`}>
      <HeroCanvas />
      <div className={styles.overlay} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark} />
          <span>JPMoreGain</span>
        </Link>
        <nav className={styles.nav}>
          <a href="#projects">Projects</a>
          <Link href="/about">About</Link>
          <a href={X_URL} target="_blank" rel="noopener noreferrer">
            X
          </a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          <span>SINGAPORE · {projects.length} PROJECTS SHIPPED</span>
        </div>
        <h1 className={styles.h1}>
          Where technology meets <span className={styles.accent}>alpha.</span>
        </h1>
        <p className={styles.sub}>
          The JPMoreGain Project builds AI-powered tools, platforms and experiments at the
          intersection of technology, finance and creativity.
        </p>
        <div className={styles.ctas}>
          <a href="#projects" className={`${styles.btn} ${styles.btnPrimary}`}>
            <span>Explore the lab</span>
            <span>↓</span>
          </a>
          <a
            href={X_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnGhost}`}
          >
            <span>Follow @jp_moregain</span>
          </a>
        </div>
        <div className={styles.heroStrip}>
          <span>{"// move your cursor through the field"}</span>
          <span>scroll ↓</span>
        </div>
      </section>

      <section id="projects" className={styles.projects}>
        <ProjectGrid />
      </section>

      <footer className={styles.footer}>
        <div className={styles.wordmark}>JPMoreGain</div>
        <div className={styles.footRow}>
          <span>
            © {new Date().getFullYear()} The JPMoreGain Project. Built with AI, caffeine, and
            questionable financial metaphors.
          </span>
          <div className={styles.footLinks}>
            <Link href="/about">About</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
