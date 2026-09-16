"use client";

import { useTranslation } from "@/lib/language-context";

export function LanguageToggle() {
  const { language, toggleLanguage } = useTranslation();
  const nextLang = language === "en" ? "de" : "en";

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={
        nextLang === "de" ? "Auf Deutsch umschalten" : "Switch to English"
      }
      className="glass flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold uppercase text-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0"
    >
      {nextLang}
    </button>
  );
}
