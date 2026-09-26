import Link from "next/link";
import styles from "./site.module.css";
import { X_URL } from "./SiteHeader";

export default function SiteFooter() {
  return (
    <footer className={`theme-lab ${styles.footer}`}>
      <div className={styles.wordmark} aria-hidden="true">
        JPMoreGain
      </div>
      <div className={styles.footRow}>
        <span>
          © {new Date().getFullYear()} The JPMoreGain Project. Built with AI, caffeine, and
          questionable financial metaphors.
        </span>
        <div className={styles.footLinks}>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href={X_URL} target="_blank" rel="noopener noreferrer">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
