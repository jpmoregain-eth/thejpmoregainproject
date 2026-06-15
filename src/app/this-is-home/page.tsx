import Image from "next/image";
import Link from "next/link";
import { Star, Newspaper, Home, Key, TrendingUp } from "lucide-react";

export default function ThisIsHomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="max-w-4xl mx-auto px-6 py-8 pt-24">
        <div className="flex flex-col md:flex-row gap-8 items-start mb-12">
          <div className="w-full md:w-48 h-48 shrink-0">
            <Image
              src="/images/this-is-home-hero.png"
              alt="This Is Home App"
              width={192}
              height={192}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4">This Is Home</h1>
            <p className="text-xl text-zinc-400 mb-6">
              Your Singapore property companion. Latest news, sales listings, 
              rentals, and market trends — all in one app.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {["React Native", "Android", "Property", "Singapore"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.thejpmoregainproject.thisishome"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a96e] text-black font-semibold rounded-lg hover:bg-[#b8985d] transition-colors"
            >
              <Star className="w-5 h-5" />
              Get it on Play Store
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-zinc-900 rounded-xl p-6">
            <Newspaper className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Property News</h3>
            <p className="text-zinc-400">
              Stay updated with the latest Singapore property news, government 
              policies, and market developments.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <Home className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sales Listings</h3>
            <p className="text-zinc-400">
              Browse latest HDB, condo, and landed property sales. Filter by 
              location, price, and property type.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <Key className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rentals</h3>
            <p className="text-zinc-400">
              Find rental properties across Singapore. From HDB flats to 
              luxury condos, find your perfect home.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6">
            <TrendingUp className="w-8 h-8 text-[#c9a96e] mb-4" />
            <h3 className="text-xl font-semibold mb-2">Market Trends</h3>
            <p className="text-zinc-400">
              Track property price trends, rental yields, and market analytics. 
              Make informed decisions with data.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/this-is-home-screenshot-1.jpg",
              "/images/this-is-home-screenshot-2.jpg",
              "/images/this-is-home-screenshot-3.jpg",
              "/images/this-is-home-screenshot-4.jpg",
            ].map((src, i) => (
              <div key={i} className="bg-zinc-900 rounded-xl overflow-hidden aspect-[9/16]">
                <Image
                  src={src}
                  alt={`This Is Home screenshot ${i + 1}`}
                  width={300}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div id="download" className="bg-zinc-900 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Get This Is Home</h2>
          <p className="text-zinc-400 mb-6">
            Available on Android. Download from the Play Store.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.thejpmoregainproject.thisishome"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c9a96e] text-black font-semibold rounded-lg hover:bg-[#b8985d] transition-colors"
          >
            <Star className="w-5 h-5" />
            Get it on Play Store
          </a>
        </div>

        <div className="mt-12 text-center text-zinc-500 text-sm">
          <p>Built with React Native • Designed for Singapore</p>
        </div>
      </div>
    </main>
  );
}
