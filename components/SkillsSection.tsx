"use client";

import { useTranslation } from "@/lib/language-context";

const skillGroups = [
  { key: "languages", items: ["Python", "C#", "SQL"] },
  {
    key: "mlDl",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow/Keras",
      "CNNs",
      "Transfer Learning",
      "Feature Engineering",
      "LLMs (learning)",
    ],
  },
  {
    key: "dataEngineering",
    items: [
      "SQL Server",
      "MySQL",
      "Schema Design",
      "Stored Procedures",
      "Query Optimization",
      "Data Pipeline Design",
    ],
  },
  {
    key: "backendApis",
    items: ["ASP.NET Core", "RESTful API Design", "Microservices"],
  },
  {
    key: "tools",
    items: [
      "Jira",
      "Git",
      "Postman",
      "Structured Logging",
      "Agile / Remote Collaboration",
    ],
  },
] as const;

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <span className="eyebrow">{t.skills.eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight">
        {t.skills.heading}
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.key}
            className="glass skill-group-glow rounded-2xl p-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {t.skills[group.key]}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="chip-hover rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-3 py-1 text-sm text-foreground/90"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
