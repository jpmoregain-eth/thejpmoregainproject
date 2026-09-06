export default function HeroHeader() {
  return (
    <header className="text-center mb-11">
      <div className="font-mono text-[12px] font-semibold tracking-[0.22em] uppercase text-[#D4A843] mb-5">
        JPMoreGain&nbsp;&nbsp;/&nbsp;&nbsp;Micro-tool No. 07
      </div>
      <h1 className="mb-[18px] font-mono text-[40px] sm:text-[56px] leading-[1.02] font-bold tracking-[-0.03em] text-[#E5E5E5]">
        Real<span className="text-[#D4A843]">LinkedIn</span>
      </h1>
      <p className="mx-auto max-w-[460px] font-mono text-[17px] leading-[1.5] text-[#00FF88]">
        The LinkedIn translator
        <span
          aria-hidden
          className="cursor-blink inline-block ml-[5px] h-[18px] w-[9px] align-[-2px] bg-[#00FF88]"
        />
      </p>
      <p className="mx-auto mt-5 max-w-[430px] text-[15px] leading-[1.65] text-[#E5E5E5]/60 text-pretty">
        Paste a post. Get what they actually meant.
      </p>
    </header>
  );
}
