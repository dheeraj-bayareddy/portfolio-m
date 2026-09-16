"use client";

import { useTranslation } from "@/lib/language-context";
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const GITHUB_URL = "https://github.com/dheeraj-bayareddy";
const LINKEDIN_URL = "https://linkedin.com/in/dheerajreddykb";
const EMAIL = "dheerajbayareddy@gmail.com";

const primaryButton =
  "btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0";
const secondaryButton =
  "glass glow-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <div className="contact-glow glass-subtle rounded-3xl px-6 py-14 text-center sm:px-10 sm:py-16">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {t.contact.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-foreground/80">
          {t.contact.introLine1}
          <br />
          {t.contact.introLine2}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="/resume.pdf" download className={primaryButton}>
            <DownloadIcon className="h-4 w-4" />
            {t.hero.downloadResume}
          </a>
          <a href={`mailto:${EMAIL}`} className={secondaryButton}>
            <MailIcon className="h-4 w-4" />
            {t.contact.emailMe}
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <LinkedinIcon className="h-4 w-4" />
            linkedin.com/in/dheerajreddykb
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            github.com/dheeraj-bayareddy
          </a>
        </div>
      </div>
    </section>
  );
}
