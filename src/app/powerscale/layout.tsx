import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { ToggleProvider } from "./_components/ToggleContext";
import { PowerScaleTopBar } from "./_components/PowerScaleTopBar";
import { PowerScaleSidebar } from "./_components/PowerScaleSidebar";
import "./_components/ps-styles.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--ps-font-display",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--ps-font-body",
});

const ibmPlexMonoCode = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--ps-font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "PowerScale Knowledge Hub",
    template: "%s · PowerScale Knowledge Hub",
  },
  description:
    "A free, practitioner-built resource covering Dell PowerScale (Isilon) -- the why, when, and how of the full storage lifecycle.",
};

export default function PowerScaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToggleProvider>
      <div
        className={`ps-root ${ibmPlexMono.variable} ${ibmPlexSans.variable} ${ibmPlexMonoCode.variable}`}
      >
        <PowerScaleTopBar />
        <div className="ps-body">
          <PowerScaleSidebar />
          <main className="ps-page">{children}</main>
        </div>
      </div>
    </ToggleProvider>
  );
}
