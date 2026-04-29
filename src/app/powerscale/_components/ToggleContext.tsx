"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ViewMode = "simple" | "expert";

interface ToggleContextValue {
  mode: ViewMode;
  setMode: (m: ViewMode) => void;
}

const ToggleContext = createContext<ToggleContextValue>({
  mode: "simple",
  setMode: () => {},
});

export function ToggleProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ViewMode>("simple");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ps-view-mode") as ViewMode | null;
      if (stored === "simple" || stored === "expert") {
        setModeState(stored);
      }
    } catch {}
  }, []);

  const setMode = (m: ViewMode) => {
    setModeState(m);
    try {
      localStorage.setItem("ps-view-mode", m);
    } catch {}
  };

  return (
    <ToggleContext.Provider value={{ mode, setMode }}>
      {children}
    </ToggleContext.Provider>
  );
}

export const useToggle = () => useContext(ToggleContext);
