// ---------------------------------------------------------------------------
// SITE CONTENT - edit this file to change any personal content on the site.
// No other file needs touching for copy changes. See README "Editing content".
// ---------------------------------------------------------------------------

export const site = {
  name: "Kelsey Flynn",
  role: "Business Operations · Strategy · PMO",
  location: "London",
  url: "https://kelseyflynn.github.io",
  email: "kelseyflynn.uk@gmail.com",
  linkedin: "https://www.linkedin.com/in/kelseyflynn/",

  // Availability - shown in the hero so a recruiter sees it in the first five seconds.
  openTo: "Open to Senior Manager and Director roles in BizOps, Strategy and PMO · London / Remote",

  // Hero
  headline: "I build the operating infrastructure that lets companies scale",
  headlineAccent: "without execution breaking down.",
  intro:
    "A decade turning fragmented teams into focused ones, at Expedia Group, Accenture and Navigate. MBA, PMP, and a firm belief that good governance should speed a company up, not slow it down. I do my best work in the messy middle: new programmes, merging teams, targets still moving, and a real deadline anyway.",

  // Headline numbers. Every figure here is from delivered work.
  metrics: [
    { value: "$70M+", label: "incremental revenue delivered vs a target raised to $60M" },
    { value: "60+", label: "programmes brought under one portfolio view" },
    { value: "$8.4B", label: "annual spend optimised across 14 markets" },
    { value: "2×", label: "C-suite review prep cut from four weeks to two" },
  ],

  // About / capabilities
  aboutLede:
    "Three kinds of work I get hired for, and how I do them.",
  capabilities: [
    {
      title: "Programme governance from zero",
      body: "Tracking, intake, RAID and steering cadence where none existed, so blockers get caught while they're still small and decisions happen in days, not weeks.",
    },
    {
      title: "Planning & KPI frameworks",
      body: "Annual operating plans, KPI scorecards and executive review rhythms that connect the strategy deck to what teams actually ship. Fewer, sharper meetings; faster decisions.",
    },
    {
      title: "AI-automated operations",
      body: "Reporting and workflow automation with AI, Jira, Confluence and Looker. All the rigour, far less of the manual grind. I stay until people actually use it, because a dashboard nobody opens is decoration.",
    },
  ],

  // "Now" strip
  now: {
    year: "2026",
    title: "Teaching AI to think like a consultant",
    body: "I also work freelance as an AI training consultant, teaching AI agents the consulting frameworks and structured thinking I picked up at Accenture and Navigate. Explaining complex work clearly is useful whether your audience is a boardroom or a machine.",
  },

  // Experience & credentials
  experience: [
    { org: "Expedia Group", role: "Commercial strategy & portfolio governance" },
    { org: "Navigate", role: "Management consulting · Rookie of the Year" },
    { org: "Accenture", role: "Consulting" },
    { org: "Freelance", role: "AI training consultant" },
  ],
  credentials: [
    "MBA, UT Austin McCombs, with the Dean's Award for Academic Excellence",
    "BSc Supply Chain & Information Systems, Penn State, with Distinction",
    "PMP, certified through 2029",
    "Recent courses in Web Development & AI (SheCodes) and AI for Project Managers (PMI)",
  ],

  // Contact
  contactHeadline:
    "If your transformation needs an operational engine, that's my favourite job.",
  contactBody:
    "I'm in London, looking for a Senior Manager or Director role in BizOps, Strategy or PMO, ideally somewhere moving fast enough that delivery actually matters. If that sounds like your team, I'd love to hear from you.",

  // Portrait. Replace public/portrait.jpg with your headshot (square, ~800x800,
  // exported at quality ~80, under 150KB). The alt text below ships with it.
  portrait: {
    src: "/portrait.jpg",
    alt: "Kelsey Flynn",
    width: 800,
    height: 800,
  },

  // SEO / social preview
  seo: {
    title: "Kelsey Flynn · Business Operations, Strategy & PMO",
    description:
      "Kelsey Flynn builds the operating infrastructure that lets scaling companies grow without execution breaking down. London. MBA, PMP.",
    ogImage: "/og-image.png",
  },
};

export type Site = typeof site;
