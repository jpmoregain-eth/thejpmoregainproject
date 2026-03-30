import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import AdSlot from "@/components/AdSlot";

const projects = [
  {
    title: "AgentBear Corps",
    description:
      "AI-powered news platform covering the frontier of artificial intelligence. Breaking stories, hot takes, and deep analysis.",
    tags: ["AI", "News", "Next.js", "Python"],
    link: "https://agentbearcorps.com",
    slug: "agentbearcorps",
    image: "/images/agentbear-card.jpg",
  },
  {
    title: "Covfefe",
    description:
      "AI-powered presidential speech generator. Type any topic and get a speech in the style of the 45th President.",
    tags: ["AI", "Humor", "Groq", "LLM"],
    link: "https://covfefe69.vercel.app",
    slug: "covfefe",
    image: "/images/covfefe-card.jpg",
  },
  {
    title: "Virtual MPS",
    description:
      "AI-powered virtual Meet-the-People Session for Singapore. Ask questions about government policies and get helpful guidance.",
    tags: ["AI", "Singapore", "Gov", "Groq"],
    link: "https://mpsg.vercel.app",
    slug: "vmps",
    image: "/images/vmps-card.jpg",
  },
  {
    title: "AI Roleplay Arena",
    description:
      "A fun, opt-in playground where AI agents adopt random absurd personas — from emo constipated tech bros to Shakespearean pirates. Safety-first with time-limited sessions.",
    tags: ["AI", "Fun", "Personas", "Open Source"],
    link: "https://ai-roleplay-arena.vercel.app",
    slug: "roleplay-arena",
    image: "/images/roleplay-arena-card.jpg",
  },
  {
    title: "Storage Array History",
    description:
      "Comprehensive archive of enterprise storage arrays — 50+ spec sheets covering DellEMC, IBM, HPE, NetApp, Hitachi, and Everpure from 2000 to 2025.",
    tags: ["Storage", "Enterprise", "Archive", "Hardware"],
    link: "https://storage-array-history.vercel.app",
    slug: "storage-history",
    image: "/images/storage-history-card.jpg",
    imageStyle: "contain" as const,
  },
  {
    title: "DragonClaw",
    description:
      "AI tools for OpenClaw power users. Includes a bilingual video summarizer for YouTube and Bilibili with automatic language detection.",
    tags: ["AI", "OpenClaw", "Tools", "Bilingual"],
    link: "https://github.com/jpmoregain-eth/dragonclaw",
    slug: "dragonclaw",
    image: "/images/github-repo-card.png",
    imageStyle: "contain" as const,
  },
  {
    title: "OpenClaw BRM",
    description:
      "Backup, Recovery, and Migration CLI tool for OpenClaw agents. Move your AI agents between systems with one command.",
    tags: ["OpenClaw", "CLI", "DevOps", "Python"],
    link: "https://github.com/jpmoregain-eth/openclaw-brm",
    slug: "openclaw-brm",
    image: "/images/github-repo-card.png",
    imageStyle: "contain" as const,
  },
  {
    title: "Tiered Memory",
    description:
      "Two-tier memory system for OpenClaw agents published on ClawHub. Tier 0 uses QMD semantic search for hot memories, Tier 1 archives to SQLite with LLM summarization.",
    tags: ["OpenClaw", "ClawHub", "Memory", "Python"],
    link: "https://clawhub.com/jpmoregain-eth/agent-tiered-memory",
    slug: "tiered-memory",
    image: "/images/tiered-memory-card.png",
    imageStyle: "cover" as const,
  },
];

const comingSoonProjects = [
  {
    title: "Coming Soon",
    description: "Something new is brewing...",
    slug: "coming-soon-1",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Ad Slot - Top Leaderboard */}
      <section className="py-8">
        <AdSlot type="leaderboard" />
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="section-title">// Our Projects</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#E5E5E5] gold-underline inline-block">
              What We&apos;re Building
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.slug} className="fade-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                  slug={project.slug}
                  image={project.image}
                  imageStyle={project.imageStyle}
                />
              </div>
            ))}
            {comingSoonProjects.map((project) => (
              <div key={project.slug} className="fade-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={[]}
                  link="#"
                  slug={project.slug}
                  isComingSoon
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad Slot - Between Content */}
      <section className="py-8">
        <AdSlot type="rectangle" />
      </section>

      {/* Bottom Spacer */}
      <div className="py-8" />
    </>
  );
}
