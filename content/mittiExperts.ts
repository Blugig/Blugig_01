import { site } from "@/content/site";

/** Free Mitti Masterclass playlist (YouTube). */
export const mittiMasterclassUrl = "https://www.youtube.com/playlist?list=PLLVH_1YJHHBM";

const h1Lead = "Mitti Experts and Consultants";
const h1Accent = "for SafetyCulture's Mitti";

export const mittiExpertsMeta = {
  title: "Mitti Experts & Consultants | Avantra Technologies",
  description:
    "Mitti experts and consultants for SafetyCulture's Mitti. Avantra handles setup, training, and support for US operations, safety, and facilities teams.",
  path: "/mitti-experts",
} as const;

export const mittiExpertsHero = {
  crumb: "Mitti experts",
  h1Lead,
  h1Accent,
  /** Visible and accessible H1. Kept as one sentence so the heading does not pick up an eyebrow. */
  h1: `${h1Lead} ${h1Accent}`,
  summary:
    "Avantra Technologies helps operations, safety, and facilities leaders in the United States put Mitti to work. Mitti is by SafetyCulture. SafetyCulture is now Mitti, and we are Mitti experts and Mitti consultants for that platform.",
  primaryLabel: "Book a call",
  secondaryLabel: "Email us",
} as const;

export const mittiWhatWeDo = {
  id: "what-we-do",
  chip: "Our work",
  title: "What we do",
  sub: "Mitti consultants run the implementation with your team, from Mitti setup through training and support. A maintenance system such as MaintainX is one integration, not the whole job.",
  items: [
    {
      title: "Setup and rollout",
      body: "We plan the account, the sites, and the order of the rollout, then configure Mitti to match how your teams are organized.",
    },
    {
      title: "Templates and checklists",
      body: "We turn the forms your crews already use into shared Mitti templates and checklists, so each site is not inventing its own.",
    },
    {
      title: "Inspections",
      body: "We set up inspections so the right people complete the right checks, on a schedule, with a record leaders can review.",
    },
    {
      title: "Actions and assets",
      body: "Findings become actions with an owner. Asset checks sit in the same account when your sites need them.",
    },
    {
      title: "Training your team",
      body: "Mitti training is hands-on. Supervisors, inspectors, and account admins practice the tasks they will own.",
    },
    {
      title: "Integrations",
      body: "When a finding should create work in another system, we connect Mitti to that system. A maintenance system such as MaintainX is one example.",
    },
    {
      title: "Ongoing support",
      body: "After launch we help you adjust templates, clear friction, and add sites without starting over.",
      span: true,
    },
  ],
} as const;

export const mittiWhoWeHelp = {
  chip: "Industries",
  title: "Who we help",
  sub: "Leaders who own safety, daily operations, and the sites their teams run. We set Mitti up around the checks those teams already do.",
} as const;

export const mittiHowWeWork = {
  id: "how-we-work",
  chip: "Four steps",
  title: "How we work",
  sub: "A simple four-step process. We agree on the scope before anything is configured, and your team stays involved at each step.",
  steps: [
    {
      title: "Discover",
      body: "Map the inspections, actions, and handoffs your sites already run.",
    },
    {
      title: "Set up",
      body: "Configure Mitti, then test that setup with a pilot group.",
    },
    {
      title: "Train",
      body: "Teach each role the Mitti tasks they will own.",
    },
    {
      title: "Support",
      body: "Stay through launch and the first changes after go-live.",
    },
  ],
} as const;

export const mittiWhy = {
  id: "why-avantra",
  chip: "Three reasons",
  title: "Why Avantra",
  sub: "Mitti experts, a free way to see the platform, and a rollout your team can run.",
  items: [
    {
      title: "Mitti experts",
      body: "We set up SafetyCulture's Mitti and teach your team to run it. Mitti is the work Avantra does.",
    },
    {
      title: "A free Mitti Masterclass",
      body: "The Mitti Masterclass is a free YouTube playlist. The training page lists what each section covers. You can watch it before you book a call.",
      links: [
        { href: mittiMasterclassUrl, label: "Watch the Mitti Masterclass", external: true },
        { href: "/mitti-training", label: "See the Mitti training outline", external: false },
      ],
    },
    {
      title: "Practical rollouts",
      body: "We configure the account your people will open on Monday, and we train them to change it as the work changes.",
    },
  ],
} as const;

/** Visible FAQ copy. JSON-LD repeats these strings exactly. */
export const mittiFaqs: { q: string; a: string }[] = [
  {
    q: "What is Mitti?",
    a: "Mitti (by SafetyCulture) is the operations system for frontline work. Mitti's website describes it as one place for inspections, training, issue reporting, and asset management. Teams use it for checklists, inspections, actions, and assets.",
  },
  {
    q: "Is SafetyCulture now Mitti?",
    a: "Yes. Mitti's website says SafetyCulture is now Mitti, and that Mitti was formerly SafetyCulture. The product is also written Mitti (by SafetyCulture). Mitti's 11 August 2026 announcement says SafetyCulture rebranded as Mitti. Mitti said that name change did not change logins, data, integrations, settings, permissions, or contracts.",
  },
  {
    q: "How long does Mitti setup take?",
    a: "It depends on the scope. Setup for one team is shorter than a rollout across many sites. We agree on timing after we understand your templates, your sites, and who needs to be involved. A pilot group goes first, then a wider rollout.",
  },
  {
    q: "Do you train our team?",
    a: "Yes. Mitti training is part of the engagement. We train the people who run inspections, manage actions, and administer the account. Training uses your templates, not a generic demo.",
  },
  {
    q: "Do you integrate Mitti with maintenance software?",
    a: "Yes, when you want that connection. A finding in Mitti can be sent to the maintenance system that owns the repair. MaintainX is one example of that kind of system. It is one use case. Most engagements start with Mitti setup, templates, inspections, and training.",
  },
  {
    q: "Do you work with US teams?",
    a: "Yes. We work with operations, safety, and facilities teams in the United States. Avantra is based in Bengaluru, India, and the work is remote. Discovery, setup, training, and support happen with your team.",
  },
  {
    q: "What does a Mitti consultant do?",
    a: "A Mitti consultant at Avantra learns how your sites work, sets up the account and templates, trains your team, and stays through the rollout. If you need Mitti connected to another system, that is scoped with the same work.",
  },
];

export const mittiCta = {
  title: "Talk with a Mitti expert",
  sub: `Book a 30-minute call, or email ${site.email}.`,
  label: "Book a call",
  secondaryLabel: "Email us",
} as const;
