"use client";

import { useTranslation } from "@/lib/language-context";
import { GlowAccent } from "./backgrounds/GlowAccent";
import { DownloadIcon, EyeIcon, GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const GITHUB_URL = "https://github.com/dheeraj-bayareddy";
const LINKEDIN_URL = "https://linkedin.com/in/dheerajreddykb";
const EMAIL = "dheerajbayareddy@gmail.com";

const primaryButton =
  "btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 active:translate-y-0";
const secondaryButton =
  "glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5 active:translate-y-0";
const socialButton =
  "glass glow-hover flex h-10 w-10 items-center justify-center rounded-xl transition-transform hover:-translate-y-0.5 active:translate-y-0";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-16 sm:px-10"
    >
      <GlowAccent />
      <div className="animate-fade-in-up mx-auto flex w-full max-w-5xl flex-col items-start text-left md:items-center md:text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Dheeraj Kadadalamari
          <br />
          Bayareddy
        </h1>
        <p className="mt-4 text-lg font-medium text-foreground sm:text-xl">
          M.Sc. Data Science — ML &amp; Data Engineering
        </p>
        <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">
          Building practical ML systems, from deep learning to real-time data
          pipelines.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3 md:justify-center">
          <a href="/resume.pdf" download className={primaryButton}>
            <DownloadIcon className="h-4 w-4" />
            {t.hero.downloadResume}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={secondaryButton}
          >
            <EyeIcon className="h-4 w-4" />
            {t.hero.viewResume}
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={socialButton}
          >
            <LinkedinIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={socialButton}
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Send email"
            className={socialButton}
          >
            <MailIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
