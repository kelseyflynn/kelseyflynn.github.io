// ---------------------------------------------------------------------------
// CASE STUDIES - one object per project. Add, remove or reorder freely;
// pages and homepage cards are generated from this array.
// Every figure must be real. Nothing here should be invented.
// ---------------------------------------------------------------------------

export type CaseStudy = {
  slug: string;
  client: string;
  discipline: string;
  title: string;
  /** One-line result shown on the homepage card */
  summary: string;
  metrics: { value: string; label: string }[];
  problem: string;
  targetUser: string;
  role: string;
  process: string[];
  keyDecisions: { decision: string; why: string }[];
  result: string;
  learned: string;
};

export const projects: CaseStudy[] = [
  {
    slug: "expedia-portfolio-governance",
    client: "Expedia Group",
    discipline: "Portfolio governance",
    title: "First real-time view of a 60-programme portfolio",
    summary:
      "A portfolio function built from scratch on a Q4 mandate. First portfolio view published 14 January, all 60 programmes onboarded by March, and prioritisation moved from loudest-voice to data.",
    metrics: [
      { value: "60", label: "programmes across five lines of business" },
      { value: "1 wk", label: "to write the white paper that reset the brief" },
      { value: "Jan 14", label: "first portfolio view, on a biweekly cadence" },
    ],
    problem:
      "Nobody could say with confidence what was happening across the commercial division's 60 programmes spanning five lines of business. There was no central tracking or tooling, risks surfaced late, and prioritisation ran on whoever shouted loudest. The mandate arrived in Q4: have a portfolio function operational by 1 January.",
    targetUser:
      "The Chief Commercial Officer and divisional leadership, who needed a trustworthy picture of the portfolio, and the programme leads across five lines of business who had to feed it without drowning in status admin.",
    role:
      "I built the division's first portfolio tracking function from scratch. No prior tooling, no template, no team. None of the 20+ people whose work fed the system reported to me, so every part of it had to be adopted rather than mandated.",
    process: [
      "Wrote a white paper in a week rather than accepting the 1 January big-bang brief at face value, proposing a phased rollout leadership could hold me to.",
      "Launched wave one with the 10-15 core strategic programmes, then scaled to all 60 by the end of March.",
      "Published the first portfolio overview on 14 January and held a biweekly cadence from then on.",
      "Pre-populated every return from existing operating plans so team leads validated data instead of filling in blank forms.",
      "Evaluated Asana, Monday.com and Smartsheet, then ruled them out. Procurement would take six months. Built on the Excel, Jira and Confluence stack teams already used.",
      "Standardised the language. One RAG standard brokered across commercial and product, plus an acronym dictionary for the function.",
      "Started building an AI agent to shift reporting from biweekly push to self-service pull, so anyone can ask for the latest status of a programme on demand.",
    ],
    keyDecisions: [
      {
        decision: "Push back on the 1 January big-bang with a phased white paper.",
        why: "An impossible deadline met badly destroys a new function's credibility. A phased plan delivered on time builds it.",
      },
      {
        decision: "Build on tools teams already had instead of waiting for procurement.",
        why: "Six months for the perfect tool was six more months of no visibility. Excel and Jira on day one beat Smartsheet in Q3.",
      },
      {
        decision: "Pre-populate, never blank forms.",
        why: "With no authority over the 20+ contributors, the system had to be easier than the status quo or it would die quietly. Validating is easier than authoring.",
      },
      {
        decision: "Replace loudest-voice prioritisation with a metric-driven approach.",
        why: "A tracker shows what is happening; prioritisation decides what should. Wiring intake into the annual operating plan made the system the place where the portfolio takes shape.",
      },
    ],
    result:
      "The division got its first real-time portfolio view two weeks into January, with all 60 programmes onboarded by the end of March. Risks now surface while there is still time to act, the intake process feeds the annual operating plan, and programmes are prioritised on data rather than volume.",
    learned:
      "Governance earns its keep by speeding a company up. The moment it becomes admin, people route around it, so the system has to be lighter than the chaos it replaces.",
  },
  {
    slug: "expedia-planning-cadence",
    client: "Expedia Group",
    discipline: "Executive operations",
    title: "C-suite planning prep cut from four weeks to two",
    summary:
      "Owned the weekly, monthly, quarterly and board rhythms for the Chief Commercial Officer. Laddered packets, a 25-person contributor chase replaced with self-service data pulls, and QBR decks rebuilt around decisions rather than status.",
    metrics: [
      { value: "2 wks", label: "C-suite prep, down from four" },
      { value: "25+", label: "contributors replaced by self-service data pulls" },
      { value: "4", label: "rhythms owned: weekly, monthly, quarterly, board" },
    ],
    problem:
      "Every executive review cycle consumed four weeks of preparation and pulled 25+ people into assembling it. Packets were built from scratch each time, and the QBR deck read as a status readout rather than a request for decisions.",
    targetUser:
      "The Chief Commercial Officer, who needed decision-ready material rather than raw inputs, and the 25+ contributors whose time the old process burned every cycle.",
    role:
      "I owned the executive planning cadence for the CCO, running the weekly, monthly, quarterly and board rhythms. I acted as first-line reviewer, so what reached the CCO was near-final rather than raw.",
    process: [
      "Laddered the packets so each one fed the next. Monthly built toward quarterly, quarterly toward board, nothing assembled twice.",
      "Took the first-review pass myself, handing the CCO a near-finalised packet instead of 25 people's raw inputs.",
      "Replaced the contributor chase with self-service data pulls. I pulled the data, validated it, and served a clean packet.",
      "Translated leadership's decision-only mandate into the QBR reporting, rebuilding the deck around actions and input needed rather than a readout of status updates.",
    ],
    keyDecisions: [
      {
        decision: "Ladder the packets instead of rebuilding each one.",
        why: "Most prep time went on re-assembling the same material. Laddering meant each packet built on the last, so the work was done once per cycle instead of rebuilt from scratch.",
      },
      {
        decision: "Pull the data rather than chase 25 people for it.",
        why: "Data collection should not be a group activity. One validated pull freed 25+ contributors and removed the single biggest source of delay.",
      },
      {
        decision: "Rebuild the QBR deck around decisions, not status.",
        why: "Leadership had mandated decision-only forums; the material had to match. A deck that asks for input gets decisions. A readout gets nods.",
      },
    ],
    result:
      "C-suite preparation dropped from four weeks to two, 25+ contributors got their cycle time back, and the QBR became a forum that asks for decisions rather than one that reports status.",
    learned:
      "Lay the groundwork so meeting time goes on decisions. A repeatable packet meant reviews debated the decision, not the deck. A repeatable rhythm meant contributors knew eight months out exactly when I was coming and what I would ask for. Processes stick when they take work off people's plates.",
  },
  {
    slug: "expedia-commercial-programme",
    client: "Expedia Group",
    discipline: "Commercial strategy",
    title: "$70M+ delivered against a rising target",
    summary:
      "Built the plan. Real growth separated from market inflation, targets set by partner segment, six functions mobilised. The target rose from $40M to $60M on the same timeline. The programme delivered $70M+.",
    metrics: [
      { value: "$70M+", label: "incremental revenue delivered" },
      { value: "$40M→$60M", label: "target raised mid-flight, same timeline" },
      { value: "6", label: "functions mobilised behind one plan" },
    ],
    problem:
      "The programme started with a $40M incremental revenue target, raised to $60M shortly after with no extra time. The headline numbers also mixed real growth with market inflation. Without separating the two, teams could hit the number while creating nothing.",
    targetUser:
      "Commercial leadership, who needed targets they could defend, and the teams in Product, Marketing, Sales Enablement, Finance, Analytics and Commercial whose work had to add up to one result.",
    role:
      "I created the plan and launched it. The analysis separating real growth from inflation, the target-setting by partner segment, and the initial mobilisation of six functions. At the start of the year I handed the programme to my team members, who ran delivery and brought it home above plan.",
    process: [
      "Analysed the revenue base to distinguish growth the programme created from growth the market handed us.",
      "Set targets by partner segment, so every team knew which accounts its number lived in.",
      "Mobilised Product, Marketing, Sales Enablement, Finance, Analytics and Commercial behind the segmented plan.",
      "Handed the programme over at the start of the year with targets, owners and cadence in place, so delivery continued without me.",
    ],
    keyDecisions: [
      {
        decision: "Strip market inflation out of the baseline before setting targets.",
        why: "A target you can hit by standing still is not a target. The harder baseline made the goal honest and the eventual result credible.",
      },
      {
        decision: "Set targets by partner segment rather than one global number.",
        why: "A single number diffuses ownership. Segment-level targets gave each team a slice it could actually influence.",
      },
    ],
    result:
      "The programme delivered $70M+ in incremental revenue, clear of the original $40M target and the $60M it was raised to on the same timeline, measured against a baseline that had already excluded market inflation. The delivery credit belongs to the team I handed it to. The plan they ran was the one I built.",
    learned:
      "Defining what counts is the work. Deciding how growth would be measured did as much for the outcome as any initiative that followed. A plan that keeps delivering after you hand it over is the real test of the planning.",
  },
  {
    slug: "navigate-onboarding-transformation",
    client: "Navigate · Fortune 10 client",
    discipline: "Transformation",
    title: "Onboarding cut from 100+ days to under 80",
    summary:
      "Redesigned client onboarding for a Fortune 10 healthcare business: 24% faster, 36% happier customers, and revenue recognised weeks sooner on every new client.",
    metrics: [
      { value: "24%", label: "faster onboarding" },
      { value: "36%", label: "improvement in customer satisfaction" },
      { value: "20+", label: "days sooner to revenue recognition per client" },
    ],
    problem:
      "At the largest business unit of a Fortune 10 healthcare client, onboarding took more than 100 days. Every day of delay pushed back revenue recognition and tested new customers' patience.",
    targetUser:
      "The onboarding teams who ran the process daily, the new clients living through it, and the unit's leadership who owned the result.",
    role:
      "Consultant leading the onboarding overhaul at the client's largest business unit. The redesign lived or died on adoption. Managing stakeholders was as much the job as the process work, from the sceptical operators to the leadership who owned the result.",
    process: [
      "Mapped the existing 100+ day process end to end to find where the time actually went, and which pieces were realistic to change.",
      "Chose a single subprocess as the starting point, a deliberate balance of impact and speed rather than the longest stretch of cycle time.",
      "Redesigned that subprocess around what the mapping showed, cutting the steps that added days without adding confidence.",
      "Worked the operators' objections into the design as it took shape, so the people running the process daily had shaped it before go-live.",
      "Kept the unit's leadership close throughout, so scope and trade-off decisions were made with them rather than presented to them.",
    ],
    keyDecisions: [
      {
        decision: "Map before changing anything.",
        why: "The redesign had to attack where the time actually went, not where people assumed it went. The mapping made the case for every change that followed.",
      },
      {
        decision: "Start with the highest-leverage subprocess, not the longest.",
        why: "The longest stretch of cycle time was not the best first move. The subprocess we picked offered the strongest balance of impact and speed, and an early, visible win bought the trust the rest of the redesign needed.",
      },
      {
        decision: "Treat stakeholder resistance as design input, not an obstacle.",
        why: "The people running onboarding daily knew where the redesign would break. Working their objections into the process turned the sceptics into the ones defending it.",
      },
    ],
    result:
      "Onboarding dropped from 100+ days to under 80: 24% faster, with customer satisfaction up 36% and revenue recognised more than three weeks sooner on every new client.",
    learned:
      "This is the project where I learned the most about stakeholder management. Most of the adoption and resistance stories I still draw on come from this work. A redesign is only as good as the people who agree to run it.",
  },
];

export function getProject(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
