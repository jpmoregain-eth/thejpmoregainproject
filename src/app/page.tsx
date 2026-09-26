import { X_URL } from "@/components/site/SiteHeader";
import HeroCanvas from "./_home/HeroCanvas";
import ProjectGrid from "./_home/ProjectGrid";
import { projects } from "./_home/projects";
import styles from "./_home/home.module.css";

export default function Home() {
  return (
    <div className={`theme-lab ${styles.page}`}>
      <HeroCanvas />
      <div className={styles.overlay} aria-hidden="true" />

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
    </div>
  );
}
