import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D4A843]/10 bg-[#0A0A0F]/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="font-mono text-lg font-bold">
              <span className="text-[#D4A843]">JP</span>
              <span className="text-[#E5E5E5]">MoreGain</span>
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <Link
              href="https://x.com/jp_moregain"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5E5E5]/60 hover:text-[#D4A843] transition-colors"
              aria-label="Follow on X"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="text-[#E5E5E5]/60 hover:text-[#D4A843] transition-colors text-sm"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-[#E5E5E5]/60 hover:text-[#D4A843] transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-[#E5E5E5]/60 hover:text-[#D4A843] transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#D4A843]/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-[#E5E5E5]/40 text-sm text-center md:text-left">
              &copy; {currentYear} The JPMoreGain Project. All rights reserved.
            </p>

            {/* Tagline */}
            <p className="text-[#E5E5E5]/30 text-xs font-mono text-center md:text-right">
              Built with AI, caffeine, and questionable financial metaphors.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
