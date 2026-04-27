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
          <div className="w-32 h-32 mx-auto mb-8 bg-white rounded-3xl flex items-center justify-center text-7xl shadow-2xl">
            🐉
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent">
            Fork This Dragon
          </h1>
          <p className="text-xl sm:text-2xl text-[#B0B0B0] mb-8">
            [Tagline goes here]
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
          <p className="text-lg text-[#B0B0B0] leading-relaxed">
            [Description goes here - what is the game about? What makes it fun?]
          </p>
        </section>

        {/* Features Grid */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">[Feature 1]</h3>
              <p className="text-[#B0B0B0]">[Feature description]</p>
            </div>
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">⚔️</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">[Feature 2]</h3>
              <p className="text-[#B0B0B0]">[Feature description]</p>
            </div>
            <div className="bg-[#1a1a2e]/50 backdrop-blur-sm rounded-2xl p-6 border border-[#FFD700]/20 text-center hover:border-[#FFD700]/50 transition-all">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold mb-2 text-[#FFD700]">[Feature 3]</h3>
              <p className="text-[#B0B0B0]">[Feature description]</p>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-[#2a2a3e] rounded-2xl aspect-[9/16] flex flex-col items-center justify-center text-[#666]">
              <div className="text-5xl mb-2">📸</div>
              <p>Screenshot 1</p>
            </div>
            <div className="bg-[#2a2a3e] rounded-2xl aspect-[9/16] flex flex-col items-center justify-center text-[#666]">
              <div className="text-5xl mb-2">📸</div>
              <p>Screenshot 2</p>
            </div>
            <div className="bg-[#2a2a3e] rounded-2xl aspect-[9/16] flex flex-col items-center justify-center text-[#666]">
              <div className="text-5xl mb-2">📸</div>
              <p>Screenshot 3</p>
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
