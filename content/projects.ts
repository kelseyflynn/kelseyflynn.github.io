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
      "A portfolio function built from scratch on a Q4 mandate: first portfolio view published 14 January, all 60 programmes onboarded by March, and prioritisation moved from loudest-voice to data.",
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
      "I built the division's first portfolio tracking function from scratch - no prior tooling, no template, no team. None of the 20+ people whose work fed the system reported to me, so every part of it had to be adopted rather than mandated.",
    process: [
      "Wrote a white paper in a week rather than accepting the 1 January big-bang brief at face value, proposing a phased rollout leadership could hold me to.",
      "Launched wave one with the 10-15 core strategic programmes, then scaled to all 60 by the end of March.",
      "Published the first portfolio overview on 14 January and held a biweekly cadence from then on.",
      "Pre-populated every return from existing operating plans so team leads validated data instead of filling in blank forms.",
      "Evaluated Asana, Monday.com and Smartsheet, then ruled them out - procurement would take six months - and built on the Excel, Jira and Confluence stack teams already used.",
      "Standardised the language: one RAG standard brokered across commercial and product, plus an acronym dictionary for the function.",
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
      "Governance earns its keep by speeding a company up. The moment it becomes admin, people route around it - so the system has to be lighter than the chaos it replaces.",
  },
  {
    slug: "expedia-planning-cadence",
    client: "Expedia Group",
    discipline: "Executive operations",
    title: "C-suite planning prep cut from four weeks to two",
    summary:
      "Owned the monthly, quarterly and board rhythms for the Chief Commercial Officer: laddered packets, a 25-person contributor chase replaced with self-service data pulls, and QBR decks rebuilt around decisions rather than status.",
    metrics: [
      { value: "2 wks", label: "C-suite prep, down from four" },
      { value: "25+", label: "contributors replaced by self-service data pulls" },
      { value: "3", label: "rhythms owned: monthly, quarterly, board" },
    ],
    problem:
      "Every executive review cycle consumed four weeks of preparation and pulled 25+ people into assembling it. Packets were built from scratch each time, and the QBR deck read as a status readout rather than a request for decisions.",
    targetUser:
      "The Chief Commercial Officer, who needed decision-ready material rather than raw inputs, and the 25+ contributors whose time the old process burned every cycle.",
    role:
      "I owned the executive planning cadence for the CCO - the monthly, quarterly and board rhythms - and acted as first-line reviewer, so what reached the CCO was near-final rather than raw.",
    process: [
      "Laddered the packets so each one fed the next: monthly built toward quarterly, quarterly toward board, nothing assembled twice.",
      "Took the first-review pass myself, handing the CCO a near-finalised packet instead of 25 people's raw inputs.",
      "Replaced the contributor chase with self-service data pulls - I pulled the data, validated it, and served a clean packet.",
      "Translated leadership's decision-only mandate into the QBR reporting, rebuilding the deck around actions and input needed rather than a readout of status updates.",
    ],
    keyDecisions: [
      {
        decision: "Ladder the packets instead of rebuilding each one.",
        why: "Most prep time was re-assembly. Making each packet feed the next removed the duplicated work rather than speeding it up.",
      },
      {
        decision: "Pull the data rather than chase 25 people for it.",
        why: "Data collection should not be a group activity. One validated pull freed forty contributors and removed the single biggest source of delay.",
      },
      {
        decision: "Rebuild the QBR deck around decisions, not status.",
        why: "Leadership had mandated decision-only forums; the material had to match. A deck that asks for input gets decisions - a readout gets nods.",
      },
    ],
    result:
      "C-suite preparation dropped from four weeks to two, 25+ contributors got their cycle time back, and the QBR became a forum that asks for decisions rather than one that reports status.",
    learned:
      "Spend the time laying the groundwork so the meeting time goes on decisions. With a repeatable packet, C-suite reviews were spent on the decisions needed rather than on how to build the deck - and a repeatable rhythm meant I could tell contributors eight months in advance exactly when I would come to them and what I would ask for. The processes that stick are the ones that take administrative work off people's plates.",
  },
  {
    slug: "expedia-commercial-programme",
    client: "Expedia Group",
    discipline: "Commercial strategy",
    title: "$70M+ delivered against a $40M target",
    summary:
      "Built the plan: real growth separated from market inflation, targets set by partner segment, six functions mobilised. Handed over at the start of the year, the programme delivered $30M above target.",
    metrics: [
      { value: "$70M+", label: "incremental revenue delivered" },
      { value: "$30M", label: "over the original target" },
      { value: "6", label: "functions mobilised behind one plan" },
    ],
    problem:
      "The programme carried a $40M incremental revenue target, but the headline numbers mixed real growth with market inflation. Without separating the two, teams could hit the number while creating nothing.",
    targetUser:
      "Commercial leadership, who needed targets they could defend, and the teams in Product, Marketing, Sales Enablement, Finance, Analytics and Commercial whose work had to add up to one result.",
    role:
      "I created the plan and launched it: the analysis separating real growth from inflation, the target-setting by partner segment, and the initial mobilisation of six functions. At the start of the year I handed the programme to my team members, who ran delivery and brought it home above plan.",
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
      "The programme delivered $70M+ in incremental revenue against the $40M target - $30M over, measured against a baseline that had already excluded market inflation. The delivery credit belongs to the team I handed it to; the plan they ran was the one I built.",
    learned:
      "Defining what counts is the work - deciding how growth would be measured did as much for the outcome as any initiative that followed. And a plan that keeps delivering after you hand it over is the real test of the planning.",
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
      "Consultant leading the onboarding overhaul at the client's largest business unit. The redesign lived or died on adoption, so managing stakeholders - from sceptical operators to the leadership who owned the result - was as much the job as the process work.",
    process: [
      "Mapped the existing 100+ day process end to end to find where the time actually went.",
      "Redesigned onboarding around what the mapping showed, cutting the steps that added days without adding confidence.",
      "Worked the operators' objections into the design as it took shape, so the people running the process daily had shaped it.",
    ],
    keyDecisions: [
      {
        decision: "Map before changing anything.",
        why: "The redesign had to attack where the time actually went, not where people assumed it went. The mapping made the case for every change that followed.",
      },
      {
        decision: "Treat stakeholder resistance as design input, not an obstacle.",
        why: "The people running onboarding daily knew where the redesign would break. Working their objections into the process turned the sceptics into the ones defending it.",
      },
    ],
    result:
      "Onboarding dropped from 100+ days to under 80: 24% faster, with customer satisfaction up 36% and revenue recognised more than three weeks sooner on every new client.",
    learned:
      "This is the project where I learned the most about stakeholder management. Most of the adoption and resistance stories I still draw on come from this work - a redesign is only as good as the people who agree to run it.",
  },
];

export function getProject(slug: string): CaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}
