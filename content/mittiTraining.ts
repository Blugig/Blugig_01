export const mittiTrainingMeta = {
  title: "Mitti Training for Teams: Role-Based, Hands-On | Avantra",
  description:
    "Hands-on Mitti (by SafetyCulture) training from Avantra. We train your inspectors, supervisors and admins on your own templates. Book a 30-minute call.",
  path: "/mitti-training",
} as const;

export const mittiTrainingHero = {
  crumb: "Mitti training",
  h1Lead: "Mitti training",
  h1Accent: "for your team",
  summary:
    "We sit with the people who will use Mitti and practice the real work: start an inspection, assign an action, and make sure someone owns it. Training runs on your own account and templates, not a generic demo.",
  primaryLabel: "Book a call",
  secondaryLabel: "See what we cover",
} as const;

export const mittiTrainingSections = {
  chip: "What we cover",
  heading: "What a training session covers",
  sub: "Eight parts we walk through with your team, on your account, not a generic demo.",
  items: [
    {
      title: "Getting started",
      body: "We open the account with your admin, invite the first people, and finish one real inspection before anyone talks about every site.",
    },
    {
      title: "Templates",
      body: "We turn a paper form into one shared Mitti template, so sites follow that checklist instead of keeping their own copies.",
    },
    {
      title: "Inspections",
      body: "Someone on the team starts an inspection, answers it on a phone, and leaves a record a manager can review. We stay for that first one.",
    },
    {
      title: "Actions",
      body: "A failed answer becomes an action with an owner and a due date. We practice closing it, so the follow-up does not sit in a report.",
    },
    {
      title: "Issues",
      body: "We practice reporting a hazard or a defect so it reaches the person who should respond. In Mitti, issue reporting is how someone flags what they see.",
    },
    {
      title: "Assets",
      body: "We set up one machine or other asset so the next check starts from that asset, with its inspection history, instead of a blank form.",
    },
    {
      title: "Sites, groups, users, and permissions",
      body: "We set locations, crews, and people with you, and decide who can edit templates, run inspections, or manage the account.",
    },
    {
      title: "Training and Heads Up",
      body: "We show your admins how to assign lessons with Mitti's built-in Training feature and share updates with Heads Up, so people can acknowledge what changed.",
    },
  ],
} as const;

export const mittiTrainingCourses = {
  id: "mitti-courses",
  title: "Mitti's own courses vs training on your templates",
  href: "https://mitti.com/training",
  linkLabel: "Mitti's training page",
  paragraphs: [
    "Mitti ships with its own courses. An admin can assign a lesson from Mitti's library, or build one inside the account, and people complete it on the phone. Those lessons are useful for a general topic, such as how a feature works or a workplace habit that is the same in every company. You can browse them on Mitti's training page.",
    "That is a different job from practicing the checklist your night shift will actually open. A library course does not know your site names, which question should create an action, or who the supervisor is on Tuesday. People can finish the course and still hesitate on the first real inspection.",
    "We train the roles that will touch the account. Inspectors run the template they will use on shift. Supervisors assign an action and close it. Admins set sites, groups, and who may edit a form. The session uses your login, so the next shift is not learning on a sample company. Use Mitti's courses for the general lessons, and book us when the training has to match your operation.",
  ],
} as const;

export const mittiTrainingFaqs = [
  {
    q: "How long is a session?",
    a: "Most first sessions are one sitting, long enough to practice one inspection, one action, and who owns it. We agree the length before we book your people, based on how many roles are in the room.",
  },
  {
    q: "Who attends?",
    a: "The people who will use Mitti: inspectors, supervisors, and the admin who owns the account. We do not pull the whole company into one call. Each role practices the task they will do the next day.",
  },
  {
    q: "Do you train remotely?",
    a: "Yes. Sessions run online with your team, on your account. You share a screen, open the template, and complete a real check together. Nobody has to be in the same building.",
  },
] as const;

export const mittiTrainingCta = {
  title: "Want Mitti training for your team?",
  label: "Book a call",
} as const;
