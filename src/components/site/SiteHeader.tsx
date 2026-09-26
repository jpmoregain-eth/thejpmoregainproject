import Link from "next/link";
import styles from "./site.module.css";

export const X_URL = "https://x.com/jp_moregain";

export default function SiteHeader() {
  return (
    <header className={`theme-lab ${styles.header}`}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoMark} />
        <span className={styles.logoText}>JPMoreGain</span>
      </Link>
      <div className={styles.headerRight}>
        <nav className={styles.nav}>
          <Link href="/#projects">Projects</Link>
          <Link href="/about">About</Link>
          <a href={X_URL} target="_blank" rel="noopener noreferrer">
            X
          </a>
        </nav>
        {/* Slot pages can portal an action into (see /reallinkedin) */}
        <div id="navbar-action-slot" className={styles.slot} />
      </div>
    </header>
  );
}
