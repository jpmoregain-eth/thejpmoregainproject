import { Metadata } from "next";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about The JPMoreGain Project - a Singapore-based technology lab building AI-powered tools and platforms at the intersection of technology, finance, and creativity.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <header className="mb-16">
          <p className="section-title mb-2">// About Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#E5E5E5] mb-6">
            The Story Behind{" "}
            <span className="text-[#D4A843]">JPMoreGain</span>
          </h1>
          <p className="text-[#E5E5E5]/70 text-lg leading-relaxed">
            Where a veteran storage engineer meets the wild frontier of AI.
          </p>
        </header>

        {/* Section: The Project */}
        <section className="mb-16">
          <h2 className="font-mono text-xl font-semibold text-[#D4A843] mb-6 flex items-center">
            <span className="text-[#00FF88] mr-2">01.</span>
            The Project
          </h2>
          <div className="glass-card p-8 space-y-6">
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              The JPMoreGain Project started as a simple idea: what happens when
              a veteran storage engineer with two decades of enterprise
              infrastructure experience decides to explore the wild frontier of
              AI?
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              The answer, it turns out, is a lot of late nights, a lot of
              coffee, and a surprisingly diverse collection of AI-powered
              projects.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              Founded in 2013 in Singapore, The JPMoreGain Project is a
              one-person technology lab building tools, platforms, and
              experiments at the intersection of artificial intelligence, web
              technology, and creativity. Some projects are serious (an AI news
              platform tracking the frontier of machine learning). Some are
              playful (a presidential speech generator that is probably too
              accurate for comfort). All of them are built with genuine
              curiosity and a belief that technology should be accessible,
              useful, and occasionally funny.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              The name? <span className="text-[#D4A843]">JPMoreGain</span> is a
              nod to the world of finance — where gains are everything and
              losses are just lessons in disguise. It reflects the philosophy
              behind every project: take calculated risks, build fast, learn
              faster, and always look for the alpha.
            </p>
          </div>
        </section>

        {/* Ad Slot */}
        <section className="my-12">
          <AdSlot type="rectangle" />
        </section>

        {/* Section: The Human Behind It */}
        <section className="mb-16">
          <h2 className="font-mono text-xl font-semibold text-[#D4A843] mb-6 flex items-center">
            <span className="text-[#00FF88] mr-2">02.</span>
            The Human Behind It
          </h2>
          <div className="glass-card p-8 space-y-6">
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              Derek is a Storage Infrastructure Engineer based in Singapore
              with over 20 years of experience in enterprise storage and data
              infrastructure. By day, he designs and maintains the storage
              systems that keep businesses running — the invisible foundation
              that most people never think about until something goes wrong.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              By night (and weekends, and lunch breaks), he explores the rapidly
              evolving world of AI — building agents, deploying language models,
              and creating web experiences powered by machine learning. The
              JPMoreGain Project is where these two worlds collide: deep
              infrastructure expertise meets cutting-edge AI experimentation.
            </p>
            <p className="text-[#E5E5E5]/80 leading-relaxed">
              Derek believes in building things that are honest, useful, and
              human. No hype, no buzzword bingo, no pretending AI is magic. Just
              real tools for real problems, built by someone who has spent two
              decades understanding how technology actually works under the
              hood.
            </p>
          </div>
        </section>

        {/* Section: What We Build */}
        <section className="mb-16">
          <h2 className="font-mono text-xl font-semibold text-[#D4A843] mb-6 flex items-center">
            <span className="text-[#00FF88] mr-2">03.</span>
            What We Build
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <div className="w-12 h-12 rounded-lg bg-[#D4A843]/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#D4A843]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-mono text-lg font-semibold text-[#E5E5E5] mb-2">
                AI-Powered Platforms
              </h3>
              <p className="text-[#E5E5E5]/60 text-sm">
                News sites, chatbots, and tools that leverage large language
                models to deliver intelligent experiences.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="w-12 h-12 rounded-lg bg-[#00FF88]/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00FF88]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-mono text-lg font-semibold text-[#E5E5E5] mb-2">
                Creative Experiments
              </h3>
              <p className="text-[#E5E5E5]/60 text-sm">
                From speech generators to digital novels, pushing the boundaries
                of what AI can create.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="w-12 h-12 rounded-lg bg-[#D4A843]/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#D4A843]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-mono text-lg font-semibold text-[#E5E5E5] mb-2">
                Singapore-Focused Tools
              </h3>
              <p className="text-[#E5E5E5]/60 text-sm">
                Building for the local community, because the best technology
                serves the people closest to you.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="w-12 h-12 rounded-lg bg-[#00FF88]/10 flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#00FF88]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="font-mono text-lg font-semibold text-[#E5E5E5] mb-2">
                Open Source
              </h3>
              <p className="text-[#E5E5E5]/60 text-sm">
                Most projects are open source on GitHub, because sharing
                knowledge makes everyone better.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="glass-card p-8">
            <h3 className="font-mono text-lg font-semibold text-[#D4A843] mb-4">
              Want to connect?
            </h3>
            <p className="text-[#E5E5E5]/70 mb-6">
              Whether you have a question, a project idea, or just want to say
              hello — feel free to reach out.
            </p>
            <a
              href="mailto:moregainjp@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-[#D4A843]/10 border border-[#D4A843]/30 rounded-lg text-[#D4A843] font-mono hover:bg-[#D4A843]/20 hover:border-[#D4A843]/50 transition-all"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              moregainjp@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
