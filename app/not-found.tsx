import Link from "next/link";

export default function NotFound() {
  return (
    <div className="notfound container">
      <div>
        <p className="eyebrow" data-number="404">
          Page not found
        </p>
        <h1>This page isn&apos;t in the portfolio.</h1>
        <p>
          The link may be old, or the address mistyped. Everything worth
          seeing is one click away.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to the homepage
        </Link>
      </div>
    </div>
  );
}
