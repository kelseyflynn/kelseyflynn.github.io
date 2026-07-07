# Kelsey Flynn - Portfolio

Premium personal portfolio, built with Next.js 15 + TypeScript, exported as a fully static site for GitHub Pages. Design direction: **Editorial Broadsheet** - ivory paper, Fraunces serif display type, ink text, numbered sections, one oxblood accent.

## File structure

```
kelseyflynn-portfolio/
├── app/
│   ├── layout.tsx           Root layout: fonts, metadata, header/footer, skip link
│   ├── page.tsx             Homepage: hero, metrics, about, work, now, experience, contact
│   ├── globals.css          The whole design system (tokens at the top)
│   ├── not-found.tsx        Custom 404
│   ├── sitemap.ts           /sitemap.xml (generated at build)
│   ├── robots.ts            /robots.txt (generated at build)
│   └── work/[slug]/page.tsx Case-study template (one page per project)
├── components/
│   ├── Header.tsx           Top navigation
│   ├── Footer.tsx           Footer with contact links
│   ├── Reveal.tsx           Scroll-reveal wrapper (respects reduced motion)
│   ├── SectionHeading.tsx   Numbered eyebrow headings
│   ├── MetricGrid.tsx       Headline-number rows
│   ├── ProjectCard.tsx      Homepage case-study cards
│   └── CopyEmail.tsx        Copy-to-clipboard button with success/error states
├── content/
│   ├── site.ts              ALL personal content: bio, metrics, links, SEO
│   └── projects.ts          ALL case studies
├── public/
│   ├── portrait.jpg         REPLACE with your headshot (square, ~800px)
│   ├── og-image.png         Social preview card (1200x630)
│   └── icon.svg             Favicon
└── .github/workflows/deploy.yml   Auto-deploy to GitHub Pages
```

## Setup

Requires Node 20+.

```bash
npm install
npm run dev        # develop at http://localhost:3000
npm run build      # static export to out/
npm run preview    # serve the built site locally
```

## Deployment (GitHub Pages) - step by step

This replaces the current site at kelseyflynn.github.io. Budget 15 minutes. You need git and Node 20+ installed, and push access to the `kelseyflynn/kelseyflynn.github.io` repository.

**1. Get a local copy of your repository.**
```bash
git clone https://github.com/kelseyflynn/kelseyflynn.github.io.git
cd kelseyflynn.github.io
```

**2. Save the Loofy site before touching anything.**
stayloofy.com currently serves from the `/loofy/` folder of this repo. Copy it somewhere safe:
```bash
cp -r loofy ~/Desktop/loofy-backup
```

**3. Clear out the old site.**
Delete the old site files from the repo folder (index.html, og-image.png, and anything else from v1). Keep the `.git` folder - do not delete that.

**4. Copy the new project in.**
Unzip `kelseyflynn-portfolio.zip` and copy everything inside it into the repo folder. You should now see `app/`, `components/`, `content/`, `public/`, `package.json` and `.github/` at the repo root.

**5. Put Loofy back, inside `public/`.**
```bash
cp -r ~/Desktop/loofy-backup public/loofy
```
Everything in `public/` is served from the site root, so stayloofy keeps working at /loofy/ with no other changes.

**6. Add your headshot.**
Replace `public/portrait.jpg` with your photo - square, about 800x800px, saved as JPEG under 150KB. Skip this and the site ships with the KF monogram plate.

**7. Check it locally.**
```bash
npm install
npm run dev
```
Open http://localhost:3000 and click through every page. Check your email address and LinkedIn link work.

**8. Switch GitHub Pages to build from Actions (one-time).**
On github.com: your repo → Settings → Pages → under "Build and deployment", set Source to **GitHub Actions**. Without this step the push in step 9 will not publish.

**9. Push.**
```bash
git add -A
git commit -m "New portfolio site"
git push
```

**10. Watch it deploy.**
Repo → Actions tab. The "Deploy to GitHub Pages" workflow runs for 1-2 minutes. Green tick = live. Open https://kelseyflynn.github.io in a private browser window and check the homepage, one case study, https://kelseyflynn.github.io/loofy/ and a made-up URL (to see the 404 page).

**If something goes wrong:** the Actions log shows the failing step. The two common issues are Pages source not set to GitHub Actions (step 8) and Node version - the workflow uses Node 22, so a `npm ci` failure usually means package-lock.json is missing from the push.

**Updating the site later:** edit `content/site.ts` or `content/projects.ts`, commit, push. The workflow rebuilds and publishes automatically.

**Custom domain later:** add a file `public/CNAME` containing `kelseyflynn.com`, configure the domain's DNS per GitHub's Pages docs, and update `url` in `content/site.ts`.

## Editing content

Every word of personal content lives in two files:

- **`content/site.ts`** - name, headline, intro, metrics, capabilities, experience, credentials, contact copy, email, LinkedIn, SEO title/description.
- **`content/projects.ts`** - the case studies. Each has: problem, target user, role, process steps, key decisions, result, learned. Add a new object to the array and a page + homepage card appear automatically. Delete one and it disappears everywhere.

No component or page file needs touching for content changes.

### Images

- **Headshot**: replace `public/portrait.jpg` (currently a monogram plate). Square, 800x800px, JPEG quality ~80, aim for under 150KB. Alt text is in `site.ts`.
- **Social card**: `public/og-image.png`, 1200x630. Regenerate if the headline changes.
- Static export means Next.js can't resize images at request time, so keep files pre-sized as above.

## Accessibility checklist

- [x] Semantic landmarks: header, nav, main, footer, article, section
- [x] One h1 per page; heading levels never skip
- [x] Skip-to-content link, first focusable element
- [x] Visible focus styles on every interactive element (`:focus-visible`)
- [x] Full keyboard navigation - no mouse-only interactions
- [x] `prefers-reduced-motion` disables all animation and smooth scroll
- [x] Colour contrast: ink on ivory 14.9:1, soft ink 5.8:1, accent 7.4:1 (AA/AAA)
- [x] Copy-email status announced via `role="status"` + `aria-live="polite"`
- [x] `lang="en-GB"` set; metric lists use dl/dt/dd; nav has aria-label
- [x] Alt text on the portrait; decorative rules are CSS, not markup
- [x] Text scales with browser zoom; no fixed pixel body text

## Performance checklist

- [x] Fully static HTML - no server, no client data fetching
- [x] Self-hosted variable fonts (two families, no Google Fonts request)
- [x] Hero portrait has explicit width/height + `priority` (no layout shift)
- [x] JavaScript limited to two tiny client components (reveal, copy button)
- [x] No third-party scripts, trackers, or CSS frameworks
- [x] Single CSS file, custom-property tokens, no unused utility classes
- [x] Images pre-sized and compressed (portrait ~18KB, OG card ~90KB)
- [x] Animations use only opacity/transform (compositor-friendly)

## Version two ideas

1. Custom domain (`kelseyflynn.com`) with `kelsey@` email to match.
2. A writing section pulling in the LinkedIn operator-lessons posts, giving recruiters a reason to return.
3. A short case study on the job-search operating system itself (the automations and skills) - it demonstrates the AI-operations capability live.
4. Downloadable one-page CV (PDF) generated from the same content files.
5. Real project imagery: sanitised dashboard screenshots or process diagrams per case study (nothing confidential).
6. Dark-mode variant of the broadsheet palette via `prefers-color-scheme`.
7. Structured data (JSON-LD `Person` + `Article`) for richer search results.
8. Analytics-free visit counting (e.g. GoatCounter) to see which case studies recruiters actually read.
