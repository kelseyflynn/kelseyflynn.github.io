import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="wordmark">
          {site.name}
          <em>.</em>
        </Link>
        <nav className="site-nav" aria-label="Main">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#experience">Experience</Link>
          <a href={`mailto:${site.email}`} className="nav-cta">
            Email me
          </a>
        </nav>
      </div>
    </header>
  );
}
