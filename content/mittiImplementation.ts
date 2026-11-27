import { site } from "@/content/site";

export const mittiImplementationMeta = {
  title: "Mitti (SafetyCulture) Implementation Experts | Avantra",
  description:
    "Need a Mitti implementation partner? Our Mitti (SafetyCulture) implementation consultants plan, set up, train and launch Mitti, formerly iAuditor.",
  path: "/mitti-implementation",
} as const;

export const mittiImplementationHero = {
  crumb: "Mitti implementation",
  /** The comma is part of the full H1: "Mitti implementation experts, from the first site to every site". */
  h1Lead: "Mitti implementation experts,",
  h1Accent: "from the first site to every site",
  summary:
    "The app is bought. Everyone has a login. Three weeks later, half your sites are still filling in paper and the other half made their own checklists. That is usually the day someone searches for a Mitti implementation partner. Avantra is a team of Mitti (SafetyCulture) implementation experts. We plan, set up, test, train and launch Mitti with your team, so the checks get done on the floor and the problems get an owner.",
  primaryLabel: "Book a call",
  secondaryLabel: "Email us",
} as const;

export const mittiImplementationPartner = {
  title: "Looking for a Mitti implementation partner?",
  paragraphs: [
    'People search for this in a lot of ways: "Mitti implementation partner", "SafetyCulture consultant", "iAuditor setup help", "Mitti onboarding". They all want the same thing. Someone who has set Mitti up before, who will build it around how your sites really work, and who will stay until people use it.',
    "That is the job we do. We are Mitti implementation experts and consultants. We don't hand you a login and a PDF. We sit with your team, turn the forms you use today into Mitti templates, set up who sees what, test it on one real site, train each role, and then roll it out site by site.",
    "SafetyCulture is now Mitti, and many teams still call the app iAuditor. Same platform, same work. If you are searching for SafetyCulture implementation or iAuditor implementation, you are in the right place.",
  ],
} as const;

export const mittiImplementationStory = {
  title: "A rollout we see all the time",
  paragraphs: [
    "Picture an operations manager with twelve sites. On Monday she rolls Mitti out to everyone at once. By Friday, three sites are using it, two have built their own versions of the same checklist, and nobody knows who should fix the broken freezer someone flagged on Wednesday.",
    "Nothing is wrong with the app. The setup skipped the boring parts: which sites exist, which people belong to which group, who owns a failed check, and which one form everyone should use. That is what a Mitti implementation is really about. Get those parts right on one site first, and the next eleven go faster.",
  ],
} as const;

export const mittiImplementationProcess = {
  id: "process",
  chip: "Six steps",
  title: "Our Mitti implementation process, step by step",
  more: { href: site.calendlyUrl, label: "Book a call" },
  steps: [
    {
      title: "Discovery call",
      body: "A 30-minute call. You tell us your sites, your current forms and what is going wrong. We tell you honestly whether you need us. What you get: a short list of next steps.",
    },
    {
      title: "Discover and scope",
      body: "We map your sites, teams, roles, the checks you run today and who acts on a failed item. We pick the first use case. What you get: agreed scope and a rollout roadmap.",
    },
    {
      title: "Set up your Mitti account",
      body: "We build sites, groups, roles and permissions, turn your forms into templates and checklists, set inspection schedules, and route actions and issues to an owner. What you get: a configured Mitti workspace.",
    },
    {
      title: "Pilot on one real site",
      body: "One site, one team, real shifts. We watch where people get stuck and fix the template, not the people. What you get: pilot feedback and a fixed setup.",
    },
    {
      title: "Train and launch, site by site",
      body: "Role-based training for inspectors, supervisors and admins, using your own templates. Then we roll out in manageable stages. What you get: user onboarding and a launch checklist.",
    },
    {
      title: "Support and improve",
      body: "We review adoption, clean up templates, add sites and connect Mitti to other systems when it makes sense. What you get: a prioritized improvement plan.",
    },
  ],
} as const;

export const mittiImplementationTiming = {
  title: "How long does a Mitti implementation take?",
  body: "It depends on how many sites, templates and teams are in scope, so we agree milestones during discovery, not before. A typical pilot takes 3–4 weeks. After the pilot, we add sites in stages, at a pace your team can absorb. A single team with a few checklists moves much faster than a multi-site rollout with integrations.",
} as const;

