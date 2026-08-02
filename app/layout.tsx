import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f1" },
    { media: "(prefers-color-scheme: dark)", color: "#1d1915" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seo.title,
    template: `%s · ${site.name}`,
  },
  description: site.seo.description,
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: site.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} - ${site.role}`,
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "128x128", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.seo.ogImage],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: site.name,
                  jobTitle: "Business Operations, Strategy & PMO Leader",
                  url: site.url,
                  email: site.email,
                  sameAs: [site.linkedin, site.substack],
                  workLocation: { "@type": "Place", name: site.location },
                },
                {
                  "@type": "WebSite",
                  name: site.name,
                  url: site.url,
                },
              ],
            }),
          }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="site-top">
          <Header />
          <aside className="avail-bar">
            <div className="container">
              <span className="avail-text">{site.openTo}</span>
              <a href="/#contact">Get in touch</a>
            </div>
          </aside>
        </div>
        <main id="main">{children}</main>
        <Footer />
        {/* GoatCounter - privacy-friendly visit counting. No cookies, no
            personal data, so no consent banner needed. Dashboard:
            https://kelseyflynn.goatcounter.com */}
        <script
          data-goatcounter="https://kelseyflynn.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
