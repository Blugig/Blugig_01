import { site } from "@/content/site";

const h1Lead = "Mitti (SafetyCulture) Experts";
const h1Accent = "for implementation and setup";

export const mittiExpertsMeta = {
  title: "Mitti (SafetyCulture) Implementation Experts & Consultants | Avantra",
  description:
    "Mitti (SafetyCulture) experts for implementation, consulting, and setup. We plan, pilot, train, and launch Mitti, formerly iAuditor, with your team.",
  path: "/mitti-experts",
} as const;

export const mittiExpertsHero = {
  crumb: "Mitti experts",
  h1Lead,
  h1Accent,
  /** Visible H1: lead plus accent, with a space between them. */
  h1: `${h1Lead} ${h1Accent}`,
  summary:
    "The licenses are paid. People have logins. Then a supervisor walks a site and finds last week's paper checklist still on the clipboard, while the new one on the phone was never opened. That is usually when someone starts looking for help. We implement Mitti with your team: plan the account, build the templates, try them on one real site, train each role, and roll the rest out at a pace people can keep.",
  primaryLabel: "Book a call",
  secondaryLabel: "Email us",
} as const;

export const mittiTheWork = {
  id: "the-work",
  title: "What a Mitti implementation actually is",
  paragraphs: [
    {
      text: "People look this up under a few names. Mitti implementation. SafetyCulture consultant. iAuditor setup. Mitti onboarding. The job is the same. You want someone who has set Mitti up before, who will build it around how your sites really work, and who will stay until the checks get done.",
    },
    {
      text: "We don't hand you a login and a PDF. We sit with your team, turn the forms you use today into shared templates, and decide who sees which site. A failed check gets an owner. Then we try that on a real shift before anyone talks about the other sites.",
    },
    {
      text: "A rollout often starts the other way. Mitti goes live everywhere in the same week. Some people use it. Others rebuild the same checklist their own way. A problem flagged midweek still has no owner. The setup skipped the boring parts. Get those right on one site first, and the next sites go faster.",
    },
  ],
} as const;

export const mittiRename = {
  id: "iauditor",
  title: "iAuditor is now Mitti",
  paragraphs: [
    {
      text: "SafetyCulture rebranded as Mitti on August 11, 2026. For years before that, the inspection app was called iAuditor. Mitti's own announcement said the name change did not change logins, data, integrations, settings, permissions, or contracts.",
    },
    {
      text: "If you are searching for SafetyCulture implementation or iAuditor implementation, this is the same work. A consultant still learns how your sites run, sets Mitti up around that, and trains people until they can change it themselves.",
    },
  ],
} as const;

export const mittiProcess = {
  id: "process",
  chip: "The process",
  title: "How we implement Mitti",
  sub: "A small team setup, one site and a short list of checklists, usually takes about 2 to 4 weeks from the first working session to a live account. A multi-site rollout, with more templates, more roles, and a pilot before the other sites, usually takes about 8 to 16 weeks. We agree the milestones after we see your forms and your site list. We don't pick a date before that.",
  steps: [
    {
      title: "Discovery call",
      body: "A 30-minute call. You share the sites, the forms, and what is going wrong. We say honestly if you need us.",
    },
    {
      title: "Scope the work",
      body: "We map sites, roles, the checks you run, and who acts when something fails. You get an agreed scope and a rollout order.",
    },
    {
      title: "Set up the account",
      body: "Sites, groups, permissions, templates, schedules, and an owner on every action. A workspace people can open.",
    },
    {
      title: "Pilot on one real site",
      body: "One site, real shifts. We watch where people get stuck and fix the template, not the person.",
    },
    {
      title: "Train, then add sites",
      body: "Inspectors, supervisors, and admins practice on your templates. Then we add sites in groups, not all at once.",
    },
    {
      title: "Stay for the first changes",
      body: "After launch we clean up what people skipped, add sites, and connect another system only when that helps.",
    },
  ],
} as const;

