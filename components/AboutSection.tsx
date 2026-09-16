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
      <span className="eyebrow">{t.about.eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight">{t.about.heading}</h2>

      <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-[1fr_1.3fr]">
        <p className="text-base leading-relaxed text-foreground/90 sm:text-lg">
          M.Sc. Data Science student based in Berlin, transitioning from 3+
          years as a production software engineer into applied machine
          learning. Focused on deep learning, classical ML, and building
          reliable data pipelines — bringing engineering discipline from a
          live insurance platform into data-driven and ML-focused work across
          the European market.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="stat-card glass rounded-2xl p-5"
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
