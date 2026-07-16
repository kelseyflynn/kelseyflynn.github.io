import Image from "next/image";
import { site } from "@/content/site";
import { projects } from "@/content/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { MetricGrid } from "@/components/MetricGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { CopyEmail } from "@/components/CopyEmail";

export default function Home() {
  return (
    <>
      {/* Hero: who, what role, proof, contact - in that order */}
      <section className="hero container">
        <p className="hero-kicker">
          {site.role} · {site.location}
        </p>
        <h1>
          {site.headline} <em>{site.headlineAccent}</em>
        </h1>
        <div className="hero-grid">
          <div>
            <p className="hero-intro">{site.intro}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get in touch
              </a>
              <a href="#work" className="text-link">
                See the work
              </a>
            </div>
          </div>
          <figure className="hero-figure">
            <div className="portrait-frame">
              <Image
                className="portrait"
                src={site.portrait.src}
                alt={site.portrait.alt}
                width={site.portrait.width}
                height={site.portrait.height}
                priority
              />
            </div>
            <figcaption>
              <strong>
                {site.name} · {site.location}
              </strong>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="container">
        <Reveal>
          <MetricGrid metrics={site.metrics} />
        </Reveal>
      </div>

      {/* About / capabilities: editorial two-column, numbered rows */}
      <section className="section container" id="about">
        <SectionHeading number="01">What I make</SectionHeading>
        <div className="about-grid">
          <p className="about-lede">{site.aboutLede}</p>
          <div className="capability-list">
            {site.capabilities.map((c, i) => (
              <div className="capability" key={c.title}>
                <span className="capability-index" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="section container" id="work">
        <SectionHeading number="02">Selected work</SectionHeading>
        {projects.length > 0 ? (
          <div className="project-list">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <ProjectCard project={p} index={i} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p>Case studies are being written - ask me about the work on LinkedIn.</p>
        )}
      </section>

      {/* Now - current work: consulting + writing, one coherent block */}
      <section className="now-strip" id="now">
        <div className="container now-grid">
          <p className="now-label">Now · {site.now.year}</p>
          <div className="now-body">
            <h2>{site.now.title}</h2>
            <p>{site.now.body}</p>

            <div className="now-writing-block" id="writing">
              <h2>{site.writing.heading}</h2>
              <p>{site.writing.intro}</p>
              <a href={site.substack} className="now-writing">
                <span className="now-writing-meta">
                  Latest · {site.writing.latestNumber}
                </span>
                <span className="now-writing-title">
                  {site.writing.latestTitle
                    .split(site.writing.latestTitleAccent)
                    .flatMap((part, i) =>
                      i === 0
                        ? [part]
                        : [<em key={i}>{site.writing.latestTitleAccent}</em>, part]
                    )}
                </span>
                <span className="now-writing-cta">Read on The Delivery Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & credentials */}
      <section className="section container" id="experience">
        <SectionHeading number="03">Experience &amp; credentials</SectionHeading>
        <div className="experience-grid">
          <div>
            <h3 className="subheading">Where I&apos;ve worked</h3>
            <ul className="org-list">
              {site.experience.map((e) => (
                <li key={e.org}>
                  <span className="org">{e.org}</span>
                  <span className="role">{e.role}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="subheading">Credentials</h3>
            <ul className="cred-list">
              {site.credentials.map((c) => (
                <li key={c.term}>
                  <span className="cred-term">{c.term}</span>
                  <span className="cred-detail">{c.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact: one address, front and centre */}
      <section className="section container contact" id="contact">
        <SectionHeading number="04">Contact</SectionHeading>
        <h2>{site.contactHeadline}</h2>
        <p>{site.contactBody}</p>
        <div className="contact-actions">
          <a href={`mailto:${site.email}`} className="contact-email">
            {site.email}
          </a>
          <CopyEmail email={site.email} />
        </div>
        <p className="contact-alt">
          <a href={site.linkedin} className="text-link">
            Message me on LinkedIn
          </a>
        </p>
      </section>
    </>
  );
}