export const mittiIncluded = {
  id: "included",
  chip: "What you get",
  title: "What's included",
  items: [
    {
      title: "Rollout plan",
      body: "Which sites go first, who owns the project on your side, and what done looks like.",
    },
    {
      title: "Account structure",
      body: "Sites, groups, roles, and permissions that match how your teams are organized.",
    },
    {
      title: "Templates and checklists",
      body: "The forms you use today, turned into one shared template. A photo is required only when it changes the next step.",
      href: "/mitti-template-setup",
    },
    {
      title: "Inspection schedules",
      body: "The right check, for the right people, on the days they actually do the work.",
    },
    {
      title: "Actions and issues",
      body: "A failed check becomes an action with an owner and a due date.",
    },
    {
      title: "Reporting",
      body: "A few views leaders will open. Power BI can be part of the same work if you want the numbers there.",
      href: "/integrations/power-bi",
    },
    {
      title: "Training for each role",
      body: "Hands-on practice for inspectors, supervisors, and the person who administers the account.",
      href: "/mitti-training",
    },
    {
      title: "Support after launch",
      body: "Template fixes, new sites, and a connection to another system when a finding should create work elsewhere.",
      href: "/integrations",
    },
  ],
} as const;

export const mittiSituations = {
  id: "where-you-are",
  title: "Starting fresh, leaving paper, or stuck",
  cards: [
    {
      title: "Starting fresh",
      body: "You just bought Mitti, or you are about to. We set up the first site before people invent their own versions of the same checklist.",
      href: site.calendlyUrl,
      anchor: "Book a call",
      external: true,
    },
    {
      title: "Moving from paper or an old iAuditor setup",
      body: "Copied templates and old permissions are normal. We sort which form is the real one and move you onto a single shared setup.",
      href: "/blog/safetyculture-is-now-mitti",
      anchor: "What the SafetyCulture to Mitti rename means",
      external: false,
    },
    {
      title: "Rollout stalled",
      body: "People stopped opening the app. We find the friction, usually a template, a permission, or a missing owner, and start again from one site.",
      href: "/blog/mitti-adoption-stalls-get-teams-using-it",
      anchor: "Why Mitti adoption stalls",
      external: false,
    },
  ],
} as const;

export const mittiOnboarding = {
  id: "onboarding",
  title: "Mitti's free onboarding vs hands-on expert help",
  paragraphs: [
    {
      text: "Mitti publishes free onboarding guides and courses. A small team with one site and one checklist can often set itself up with those. If that is you, we will say so on the call.",
    },
    {
      text: "Hands-on help is worth it when you have several sites, more than a handful of forms, people who need different access, or a first rollout that didn't stick. Permissions get copied. Templates fork. Later, nobody is sure which checklist is the real one.",
    },
    {
      text: "Free onboarding shows you the product. It does not know your sites, your shift pattern, or which failed check should wake a supervisor. That is the part we do with your team. If you want to try a multi-site rollout yourself first, read How to roll out Mitti across multiple sites.",
      link: { href: "/blog/how-to-roll-out-mitti-multiple-sites", label: "How to roll out Mitti across multiple sites" },
    },
  ],
} as const;

export const mittiTeam = {
  id: "who-we-are",
  title: "Who we are",
  paragraphs: [
    {
      text: "Avantra Technologies is a team in Bengaluru, India. We are Mitti (SafetyCulture) experts and consultants. We do not make Mitti. Khasim Basha is a Mitti Expert on the team. The same people who scope a project build the templates and run the training.",
    },
    {
      text: "We work with teams in the US, UK, and Australia, remotely. Discovery, setup, training, and support all happen online. You do not need us in the building to run a pilot. You do need a project owner who can get us the forms and a few people for the first site.",
    },
    {
      text: "When a finding should create work in another system, we can connect the two, including a maintenance system such as MaintainX. Most projects start with setup and training. The connection comes after the checks are getting done.",
    },
  ],
} as const;

export const mittiWhoWeHelp = {
  chip: "Industries",
  title: "Mitti implementation for your industry",
  sub: "We set Mitti up around the checks your sites already do.",
} as const;

