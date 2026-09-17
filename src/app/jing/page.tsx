import Image from "next/image";
import "./jing.css";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/jing-%E9%9D%99-sleep-study-focus/id6789123531";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.yourdomain.quietude";

const features = [
  {
    image: "/images/jing/jingphone4.png",
    alt: "Curated soundscapes library",
    title: "Curated soundscapes",
    body: "Rain, drone, night, water — a library worth returning to, not a wall of clips.",
  },
  {
    image: "/images/jing/jingphone3.png",
    alt: "Session duration picker",
    title: "Sessions that fit",
    body: "15 to 90 minutes, or endless. Full volume to the end — nothing interrupts it.",
  },
  {
    image: "/images/jing/jingphone1.png",
    alt: "Countdown session in progress",
    title: "Drift off faster",
    body: "A gentle countdown that fades on its own, so you never wake up to turn it off.",
  },
];

const stats = [
  { word: "Quieter", label: "NIGHTS" },
  { word: "Calmer", label: "DAYS" },
  { word: "Brighter", label: "MORNINGS" },
  { word: "All", label: "WITHIN REACH" },
];

export default function JingPage() {
  return (
    <div className="jingPage">
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: "22px clamp(20px,5vw,64px)",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span className="jingSerif" style={{ fontSize: 26, color: "#d9c17d" }}>
            静
          </span>
          <span style={{ letterSpacing: ".42em", fontSize: 13, color: "#cfc6b2" }}>
            JING
          </span>
        </div>
        <a
          href="#get"
          className="headerPill"
          style={{
            padding: "10px 20px",
            borderRadius: 2,
            fontSize: 12,
            letterSpacing: ".22em",
          }}
        >
          GET THE APP
        </a>
      </header>

      <section
        style={{
          position: "relative",
          padding: "clamp(40px,7vw,90px) clamp(20px,5vw,64px) clamp(60px,8vw,110px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "center",
          maxWidth: 1320,
          margin: "0 auto",
        }}
      >
        <div
          className="jingGlow"
          style={{
            position: "absolute",
            inset: "-10% -10% auto -20%",
            height: "70vh",
            background:
              "radial-gradient(ellipse at 20% 40%, rgba(217,193,125,.16), transparent 62%)",
            pointerEvents: "none",
          }}
        />

        <div className="jingRiseCopy" style={{ position: "relative" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: ".34em",
              color: "#9a9075",
              marginBottom: 22,
            }}
          >
            SLEEP · FOCUS · CALM
          </div>
          <h1
            className="jingSerif"
            style={{
              fontWeight: 400,
              fontSize: "clamp(46px,7vw,86px)",
              lineHeight: 1.02,
              margin: "0 0 22px",
              color: "#fbf6ea",
            }}
          >
            Quiet your mind,
            <br />
            <em style={{ color: "#e3cd95", fontStyle: "italic" }}>
              one night at a time.
            </em>
          </h1>
          <p
            style={{
              fontSize: "clamp(17px,1.5vw,20px)",
              lineHeight: 1.6,
              color: "#c9c1af",
              maxWidth: "46ch",
              margin: "0 0 34px",
            }}
          >
            Jing is a sleep and focus companion: immersive soundscapes,
            gentle countdown sessions, and nothing that interrupts you.
          </p>

          <div
            id="get"
            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 22 }}
          >
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
              className="appStoreButton"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 13,
                minHeight: 56,
                padding: "12px 26px",
                borderRadius: 6,
                color: "#14140f",
              }}
            >
              <svg
                width="22"
                height="26"
                viewBox="0 0 24 28"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17 14.6c0-3 2.4-4.4 2.5-4.5-1.4-2-3.5-2.3-4.2-2.3-1.8-.2-3.5 1-4.4 1-.9 0-2.3-1-3.8-1-2 0-3.8 1.2-4.8 3-2 3.5-.5 8.7 1.5 11.5 1 1.4 2.1 2.9 3.7 2.8 1.5-.1 2-.9 3.8-.9 1.8 0 2.3.9 3.8.9 1.6 0 2.6-1.4 3.6-2.8.8-1.1 1.1-1.7 1.7-3-3-1.1-3.4-4.6-3.4-4.7ZM14.7 5.2c.8-1 1.3-2.4 1.2-3.8-1.2.1-2.7.8-3.5 1.8-.8.9-1.4 2.3-1.2 3.6 1.3.1 2.7-.6 3.5-1.6Z" />
              </svg>
              <span style={{ lineHeight: 1.15 }}>
                <span style={{ display: "block", fontSize: 10, letterSpacing: ".2em", opacity: 0.6 }}>
                  DOWNLOAD ON THE
                </span>
                <span style={{ display: "block", fontSize: 19, fontWeight: 400 }}>
                  App Store
                </span>
              </span>
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener"
              className="playButton"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 13,
                minHeight: 56,
                padding: "12px 26px",
                borderRadius: 6,
                color: "#f2ece0",
              }}
            >
              <span style={{ lineHeight: 1.15 }}>
                <span style={{ display: "block", fontSize: 10, letterSpacing: ".2em", opacity: 0.55 }}>
                  GET IT ON
                </span>
                <span style={{ display: "block", fontSize: 19, fontWeight: 400 }}>
                  Google Play
                </span>
              </span>
            </a>
          </div>
          <div style={{ fontSize: 13, letterSpacing: ".06em", color: "#8e856d" }}>
            Free to start · No ads · Works offline
          </div>
        </div>

        <div
          className="jingRisePhone"
          style={{ position: "relative", display: "flex", justifyContent: "center" }}
        >
          <Image
            src="/images/jing/jingphone2.png"
            alt="Jing app — choose your night"
            width={1242}
            height={2688}
            priority
            sizes="(max-width: 740px) 90vw, 440px"
            style={{
              width: "100%",
              maxWidth: 440,
              height: "auto",
              borderRadius: 18,
              boxShadow: "0 40px 90px rgba(0,0,0,.65)",
            }}
          />
        </div>
      </section>

      <section
        style={{
          padding: "clamp(48px,7vw,96px) clamp(20px,5vw,64px)",
          borderTop: "1px solid rgba(232,217,168,.12)",
          maxWidth: 1320,
          margin: "0 auto",
        }}
      >
        <h2
          className="jingSerif"
          style={{
            fontWeight: 400,
            fontSize: "clamp(32px,4vw,52px)",
            margin: "0 0 12px",
            color: "#fbf6ea",
          }}
        >
          Built for the hour you can&apos;t sleep
        </h2>
        <p
          style={{
            color: "#a99f89",
            maxWidth: "52ch",
            margin: "0 0 48px",
            fontSize: 17,
            lineHeight: 1.6,
          }}
        >
          Three things, done carefully.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,260px),1fr))",
            gap: "clamp(24px,3vw,40px)",
          }}
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{ display: "flex", flexDirection: "column", gap: 14 }}
            >
              <Image
                src={feature.image}
                alt={feature.alt}
                width={1242}
                height={2688}
                loading="lazy"
                sizes="(max-width: 740px) 90vw, 33vw"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  objectPosition: "50% 68%",
                  borderRadius: 12,
                  border: "1px solid rgba(232,217,168,.12)",
                }}
              />
              <h3
                className="jingSerif"
                style={{
                  fontWeight: 400,
                  fontSize: 26,
                  margin: "6px 0 0",
                  color: "#f4eddf",
                }}
              >
                {feature.title}
              </h3>
              <p style={{ margin: 0, color: "#a99f89", fontSize: 16, lineHeight: 1.6 }}>
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "clamp(48px,7vw,96px) clamp(20px,5vw,64px)",
          borderTop: "1px solid rgba(232,217,168,.12)",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))",
            gap: "clamp(24px,3vw,48px)",
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div
                className="jingSerif"
                style={{ fontSize: "clamp(34px,4vw,48px)", color: "#e3cd95", lineHeight: 1 }}
              >
                {stat.word}
              </div>
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: ".28em",
                  color: "#8e856d",
                  marginTop: 10,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          position: "relative",
          padding: "clamp(64px,9vw,130px) clamp(20px,5vw,64px)",
          textAlign: "center",
          borderTop: "1px solid rgba(232,217,168,.12)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: "120%",
            height: "100%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(217,193,125,.18), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
          <div className="jingSerif" style={{ fontSize: 30, color: "#d9c17d", marginBottom: 20 }}>
            静
          </div>
          <h2
            className="jingSerif"
            style={{
              fontWeight: 400,
              fontSize: "clamp(38px,5.5vw,68px)",
              lineHeight: 1.05,
              margin: "0 0 20px",
              color: "#fbf6ea",
            }}
          >
            Tonight can be different.
          </h2>
          <p style={{ color: "#b8af9a", fontSize: 18, lineHeight: 1.6, margin: "0 0 36px" }}>
            Available now on iPhone and Android.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener"
              className="appStoreButton"
              style={{
                minHeight: 56,
                display: "flex",
                alignItems: "center",
                padding: "14px 34px",
                borderRadius: 6,
                fontSize: 16,
                letterSpacing: ".04em",
                color: "#14140f",
              }}
            >
              Download for iPhone
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener"
              className="playButton"
              style={{
                minHeight: 56,
                display: "flex",
                alignItems: "center",
                padding: "14px 34px",
                borderRadius: 6,
                fontSize: 16,
                letterSpacing: ".04em",
                color: "#f2ece0",
              }}
            >
              Get it on Google Play
            </a>
          </div>
        </div>
      </section>

      <footer
        style={{
          padding: "34px clamp(20px,5vw,64px) 48px",
          borderTop: "1px solid rgba(232,217,168,.12)",
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 12, letterSpacing: ".3em", color: "#7d7561" }}>
          SLEEP MORE MINDFULLY
        </div>
        <div style={{ fontSize: 13, color: "#7d7561" }}>
          © 2026 The JP MoreGain Project
        </div>
      </footer>
    </div>
  );
}
