"use client";

import { useTranslation } from "@/lib/language-context";
import { experience } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceSection() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <span className="eyebrow">{t.experience.eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight">
        {t.experience.heading}
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6">
        {experience.map((entry) => (
          <ExperienceCard key={entry.company + entry.role} experience={entry} />
        ))}
      </div>
    </section>
  );
}