export type MittiFaq = { q: string; a: string; link?: { href: string; label: string } };

/** Visible FAQ copy. JSON-LD uses `a`. `link` turns that phrase into an anchor in the accordion. */
export const mittiFaqs: MittiFaq[] = [
  {
    q: "How much does a Mitti implementation cost?",
    a: "We don't publish a price. It depends on how many sites and templates are in the first phase, how different the roles are, whether we are cleaning up an old iAuditor account, and whether Mitti has to talk to another system. We agree the scope after a short conversation, before any work starts. Email info@avantratechnologies.com or book a call.",
  },
  {
    q: "How long does a Mitti implementation take?",
    a: "A small team setup, one site and a short list of checklists, usually takes about 2 to 4 weeks. A multi-site rollout usually takes about 8 to 16 weeks, including a pilot and training. We set the milestones after we have seen your forms.",
  },
  {
    q: "How do I choose a Mitti consultant?",
    a: "Ask who will do the work, and whether that person stays through training. A useful consultant wants your current forms, even the messy ones, and will tell you if you don't need help. Be careful with a plan that turns every site on at once.",
  },
  {
    q: "Can you move us off paper or an old iAuditor setup?",
    a: "Yes. Paper, spreadsheets, PDFs, and old iAuditor or SafetyCulture templates are fine. We keep the questions that still matter, drop the ones nobody uses, and put the rest in one shared template. Old permissions get a review too.",
  },
  {
    q: "Can you connect Mitti to our other systems?",
    a: "Yes, when it helps. A failed inspection can open a ticket or a work order, and the status can come back to Mitti. We connect Mitti with tools such as Workato, Zapier, Power BI, and MaintainX, and with ERP or HR systems when that is the next step. Most projects start with setup and training.",
  },
  {
    q: "Do you train the people who will use it?",
    a: "Yes. Inspectors, supervisors, and the account admin practice on your templates, not a generic demo. You can read the free Mitti training outline before you book. The sessions use your sites and your forms.",
    link: { href: "/mitti-training", label: "free Mitti training outline" },
  },
  {
    q: "How does a multi-site rollout work?",
    a: "One site pilots the templates on real shifts. We fix what confused people, then add sites in groups your supervisors can support. Each site gets the shared templates and a short training, not a new design. Read about rolling Mitti out across multiple sites if you want the same idea in a guide.",
    link: { href: "/blog/how-to-roll-out-mitti-multiple-sites", label: "rolling Mitti out across multiple sites" },
  },
  {
    q: "What does a Mitti implementation consultant do?",
    a: "They learn how your sites work, set up the account and templates, train each role, and stay through launch. That covers permissions, schedules, actions, and a pilot. A connection to another system is scoped with the same team.",
  },
  {
    q: "Is a SafetyCulture consultant the same as a Mitti consultant?",
    a: "Yes. SafetyCulture rebranded as Mitti in August 2026, and the app was called iAuditor before that. A SafetyCulture or iAuditor consultant is doing the same job. The platform did not change when the name did.",
  },
  {
    q: "Do you work with teams in the US, UK, and Australia?",
    a: "Yes. We work with operations, safety, and facilities teams in the US, UK, and Australia, remotely. Avantra is based in Bengaluru, India. Discovery, setup, training, and support happen online.",
  },
  {
    q: "What do we need to have ready?",
    a: "A project owner, a few people for the pilot site, and the forms you use today. Paper or spreadsheets are fine. You don't need a finished process map. You do need someone who knows who fixes a failed check.",
  },
  {
    q: "Can you fix a Mitti setup we already have?",
    a: "Yes. Teams come to us with copied templates, permissions nobody can explain, or a rollout that stalled. We review the setup, fix what gets in people's way, and plan the next sites from something that works.",
  },
];

export const mittiCta = {
  title: "Plan your Mitti implementation",
  sub: `Book a 30-minute call, or email ${site.email}.`,
  label: "Book a call",
  secondaryLabel: "Email us",
} as const;
