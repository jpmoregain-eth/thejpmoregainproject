import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fork This Dragon - The JPMoreGain Project",
  description: "Fork This Dragon - A fun game by The JPMoreGain Project. Available now on Google Play.",
  alternates: {
    canonical: "https://thejpmoregainproject.com/fork-this-dragon",
  },
};

export default function ForkThisDragonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] text-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <header className="text-center py-12">
          <img
            src="/images/fork-this-dragon-icon.png"
            alt="Fork This Dragon"
            className="w-32 h-32 mx-auto mb-8 rounded-3xl shadow-2xl"
          />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
            Fork This Dragon
          </h1>
          <p className="text-xl sm:text-2xl text-[#B0B0B0] mb-8">
            A retro text-based RPG with a developer humor theme. You are a programmer dropped into a legacy codebase — 400,000 lines, zero comments, one developer who understood it, retired in 2003.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.ftd.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00C853] hover:bg-[#00B048] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all hover:scale-105"
          >
            📱 Get it on Google Play
          </a>
        </header>

        {/* About Section */}
        <section className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 mt-12 border border-[#FFD700]/20">
          <h2 className="text-3xl font-bold mb-6 text-[#FFD700]">About the Game</h2>
          <div className="space-y-4 text-lg text-[#B0B0B0] leading-relaxed">
            <p><strong className="text-[#FFD700]">FIGHT BUGS IN THE CODEBASE</strong><br />Battle increasingly dangerous bugs — from Missing Semicolons to Critical Bugs in Production. Use Debug, Stack Trace, Rubber Duck, and more to squash them. Each fight costs a turn, and turns regenerate over time.</p>
            <p><strong className="text-[#FFD700]">GEAR UP AT THE SHOP</strong><br />Spend your gold at Stack Overflow Outfitters. Upgrade your weapon from a Rubber Duck all the way to The Nuclear Option. Armor up from a Hoodie to an Air-Gapped Server Room. Better gear means tougher fights and bigger dragons.</p>
            <p><strong className="text-[#FFD700]">CHALLENGE THE LEGACY DRAGON</strong><br />At the heart of the codebase lives the Legacy Dragon — a monstrous entity of technical debt that has been running since 2003. Gear up, level up, and take it down. Each kill unlocks a harder prestige tier with stronger monsters and better rewards.</p>
            <p><strong className="text-[#FFD700]">PRESTIGE SYSTEM</strong><br />Kill the dragon and enter the next tier — harder mobs, stronger dragon, better gear to grind for. How many dragons can you slay?</p>
            <p><strong className="text-[#FFD700]">COMPETE ON THE LEADERBOARD</strong><br />Track your dragon kills and level against other players on the global leaderboard. Who will be the first to reach Dragon Slayer status?</p>
            <p><strong className="text-[#FFD700]">WATCH ADS FOR BONUS TURNS & REVIVES</strong><br />Out of turns? Watch a short ad to get back in the fight. Died to a tough bug? Watch an ad to revive with full HP.</p>
            <p><strong className="text-[#FFD700]">CONNECT WITH OTHER PLAYERS</strong><br />Post in the in-game Slack channel, send direct messages, and react to other players' posts. The dev community is always online.</p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Retro Terminal Aesthetic</h3>
              <p className="text-[#B0B0B0]">Pixel art icons and classic terminal vibes. Feels like coding in the 90s.</p>
            </div>
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">🐛</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">7 Mob Tiers</h3>
              <p className="text-[#B0B0B0]">From harmless Missing Semicolons to endgame nightmares. Scale your skills.</p>
            </div>
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Challenge the Legacy Dragon</h3>
              <p className="text-[#B0B0B0]">At the heart of the codebase lives a monstrous entity of technical debt. Gear up and take it down.</p>
            </div>
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Global Leaderboard</h3>
              <p className="text-[#B0B0B0]">Track dragon kills and levels. Compete for Dragon Slayer status.</p>
            </div>
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">In-Game Social Chat</h3>
              <p className="text-[#B0B0B0]">Slack-style channels, DMs, reactions. The dev community never sleeps.</p>
            </div>
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">🔑</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Google Sign-In</h3>
              <p className="text-[#B0B0B0]">One-tap login. No passwords to forget. Your progress synced across devices.</p>
            </div>
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all sm:col-span-2 lg:col-span-1">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">Play at Your Own Pace</h3>
              <p className="text-[#B0B0B0]">Turns regenerate over time. No pay-to-win pressure. Grind or chill — your call.</p>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">Screenshots</h2>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-[#FFD700]/30 scrollbar-track-transparent">
              {[1,2,3,4,5].map((n) => (
                <div key={n} className="snap-center shrink-0 w-[280px] sm:w-[320px]">
                  <div className="rounded-2xl overflow-hidden border border-[#FFD700]/20 shadow-lg">
                    <img src={`/images/ftd-screenshot-${n}.jpg`} alt={`Screenshot ${n}`} className="w-full h-auto object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center bg-gradient-to-r from-[#FFD700]/10 to-[#FFA500]/10 rounded-2xl p-12 border border-[#FFD700]/20">
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Ready to Fork This Dragon?</h2>
          <p className="text-lg text-[#B0B0B0] mb-6">Download now and start your adventure!</p>
          <a
            href="https://play.google.com/store/apps/details?id=com.ftd.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00C853] hover:bg-[#00B048] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all hover:scale-105"
          >
            📱 Get it on Google Play
          </a>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center text-[#888]">
          <p>
            Made with ❤️ by{" "}
            <a href="/" className="text-[#FFD700] hover:underline">
              The JPMoreGain Project
            </a>
          </p>
          <p className="mt-2 text-sm">© 2026 The JPMoreGain Project</p>
        </footer>
      </div>
    </main>
  );
}
