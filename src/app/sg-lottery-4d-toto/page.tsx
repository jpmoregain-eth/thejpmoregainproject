"use client";

export default function SGLotteryPage() {
  return (
    <main className="min-h-screen bg-[#16162a] text-white font-sans">
      {/* Subtle radial glow background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#6C5CE7]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section */}
        <header className="text-center py-12">
          {/* App Icon with glow */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-3xl" />
            <img
              src="/images/sg-lottery-icon.png"
              alt="SG Lottery 4D TOTO"
              className="relative w-28 h-28 rounded-3xl shadow-2xl border border-[#D4AF37]/30"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
            SG Lottery
          </h1>
          <p className="text-lg text-white/50 mb-8">
            Singapore Pools Results
          </p>

          {/* Toggle-style nav */}
          <div className="inline-flex bg-[#1e1e3a] rounded-full p-1.5 mb-8 border border-white/10">
            <span className="px-6 py-2 rounded-full bg-[#D4AF37] text-[#16162a] font-bold text-sm">4D</span>
            <span className="px-6 py-2 rounded-full text-white/40 font-medium text-sm">TOTO</span>
          </div>

          <p className="text-base sm:text-lg text-white/60 mb-8 max-w-xl mx-auto leading-relaxed">
            Stay up to date with the latest Singapore Pools 4D &amp; TOTO draw results, all in one clean and simple app.
          </p>

          <a
            href="https://play.google.com/store/apps/details?id=com.totosg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#16162a] px-8 py-3.5 rounded-2xl text-lg font-bold hover:bg-[#E5C048] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            📱 Get it on Google Play
          </a>
        </header>

        {/* Latest Draw Card */}
        <section className="bg-[#1e1e3a] rounded-3xl p-6 sm:p-8 border border-white/5 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-[#6C5CE7]" />
            <span className="text-white/50 text-sm">Draw #4170 · Thu, 2 Apr 2026</span>
          </div>

          <p className="text-white/40 text-sm mb-4">Winning numbers</p>
          <div className="flex flex-wrap gap-3 justify-center mb-4">
            {[1, 7, 8, 23, 30, 33].map((n) => (
              <div key={n} className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-xl font-bold border border-white/10">
                {n}
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-[#FF6B35] flex items-center justify-center text-xl font-bold">
              21
            </div>
          </div>

          <div className="text-center">
            <p className="text-3xl font-bold text-white">$5,715,685</p>
            <p className="text-white/40 text-sm mt-1">Group 1 jackpot</p>
          </div>
        </section>

        {/* Description Cards */}
        <section className="space-y-4 mb-8">
          {/* Results Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#6C5CE7]/10 flex items-center justify-center text-xl">🎯</div>
              <h2 className="text-xl font-bold text-[#16162a]">Results</h2>
            </div>
            <p className="text-[#16162a]/60 leading-relaxed">
              Get the latest 4D &amp; TOTO draw results the moment they are published. View all 6 winning numbers plus the additional number, full prize breakdown by group, and jackpot amount at a glance.
            </p>
            {/* Prize breakdown preview */}
            <div className="mt-4 space-y-2">
              {[
                { group: 'Group 1', winners: '1', prize: '$5,715,685' },
                { group: 'Group 2', winners: '8', prize: '$72,459' },
                { group: 'Group 3', winners: '272', prize: '$1,466' },
              ].map((row) => (
                <div key={row.group} className="flex justify-between items-center py-2 px-3 rounded-xl bg-[#F8F9FA]">
                  <span className="text-[#16162a]/60 text-sm">{row.group}</span>
                  <div className="flex gap-6">
                    <span className="text-[#16162a]/40 text-sm">{row.winners}</span>
                    <span className="text-[#16162a] font-semibold text-sm w-24 text-right">{row.prize}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* History Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#00B894]/10 flex items-center justify-center text-xl">📊</div>
              <h2 className="text-xl font-bold text-[#16162a]">History</h2>
            </div>
            <p className="text-[#16162a]/60 leading-relaxed mb-4">
              Browse through thousands of past draw results going all the way back to 1990s. Search by draw number or date to quickly find any specific draw.
            </p>
            {/* History preview */}
            <div className="space-y-3">
              {[
                { date: 'Thu, 2 Apr 2026', draw: '#4170', nums: [1, 7, 8, 23, 30, 33], add: 21 },
                { date: 'Mon, 30 Mar 2026', draw: '#4169', nums: [4, 12, 26, 30, 46, 47], add: 6 },
                { date: 'Thu, 26 Mar 2026', draw: '#4168', nums: [4, 7, 22, 29, 33, 46], add: 48 },
              ].map((row) => (
                <div key={row.draw} className="flex items-center justify-between py-2 border-b border-[#F0F0F0] last:border-0">
                  <div>
                    <p className="text-[#16162a] text-sm font-medium">{row.date}</p>
                    <p className="text-[#16162a]/40 text-xs">Draw {row.draw}</p>
                  </div>
                  <div className="flex gap-1.5">
                    {row.nums.map((n) => (
                      <div key={n} className="w-7 h-7 rounded-full bg-[#16162a] flex items-center justify-center text-[10px] font-bold text-white">
                        {n}
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full bg-[#FF6B35] flex items-center justify-center text-[10px] font-bold text-white">
                      {row.add}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generator Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-[#FF6B35]/10 flex items-center justify-center text-xl">🎲</div>
              <h2 className="text-xl font-bold text-[#16162a]">Lucky Number Generator</h2>
            </div>
            <p className="text-[#16162a]/60 leading-relaxed mb-4">
              Not sure what numbers to pick? Let our generator suggest sets for you, powered by multiple prediction strategies — each analysed against different historical windows.
            </p>
            {/* Generator preview */}
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#F8F9FA]">
                <p className="text-xs text-[#6C5CE7] font-medium mb-2">Mean Reversion · Balanced · last 100 draws</p>
                <div className="flex gap-2">
                  {['0896', '8612', '9326'].map((n) => (
                    <div key={n} className="flex-1 py-2.5 rounded-xl bg-[#6C5CE7] text-white text-center font-bold text-sm">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F8F9FA]">
                <p className="text-xs text-[#E74C3C] font-medium mb-2">Frequency · Hottest · last 50 draws</p>
                <div className="flex gap-2">
                  {['0198', '7483', '7541'].map((n) => (
                    <div key={n} className="flex-1 py-2.5 rounded-xl bg-[#E74C3C] text-white text-center font-bold text-sm">
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-8">
          <div className="flex items-center gap-2 mb-4 text-white/40 text-sm">
            <span className="text-[#D4AF37]">◆</span> Screenshots
          </div>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-[#D4AF37]/30 scrollbar-track-transparent">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="snap-center shrink-0 w-[240px] sm:w-[280px]">
                <div className="rounded-3xl overflow-hidden bg-[#1e1e3a] border border-white/5 shadow-xl">
                  <img src={`/images/sg-lottery-screenshot-${n}.jpg`} alt={`Screenshot ${n}`} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-[#1e1e3a] rounded-3xl p-10 sm:p-14 border border-white/5">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Ready to Test Your Luck?
          </h2>
          <p className="text-white/50 mb-6">
            Download now and never miss a draw.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.totosg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#16162a] px-8 py-3.5 rounded-2xl text-lg font-bold hover:bg-[#E5C048] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
          >
            📱 Get it on Google Play
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-10 text-center text-white/20 text-xs space-y-1">
          <p>
            Built with ❤️ by{" "}
            <a href="/" className="text-white/40 hover:text-white underline">
              The JPMoreGain Project
            </a>
          </p>
          <p>© 2026 — All rights reserved. Gamble responsibly.</p>
        </footer>
      </div>
    </main>
  );
}
