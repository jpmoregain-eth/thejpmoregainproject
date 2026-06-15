import Image from "next/image";
import Link from "next/link";
import { Star, BookOpen, Music, Share2, Search, Volume2 } from "lucide-react";

export default function GitaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-full md:w-48 h-48 shrink-0">
            <Image
              src="/images/gita-hero.png"
              alt="Gita App"
              width={192}
              height={192}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Gita</h1>
            <p className="text-xl text-zinc-400 mb-6">
              Your daily Bhagavad Gita companion. Sanskrit shlokas, English translations,
              audio recitation, and spiritual wisdom at your fingertips.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["Flutter", "Android", "Spirituality", "Audio"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.thejpmoregainproject.gita"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a96e] text-black font-semibold rounded-lg hover:bg-[#b8985d] transition-colors"
            >
              <Star className="w-5 h-5" />
              Get it on Play Store
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 rounded-xl p-6">
            <BookOpen className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Daily Shlokas</h3>
            <p className="text-zinc-400">
              Get a carefully selected Bhagavad Gita shloka every day with Sanskrit text,
              transliteration, and English translation.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <Music className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audio Recitation</h3>
            <p className="text-zinc-400">
              Listen to beautiful Sanskrit recitation with play/pause controls.
              Perfect for meditation and learning proper pronunciation.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <Share2 className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Shareable Quotes</h3>
            <p className="text-zinc-400">
              Generate beautiful quote cards with shlokas and wallpapers.
              Share your daily wisdom with friends and family.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <Search className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Explore All Verses</h3>
            <p className="text-zinc-400">
              Browse all 700+ Bhagavad Gita verses. Search by chapter, verse number,
              or keywords. Your complete spiritual reference.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/gita-screenshot-1.jpg",
              "/images/gita-screenshot-2.jpg",
              "/images/gita-screenshot-3.jpg",
              "/images/gita-screenshot-4.jpg",
            ].map((src, i) => (
              <div key={i} className="bg-zinc-900 rounded-xl overflow-hidden aspect-[9/16]">
                <Image
                  src={src}
                  alt={`Gita screenshot ${i + 1}`}
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="download" className="bg-zinc-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Gita</h2>
          <p className="text-zinc-400 mb-6">
            Available on Android. Download from the Play Store.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.thejpmoregainproject.gita"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a96e] text-black font-semibold rounded-lg hover:bg-[#b8985d] transition-colors"
          >
            <Star className="w-5 h-5" />
            Get it on Play Store
          </a>
        </div>

        <div className="mt-12 text-center text-zinc-500 text-sm">
          <p>Built with Flutter • Designed with care</p>
        </div>
      </div>
    </main>
  );
}
