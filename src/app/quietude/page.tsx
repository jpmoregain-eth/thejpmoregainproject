"use client";

export default function QuietudePage() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white font-sans selection:bg-[#c9a96e]/30">
      {/* Soft radial glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#2a2520]/40 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-16">

        {/* Hero Section */}
        <header className="text-center pt-12 pb-16">
          {/* App Icon */}
          <div className="relative inline-block mb-10">
            <div className="absolute inset-0 bg-[#c9a96e]/15 blur-2xl rounded-full" />
            <img
              src="/images/quietude-icon.png"
              alt="Quietude / Jing"
              className="relative w-24 h-24 rounded-3xl shadow-2xl"
            />
          </div>

          {/* Title with wide letter spacing */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-[0.3em] mb-4 uppercase">
            Quietude
          </h1>

          <p className="text-sm tracking-[0.4em] text-white/30 mb-6 lowercase">
            sleep &nbsp;·&nbsp; focus &nbsp;·&nbsp; calm
          </p>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] mb-10">
            <span className="text-xs tracking-wider text-white/40">Google Play</span>
            <span className="text-white/20">→</span>
            <span className="text-xs tracking-wider text-[#c9a96e]">Quietude</span>
            <span className="text-white/20 mx-2">|</span>
            <span className="text-xs tracking-wider text-white/40">App Store</span>
            <span className="text-white/20">→</span>
            <span className="text-xs tracking-wider text-[#c9a96e]">Jing 静</span>
          </div>

          <p className="text-base sm:text-lg text-white/40 mb-10 max-w-lg mx-auto leading-relaxed font-light">
            Your personal sanctuary of calm. The same app, two names — download as <strong className="text-white/60">Quietude</strong> on Google Play or <strong className="text-white/60">Jing 静</strong> on the App Store. Drift into sleep, sharpen your focus, or simply breathe.
          </p>

          {/* Minimal play button */}
          <div className="flex justify-center mb-10">
            <div className="relative w-20 h-20">
              <div className="absolute inset-0 rounded-full border border-[#c9a96e]/30 animate-ping opacity-20" />
              <div className="absolute inset-2 rounded-full border border-[#c9a96e]/20" />
              <div className="relative w-full h-full rounded-full border border-[#c9a96e]/40 flex items-center justify-center bg-[#c9a96e]/5 hover:bg-[#c9a96e]/10 transition-colors cursor-pointer">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#c9a96e] border-b-[8px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.yourdomain.quietude"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-[#c9a96e]/30 text-[#c9a96e] px-7 py-3.5 rounded-full text-sm tracking-wider hover:bg-[#c9a96e]/10 transition-all min-w-[200px]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.23l2.807 1.626a1 1 0 0 1 0 1.737l-2.807 1.626L15.206 12l2.492-2.523zM5.864 2.658L16.802 8.99l-2.303 2.302-8.635-8.634z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/50">Get it on</span>
                <span className="text-sm leading-none">Google Play</span>
              </div>
            </a>

            <a
              href="https://apps.apple.com/us/app/jing-%E9%9D%99-sleep-study-focus/id6789123531"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm tracking-wider hover:bg-white/5 transition-all min-w-[200px]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/50">Download on the</span>
                <span className="text-sm leading-none">App Store</span>
              </div>
            </a>
          </div>
        </header>

        {/* Features in elegant cards */}
        <section className="space-y-4 mb-16">
          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.05] hover:border-white/10 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#c9a96e]/10 flex items-center justify-center text-sm">🎵</div>
              <h3 className="text-sm tracking-wider text-white/60 uppercase">Ambient Music</h3>
            </div>
            <p className="text-white/30 text-sm leading-relaxed pl-12">
              Beautiful atmospheric music that plays continuously. Curated tracks for sleep, focus, and calm.
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.05] hover:border-white/10 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#c9a96e]/10 flex items-center justify-center text-sm">🖼️</div>
              <h3 className="text-sm tracking-wider text-white/60 uppercase">Zen Visuals</h3>
            </div>
            <p className="text-white/30 text-sm leading-relaxed pl-12">
              Stunning wallpapers that transition smoothly between scenes — mountains, water, mist, and stillness.
            </p>
          </div>

          <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/[0.05] hover:border-white/10 transition-all">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#c9a96e]/10 flex items-center justify-center text-sm">✨</div>
              <h3 className="text-sm tracking-wider text-white/60 uppercase">Simple & Intentional</h3>
            </div>
            <p className="text-white/30 text-sm leading-relaxed pl-12">
              No complicated settings. No sign-in required. Tap anywhere for controls. Keeps your screen on while you drift away.
            </p>
          </div>
        </section>

        {/* Song library preview */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.3em] text-white/20 uppercase">Your Library</p>
          </div>
          <div className="bg-white/[0.02] rounded-3xl p-6 border border-white/[0.04]">
            {[
              { name: 'Brown Tide Beneath', active: true },
              { name: 'Midnight Rain Drift', active: true },
              { name: 'Midnight Rain Drift Reprise', active: true },
              { name: 'Rainroom Reverie', active: true },
              { name: 'Rainroom Reverie Reprise', active: true },
            ].map((song) => (
              <div key={song.name} className="flex items-center justify-between py-3.5 border-b border-white/[0.03] last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#c9a96e]/10 flex items-center justify-center text-xs text-[#c9a96e]/60">♪</div>
                  <span className="text-sm text-white/50">{song.name}</span>
                </div>
                <div className={`w-10 h-5 rounded-full ${song.active ? 'bg-[#c9a96e]/30' : 'bg-white/10'} relative`}>
                  <div className={`absolute top-0.5 w-4 h-4 rounded-full ${song.active ? 'bg-[#c9a96e] right-0.5' : 'bg-white/30 left-0.5'} transition-all`} />
                </div>
              </div>
            ))}
            <p className="text-center text-xs text-white/20 mt-4">9 of 11 songs enabled</p>
          </div>
        </section>

        {/* Perfect For */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.3em] text-white/20 uppercase">Perfect For</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Falling asleep', 'Deep focus', 'Meditation', 'Yoga', 'Study', 'Breathwork'].map((use) => (
              <div key={use} className="bg-white/[0.02] rounded-xl py-4 px-3 text-center border border-white/[0.04]">
                <p className="text-xs text-white/30">{use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="text-xs tracking-[0.3em] text-white/20 uppercase">Screenshots</p>
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-[#c9a96e]/20 scrollbar-track-transparent">
            {[1, 2, 3].map((n) => (
              <div key={n} className="snap-center shrink-0 w-[220px] sm:w-[260px]">
                <div className="rounded-3xl overflow-hidden bg-[#0c0c0c] border border-white/[0.05] shadow-xl">
                  <img src={`/images/quietude-screenshot-${n}.webp`} alt={`Screenshot ${n}`} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          <p className="text-2xl sm:text-3xl font-extralight tracking-wider text-white/40 mb-2">
            Be still.
          </p>
          <p className="text-xs tracking-[0.3em] text-white/20 uppercase mb-8">
            Download now. Let go.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.yourdomain.quietude"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-[#c9a96e]/30 text-[#c9a96e] px-7 py-3.5 rounded-full text-sm tracking-wider hover:bg-[#c9a96e]/10 transition-all min-w-[200px]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.23l2.807 1.626a1 1 0 0 1 0 1.737l-2.807 1.626L15.206 12l2.492-2.523zM5.864 2.658L16.802 8.99l-2.303 2.302-8.635-8.634z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/50">Android</span>
                <span className="text-sm leading-none">Quietude</span>
              </div>
            </a>

            <a
              href="https://apps.apple.com/us/app/jing-%E9%9D%99-sleep-study-focus/id6789123531"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white px-7 py-3.5 rounded-full text-sm tracking-wider hover:bg-white/5 transition-all min-w-[200px]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white/50">iOS</span>
                <span className="text-sm leading-none">Jing 静</span>
              </div>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-white/10 text-xs space-y-2 pt-8 border-t border-white/[0.03]">
          <p>
            Built with ❤️ by{" "}
            <a href="/" className="text-white/20 hover:text-white/40 transition-colors">
              The JPMoreGain Project
            </a>
          </p>
          <p>© 2026 — All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
