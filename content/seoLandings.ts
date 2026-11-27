import type { ShapeName } from "@/lib/three/shapes";

export type SeoLandingPage = {
  path: string;
  title: string;
  description: string;
  crumb: string;
  h1Lead: string;
  h1Accent: string;
  summary: string;
  shape: ShapeName;
  /** When set, the breadcrumb is Home, this parent, then the page. */
  parent?: { name: string; path: string };
  /** When set, the page shows pills for the other industries. */
  industrySlug?: string;
  serviceName: string;
  ctaTitle: string;
  stepsIntro: string;
  /** Link shown under the “How we do it” steps. */
  stepsMore?: { href: string; label: string };
  sections: { heading: string; paragraphs?: string[]; list?: string[] }[];
  steps: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

const services = "[our services](/services)";
const contact = "[contact us](/contact)";
const rename = "[SafetyCulture is now Mitti](/blog/safetyculture-is-now-mitti)";
const rollout = "[rolling Mitti out across many sites](/blog/how-to-roll-out-mitti-multiple-sites)";
const adoption = "[when adoption stalls](/blog/mitti-adoption-stalls-get-teams-using-it)";

export const templateSetup: SeoLandingPage = {
  path: "/mitti-template-setup",
  title: "Template Setup | Avantra Technologies - Mitti Experts",
  description:
    "Avantra sets up Mitti templates and checklists for teams that used SafetyCulture or iAuditor. One shared form, tested on a real shift.",
  crumb: "Template setup",
  h1Lead: "Mitti template",
  h1Accent: "and checklist setup",
  summary:
    "We turn the paper forms your teams already trust into shared Mitti templates. Mitti is the product many people still call SafetyCulture or iAuditor. Avantra is a team of Mitti experts. We do not make the product.",
  shape: "mitti",
  serviceName: "Mitti template and checklist setup",
  ctaTitle: "Bring us the form you use today",
  stepsIntro: "A short path from the form in the binder to a template people will open on a phone.",
  stepsMore: { href: "/mitti-implementation", label: "part of a full Mitti implementation" },
  sections: [
    {
      heading: "Start from the form people already use",
      paragraphs: [
        "A template in Mitti is the shared checklist someone fills out on a phone. If each site keeps its own copy, the questions drift. One site adds a line, another drops a photo, and a manager can no longer compare Tuesday with Tuesday.",
        "We start with the paper form, the spreadsheet, or the old SafetyCulture or iAuditor template you already run. We do not hand you a generic pack and ask you to fit your work around it. If a question does not change a decision, it does not belong on the new form.",
      ],
    },
    {
      heading: "Write questions a person can answer on the floor",
      paragraphs: [
        "Each line should be something a person can see, measure, or do in that moment. \"Is the walk-in at or below 40°F?\" is a question. \"Maintain food safety excellence\" is not. We keep the words your crews already say, then tighten anything that two people would read two ways.",
        "A photo is required only when the picture changes what happens next. A failed answer should create an action with a named owner and a due date, not a red score that nobody opens. Scoring is useful only if someone will actually use the number.",
      ],
      list: [
        "One question per line, in the order of the walk.",
        "Skip logic so a site without a kitchen is not asked kitchen questions.",
        "A clear owner for the template, separate from the people who only fill it out.",
        "A name people will search for, not an internal code.",
      ],
    },
    {
      heading: "Test it on one real shift before you copy it",
      paragraphs: [
        "We put the template on one site for a real shift. The person who will use it every day fills it out while the work is happening, not in a conference room. We watch where they hesitate, where they skip, and where the action goes to the wrong person.",
        `After that week we change the template once, then share that version. Copying a half-finished form to every site is how you get thirty slightly different checklists. If you are ${rollout}, the template has to be stable before the second site sees it.`,
        `Names still trip people up. ${rename}, and plenty of teams still say iAuditor. The account and the templates are the same product. We label the first mention so nobody hunts for a second app. If you want the wider picture of setup, training, and support, see ${services}, or ${contact} and tell us which form hurts the most.`,
      ],
    },
  ],
  steps: [
    { title: "Collect the real forms", body: "Paper, spreadsheets, and the templates already in the account. We keep the ones people use." },
    { title: "Build one shared template", body: "Plain questions, the right photos, and an action when an answer fails." },
    { title: "Run one real shift", body: "One site, one week, with the person who will own that checklist." },
    { title: "Hand over the edit rights", body: "You leave knowing who can change the template and who can only fill it out." },
  ],
  faqs: [
    {
      q: "Is Mitti the same thing as SafetyCulture or iAuditor?",
      a: "Mitti is the current name. SafetyCulture is the previous company and product name, and iAuditor is an earlier name for the inspection app. Templates you built under those names are still the same kind of checklist.",
    },
    {
      q: "Do we have to throw away our paper forms?",
      a: "No. The paper form is the starting point. We keep the checks your team already believes in and drop lines that never change what anyone does.",
    },
    {
      q: "Can one template work for every site?",
      a: "Often yes, with a few questions that show only when a site needs them. If two operations do different work, they should not share one form just to keep the list short.",
    },
    {
      q: "Who should be allowed to edit a live template?",
      a: "A small group. Everyone else fills it out. If every supervisor can rewrite questions, you are back to a different form at every site.",
    },
  ],
};

export const zapier: SeoLandingPage = {
  path: "/integrations/zapier",
  title: "Mitti and Zapier | Avantra Technologies - Mitti Experts",
  description:
    "Connect Mitti by SafetyCulture to other apps with Zapier. Avantra sets up simple automations so a failed check can email, task, or log a row.",
  crumb: "Zapier",
  parent: { name: "Integrations", path: "/integrations" },
  h1Lead: "Mitti and Zapier",
  h1Accent: "automations",
  summary:
    "Zapier is for a simple handoff. When something happens in Mitti, another app you already use can get a message, a task, or a new row. We set up one of those at a time and test it before it runs on real shifts.",
  shape: "hub",
  serviceName: "Mitti and Zapier automations",
  ctaTitle: "Tell us the one handoff you want",
  stepsIntro: "One trigger, one result, and a test that uses a real inspection.",
  sections: [
    {
      heading: "Use Zapier when the next step is simple",
      paragraphs: [
        "A completed inspection can add a row to the sheet a regional manager already opens. A new high-priority action can email the person on call. A failed check at one store can create a task in the tool that store already lives in. That is the kind of job Zapier is good at.",
        "Mitti is the product formerly called SafetyCulture, and before that many teams said iAuditor. The record of the inspection still lives in Mitti. Zapier only carries the few fields someone needs in the other app. If Zapier is slow or off, the inspection is still saved.",
        "Write the automation the way you would explain it to a new supervisor. When a store finishes the opening inspection, add a row with the store name and any failed lines. If you cannot say it in one sentence, it is two automations, and the second one can wait.",
      ],
    },
    {
      heading: "Do not send every answer",
      paragraphs: [
        "A full inspection has dozens of answers. Pushing all of them into email or a sheet makes a mess nobody reads. We pick the moment that matters, usually \"inspection completed\" or \"action created,\" and the fields a person will act on: site, what failed, who owns it, and the photo if there is one.",
        "We also write down what should not be automated. A missing glove is not the same as a cooler that is warm. If every failed line pages someone, people mute the page. The rule should be boring and specific.",
      ],
      list: [
        "One automation first, named in plain words.",
        "A test inspection that is obviously fake, so it cannot be confused with a real shift.",
        "A note on who turns it off if the other app changes.",
        "No passwords pasted into a shared document. Access stays with the people who already own each account.",
      ],
    },
    {
      heading: "When Zapier is the wrong tool",
      paragraphs: [
        "If the other system has to update Mitti and Mitti has to update it, all day, with errors and retries, Zapier is usually too light. That kind of connection is closer to the work on our [integrations page](/integrations). We will say so rather than force a chain of zaps that break on a Saturday.",
        `Start with the handoff your team already does by forwarding email. That is the one worth automating. ${adoption} gets easier when a failed check reaches the person who can fix it without a second login. For the rest of the setup work, see ${services}, or ${contact} and name the two apps.`,
      ],
    },
  ],
  steps: [
    { title: "Name the handoff", body: "What happens in Mitti, and what should happen next, in one sentence." },
    { title: "Pick the fields", body: "Site, failure, owner, photo. Leave the rest of the inspection in Mitti." },
    { title: "Test with a fake check", body: "We run an inspection everyone can spot as a test, then read the email, task, or row." },
    { title: "Write the off switch", body: "Who can pause it, and what people do if the other app is down." },
  ],
  faqs: [
    {
      q: "Will Zapier replace the Mitti record?",
      a: "No. The inspection and the action stay in Mitti. Zapier only copies the few details another app needs.",
    },
    {
      q: "Can this email our on-call manager?",
      a: "Yes, if you can say which events deserve an email. We would rather send one useful message than a note for every answered question.",
    },
    {
      q: "Is this the same product as SafetyCulture?",
      a: "Mitti is the current name. SafetyCulture is the previous name, and iAuditor is an earlier name for the inspection app. The account you connect is that product.",
    },
    {
      q: "What if we need the other system to write back into Mitti?",
      a: "Say so at the start. A one-way nudge fits Zapier. A two-way process, with status coming back onto the action, usually needs a sturdier connection.",
    },
  ],
};

export const powerBi: SeoLandingPage = {
  path: "/integrations/power-bi",
  title: "Mitti and Power BI | Avantra Technologies - Mitti Experts",
  description:
    "Put Mitti by SafetyCulture inspection numbers into Power BI. Avantra helps you show the few reports leaders already ask for each week.",
  crumb: "Power BI",
  parent: { name: "Integrations", path: "/integrations" },
  h1Lead: "Mitti reports",
  h1Accent: "in Power BI",
  summary:
    "Leaders who already live in Power BI should not have to learn a second set of charts for inspections. We bring a few Mitti numbers into the report they open anyway.",
  shape: "bars",
  serviceName: "Mitti and Power BI reporting",
  ctaTitle: "Tell us which report you open on Monday",
  stepsIntro: "Three numbers, by site and by week, before anyone talks about a bigger model.",
  sections: [
    {
      heading: "Start with the questions people already ask",
      paragraphs: [
        "The useful questions are small. Which sites finished the opening check this week? Which actions are still open? Which ones are late? A chart of every answer on every form looks busy and does not change the Monday meeting.",
        "Mitti, the product formerly called SafetyCulture and earlier iAuditor, already shows inspections to the people who ran them. Power BI is for the next step: putting those results next to labor, sales, or the other numbers your leaders already trust. We do not rebuild Mitti inside Power BI.",
        "Sit with the person who presents the weekly numbers and ask what they circle with a pen today. Those marks are the report. If they never look at a question about uniforms, that question does not get a chart, even if it is easy to export. A page with three tiles and a list of late sites is enough for the first month.",
      ],
    },
    {
      heading: "Agree the grain before the refresh",
      paragraphs: [
        "Most operations need a daily or weekly refresh, not a live feed of every tap on a phone. We write down what one row means. Often that is one completed inspection, or one action, with the site name spelled the same way it is spelled in the rest of the report.",
        "Site names are where these projects stall. \"Store 12\" in Mitti and \"012 - North\" in the sales report will not match, and the chart will lie. We fix the names before we talk about colors.",
      ],
      list: [
        "Inspections finished, by site and by week.",
        "Open actions, and how many are past the due date.",
        "The one or two failed questions leaders actually discuss.",
        "A note on the report that says when the numbers last updated.",
      ],
    },
    {
      heading: "Keep Mitti as the record",
      paragraphs: [
        "Power BI is a view. If someone marks an action done only in the report, the person in the store still sees it open. Closing work happens in Mitti. The report tells you where to look.",
        `We have seen teams export everything and then trust nothing. A thin report that a regional manager can explain is the one that lasts. ${rollout} is easier when each new site shows up on that same page without a new spreadsheet. For help beyond the report, see ${services}, or ${contact} and send the page you wish you had on Monday.`,
      ],
    },
  ],
  steps: [
    { title: "Write three questions", body: "The ones already asked in the weekly meeting. We ignore the rest until those three are right." },
    { title: "Match the site names", body: "The name in Mitti and the name in the other report have to be the same site." },
    { title: "Refresh on a schedule", body: "Daily or weekly, with the time printed on the page so nobody argues with a stale chart." },
    { title: "Read it with the people who decide", body: "If they cannot point at a site and say what to do, the report is not finished." },
  ],
  faqs: [
    {
      q: "Do we still need the reports inside Mitti?",
      a: "Yes. People running the checks should see their own inspections in Mitti. Power BI is for leaders who already look at other numbers there.",
    },
    {
      q: "Can we chart every question?",
      a: "You can, and then no one will use it. We start with finished checks, open actions, and overdue actions. Add a question only when someone will change a store because of it.",
    },
    {
      q: "Is the data from SafetyCulture or from Mitti?",
      a: "Same product. Mitti is the current name. SafetyCulture is the previous name, and iAuditor is an earlier name for the inspection app. The inspections in the account are the source.",
    },
    {
      q: "How fresh do the numbers need to be?",
      a: "For most store and site reviews, yesterday is enough. If a safety issue needs a person right now, that belongs on an action or a message, not on a dashboard.",
    },
  ],
};

export const maintainx: SeoLandingPage = {
  path: "/integrations/maintainx",
  title: "Mitti and MaintainX | Avantra Technologies - Mitti Experts",
  description:
    "Send a failed Mitti equipment check to MaintainX as a work order. Avantra maps SafetyCulture findings to the fields your technicians already use.",
  crumb: "MaintainX",
  parent: { name: "Integrations", path: "/integrations" },
  h1Lead: "Mitti to MaintainX",
  h1Accent: "work orders",
  summary:
    "A failed check on a piece of equipment should become a work order the technician can open, with the photo and the place. We connect Mitti to MaintainX for that handoff, and we leave everyday people-issues in Mitti.",
  shape: "gear",
  serviceName: "Mitti to MaintainX work orders",
  ctaTitle: "Start with one kind of equipment",
  stepsIntro: "One asset type, one work-order shape, then a week of real failures.",
  sections: [
    {
      heading: "Not every failed check is a work order",
      paragraphs: [
        "A missing glove, a late temperature log, or a messy prep table is an action for the shift lead. A walk-in that will not hold temp, a lift that failed its check, or a leak under a sink is work for maintenance. If both land in MaintainX, technicians drown and start ignoring the queue.",
        "Mitti is where the inspection happens. MaintainX is where the repair is tracked. Mitti was formerly called SafetyCulture, and many crews still say iAuditor. The inspection record stays in Mitti either way. MaintainX gets the job, not a copy of the whole checklist.",
      ],
    },
    {
      heading: "The work order needs four things",
      paragraphs: [
        "The technician should see what failed, where it is, how urgent it is, and a photo if the person on site took one. They should not have to open Mitti and guess which of forty answers mattered. We map those fields on purpose, including what \"urgent\" means in your words, not in a default setting nobody agreed.",
        "Asset names have to match. If Mitti says \"Cooler 2\" and MaintainX says \"WK-02 Kitchen,\" the work order lands on the wrong machine or on no machine. We pick one asset type, line the names up, and only then turn the handoff on.",
      ],
      list: [
        "A rule for which failed questions create a work order.",
        "The same asset name in both places, for that first asset type.",
        "A person or a team who receives the work order.",
        "A way to close the Mitti action when the repair is actually done, so the inspection does not stay open forever.",
      ],
    },
    {
      heading: "Prove it on one asset, then add the next",
      paragraphs: [
        "We run it on one family of equipment for a week. Walk-in coolers, or HVAC, or the lift trucks. Real failures only, plus one test everyone can recognize. If the work order is missing the photo or the location, we fix the map before a second asset type is added.",
        `Closing the loop matters as much as opening the ticket. ${adoption} often means the inspection system and the maintenance system each think the other one finished the job. We write down who closes the action in Mitti after MaintainX shows the work is done.`,
        `Avantra is a team of Mitti experts. We do not make Mitti or MaintainX. See ${services} if you also need templates and training, or ${contact} and tell us which equipment check should have become a work order last month.`,
      ],
    },
  ],
  steps: [
    { title: "Choose one asset type", body: "The machines that already generate repeat work. Not the whole building on day one." },
    { title: "Match the names", body: "The asset in Mitti and the asset in MaintainX have to be the same thing." },
    { title: "Map four fields", body: "What failed, where, how urgent, and the photo. Drop the rest of the checklist." },
    { title: "Close the loop", body: "When the work order is done, the Mitti action closes too, by a rule people can explain." },
  ],
  faqs: [
    {
      q: "Should every failed inspection line open a MaintainX work order?",
      a: "No. Only equipment problems that a technician should repair. People and process misses stay as actions in Mitti for the shift lead.",
    },
    {
      q: "What if our asset names do not match?",
      a: "We stop and line up one asset type before anything is automatic. A work order on the wrong machine is worse than no work order.",
    },
    {
      q: "Is this SafetyCulture or Mitti?",
      a: "Mitti is the current name of the inspection product. SafetyCulture is the previous name, and iAuditor is an earlier name for the app. The check that failed is in that account.",
    },
    {
      q: "Who marks the inspection action complete?",
      a: "Someone has to, or the store keeps seeing an open item after the repair. We agree that rule before the first live work order, and we check it after the first week.",
    },
  ],
};

export const seoLandings = [templateSetup, zapier, powerBi, maintainx] as const;