export const mittiImplementationIncluded = {
  id: "included",
  chip: "What you get",
  title: "What's included in a Mitti implementation",
  items: [
    {
      title: "Rollout plan",
      body: 'Which sites go first, who owns the project, and what "done" looks like.',
    },
    {
      title: "Account structure",
      body: "Sites, groups, roles and permissions that match how your teams are organized.",
    },
    {
      title: "Templates and checklists",
      body: "We turn the forms you use today into shared Mitti templates, with clear questions and required photos where they help.",
      href: "/mitti-template-setup",
      anchor: "Mitti template setup",
    },
    {
      title: "Inspection schedules",
      body: "The right check, for the right people, at the right time.",
    },
    {
      title: "Actions and issues",
      body: "A failed check becomes an action with an owner and a due date.",
    },
    {
      title: "Reporting",
      body: "The few views leaders actually open each week.",
      href: "/integrations/power-bi",
      anchor: "Mitti and Power BI",
    },
    {
      title: "Training for every role",
      body: "Hands-on, on your own templates.",
      href: "/mitti-training",
      anchor: "Free Mitti training",
    },
    {
      title: "Support after launch",
      body: "Template fixes, new sites and integrations when you need them.",
      href: "/integrations",
      anchor: "Integrations",
    },
  ],
} as const;

export const mittiImplementationSituations = {
  title: "New to Mitti, moving off paper, or fixing a stalled rollout?",
  cards: [
    {
      title: "Starting fresh",
      body: "You just bought Mitti. We set it up right the first time, starting with one site.",
      href: site.calendlyUrl,
      anchor: "Book a call",
      external: true,
    },
    {
      title: "Moving from paper or an old iAuditor setup",
      body: "We clean up years of copied templates and old permissions and move you to one shared setup.",
      href: "/blog/safetyculture-is-now-mitti",
      anchor: "What the SafetyCulture to Mitti rename means",
      external: false,
    },
    {
      title: "Rollout stalled",
      body: "People stopped using it. We find out why and restart it.",
      href: "/blog/mitti-adoption-stalls-get-teams-using-it",
      anchor: "Why Mitti adoption stalls",
      external: false,
    },
  ],
} as const;

export const mittiImplementationConsultant = {
  title: "Do you need a Mitti implementation consultant at all?",
  paragraphs: [
    "Maybe not. Mitti has free onboarding guides and courses, and a small team with one site and one checklist can often set itself up. We'll tell you that on the call.",
    "A Mitti consultant pays off when you have several sites, more than a handful of forms, people in different roles who need different access, or a first rollout that didn't stick. Those are the setups that are hard to undo later. Want to try it yourself first? Start with our step-by-step guide: How to roll out Mitti across multiple sites.",
  ],
  link: { href: "/blog/how-to-roll-out-mitti-multiple-sites", label: "How to roll out Mitti across multiple sites" },
} as const;

export const mittiImplementationIndustries = {
  chip: "Industries",
  title: "Mitti implementation for your industry",
  sub: "We set Mitti up around the checks your sites already do.",
} as const;

export const mittiImplementationFaqs = [
  {
    q: "What does a Mitti implementation consultant do?",
    a: "A Mitti implementation consultant plans your rollout, sets up the account (sites, groups, roles, templates, schedules and actions), tests it on a pilot site, trains each role, and stays through launch. At Avantra, the same team also connects Mitti to other systems when you need it.",
  },
  {
    q: "Are you a Mitti implementation partner?",
    a: "We are Mitti (SafetyCulture) implementation experts and consultants. We plan, set up, train and support Mitti rollouts with your team, from the first site to every site. Book a 30-minute call and we'll walk through your setup.",
  },
  {
    q: "Is a SafetyCulture or iAuditor implementation the same as a Mitti implementation?",
    a: "Yes. SafetyCulture rebranded as Mitti in August 2026, and many teams still call the app iAuditor. It is the same platform, so the implementation work is the same.",
  },
  {
    q: "How long does a Mitti implementation take?",
    a: "It depends on your sites, templates and teams. A typical pilot takes 3–4 weeks. Then we roll out in stages, and we agree milestones during discovery.",
  },
  {
    q: "Can you fix a Mitti setup we already have?",
    a: "Yes. Many teams come to us with templates copied across sites, unclear permissions or a rollout that stalled. We review the setup, fix what gets in people's way and plan the next sites.",
  },
  {
    q: "What do we need to have ready?",
    a: "A project owner, a few pilot users and the forms or checklists you use today. They can be paper, spreadsheets or PDFs. Messy is fine.",
  },
  {
    q: "Do you work remotely?",
    a: "Yes. Avantra is based in Bengaluru, India, and works remotely with operations, safety and facilities teams in the United States. Discovery, setup, training and support all happen online with your team.",
  },
  {
    q: "Can you connect Mitti to our other systems?",
    a: "Yes, when it helps. We connect Mitti to ERP, ITSM, HR, BI and maintenance tools, for example with Workato, Power BI, Zapier or MaintainX. Most projects start with setup and training first.",
  },
  {
    q: "How much does a Mitti implementation cost?",
    a: "It depends on scope. We agree the scope and deliverables after a short discovery conversation, before any work starts. Email info@avantratechnologies.com or book a call.",
  },
] as const;

export const mittiImplementationCta = {
  title: "Plan your Mitti implementation",
  sub: `Book a 30-minute call, or email ${site.email}.`,
  label: "Book a call",
  secondaryLabel: "Email us",
} as const;
