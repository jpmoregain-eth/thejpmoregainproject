export const CATEGORIES = ["Web & AI", "Agent Tools", "Mobile Apps"] as const;

export type Category = (typeof CATEGORIES)[number];

export type Project = {
  name: string;
  category: Category;
  description: string;
  tags: string[];
  url: string;
};

export const projects: Project[] = [
  {
    name: "AgentBear Corps",
    category: "Web & AI",
    description:
      "AI-powered news platform covering the frontier of artificial intelligence. Breaking stories, hot takes and deep analysis.",
    tags: ["AI", "News", "Next.js"],
    url: "https://agentbearcorps.com",
  },
  {
    name: "Covfefe",
    category: "Web & AI",
    description:
      "AI presidential speech generator. Type any topic and get a speech in the style of the 45th President.",
    tags: ["AI", "Humor", "Groq"],
    url: "https://covfefe69.vercel.app",
  },
  {
    name: "Virtual MPS",
    category: "Web & AI",
    description:
      "A virtual Meet-the-People Session for Singapore. Ask about government policies and get helpful guidance.",
    tags: ["AI", "Singapore", "Groq"],
    url: "https://mpsg.vercel.app",
  },
  {
    name: "AI Roleplay Arena",
    category: "Web & AI",
    description:
      "An opt-in playground where AI agents adopt absurd personas — from emo tech bros to Shakespearean pirates.",
    tags: ["AI", "Personas", "Open Source"],
    url: "https://ai-roleplay-arena.vercel.app",
  },
  {
    name: "Storage Array History",
    category: "Web & AI",
    description:
      "Archive of enterprise storage arrays — 50+ spec sheets from DellEMC, IBM, HPE, NetApp and more, 2000–2025.",
    tags: ["Storage", "Archive"],
    url: "https://storage-array-history.vercel.app",
  },
  {
    name: "Heng Heng Casino",
    category: "Web & AI",
    description:
      "Side project for a good friend who loves running casino games at home in his spare time.",
    tags: ["Next.js", "React", "TS"],
    url: "https://henghengcasino.vercel.app",
  },
  {
    name: "DragonClaw",
    category: "Agent Tools",
    description:
      "AI tools for OpenClaw power users, incl. a bilingual YouTube & Bilibili video summarizer.",
    tags: ["OpenClaw", "Bilingual"],
    url: "https://github.com/jpmoregain-eth/dragonclaw",
  },
  {
    name: "OpenClaw BRM",
    category: "Agent Tools",
    description:
      "Backup, recovery and migration CLI for OpenClaw agents. Move agents between systems with one command.",
    tags: ["CLI", "DevOps", "Python"],
    url: "https://github.com/jpmoregain-eth/openclaw-brm",
  },
  {
    name: "Tiered Memory",
    category: "Agent Tools",
    description:
      "Two-tier memory for OpenClaw agents: QMD semantic search for hot memories, SQLite archive with LLM summaries.",
    tags: ["ClawHub", "Memory"],
    url: "https://clawhub.com/jpmoregain-eth/agent-tiered-memory",
  },
  {
    name: "Fork This Dragon",
    category: "Mobile Apps",
    description:
      "A retro text RPG with developer humor. Fight bugs, gear up, and challenge the Legacy Dragon.",
    tags: ["Game", "RPG", "Android"],
    url: "/fork-this-dragon",
  },
  {
    name: "Ayah",
    category: "Mobile Apps",
    description:
      "Daily Quran verse app with audio recitation, shareable quote cards and wallpapers.",
    tags: ["Flutter", "Android"],
    url: "/ayah",
  },
  {
    name: "Gita",
    category: "Mobile Apps",
    description:
      "Daily Bhagavad Gita shloka companion with Sanskrit verses, translations and audio.",
    tags: ["Flutter", "Android"],
    url: "/gita",
  },
  {
    name: "This Is Home",
    category: "Mobile Apps",
    description:
      "Singapore property app with news, sales listings, rentals and market trends.",
    tags: ["React Native", "Property"],
    url: "/this-is-home",
  },
  {
    name: "SG Lottery 4D TOTO",
    category: "Mobile Apps",
    description:
      "Latest Singapore Pools 4D & TOTO results, history, lucky number generator and prize breakdowns.",
    tags: ["iOS", "Android"],
    url: "/sg-lottery-4d-toto",
  },
  {
    name: "Jing",
    category: "Mobile Apps",
    description:
      "Your personal sanctuary of calm. Immersive soundscapes and gentle sessions for sleep and focus.",
    tags: ["Wellness", "iOS", "Android"],
    url: "/jing",
  },
  {
    name: "4D TOTO MY",
    category: "Mobile Apps",
    description:
      "Malaysian 3D–6D and Lotto results for Magnum, Sports Toto and Da Ma Cai, plus daily lucky numbers.",
    tags: ["Malaysia", "iOS", "Android"],
    url: "/totomy",
  },
];
