import Link from "next/link";
import type { CaseStudy } from "@/content/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: CaseStudy;
  index: number;
}) {
  return (
    <Link href={`/work/${project.slug}/`} className="project-card">
      <div>
        <p className="project-meta">
          <span className="project-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          {project.client} · {project.discipline}
        </p>
        <h3>{project.title}</h3>
        <ul className="card-metrics" aria-label="Headline results">
          {project.metrics.slice(0, 3).map((m) => (
            <li key={m.label}>
              <strong>{m.value}</strong> {m.label}
            </li>
          ))}
        </ul>
      </div>
      <p className="project-summary">
        {project.summary}
        <span className="project-cta">Read the case study</span>
      </p>
    </Link>
  );
}
