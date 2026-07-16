import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <span>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </span>
        <span>
          <a href={site.linkedin}>LinkedIn</a>
          {" · "}
          <a href={site.substack}>The Delivery Desk</a>
          {" · "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </span>
      </div>
    </footer>
  );
}
