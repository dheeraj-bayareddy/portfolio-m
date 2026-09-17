import type { Experience } from "@/data/experience";
import { ExternalLinkIcon } from "./icons";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="glass gravity-card flex flex-col rounded-2xl p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold">
          {experience.role}
          <span className="font-normal text-muted"> · {experience.company}</span>
          {experience.companyUrl && (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${experience.company} website`}
              className="ml-1.5 inline-flex align-middle text-muted transition-colors hover:text-accent"
            >
              <ExternalLinkIcon className="h-4 w-4" />
            </a>
          )}
        </h3>
        <p className="text-sm text-muted">{experience.duration}</p>
      </div>

      <p className="mt-1 text-sm text-muted">{experience.location}</p>

      <p className="mt-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
        {experience.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {experience.tags.map((tag) => (
          <span
            key={tag}
            className="chip-hover rounded-full border border-[var(--chip-border)] bg-[var(--chip-bg)] px-2.5 py-1 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
