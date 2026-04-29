export default function QuietudePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#00ff41] font-mono selection:bg-[#00ff41] selection:text-[#0a0a0a]">
      {/* Subtle terminal grid background */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,65,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,65,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* CRT scanline overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.08]"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Terminal Header */}
        <div className="border border-[#00ff41]/30 rounded-t-lg bg-[#111] px-4 py-2 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-xs text-[#00ff41]/60">quietude — bash — 80x24</span>
        </div>

        {/* Hero Section */}
        <div className="border border-[#00ff41]/30 border-t-0 rounded-b-lg bg-[#0d0d0d] p-8 sm:p-12">
          <header className="text-center">
            {/* App Icon with glow */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#00ff41]/20 blur-xl rounded-3xl" />
              <img
                src="/images/quietude-icon.png"
                alt="Quietude"
                className="relative w-28 h-28 rounded-2xl border-2 border-[#00ff41]/40 shadow-[0_0_30px_rgba(0,255,65,0.3)]"
              />
            </div>

            <div className="mb-2 text-[#00ff41]/50 text-sm">
              <span className="text-[#ffbd2e]">$</span> ./play_music.sh
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-[#00ff41]">&gt;</span> Quietude
              <span className="animate-pulse">_</span>
            </h1>

            <p className="text-base sm:text-lg text-[#00ff41]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              <span className="text-[#ffbd2e]">//</span> Quietude is your personal sanctuary of calm.
              <br />
              <span className="text-[#ffbd2e]">//</span> Drift into sleep, sharpen your focus, or simply breathe
              <br />
              <span className="text-[#ffbd2e]">//</span> with a curated collection of ambient music and breathtaking zen visuals.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.yourdomain.quietude"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#00ff41] text-[#0a0a0a] px-8 py-3 rounded font-bold hover:bg-[#00ff41]/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
            >
              <span>[</span> 📱 DOWNLOAD_APK <span>]</span>
            </a>
          </header>
        </div>

        {/* About Section */}
        <section className="mt-8 border border-[#00ff41]/30 rounded-lg bg-[#0d0d0d] overflow-hidden">
          <div className="border-b border-[#00ff41]/20 px-4 py-2 bg-[#111] text-xs text-[#00ff41]/50 flex items-center gap-2">
            <span className="text-[#ffbd2e]">$</span> cat README.md
          </div>
          <div className="p-8 sm:p-10 space-y-6 text-[#00ff41]/80 leading-relaxed text-sm sm:text-base">
            <div>
              <h3 className="text-[#00ff41] font-bold mb-3 text-base">What Quietude Offers</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e] shrink-0">01</span>
                  <p>Beautiful ambient and atmospheric music that plays continuously</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e] shrink-0">02</span>
                  <p>Stunning zen wallpapers that transition smoothly between scenes</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e] shrink-0">03</span>
                  <p>Choose which tracks you want in your personal rotation</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e] shrink-0">04</span>
                  <p>Tap anywhere on screen for playback controls</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e] shrink-0">05</span>
                  <p>Keeps your screen on while you drift away</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#00ff41]/10 pt-6">
              <p className="text-[#00ff41]/60 italic mb-4">
                No complicated settings. No distractions. No sign-in required. Just press play and let go.
              </p>
            </div>

            <div>
              <h3 className="text-[#00ff41] font-bold mb-3 text-base">Perfect For</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e]">◆</span>
                  <p>Falling asleep</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e]">◆</span>
                  <p>Deep focus and study</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e]">◆</span>
                  <p>Meditation and mindfulness</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e]">◆</span>
                  <p>Yoga and breathwork</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-[#ffbd2e]">◆</span>
                  <p>Background ambience while working</p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#00ff41]/10 pt-6 text-center">
              <p className="text-[#00ff41] text-lg font-light tracking-widest">Be still.</p>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mt-8">
          <div className="flex items-center gap-2 mb-4 text-[#00ff41]/50 text-xs">
            <span className="text-[#ffbd2e]">$</span> ls screenshots/
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-[#00ff41]/30 scrollbar-track-transparent">
            {[1,2,3,4,5].map((n) => (
              <div key={n} className="snap-center shrink-0 w-[240px] sm:w-[280px]">
                <div className="border border-[#00ff41]/20 rounded-lg overflow-hidden bg-[#0d0d0d]">
                  <div className="border-b border-[#00ff41]/10 px-3 py-1.5 bg-[#111] flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#ff5f56]" />
                    <div className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2 h-2 rounded-full bg-[#27c93f]" />
                    <span className="ml-2 text-[10px] text-[#00ff41]/30">screen_{n}.png</span>
                  </div>
                  <div className="bg-[#2a2a3e] aspect-[9/16] flex flex-col items-center justify-center text-[#666]">
                    <div className="text-5xl mb-2">📸</div>
                    <p className="text-xs">Screenshot {n}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-8 border border-[#00ff41]/30 rounded-lg bg-[#0d0d0d] p-10 sm:p-14 text-center">
          <div className="text-xs text-[#00ff41]/50 mb-4">
            <span className="text-[#ffbd2e]">$</span> sudo apt install quietude
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-[#00ff41]">&gt;</span> READY_TO_LISTEN?
            <span className="animate-pulse">_</span>
          </h2>
          <p className="text-[#00ff41]/60 mb-6 text-sm">
            <span className="text-[#ffbd2e]">//</span> Download now. Find your quiet.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.yourdomain.quietude"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#00ff41] text-[#0a0a0a] px-8 py-3 rounded font-bold hover:bg-[#00ff41]/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
          >
            <span>[</span> 📱 EXECUTE_DOWNLOAD <span>]</span>
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-[#00ff41]/30 text-xs space-y-1">
          <p>
            <span className="text-[#ffbd2e]">//</span> Built with ❤️ by{" "}
            <a href="/" className="text-[#00ff41]/50 hover:text-[#00ff41] underline">
              The_JPMoreGain_Project
            </a>
          </p>
          <p>
            <span className="text-[#ffbd2e]">//</span> © 2026 — All rights reserved. Keep the music playing.
          </p>
          <p className="text-[#00ff41]/20 pt-2">
            ─────────────────────────────────────
          </p>
        </footer>
      </div>
    </main>
  );
}
