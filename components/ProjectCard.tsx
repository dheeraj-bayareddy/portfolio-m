"use client";

import { useTranslation } from "@/lib/language-context";
import type { Project } from "@/data/projects";
import { ExternalLinkIcon, GithubIcon } from "./icons";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useTranslation();

  return (
    <article className="glass gravity-card flex flex-col rounded-2xl p-6">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>

      <dl className="mt-4 space-y-3 text-sm">
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
            {t.projects.problem}
          </dt>
          <dd className="mt-1 text-foreground/90">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
            {t.projects.approach}
          </dt>
          <dd className="mt-1 text-foreground/90">{project.approach}</dd>
        </div>
        <div>
          <dt className="text-xs font-semibold uppercase tracking-wide text-accent">
            {t.projects.result}
          </dt>
          <dd className="mt-1 text-foreground/90">{project.result}</dd>
        </div>
      </dl>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="chip-hover rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2.5 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--glass-border)] px-3.5 py-2 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            {t.projects.code}
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--glass-border)] px-3.5 py-2 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            <ExternalLinkIcon className="h-4 w-4" />
            {t.projects.liveDemo}
          </a>
        )}
        {!project.githubUrl && !project.demoUrl && (
          <span className="italic text-muted">{t.projects.noRepo}</span>
        )}
      </div>
    </article>
  );
}
