"use client";

import { useTheme } from "@/lib/theme-context";
import { StarfieldBackground } from "./StarfieldBackground";
import { CloudyBackground } from "./CloudyBackground";

export function Background() {
  const { theme, mounted } = useTheme();

  return (
    <div className="fixed inset-0 -z-10">
      {!mounted ? (
        <div className="absolute inset-0 bg-[var(--background)]" />
      ) : theme === "dark" ? (
        <StarfieldBackground />
      ) : (
        <CloudyBackground />
      )}
    </div>
  );
}
