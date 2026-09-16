"use client";

import { useTranslation } from "@/lib/language-context";

export function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-center text-sm text-muted sm:px-10">
      <p>© {year} Dheeraj</p>
      <p className="mt-1">{t.footer.builtWith}</p>
    </footer>
  );
}
