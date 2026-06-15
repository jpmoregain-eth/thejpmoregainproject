import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star, BookOpen, Music, Share2, Image as ImageIcon } from "lucide-react";

export default function AyahPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-full md:w-48 h-48 bg-[#1a1a2e] rounded-2xl flex items-center justify-center shrink-0">
            <Image
              src="/images/ayah-icon.png"
              alt="Ayah App"
              width={160}
              height={160}
              className="rounded-xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">Ayah</h1>
            <p className="text-xl text-zinc-400 mb-6">
              Your daily Quran verse companion. Beautiful recitation, shareable quotes,
              and spiritual inspiration at your fingertips.
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
              href="https://play.google.com/store/apps/details?id=com.thejpmoregainproject.ayah"
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
            <h3 className="text-xl font-semibold mb-2">Daily Verses</h3>
            <p className="text-zinc-400">
              Get a carefully selected Quranic verse every day with Arabic text,
              transliteration, and English translation.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <Music className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audio Recitation</h3>
            <p className="text-zinc-400">
              Listen to beautiful Quran recitation with play/pause controls.
              Perfect for learning proper pronunciation.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <Share2 className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Shareable Quotes</h3>
            <p className="text-zinc-400">
              Generate beautiful quote cards with verses and wallpapers.
              Share your daily inspiration with friends and family.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <ImageIcon className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Stunning Wallpapers</h3>
            <p className="text-zinc-400">
              Each verse comes with a curated background wallpaper.
              Save them to your device or use as share card backgrounds.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/ayah-screenshot-1.jpg",
              "/images/ayah-screenshot-2.jpg",
              "/images/ayah-screenshot-3.jpg",
              "/images/ayah-screenshot-4.jpg",
            ].map((src, i) => (
              <div key={i} className="bg-zinc-900 rounded-xl overflow-hidden aspect-[9/16]">
                <Image
                  src={src}
                  alt={`Ayah screenshot ${i + 1}`}
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="download" className="bg-zinc-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Ayah</h2>
          <p className="text-zinc-400 mb-6">
            Available on Android. Download from the Play Store.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.thejpmoregainproject.ayah"
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
