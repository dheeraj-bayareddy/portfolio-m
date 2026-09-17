"use client";

import { useTranslation } from "@/lib/language-context";

const stats = [
  { key: "stat1", value: "3+" },
  { key: "stat2", value: "M.Sc." },
  { key: "stat3", value: "Berlin" },
] as const;

export function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <blockquote className="text-sm italic leading-relaxed text-muted sm:text-base">
        &ldquo;It is not the strongest of the species that survive&hellip;
        but the one most adaptable to change.&rdquo;
        <br />
        <span className="not-italic">— Charles Darwin</span>
      </blockquote>
      <p className="mb-8 mt-3 text-base text-foreground/90 sm:text-lg">
        That&rsquo;s the mindset I bring to everything I do.
      </p>

      <span className="eyebrow">{t.about.eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight">{t.about.heading}</h2>

      <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-[1.3fr_1fr] md:gap-x-16">
        <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
          M.Sc. Data Science student based in Berlin. With 3 years as a
          software engineer, I bring production-grade engineering discipline
          to data and ML work — from building pipelines and scalable backend
          systems to applying deep learning and classical ML on real
          problems. Adaptable by nature, I move comfortably across the data
          stack: engineering, analysis, and modeling — and I&rsquo;m looking
          to bring that range to data-driven teams across Europe.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className={`stat-card glass rounded-2xl p-5 ${
                stat.key === "stat3" ? "sm:col-span-2" : ""
              }`}
            >
              <div className="stat-num gradient-text text-2xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted">
                {t.about[stat.key]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
