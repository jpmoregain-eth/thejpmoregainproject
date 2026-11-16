import "./pathway.css";

const PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.thejpmoregainproject.pathwayofeternity";
const SUPPORT_EMAIL = "moregainjp@gmail.com";
const IMG = "/images/pathway-of-eternity";

const FEATURES = [
  {
    icon: "sword.png",
    title: "Tap. Strike. Descend.",
    text: "Tap to strike while your gear fights on its own. Battle 128 monsters across ten dungeon regions, each with its own factions, curses and mighty Guardians.",
  },
  {
    icon: "ui_bag.png",
    title: "Hunt epic loot",
    text: "Six gear slots, four rarities, up to six bonus stats per item and ten tiers each. Every drop could carry you ten stages deeper.",
  },
  {
    icon: "ui_forge.png",
    title: "Craft your perfect gear",
    text: "Add, swap, reroll and lock stats at the Forge, gamble with a Touch of Eternity, and reinforce your best pieces all the way to +10.",
  },
  {
    icon: "ui_shrine.png",
    title: "Grow stronger forever",
    text: "Return to the town of Emberhold, earn Eternity Shards and unlock 38 permanent blessings. Every journey makes the next one stronger.",
  },
  {
    icon: "wisp_gold.png",
    title: "Catch Ember Wisps",
    text: "Tap drifting wisps for bursts of damage, gold, speed and luck — or risk a dark wisp for a bigger reward.",
  },
  {
    icon: "portal.png",
    title: "Step through rare portals",
    text: "Dream realms and lightless depths hide their own creatures, Guardians and treasures.",
  },
  {
    icon: "ui_setout.png",
    title: "Progress while away",
    text: "Your hero keeps fighting while the game is closed. Come back to new loot, deeper stages and the story of what happened.",
  },
  {
    icon: "ui_bestiary.png",
    title: "Lore to uncover",
    text: "A Bestiary full of faction histories, wandering characters with tales of the Pathway, achievements and hidden feats.",
  },
];

const SHOTS = [
  "Tap to strike in an endless dungeon",
  "Epic loot with six affixes",
  "Catch Ember Wisps",
  "Rare portals to dream realms",
  "Return to Emberhold",
  "Craft and reinforce your gear",
  "38 permanent blessings",
  "Progress while you're away",
];

const FAQ = [
  {
    q: "Is it free?",
    a: "Yes. Pathway of Eternity is free to play and supported by ads. There are no purchases.",
  },
  {
    q: "Do I need an account or internet?",
    a: "No account is needed and the game plays offline. Your progress is saved on your device; ads need an internet connection.",
  },
  {
    q: "How do I move my hero to a new phone?",
    a: "Open Settings → Your save → Export and copy (or share) your save code. On the new phone, install the game and use Settings → Your save → Import.",
  },
  {
    q: "How do I start over?",
    a: "Settings → Your save → Reset. Export your save code first if you might want your hero back.",
  },
  {
    q: "Is it on iPhone and iPad?",
    a: "The App Store version is on its way. It's available now on Google Play for Android phones and tablets.",
  },
];

function PlayButton({ className = "" }: { className?: string }) {
  return (
    <a className={`poe-btn poe-btn-play ${className}`} href={PLAY_URL} target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="poe-btn-icon">
        <path d="M3.6 2.3c-.3.3-.5.8-.5 1.4v16.6c0 .6.2 1.1.5 1.4l.1.1 9.3-9.3v-.2L3.7 2.2l-.1.1z" fill="#00d7fe" />
        <path d="M16.1 15.6 13 12.5v-.2l3.1-3.1.1.1 3.7 2.1c1 .6 1 1.6 0 2.2l-3.7 2.1-.1-.1z" fill="#ffbc00" />
        <path d="m16.2 15.5-3.2-3.2-9.4 9.4c.4.4.9.4 1.6.1l11-6.3" fill="#ef4a5f" />
        <path d="M16.2 9.1 5.2 2.8c-.7-.4-1.2-.3-1.6.1l9.4 9.4 3.2-3.2z" fill="#00f076" />
      </svg>
      <span>
        <small>Get it on</small>
        Google Play
      </span>
    </a>
  );
}

export default function PathwayOfEternityPage() {
  return (
    <div className="poe">
      {/* Hero */}
      <section className="poe-hero" style={{ backgroundImage: `url(${IMG}/hero.jpg)` }}>
        <div className="poe-hero-shade" />
        <div className="poe-wrap poe-hero-inner">
          <img className="poe-icon" src={`${IMG}/icon.png`} alt="Pathway of Eternity app icon" width={112} height={112} />
          <h1 className="poe-title">
            Pathway<span>of</span>Eternity
          </h1>
          <p className="poe-tagline">How far will you walk?</p>
          <p className="poe-lead">
            An idle dungeon RPG in hand-crafted pixel art. Tap to strike, loot epic gear, craft your
            perfect build — and push deeper with every journey.
          </p>
          <div className="poe-ctas">
            <PlayButton />
            <span className="poe-btn poe-btn-soon" aria-disabled="true">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="poe-btn-icon">
                <path
                  fill="currentColor"
                  d="M16.4 12.6c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8 0 0-2.4-1-2.4-4zM14 5.4c.7-.8 1.1-1.9 1-3-1 0-2.1.7-2.8 1.5-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.4z"
                />
              </svg>
              <span>
                <small>Coming soon</small>
                App Store
              </span>
            </span>
          </div>
          <p className="poe-meta">Free · Offline play · No account needed · Android phones & tablets</p>
        </div>
      </section>

      {/* Features */}
      <section className="poe-section">
        <div className="poe-wrap">
          <h2 className="poe-h2">An endless descent</h2>
          <div className="poe-grid">
            {FEATURES.map((f) => (
              <article className="poe-card" key={f.title}>
                <img src={`${IMG}/icons/${f.icon}`} alt="" width={56} height={56} />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="poe-section poe-section-dark">
        <div className="poe-wrap">
          <h2 className="poe-h2">Screenshots</h2>
        </div>
        <div className="poe-shots" tabIndex={0} aria-label="Screenshots, scroll sideways">
          {SHOTS.map((alt, i) => (
            <img key={alt} src={`${IMG}/shot-${i + 1}.jpg`} alt={alt} width={270} height={480} loading="lazy" />
          ))}
        </div>
      </section>

      {/* Emberhold band */}
      <section className="poe-band" style={{ backgroundImage: `url(${IMG}/emberhold.jpg)` }}>
        <div className="poe-band-shade" />
        <div className="poe-wrap poe-band-inner">
          <h2 className="poe-h2">Return to Emberhold</h2>
          <p>
            Between journeys, the town at the mouth of the Pathway waits: the Shrine for permanent
            blessings, the Merchant, the Forge for crafting, and a Wishing Well for spare gold.
          </p>
          <PlayButton />
        </div>
      </section>

      {/* FAQ + support */}
      <section className="poe-section" id="support">
        <div className="poe-wrap poe-narrow">
          <h2 className="poe-h2">Questions & support</h2>
          <div className="poe-faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
          <div className="poe-support">
            <h3>Need help?</h3>
            <p>
              Found a bug, lost progress or have an idea? Email us and we&apos;ll get back to you.
            </p>
            <a className="poe-btn poe-btn-gold" href={`mailto:${SUPPORT_EMAIL}?subject=Pathway%20of%20Eternity%20support`}>
              {SUPPORT_EMAIL}
            </a>
            <p className="poe-small">
              <a href="/privacy">Privacy policy</a> · <a href="/terms">Terms</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
