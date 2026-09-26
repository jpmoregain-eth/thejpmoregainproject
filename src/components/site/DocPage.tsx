import styles from "./site.module.css";

/** Page frame for the text pages (About, Privacy, Terms) in the lab theme. */
export default function DocPage({
  label,
  title,
  meta,
  lede,
  children,
}: {
  label: string;
  title: React.ReactNode;
  meta?: React.ReactNode;
  lede?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={`theme-lab ${styles.docPage}`}>
      <div className={styles.docGlow} aria-hidden="true" />
      <div className={styles.docInner}>
        <header className={styles.docHead}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>{label}</span>
          </div>
          <h1 className={styles.docTitle}>{title}</h1>
          {lede && <p className={styles.lede}>{lede}</p>}
          {meta && <p className={styles.meta}>{meta}</p>}
        </header>
        {children}
      </div>
    </div>
  );
}

export function DocSection({
  num,
  title,
  id,
  children,
}: {
  num: number;
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionNum}>{String(num).padStart(2, "0")}</div>
      <div className={styles.sectionBody}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <div className={styles.prose}>{children}</div>
      </div>
    </section>
  );
}

export function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className={styles.callout}>
      <p className={styles.calloutTitle}>{title}</p>
      {children}
    </div>
  );
}

export function ContactCard() {
  return (
    <div className={styles.contact}>
      <div>
        <span className={styles.contactKey}>Email</span>
        <a href="mailto:moregainjp@gmail.com">moregainjp@gmail.com</a>
      </div>
      <div>
        <span className={styles.contactKey}>Location</span>
        <span>Singapore</span>
      </div>
    </div>
  );
}
