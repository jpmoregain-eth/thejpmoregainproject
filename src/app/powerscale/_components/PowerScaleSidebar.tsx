"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function IconGrid() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.5" y="1.5" width="5" height="5" rx="1" />
      <rect x="8.5" y="1.5" width="5" height="5" rx="1" />
      <rect x="1.5" y="8.5" width="5" height="5" rx="1" />
      <rect x="8.5" y="8.5" width="5" height="5" rx="1" />
    </svg>
  );
}
function IconBook() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 2h7a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" />
      <path d="M5 5h5M5 7.5h5M5 10h3" strokeLinecap="round" />
    </svg>
  );
}
function IconServer() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <rect x="1.5" y="2" width="12" height="4" rx="1" />
      <rect x="1.5" y="9" width="12" height="4" rx="1" />
      <circle cx="11.5" cy="4" r="0.75" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="11" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M7.5 1.5L13 4.5L7.5 7.5L2 4.5L7.5 1.5z" />
      <path d="M2 7.5l5.5 3 5.5-3" strokeLinecap="round" />
      <path d="M2 10.5l5.5 3 5.5-3" strokeLinecap="round" />
    </svg>
  );
}
function IconSettings() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="7.5" cy="7.5" r="2" />
      <path d="M7.5 1.5v1M7.5 12.5v1M1.5 7.5h1M12.5 7.5h1M3.4 3.4l.7.7M10.9 10.9l.7.7M10.9 3.4l-.7.7M4.1 10.9l-.7.7" strokeLinecap="round" />
    </svg>
  );
}
function IconMove() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M2 7.5h11M9.5 4l3.5 3.5L9.5 11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M7.5 1.5L2 4v4c0 3.314 2.5 5.5 5.5 5.5S13 11.314 13 8V4L7.5 1.5z" />
      <path d="M5 7.5l2 2 3-3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconActivity() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M1 7.5h2.5l2-4.5 3 9 2-4.5H14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconTool() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M9.5 2a3.5 3.5 0 0 0-3.46 4.05L2.5 9.5a1.5 1.5 0 0 0 2.12 2.12l3.45-3.54A3.5 3.5 0 1 0 9.5 2z" />
      <circle cx="9.5" cy="5.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

type NavDivider = { type: "divider"; label: string };
type NavItem = {
  type: "item";
  href: string;
  label: string;
  icon: React.ReactNode;
  badge?: "soon" | "toggle";
};
type NavEntry = NavDivider | NavItem;

const NAV: NavEntry[] = [
  { type: "item", href: "/powerscale", label: "Overview", icon: <IconGrid /> },
  { type: "item", href: "/powerscale/concepts", label: "Concepts", icon: <IconBook />, badge: "toggle" },
  { type: "divider", label: "Guides" },
  { type: "item", href: "/powerscale/install",   label: "Install",    icon: <IconServer />,   badge: "soon" },
  { type: "item", href: "/powerscale/design",    label: "Design",     icon: <IconLayers />,   badge: "soon" },
  { type: "item", href: "/powerscale/implement", label: "Implement",  icon: <IconSettings />, badge: "soon" },
  { type: "item", href: "/powerscale/migrate",   label: "Migrate",    icon: <IconMove />,     badge: "soon" },
  { type: "item", href: "/powerscale/secure",    label: "Secure",     icon: <IconShield />,   badge: "soon" },
  { type: "item", href: "/powerscale/monitor",   label: "Monitor",    icon: <IconActivity />, badge: "soon" },
  { type: "divider", label: "Resources" },
  { type: "item", href: "/powerscale/tools", label: "Tools", icon: <IconTool />, badge: "soon" },
];

export function PowerScaleSidebar() {
  const pathname = usePathname();

  return (
    <aside className="ps-sidebar">
      {NAV.map((entry, i) => {
        if (entry.type === "divider") {
          return (
            <span key={i} className="ps-nav-section-label">
              {entry.label}
            </span>
          );
        }

        const isActive =
          entry.href === "/powerscale"
            ? pathname === "/powerscale"
            : pathname.startsWith(entry.href);

        return (
          <Link
            key={entry.href}
            href={entry.href}
            className={`ps-nav-link${isActive ? " ps-active" : ""}`}
          >
            <span className="ps-nav-icon">{entry.icon}</span>
            {entry.label}
            {entry.badge === "soon" && (
              <span className="ps-nav-badge ps-nav-badge-soon">Soon</span>
            )}
            {entry.badge === "toggle" && (
              <span className="ps-nav-badge ps-nav-badge-toggle">S / E</span>
            )}
          </Link>
        );
      })}
    </aside>
  );
}
