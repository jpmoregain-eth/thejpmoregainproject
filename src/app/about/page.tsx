import { Metadata } from "next";
import DocPage, { DocSection } from "@/components/site/DocPage";
import styles from "@/components/site/site.module.css";
import { projects, type Category } from "../_home/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The JPMoreGain Project - a one-person technology lab in Singapore shipping AI-powered web tools, agent tools and mobile apps.",
};

const count = (c: Category) => projects.filter((p) => p.category === c).length;

const BUILD = [
  {
    cat: "Web & AI" as const,
    title: "AI-powered web tools",
    desc: "News sites, generators and assistants that put large language models to work — some useful, some deliberately silly.",
  },
  {
    cat: "Mobile Apps" as const,
    title: "Mobile apps",
    desc: "Everyday apps on the App Store and Google Play: lottery results for Singapore and Malaysia, daily verses, property, sleep and focus, and a retro RPG.",
  },
  {
    cat: "Agent Tools" as const,
    title: "Agent tools",
    desc: "Open-source tools for OpenClaw power users — memory, backup and migration, and video summaries — published on GitHub and ClawHub.",
  },
];

export default function AboutPage() {
  return (
    <DocPage
      label="About"
      title={
        <>
          The story behind <span className={styles.accent}>JPMoreGain.</span>
        </>
      }
      lede="Where a veteran storage engineer meets the wild frontier of AI."
    >
      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>{projects.length}</span>
          <span className={styles.statLabel}>Projects shipped</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>{count("Mobile Apps")}</span>
          <span className={styles.statLabel}>Mobile apps</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statNum}>20+</span>
          <span className={styles.statLabel}>Years in infrastructure</span>
        </div>
      </div>

      <DocSection num={1} title="The project">
        <p>
          The JPMoreGain Project started as a simple idea: what happens when a veteran storage
          engineer with two decades of enterprise infrastructure experience decides to explore
          the wild frontier of AI?
        </p>
        <p>
          The answer, it turns out, is a lot of late nights, a lot of coffee, and a surprisingly
          diverse collection of projects — {projects.length} shipped so far, from AI web tools to
          apps on the App Store and Google Play.
        </p>
        <p>
          Founded in 2013 in Singapore, The JPMoreGain Project is a one-person technology lab
          building tools, apps and experiments at the intersection of artificial intelligence,
          technology and creativity. Some projects are serious (an AI news platform tracking the
          frontier of machine learning, or lottery results for Singapore and Malaysia in your
          pocket). Some are playful (a presidential speech generator that is probably too
          accurate for comfort, or an RPG where you fight bugs and the Legacy Dragon). All of
          them are built with genuine curiosity and a belief that technology should be
          accessible, useful, and occasionally funny.
        </p>
        <p>
          The name? <strong>JPMoreGain</strong> is a nod to the world of finance — where gains
          are everything and losses are just lessons in disguise. It reflects the philosophy
          behind every project: take calculated risks, build fast, learn faster, and always look
          for the alpha.
        </p>
      </DocSection>

      <DocSection num={2} title="The human behind it">
        <p>
          Derek is a Storage Infrastructure Engineer based in Singapore with over 20 years of
          experience in enterprise storage and data infrastructure. By day, he designs and
          maintains the storage systems that keep businesses running — the invisible foundation
          that most people never think about until something goes wrong.
        </p>
        <p>
          By night (and weekends, and lunch breaks), he explores the rapidly evolving world of AI
          — building agents, deploying language models, and shipping web and mobile apps. The
          JPMoreGain Project is where these two worlds collide: deep infrastructure expertise
          meets cutting-edge AI experimentation.
        </p>
        <p>
          Derek believes in building things that are honest, useful, and human. No hype, no
          buzzword bingo, no pretending AI is magic. Just real tools for real problems, built by
          someone who has spent two decades understanding how technology actually works under the
          hood.
        </p>
      </DocSection>

      <DocSection num={3} title="What we build">
        <div className={styles.tiles}>
          {BUILD.map((b) => (
            <div key={b.cat} className={styles.tile}>
              <div className={styles.tileMeta}>
                <span className={styles.accent}>{b.cat}</span>
                <span>{String(count(b.cat)).padStart(2, "0")}</span>
              </div>
              <h3 className={styles.tileTitle}>{b.title}</h3>
              <p className={styles.tileDesc}>{b.desc}</p>
            </div>
          ))}
          <div className={styles.tile}>
            <div className={styles.tileMeta}>
              <span className={styles.accent}>Local first</span>
            </div>
            <h3 className={styles.tileTitle}>Made in Singapore</h3>
            <p className={styles.tileDesc}>
              Built for the community closest to home — Singapore and Malaysia — because the best
              technology serves the people around you.
            </p>
          </div>
        </div>
      </DocSection>

      <DocSection num={4} title="Want to connect?">
        <p>
          Whether you have a question about one of the apps, a project idea, or just want to say
          hello — feel free to reach out.
        </p>
        <p>
          <a href="mailto:moregainjp@gmail.com" className={styles.btn}>
            <span>moregainjp@gmail.com</span>
            <span>↗</span>
          </a>
        </p>
      </DocSection>
    </DocPage>
  );
}
