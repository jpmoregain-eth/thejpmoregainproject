"use client";

import { usePathname } from "next/navigation";
import { useToggle } from "./ToggleContext";

export function PowerScaleTopBar() {
  const pathname = usePathname();
  const { mode, setMode } = useToggle();
  const isConceptsPage = pathname === "/powerscale/concepts";

  return (
    <header className="ps-topbar">
      <a href="/powerscale" className="ps-logo">
        <span className="ps-logo-mark">
          <svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="5" height="5" rx="1" />
            <rect x="8" y="1" width="5" height="5" rx="1" />
            <rect x="1" y="8" width="5" height="5" rx="1" />
            <rect x="8" y="8" width="2" height="5" rx="1" />
            <rect x="11" y="8" width="2" height="5" rx="1" />
          </svg>
        </span>
        <span className="ps-logo-text">
          PowerScale
          <span className="ps-logo-sub">Knowledge Hub</span>
        </span>
      </a>

      <span className="ps-topbar-sep" />

      <div className="ps-search-wrap">
        <span className="ps-search-icon">
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8.5 8.5L11 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
        <input
          className="ps-search"
          type="text"
          placeholder="Search... (coming soon)"
          disabled
        />
      </div>

      <span className="ps-topbar-spacer" />

      {isConceptsPage && (
        <>
          <span className="ps-toggle-hint">View mode:</span>
          <div className="ps-toggle" role="group" aria-label="View mode toggle">
            <button
              className={`ps-toggle-label${mode === "simple" ? " active" : ""}`}
              onClick={() => setMode("simple")}
              aria-pressed={mode === "simple"}
            >
              Simple
            </button>
            <button
              className={`ps-toggle-label${mode === "expert" ? " active" : ""}`}
              onClick={() => setMode("expert")}
              aria-pressed={mode === "expert"}
            >
              Expert
            </button>
          </div>
        </>
      )}
    </header>
  );
}
