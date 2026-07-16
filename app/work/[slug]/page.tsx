import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/content/projects";
import { MetricGrid } from "@/components/MetricGrid";
import { site } from "@/content/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.summary,
            url: `${site.url}/work/${project.slug}/`,
            author: { "@type": "Person", name: site.name, url: site.url },
          }),
        }}
      />
      <header className="case-header container">
        <p className="project-meta">
          {project.client} · {project.discipline}
        </p>
        <h1>{project.title}</h1>
        <p className="case-summary">{project.summary}</p>
      </header>

      <div className="container">
        <MetricGrid metrics={project.metrics} />
      </div>

      <div className="section container">
        <div className="case-body">
            <section className="case-section" aria-labelledby="problem">
              <h2 data-number="01" id="problem">
                The problem
              </h2>
              <p>{project.problem}</p>
            </section>

            <section className="case-section" aria-labelledby="target-user">
              <h2 data-number="02" id="target-user">
                Who it was for
              </h2>
              <p>{project.targetUser}</p>
            </section>

            <section className="case-section" aria-labelledby="role">
              <h2 data-number="03" id="role">
                My role
              </h2>
              <p>{project.role}</p>
            </section>

            <section className="case-section" aria-labelledby="process">
              <h2 data-number="04" id="process">
                Process
              </h2>
              <ol>
                {project.process.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>

            <section className="case-section" aria-labelledby="decisions">
              <h2 data-number="05" id="decisions">
                Key decisions
              </h2>
              <ul className="decision-list">
                {project.keyDecisions.map((d) => (
                  <li key={d.decision}>
                    <strong>{d.decision}</strong>
                    {d.why}
                  </li>
                ))}
              </ul>
            </section>

            <section className="case-section" aria-labelledby="result">
              <h2 data-number="06" id="result">
                The result
              </h2>
              <p>{project.result}</p>
            </section>

            <section className="case-section" aria-labelledby="learned">
              <h2 data-number="07" id="learned">
                What I learned
              </h2>
              <p>{project.learned}</p>
            </section>
        </div>
      </div>

      <nav className="container case-nav" aria-label="More case studies">
        {prev ? (
          <Link href={`/work/${prev.slug}/`} rel="prev">
            ← {prev.title}
          </Link>
        ) : (
          <Link href="/#work">← All work</Link>
        )}
        {next ? (
          <Link href={`/work/${next.slug}/`} rel="next">
            {next.title} →
          </Link>
        ) : (
          <Link href="/#contact">Get in touch →</Link>
        )}
      </nav>
    </article>
  );
}
