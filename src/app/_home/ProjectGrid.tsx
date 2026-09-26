"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./home.module.css";
import { CATEGORIES, projects, type Category } from "./projects";

type Filter = "All" | Category;

const FILTERS: Filter[] = ["All", ...CATEGORIES];

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <>
      <div className={styles.projectsHead}>
        <div>
          <div className={styles.label}>{"// our projects"}</div>
          <h2 className={styles.h2}>What we&apos;re building</h2>
        </div>
        <div className={styles.filters}>
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`${styles.filter} ${f === filter ? styles.filterActive : ""}`}
              aria-pressed={f === filter}
            >
              {f}{" "}
              <span className={styles.filterCount}>
                {f === "All" ? projects.length : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.grid}>
        {list.map((p, i) => {
          const external = p.url.startsWith("http");
          return (
            <Link
              key={p.name}
              href={p.url}
              className={styles.card}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <div className={styles.cardMeta}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.accent}>{p.category}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.cardFoot}>
                <div className={styles.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
