"use client";

import { useTranslation } from "@/lib/language-context";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <span className="eyebrow">{t.projects.eyebrow}</span>
      <h2 className="text-3xl font-bold tracking-tight">
        {t.projects.heading}
      </h2>
      <p className="mt-2 text-muted">{t.projects.intro}</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--glass-border)] p-6 text-center text-muted">
          <p className="font-medium text-foreground">
            {t.projects.placeholderTitle}
          </p>
          <p className="mt-2 text-sm">{t.projects.placeholderBody}</p>
        </div>
      </div>
    </section>
  );
}
