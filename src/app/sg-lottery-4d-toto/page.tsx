export default function SGLotteryPage() {
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
          <span className="ml-2 text-xs text-[#00ff41]/60">sg-lottery-4d-toto — bash — 80x24</span>
        </div>

        {/* Hero Section */}
        <div className="border border-[#00ff41]/30 border-t-0 rounded-b-lg bg-[#0d0d0d] p-8 sm:p-12">
          <header className="text-center">
            {/* App Icon with glow */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-[#00ff41]/20 blur-xl rounded-3xl" />
              <img
                src="/images/sg-lottery-icon.png"
                alt="SG Lottery 4D TOTO"
                className="relative w-28 h-28 rounded-2xl border-2 border-[#00ff41]/40 shadow-[0_0_30px_rgba(0,255,65,0.3)]"
              />
            </div>

            <div className="mb-2 text-[#00ff41]/50 text-sm">
              <span className="text-[#ffbd2e]">$</span> ./check_luck.sh
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
              <span className="text-[#00ff41]">&gt;</span> SG_Lottery_4D_TOTO
              <span className="animate-pulse">_</span>
            </h1>

            <p className="text-base sm:text-lg text-[#00ff41]/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              <span className="text-[#ffbd2e]">//</span> Stay up to date with the latest Singapore Pools 4D &amp; TOTO draw results
              <br />
              <span className="text-[#ffbd2e]">//</span> all in one clean and simple app.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.totosg"
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
          <div className="p-8 sm:p-10 space-y-5 text-[#00ff41]/80 leading-relaxed text-sm sm:text-base">
            <div className="flex gap-3">
              <span className="text-[#ffbd2e] shrink-0">01</span>
              <p><span className="text-[#00ff41] font-bold">GET_RESULTS()</span> — Get the latest 4D &amp; TOTO draw results the moment they are published. View all 6 winning numbers plus the additional number, full prize breakdown by group, and jackpot amount at a glance.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#ffbd2e] shrink-0">02</span>
              <p><span className="text-[#00ff41] font-bold">BROWSE_HISTORY()</span> — Browse through thousands of past draw results going all the way back to 1990s. Search by draw number or date to quickly find any specific draw. Scroll through recent history or jump straight to what you're looking for.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-[#ffbd2e] shrink-0">03</span>
              <p><span className="text-[#00ff41] font-bold">LUCKY_NUMBER_GENERATOR()</span> — Not sure what numbers to pick for the next draw? Let our generator suggest sets of numbers for you, powered by multiple prediction strategies including LSTM, Markov Chain, Mean Reversion, Frequency Analysis, Wheeling System, Sum Range, Odd/Even Balance and Positional Bias — each analysed against different historical windows of 25, 50, 100 or 200 past draws.</p>
            </div>
          </div>
        </section>

        {/* Features Carousel */}
        <section className="mt-8">
          <div className="flex items-center gap-2 mb-4 text-[#00ff41]/50 text-xs">
            <span className="text-[#ffbd2e]">$</span> ls features/
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-[#00ff41]/30 scrollbar-track-transparent">
            {[
              { icon: '🎯', name: 'feature_1', desc: '[Feature 1 description]' },
              { icon: '📊', name: 'feature_2', desc: '[Feature 2 description]' },
              { icon: '🔔', name: 'feature_3', desc: '[Feature 3 description]' },
              { icon: '🎲', name: 'feature_4', desc: '[Feature 4 description]' },
              { icon: '📈', name: 'feature_5', desc: '[Feature 5 description]' },
              { icon: '🏆', name: 'feature_6', desc: '[Feature 6 description]' },
              { icon: '⚡', name: 'feature_7', desc: '[Feature 7 description]' },
            ].map((f) => (
              <div key={f.name} className="snap-center shrink-0 w-[260px] sm:w-[300px] border border-[#00ff41]/20 rounded-lg bg-[#0d0d0d] p-5 hover:border-[#00ff41]/50 transition-all group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{f.icon}</div>
                <div className="text-xs text-[#00ff41]/40 mb-1 font-mono">{f.name}.js</div>
                <h3 className="text-sm font-bold mb-2 text-[#00ff41]">{f.name.replace(/_/g, ' ').toUpperCase()}</h3>
                <p className="text-xs text-[#00ff41]/60 leading-relaxed">{f.desc}</p>
              </div>
            ))}
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
            <span className="text-[#ffbd2e]">$</span> sudo apt install sg-lottery-4d-toto
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-[#00ff41]">&gt;</span> READY_TO_PLAY?
            <span className="animate-pulse">_</span>
          </h2>
          <p className="text-[#00ff41]/60 mb-6 text-sm">
            <span className="text-[#ffbd2e]">//</span> Download now. Test your luck.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.totosg"
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
            <span className="text-[#ffbd2e]">//</span> © 2026 — All rights reserved. Gamble responsibly.
          </p>
          <p className="text-[#00ff41]/20 pt-2">
            ─────────────────────────────────────
          </p>
        </footer>
      </div>
    </main>
  );
}
