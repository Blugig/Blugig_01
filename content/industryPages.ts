import type { IconName } from "@/components/icons/DrawIcon";
import type { ShapeName } from "@/lib/three/shapes";

export type IndustryPageContent = {
  slug: string;
  path: string;
  crumb: string;
  linkLabel: string;
  metaTitle: string;
  description: string;
  h1Lead: string;
  h1Accent: string;
  summary: string;
  shape: ShapeName;
  icon: IconName;
  cardLine: string;
  /** One short disclaimer, shown once under the hero. */
  note?: string;
  problemsLead: string;
  problemsSub: string;
  problems: { title: string; body: string }[];
  /** Short stages of a real shift. One or two lines each. */
  dayInTheLife: { stage: string; title: string; body: string }[];
  useCasesLead: string;
  useCasesAccent: string;
  useCasesSub: string;
  useCases: { title: string; scenario: string; setup: string; result: string }[];
  templates: string[];
  stepsSub: string;
  steps: { title: string; body: string }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  ctaTitle: string;
};

const templateLink = { label: "Template setup", href: "/mitti-template-setup" };
const trainingLink = { label: "Mitti training", href: "/mitti-training" };
const zapierLink = { label: "Mitti and Zapier", href: "/integrations/zapier" };
const powerBiLink = { label: "Mitti and Power BI", href: "/integrations/power-bi" };
const maintainxLink = { label: "Mitti and MaintainX", href: "/integrations/maintainx" };

const experts =
  "Avantra is an independent team of Mitti experts. Mitti is the product many people still call SafetyCulture or iAuditor. We do not make Mitti.";

export const construction: IndustryPageContent = {
  slug: "construction",
  path: "/industries/construction",
  crumb: "Construction",
  linkLabel: "Mitti for Construction",
  metaTitle: "Mitti for Construction | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for construction. Avantra sets up SafetyCulture jobsite inspections, pre-starts, and follow-up so a failed check has an owner before the crew moves on.",
  h1Lead: "Jobsite follow-up",
  h1Accent: "that does not vanish",
  summary:
    "Paper pre-starts and site walks get filed, then the failed item is nobody's job. We set Mitti up so the crew records the check on the spot and the superintendent can see what is still open.",
  shape: "mitti",
  icon: "construction",
  cardLine: "Jobsite inspections, equipment checks, and actions.",
  problemsLead: "What slips on a jobsite",
  problemsSub: "These are the gaps crews describe when the binder and the group text are the system.",
  problems: [
    { title: "Pre-starts live in the truck", body: "Each operator keeps a paper card or a photo of last week's form. A new hire never sees the current version." },
    { title: "A failed item has no owner", body: "Someone circles a missing guard or a blocked exit. By the next morning the circle is in a folder and the hazard is still there." },
    { title: "The superintendent is driving", body: "They hear about problems by phone. They cannot see which sites finished the walk and which ones skipped it." },
    { title: "Plant moves between jobs", body: "A lift or generator arrives with no record of the last pre-use check. The receiving crew starts from scratch." },
    { title: "Audit week is a scramble", body: "When an owner or an insurer asks for records, someone spends a day photographing old sheets." },
  ],
  dayInTheLife: [
    { stage: "Morning", title: "The walk finds it", body: "A missing rail, a blocked stair, and yesterday's failed lift sit in a notebook, a text, and a card in the cab." },
    { stage: "Midday", title: "Someone owns the fix", body: "The phone follows the same walk. A fail names the crew. The project manager opens that list without a call." },
    { stage: "Next day", title: "The record is still there", body: "Paper can sit beside the phone for a week. After that, the phone copy is the one that still has an owner." },
  ],
  useCasesLead: "Where a jobsite",
  useCasesAccent: "actually uses Mitti",
  useCasesSub: "Each use case is a walk the crew already does. We put it on a phone, with an owner when something fails.",
  useCases: [
    {
      title: "Daily site walk",
      scenario: "A superintendent walks the job before the crews spread out. Housekeeping, access, scaffold tags, and open holes are judged from memory. The notes stay in a notebook.",
      setup: "We build one site-walk template in the order of the walk. A failed line creates an action with a contractor or a lead and a due date. Photos are required only when the picture changes the decision, such as a missing toe board.",
      result: "The walk has a time, a name, and a short list of open items. The next person does not rediscover the same hole.",
    },
    {
      title: "Equipment pre-start",
      scenario: "Operators fill a card on the lift, excavator, or generator. Cards blow away or stay in the cab. A machine can move to another site with a known fault.",
      setup: "Each machine class gets a short pre-start. If you track the asset in Mitti, the check sits on that asset. A failed item can open a work order in MaintainX when the repair belongs to maintenance, not the operator.",
      result: "The receiving site can see the last check before the machine goes to work. The operator is not asked to write an essay.",
    },
    {
      title: "Scaffold and ladder checks",
      scenario: "Tags are marked in the field and the office finds out later, if at all. A green tag and a red tag can both be 'current' depending on who you ask.",
      setup: "The template asks the checks your competent person already makes: ties, decking, access, tags. A fail assigns the scaffold contractor and keeps the item open until they close it.",
      result: "A lead can filter open scaffold actions instead of walking every bay to see which tag is real.",
    },
    {
      title: "Housekeeping and access",
      scenario: "Debris, leads, and blocked exits are mentioned in the morning meeting and then compete with the pour. Nobody writes down who was supposed to clear the stair.",
      setup: "A short end-of-day or mid-shift list. Failed access items are actions for a named crew, not a general 'housekeeping' note.",
      result: "The next shift starts from a list, not from a complaint.",
    },
    {
      title: "Subcontractor handoff",
      scenario: "A finding is texted to a foreman who is on another floor. The text is not the record, and the general contractor cannot show it later.",
      setup: "Actions can be assigned to the company that owns the fix. We keep the question wording in plain jobsite language so the subcontractor knows what 'done' means.",
      result: "The record shows who had it and whether they closed it. The group text can stay for speed. Mitti is the record.",
    },
    {
      title: "Multi-site view for the PM",
      scenario: "A project manager covers several jobs. Monday is a round of calls asking 'did you do the walk?' The answer depends on who picks up.",
      setup: "The same templates are shared. A simple view shows which sites finished the walk and which actions are late. If leaders already live in Power BI, we can put those few numbers there. We do not export every answer.",
      result: "The call becomes 'these three items are still open,' not 'did anyone look?'",
    },
  ],
  templates: [
    "Daily site walk",
    "Excavator pre-start",
    "Lift and hoist pre-start",
    "Scaffold inspection",
    "Ladder and access check",
    "End-of-day housekeeping",
    "Hot work permit check",
    "New-hire site induction walk",
  ],
  stepsSub: "We start from the checks your crews already run, then share one version across the jobs that need it.",
  steps: [
    { title: "Discover current checks", body: "We collect the pre-start cards, the site-walk sheet, and the texts people actually send. We drop lines nobody uses." },
    { title: "Build templates and workflows", body: "One shared template per walk. Failed lines become actions with a crew or a subcontractor and a date." },
    { title: "Train teams", body: "Superintendents and operators do a real walk on the phone, on the job, not in a trailer slideshow." },
    { title: "Report and improve", body: "After a week we cut questions people skip and fix actions that went to the wrong company." },
  ],
  outcomes: [
    "The current pre-start is the one on the phone, not the card in the truck.",
    "A failed check has a name on it before the crew moves to the next task.",
    "A project manager can see which jobs skipped the walk without calling each one.",
    "Equipment can show its last check when it arrives on a new site.",
    "Audit questions start from a record, not from a box of paper.",
  ],
  faqs: [
    { q: "Will crews actually fill this out in the mud and the noise?", a: "Only if it is shorter than the paper card and in the order of the walk. We time a real pre-start. If it adds more than a couple of minutes, we cut lines." },
    { q: "Is Mitti the same as SafetyCulture or iAuditor?", a: "Mitti is the current name. SafetyCulture is the previous name, and iAuditor is an earlier name for the inspection app. The checklist is the same kind of form." },
    { q: "Can a subcontractor close their own items?", a: "Yes, if you want them to. We set who can fill a form, who can close an action, and who can edit the template. Editing stays with a small group." },
    { q: "Do we have to track every tool as an asset?", a: "No. Start with the machines that move between sites or that fail pre-starts. Hand tools do not need an asset record." },
    { q: "What if the site has no signal?", a: "Mitti can hold a check on the device and send it when the phone is back on a signal. We test that on your job before we call the rollout done." },
    { q: "Do you replace our safety program?", a: `${experts} We put your existing checks in a shared form. We do not write your safety program or sign off the job.` },
  ],
  related: [templateLink, trainingLink, maintainxLink, powerBiLink],
  ctaTitle: "Walk one jobsite with us",
};

export const manufacturing: IndustryPageContent = {
  slug: "manufacturing",
  path: "/industries/manufacturing",
  crumb: "Manufacturing",
  linkLabel: "Mitti for Manufacturing",
  metaTitle: "Mitti for Manufacturing | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for manufacturing. Avantra sets up SafetyCulture line checks, startup lists, and actions so a miss on the floor has an owner before the next shift.",
  h1Lead: "Line checks that",
  h1Accent: "do not stay on paper",
  summary:
    "Startup sheets and quality walks get initialed and filed. The next shift does not know what failed. We set Mitti up so the check is on the line and the action has a name.",
  shape: "gear",
  icon: "factory",
  cardLine: "Line checks, quality inspections, and machine records.",
  problemsLead: "What the floor already struggles with",
  problemsSub: "Plants describe the same breaks between the check, the fix, and the person who can see both.",
  problems: [
    { title: "Startup sheets are a signature", body: "The sheet is initialed because the shift has to start. The answers are not reviewed unless something breaks later." },
    { title: "Quality finds it, production owns it", body: "A failed check is written on a form quality keeps. The line lead hears about it in a meeting, after more product has run." },
    { title: "Each line invented its own list", body: "Two lines making the same product ask different questions. A plant manager cannot compare Tuesday with Tuesday." },
    { title: "Downtime notes are a story", body: "The reason for a stop is a sentence in a log. The same fault returns because nobody assigned the repair." },
    { title: "Auditors want the history", body: "Customer or internal audits ask for the last month of checks. Someone pulls binders from three shifts." },
  ],
  dayInTheLife: [
    { stage: "Startup", title: "The sheet gets signed", body: "The line has to run, so the paper startup is initialed. A bypassed guard is a sentence nobody reads until quality stops the run." },
    { stage: "This shift", title: "The fail has a name", body: "The same walk is on a phone, in the same order. A failed line names maintenance or the lead before the line is released." },
    { stage: "Next line", title: "One form, then copy it", body: "We start on one line. If that crew can finish startup without extra time, the form is ready. If they skip it, the form is wrong." },
  ],
  useCasesLead: "Checks a plant",
  useCasesAccent: "can run every shift",
  useCasesSub: "We configure the lists your leads already walk. We do not hand over a generic factory pack.",
  useCases: [
    {
      title: "Shift startup",
      scenario: "The lead walks the line before release: guards, labels, first-piece, and the board. The paper is signed even when one item was skipped to make the schedule.",
      setup: "A startup template in line order. Required items cannot be skipped without a note. A fail creates an action for maintenance or the lead, with a due time on that shift.",
      result: "The shift starts with a record of what was actually checked. The next lead can see what was left open.",
    },
    {
      title: "Quality patrol",
      scenario: "A quality tech samples product and writes defects on a sheet that stays in the lab. Production sees a summary at the end of the week.",
      setup: "The patrol is a short template. A defect can require a photo and an owner on the line. We do not score the patrol unless someone will use the number.",
      result: "The line sees the defect the same day. The sheet in the lab is no longer the only copy.",
    },
    {
      title: "Changeover",
      scenario: "A changeover checklist lives in a supervisor's folder. Steps get skipped when the schedule is tight, and the first pallet of the new run carries the last run's label.",
      setup: "One changeover template per family of products, with the steps your process already names. The last step can be a sign-off by a second person when you want that.",
      result: "The changeover is either done or it has an open item. It is not a signature with missing lines.",
    },
    {
      title: "Machine pre-use and assets",
      scenario: "Presses, fillers, and forklifts have a laminated card. A known leak is 'on the list' verbally. The card does not travel with the machine.",
      setup: "Short pre-use checks on the asset when you want history on that machine. A repair-type failure can become a MaintainX work order. A people or process miss stays an action for the shift lead.",
      result: "Maintenance sees the fault with a photo. The operator is not asked to write the work order by hand.",
    },
    {
      title: "Layered process audit",
      scenario: "Managers are supposed to audit a process each week. The audits cluster at month end, and the questions do not match the line.",
      setup: "A scheduled template with a small set of questions a manager can finish on the floor. Missed schedules show up as not done, not as a blank.",
      result: "You can see which processes were looked at this week, and which findings are still open.",
    },
    {
      title: "Plant and multi-site review",
      scenario: "Each plant emails a spreadsheet. The operations lead spends Monday adding them up and still does not trust the totals.",
      setup: "Shared templates, site names spelled the same way in every plant. A short view of finished checks and overdue actions. Power BI only if leaders already open a report there. We do not chart every question.",
      result: "The review starts from the same definitions. A late action is visible without a new spreadsheet.",
    },
  ],
  templates: [
    "Line startup",
    "First-piece check",
    "Changeover",
    "Quality patrol",
    "Press pre-use",
    "Forklift pre-use",
    "Layered process audit",
    "End-of-shift handoff",
  ],
  stepsSub: "One line first. We do not copy a half-finished form to every plant.",
  steps: [
    { title: "Discover current checks", body: "We read the startup sheet, the quality form, and the laminated card. We keep the lines that change a decision." },
    { title: "Build templates and workflows", body: "Shared questions, an action when an answer fails, and a schedule only where a person is truly supposed to repeat the check." },
    { title: "Train teams", body: "Leads and operators run one real startup on the phone during the shift, not after it." },
    { title: "Report and improve", body: "We look at skipped questions and actions that sat open. Then we cut or reassign before the second line copies the form." },
  ],
  outcomes: [
    "Startup is a record of the line, not only a signature.",
    "Quality findings reach the shift that can still stop the run.",
    "Two lines making the same product ask the same questions.",
    "A machine fault can reach maintenance without a second handwritten form.",
    "A multi-plant review uses one definition of 'done' and 'late'.",
  ],
  faqs: [
    { q: "Will this slow the start of the shift?", a: "It should not. If the phone list is longer than the paper, we remove questions. A check people skip is not a control." },
    { q: "Can quality and production share one template?", a: "Sometimes. If they look for different things, they get two short forms. One long form gets abandoned." },
    { q: "Do you connect Mitti to our maintenance system?", a: "When a failed equipment check should become a work order, yes. MaintainX is one system we connect. A messy floor is not a work order. It stays an action for the lead." },
    { q: "Is this SafetyCulture?", a: "Mitti is the current name of that product. SafetyCulture is the previous name, and iAuditor is an earlier name for the inspection app." },
    { q: "Who is allowed to change the questions?", a: "A small group. Everyone else fills the form. If every supervisor can edit, you are back to a different list on every line." },
    { q: "Do you certify the plant or the process?", a: `${experts} We configure checks and follow-up. We do not certify the plant, the product, or a quality standard.` },
  ],
  related: [templateLink, trainingLink, maintainxLink, powerBiLink],
  ctaTitle: "Walk one line with us",
};

export const facilities: IndustryPageContent = {
  slug: "facilities",
  path: "/industries/facilities",
  crumb: "Facilities",
  linkLabel: "Mitti for Facilities",
  metaTitle: "Mitti for Facilities | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for facilities teams. Avantra sets up SafetyCulture rounds, life-safety checks, and work follow-up so a failed item has an owner before the tech leaves the floor.",
  h1Lead: "Building issues that",
  h1Accent: "do not vanish between shifts",
  summary:
    "Rounds, life-safety checks, and vendor walks are done. The finding lives in a notebook or a text. We set Mitti up so the next tech and the portfolio lead can see what is still open.",
  shape: "hub",
  icon: "building",
  cardLine: "Building rounds, life-safety checks, and asset records.",
  problemsLead: "What facilities teams tell us",
  problemsSub: "The work is happening. The record of the work is not in one place.",
  problems: [
    { title: "Rounds are a route, not a record", body: "A tech walks the plant rooms and writes exceptions in a book that stays in the shop. The next shift walks the same rooms." },
    { title: "Life safety is a monthly scramble", body: "Extinguishers, exits, and emergency lights are checked when someone remembers, then the sheets are stored by building." },
    { title: "Vendors close work in their system", body: "A contractor says the repair is done. Your team still has an open note, or the opposite: your note is closed and the vendor never came." },
    { title: "The portfolio cannot see sites", body: "Each building has its own spreadsheet. A regional manager finds out about a repeat leak from a tenant, not from the rounds. Calling every site is not a report." },
    { title: "Assets have no last visit", body: "The name on the door and the name in the maintenance system do not match, so history never lines up." },
    { title: "The same room fails twice", body: "A restroom or a plant room is written up, marked done, and written up again next week. Nobody kept the first note, so the repeat looks new." },
  ],
  dayInTheLife: [
    { stage: "The route", title: "Exceptions get lost", body: "Lobby, restrooms, plant rooms, roof. The notes stay in a book in the shop. The next shift walks the same rooms without them." },
    { stage: "This week", title: "The portfolio hears it late", body: "A lead who will not visit today finds out about a repeat leak from a tenant, not from the round." },
    { stage: "The handoff", title: "Repair and mess stay separate", body: "A warm cooler goes to the person who fixes equipment. A messy closet stays with the crew still in the building." },
  ],
  useCasesLead: "Rounds and checks",
  useCasesAccent: "facilities already run",
  useCasesSub: "We turn those walks into shared templates. We do not invent a new maintenance program.",
  useCases: [
    {
      title: "Building rounds",
      scenario: "A tech starts in the lobby and ends in the roof plant. Exceptions are remembered, or written where the next person will not look.",
      setup: "A round template in the order of the route. A failed item is an action with the tech, a vendor, or a lead, and a due date. Photos only when someone off site needs to see the problem.",
      result: "The next shift starts from open items. The book in the shop is not the system.",
    },
    {
      title: "Life-safety checks",
      scenario: "Extinguishers, exits, and emergency lights are on a monthly sheet. A missed month shows up when a marshal or a client asks.",
      setup: "Scheduled checks with the questions your portfolio already uses. A miss stays open. We do not add a score unless a contract truly requires one.",
      result: "You can see which buildings are late before someone asks for the binder.",
    },
    {
      title: "Janitorial quality",
      scenario: "A manager walks restrooms and lobbies with a paper score. The crew hears the result days later, if the sheet is typed up.",
      setup: "A short quality walk. Failed rooms become actions for the crew on that shift, not a weekly average.",
      result: "The crew can fix the room while they are still in the building.",
    },
    {
      title: "Equipment and work orders",
      scenario: "A failed pump or a warm cooler is texted to a supervisor. The maintenance system never gets the photo or the location.",
      setup: "If the asset names match, a failed equipment check can open a MaintainX work order with the photo and the place. People issues, like a messy closet, stay actions in Mitti.",
      result: "Technicians get the job, not a forwarded text. The round still shows the item until the work is actually done. A repeat in the same room is visible because the first action is still there.",
    },
    {
      title: "Vendor visits",
      scenario: "A contractor leaves a slip. Your team does not know if the filter was changed or only the slip was signed.",
      setup: "A short vendor checklist the tech or the vendor completes before they leave: what was done, photo if needed, and who accepts it.",
      result: "The visit is a record you can open later, not a slip in a drawer.",
    },
    {
      title: "Portfolio review",
      scenario: "Ten buildings, ten files. The regional lead cannot say which sites missed rounds this week.",
      setup: "The same templates, the same site names. A short list of missed rounds and overdue actions. Power BI only if that lead already works in Power BI. We match names before we draw a chart.",
      result: "The weekly call is about open work, not about whether the spreadsheet arrived.",
    },
  ],
  templates: [
    "Daily building round",
    "Plant-room round",
    "Extinguisher and exit check",
    "Emergency lighting",
    "Restroom quality",
    "Lobby and common-area walk",
    "Vendor service visit",
    "After-hours security walk",
  ],
  stepsSub: "One building with a real route. Then the same forms for the buildings that match.",
  steps: [
    { title: "Discover current checks", body: "We walk the route with a tech and read the monthly life-safety sheet. We keep their order, not ours." },
    { title: "Build templates and workflows", body: "Rounds, schedules, and actions. Equipment failures can go to MaintainX when the names match." },
    { title: "Train teams", body: "Techs and supervisors finish one real round on the phone, including what they do when something fails." },
    { title: "Report and improve", body: "We look at skipped rooms and actions with no owner, then fix the form before the next building copies it." },
  ],
  outcomes: [
    "The open items from today's round are visible to the next shift.",
    "Life-safety checks show late buildings before an outside ask.",
    "A vendor visit has a photo and a name, not only a slip.",
    "Equipment faults can reach the work-order system without a second write-up.",
    "A regional lead can see missed rounds across buildings that share the same form.",
  ],
  faqs: [
    { q: "Do technicians have time for a long app?", a: "The round has to be as fast as the notebook. We cut any question that does not change what they do in that room." },
    { q: "Can this replace our CMMS?", a: "No. Mitti holds the inspection. MaintainX, or another work-order tool, holds the repair. We connect them when a failed equipment check should become a job." },
    { q: "What if every building is different?", a: "Shared life-safety questions, plus a short local section for the pool, the data hall, or the loading dock that only some sites have." },
    { q: "Is Mitti the same product as SafetyCulture?", a: "Yes. Mitti is the current name. SafetyCulture is the previous name, and iAuditor is an earlier name for the inspection app." },
    { q: "Who edits the round after it is live?", a: "A small group of supervisors. Techs fill it out. If everyone can rewrite questions, each building drifts." },
    { q: "What do we do with a finding that is not a repair?", a: "It stays an action in Mitti for the crew or the lead. Only equipment that needs a technician becomes a work order. Mixing those two queues is how both get ignored." },
  ],
  related: [templateLink, trainingLink, maintainxLink, powerBiLink],
  ctaTitle: "Walk one building with us",
};

export const healthcare: IndustryPageContent = {
  slug: "healthcare",
  path: "/industries/healthcare",
  crumb: "Healthcare",
  linkLabel: "Mitti for Healthcare",
  metaTitle: "Mitti for Healthcare | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for healthcare operations. Avantra sets up SafetyCulture rounds, cleanliness checks, and equipment follow-up. Operations work, not clinical advice.",
  h1Lead: "Rounds that",
  h1Accent: "do not end in a binder",
  summary:
    "Environment-of-care walks, cleanliness checks, and fridge logs are done. The follow-up depends on who kept the sheet. We set Mitti up so an open item has an owner before the round is over.",
  shape: "shield",
  icon: "team",
  cardLine: "Environment-of-care rounds, actions, and asset records.",
  note: "This is operations and facilities work, not clinical advice. We do not certify devices, and we do not claim an accreditation result.",
  problemsLead: "What operations teams describe",
  problemsSub: "The rounds happen. The hard part is the item that is still open when the surveyor, the director, or the next shift asks.",
  problems: [
    { title: "Rounds live in a binder", body: "Environment-of-care and life-safety walks are complete on paper. Findings are retyped later, or not at all." },
    { title: "Cleanliness is a score with no owner", body: "A failed room is a number on a sheet. The unit does not know which room, or who was supposed to return." },
    { title: "Equipment readiness is tribal", body: "A missing lead or a failed pump is known to the person on that shift. The next unit finds out when they need the device." },
    { title: "Fridge logs are a clipboard", body: "Someone writes a temperature twice a day. A miss shows up when the log is reviewed, not when the fridge was warm." },
    { title: "Incidents are a form in a drawer", body: "A spill, a damaged outlet, or a blocked exit is reported in whatever system the person remembers. Facilities may never see it." },
    { title: "Several sites, several versions", body: "Each hospital or clinic edited the round. A system leader cannot tell which sites are late." },
  ],
  dayInTheLife: [
    { stage: "The round", title: "The sheet is typed later", body: "Exits, outlets, and clutter are on a paper tool. Findings wait for a meeting. The unit has already changed shift." },
    { stage: "The log", title: "The number has no owner", body: "A cleanliness score or a fridge reading exists. The room, the time, and the person who should go back often do not." },
    { stage: "Next shift", title: "The open item still has a name", body: "This is operations work, not a survey promise. The value is an owner on the item when the next shift starts." },
  ],
  useCasesLead: "Operational checks",
  useCasesAccent: "we configure",
  useCasesSub: "These are facilities, safety, and unit-readiness walks. They are not clinical protocols.",
  useCases: [
    {
      title: "Environment-of-care rounds",
      scenario: "A safety or facilities lead walks units with a paper tool: exits, outlets, clutter, medical gas, and the items your own round already lists. Findings are discussed in a meeting days later.",
      setup: "We turn your round into one template, in walking order. A failed line becomes an action for facilities, the unit, or a vendor, with a due date. We use your wording. We do not add clinical questions.",
      result: "The round ends with owners, not with a stack of sheets to type. Open items are still visible the next morning.",
    },
    {
      title: "Cleanliness audits",
      scenario: "Environmental services or infection-prevention staff check rooms and public areas. The result is a percentage. The room that failed is hard to find again.",
      setup: "A short room or area check. A fail names the room and assigns the crew still on shift when that is the right owner. Photos only for what a supervisor needs to see.",
      result: "The crew can return to the room. The leader sees repeats, not only an average.",
    },
    {
      title: "Equipment-readiness checks",
      scenario: "Crash carts, pumps, and stretchers are checked on a log that stays on the unit. A missing item is replaced quietly, with no record of how often it happens.",
      setup: "A readiness template per cart or device class. If you track the asset, the check can sit on it. A repair, not a missing supply, can become a MaintainX work order when facilities owns the fix. We do not certify the device.",
      result: "The unit sees what is ready. Facilities sees what is actually broken.",
    },
    {
      title: "Fridge and vaccine temperature",
      scenario: "A clipboard on the fridge asks for a number twice a day. Weekend misses are filled in on Monday. A warm excursion is a story, not a timed record.",
      setup: "A scheduled temperature check with the number, the time, and the person. If you already use a sensor, the reading can sit beside the check. If you do not, a person still enters the number. An out-of-range result is an action immediately, not at the monthly review.",
      result: "A miss is visible the day it happens. The log is not reconstructed later.",
    },
    {
      title: "Incident and hazard reporting",
      scenario: "A wet floor, a damaged outlet, or a blocked egress is told to a charge nurse and may never reach facilities. The report form is long, so people skip it.",
      setup: "A short hazard form: where, what, photo if useful, and an action to the right team. This is not a patient-incident system and not a clinical record.",
      result: "Facilities gets the hazard with a place. The unit is not asked to write a narrative.",
    },
    {
      title: "Multi-site view",
      scenario: "A system with several hospitals or clinics gets a different spreadsheet from each site. Leaders cannot see which rounds were skipped.",
      setup: "Shared templates and the same site names. A simple list of finished rounds and overdue actions. Power BI only if those leaders already use it, and only for those few numbers.",
      result: "The question is which sites are late, not which file to open. We do not claim this produces an accreditation result.",
    },
  ],
  templates: [
    "Environment-of-care round",
    "Life-safety walk",
    "Room cleanliness check",
    "Public area cleanliness",
    "Crash cart readiness",
    "Fridge and vaccine temperature",
    "Hazard report",
    "After-hours security walk",
  ],
  stepsSub: "We use your round, not a generic hospital pack. One unit or one clinic first.",
  steps: [
    { title: "Discover current checks", body: "We read the round tool, the fridge log, and the cleanliness sheet. We remove anything that is clinical advice or a device certification." },
    { title: "Build templates and workflows", body: "Shared forms, actions with owners, and schedules for the checks that are truly repeated. Sensors only if you already have them." },
    { title: "Train teams", body: "The people who walk the unit do one real round on the phone, including how they assign a fail." },
    { title: "Report and improve", body: "We look at skipped questions and actions that never closed, then adjust before other sites copy the form." },
  ],
  outcomes: [
    "A round ends with named follow-up, not a binder to retype.",
    "A failed room can be corrected on the same shift.",
    "Fridge misses show up the day they happen.",
    "Facilities can see hazards that used to stop at the nurses' station.",
    "Several sites can use one definition of a finished round.",
  ],
  faqs: [
    { q: "Is this clinical guidance?", a: "No. We configure operational checks your facilities, safety, and unit teams already run. We do not write clinical protocols or give medical advice." },
    { q: "Will this help us pass a survey?", a: "It can make your own rounds and open items easier to show. We do not claim an accreditation or survey result." },
    { q: "Do you certify medical devices?", a: "No. A readiness check records what your team looked at. It is not a certification of the device." },
    { q: "Can temperature sensors feed the log?", a: "If you already use a sensor, we can place the reading next to the check. If you do not, a person records the number. We will not pretend a sensor exists." },
    { q: "Is Mitti the same as SafetyCulture?", a: "Mitti is the current name. SafetyCulture is the previous name, and iAuditor is an earlier name for the inspection app." },
    { q: "Who is allowed to edit the round?", a: "A small group. Everyone else completes it. That is how the sites stay comparable." },
  ],
  related: [templateLink, trainingLink, maintainxLink, powerBiLink],
  ctaTitle: "Walk one unit with us",
};

export const hospitality: IndustryPageContent = {
  slug: "hospitality",
  path: "/industries/hospitality",
  crumb: "Hospitality",
  linkLabel: "Mitti for Hotels and Restaurants",
  metaTitle: "Mitti for Hotels | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for hotels and restaurants. Avantra sets up SafetyCulture opening, closing, food-temperature, and room checks a busy shift can finish.",
  h1Lead: "Shift checks that",
  h1Accent: "survive a Saturday",
  summary:
    "Opening, closing, and temperature logs get skipped or pencil-whipped when the house is full. We set Mitti up so each role has a short list and a miss has an owner before the next seating or the next arrival.",
  shape: "shield",
  icon: "building",
  cardLine: "Opening, closing, food temperatures, and guest rooms.",
  problemsLead: "What hotels and restaurants describe",
  problemsSub: "The kitchen, the floor, and the rooms do not share one rhythm. One long checklist serves none of them.",
  problems: [
    { title: "Opening is a memory", body: "The manager walks the house in their head. Exits, equipment, and the first temperature are checked only if nothing else is on fire." },
    { title: "Temperature logs are filled in later", body: "The line is slammed. The fridge log is completed at the end of the night from what someone thinks the number was." },
    { title: "Rooms and the kitchen share a form", body: "Housekeeping is asked kitchen questions, or the cook is asked about minibar. People skip to the end." },
    { title: "A guest complaint is the inspection", body: "A dirty room or a wrong hold temp is discovered by a guest or a health visit, not by the shift." },
    { title: "Multi-unit brands drift", body: "Each hotel or restaurant edits the list. A regional manager cannot tell a real miss from a local habit." },
  ],
  dayInTheLife: [
    { stage: "Open", title: "Saturday has no spare minutes", body: "Opening is whatever the manager remembers. Temperatures get written when the rush ends. A shared kitchen-and-rooms list gets skipped." },
    { stage: "Service", title: "The guest finds it first", body: "A missed room item or a pan in the danger zone shows up as a complaint. The shift that could have fixed it has gone home." },
    { stage: "Each role", title: "Short lists, not one long one", body: "The cook logs temps. The attendant finishes a room. The manager opens the building. A busy shift can still finish its own list." },
  ],
  useCasesLead: "Checks for",
  useCasesAccent: "the shift you already run",
  useCasesSub: "Separate forms for the people holding the phone. A Saturday still has to be able to finish them.",
  useCases: [
    {
      title: "Opening the building",
      scenario: "A manager opens before the team is fully in. Lights, exits, the first walk of the floor, and equipment on are done from habit. There is no record if they were rushed.",
      setup: "A short opening template for the building, not for the kitchen. Failed exits or equipment become actions with a name before guests arrive.",
      result: "Opening is either done or it has an open item. It is not a feeling that the house is ready.",
    },
    {
      title: "Kitchen line and temperatures",
      scenario: "Cold hold, hot hold, cooling, and date labels are on a clipboard. During a rush the log is skipped and reconstructed when the rush ends.",
      setup: "A line check in the order of the stations, with a number where a number matters. An out-of-range temp is an action for the chef or the manager on that shift, not a note for tomorrow.",
      result: "The log has a time and a person. A bad temp is dealt with while the product is still there.",
    },
    {
      title: "Closing",
      scenario: "Close is a race. Equipment off, doors, cash, and food put away are assumed. The morning team finds a cooler left open or a door unlatched.",
      setup: "A closing list the closing lead can finish in a few minutes. Anything left for the morning is an action, not a sticky note.",
      result: "The opening manager sees what was left, instead of discovering it with guests already in the lobby or the dining room.",
    },
    {
      title: "Guest-room readiness",
      scenario: "An attendant finishes a room against a laminated card. A missed item is found by the next guest or by a supervisor doing a spot check too late.",
      setup: "A short in-room list: the items your brand already cares about. A fail can be assigned back to the attendant or to a supervisor before the room is sold.",
      result: "The supervisor's spot check is a sample, not the only inspection.",
    },
    {
      title: "Public areas and life safety",
      scenario: "Pools, gyms, exits, and extinguishers are someone's side job. The record is a monthly sheet in the engineering office.",
      setup: "Scheduled checks separate from the kitchen and the rooms. A failed exit or extinguisher is an action for engineering, not a line on a food form.",
      result: "You can see which properties are late before a guest or an inspector is the one who notices.",
    },
    {
      title: "Several properties",
      scenario: "A brand with many hotels or restaurants gets a different checklist in each city. Regional calls are arguments about whose form is right.",
      setup: "Agree the brand checks once. A short local section covers the pool, the rooftop, or the banquet kitchen that only some sites have. Zapier can nudge a regional manager when a high-priority action is created, without copying every answer into email.",
      result: "Sites are comparable. Local extras do not leak into properties that do not have them.",
    },
  ],
  templates: [
    "Hotel opening",
    "Restaurant opening",
    "Line temperature check",
    "Date-label and cooling check",
    "Restaurant closing",
    "Guest-room readiness",
    "Public-area walk",
    "Pool and fitness opening",
  ],
  stepsSub: "We time the check on a real shift. If Saturday cannot finish it, it is too long.",
  steps: [
    { title: "Discover current checks", body: "We separate kitchen, rooms, and the building. We throw out questions the other role will never answer." },
    { title: "Build templates and workflows", body: "Short forms, an action when a temp or a room fails, and a brand list plus local extras for a group." },
    { title: "Train teams", body: "A manager and a cook, or an attendant, complete one real opening or one real room on the phone." },
    { title: "Report and improve", body: "We look at what was skipped on a busy day and cut it, before the form is copied to the next property." },
  ],
  outcomes: [
    "Kitchen, rooms, and the building each have a list they can finish.",
    "A bad temperature is an action during the shift, not a rewritten log.",
    "The morning team sees what closing left behind.",
    "A room can be fixed before it is offered to a guest.",
    "A brand with many sites shares one list, with a small local section.",
  ],
  faqs: [
    { q: "Can housekeeping and the kitchen use one form?", a: "They should not. Two short forms get finished. One long form gets skipped on a busy night." },
    { q: "Does this replace our health-department duties?", a: "It can hold the temperature and opening checks you already keep, with a time and a name. It does not replace your health-department obligations or certify the kitchen." },
    { q: "Will a Saturday crew use it?", a: "Only if it is short. We would rather delete a question than watch people pencil-whip a long list." },
    { q: "We still say SafetyCulture or iAuditor. Is that a different app?", a: "No. Mitti is the current name. SafetyCulture is the earlier name, and iAuditor is an older name for the inspection app." },
    { q: "Can a regional manager get a note when something fails?", a: "Yes, for the few events you choose. A simple handoff can go through Zapier. We do not email every answer." },
  ],
  related: [templateLink, trainingLink, zapierLink, powerBiLink],
  ctaTitle: "Walk one shift with us",
};

export const retail: IndustryPageContent = {
  slug: "retail",
  path: "/industries/retail",
  crumb: "Retail",
  linkLabel: "Mitti for Retail",
  metaTitle: "Mitti for Retail | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for retail store audits. Avantra turns SafetyCulture opening, floor, and closing checks into a list a district manager can actually review.",
  h1Lead: "Store audits that",
  h1Accent: "show what to fix",
  summary:
    "A score without a photo does not tell a store what to move before the afternoon rush. We set Mitti up so opening, the floor, and close are short walks, and a miss has an owner.",
  shape: "grid",
  icon: "store",
  cardLine: "Store audits for opening, the sales floor, and close.",
  problemsLead: "What store teams describe",
  problemsSub: "The audit exists. It does not tell the store what to do today, or the district what was skipped.",
  problems: [
    { title: "Audits happen when the office visits", body: "The long brand audit is a quarterly event. Opening and close are not checked on the days nobody from the district is in the store." },
    { title: "The score hides the aisle", body: "An 82 does not say which endcap was empty or which exit was blocked. The store manager cannot act on a number." },
    { title: "Every district edited the form", body: "Stores in one region ask different questions than stores in another. Comparison is an argument." },
    { title: "Photos are either none or all", body: "Either there is no picture and the district cannot see the problem, or every yes requires a photo and people stop doing the audit." },
    { title: "Safety items get buried", body: "A missing extinguisher tag sits in the same list as a promo sign, so it waits behind merchandising." },
  ],
  dayInTheLife: [
    { stage: "Before open", title: "The audit is a visitor's job", body: "Alarms, lights, and exits are a mental list. The long brand audit happens when the district is in the store, and the score does not name the aisle." },
    { stage: "On the floor", title: "Safety loses to the endcap", body: "A blocked stockroom exit sits on the same form as a promo sign, so the sign wins. Too many photos, and people stop the audit." },
    { stage: "Close", title: "Three short walks", body: "Opening, the floor, and close are separate. A photo only where a picture changes the decision. A small store and a large store can both finish." },
  ],
  useCasesLead: "Walks a store",
  useCasesAccent: "can finish in the day",
  useCasesSub: "Opening, the floor, and close are separate. The brand list stays shared.",
  useCases: [
    {
      title: "Opening",
      scenario: "The manager opens alarms, lights, restrooms, and exits before the doors. It is a mental list. A blocked rear exit is noticed only if they walk that way.",
      setup: "A short opening template done before customers are in the store. A failed exit or alarm item is an action for that manager, due before open, not mixed with floor sets.",
      result: "Open is a record. A safety miss is not waiting behind a display task.",
    },
    {
      title: "Sales-floor audit",
      scenario: "A brand audit asks about promo signs, empty pegs, fitting rooms, and price accuracy. It is long, so it is done when a district manager is standing there.",
      setup: "We split the floor into a list a store lead can do on a normal day. Photos are required only where a remote manager must see the shelf or the sign. A fail assigns the department, not 'the store' in general.",
      result: "The district sees the aisle, not only a score. The store knows which bay to fix.",
    },
    {
      title: "Price and promo accuracy",
      scenario: "A sign and a shelf label disagree. The audit says 'pricing' and does not say which bay. The error stays up through the weekend.",
      setup: "A focused check: location, what the sign says, what the shelf says, photo. The action goes to the person who can change the sign that day.",
      result: "The mismatch is a specific place, not a category score.",
    },
    {
      title: "Closing and cash controls",
      scenario: "Close is a race to the alarm. Safe, doors, and the back room are assumed. The morning shift finds a door or a safe step missed.",
      setup: "A closing list separate from the floor audit. Anything incomplete is an action the opener sees, not a note lost in last night's checklist.",
      result: "The opener knows what was left. Close is not only 'we set the alarm.'",
    },
    {
      title: "Safety inside the store",
      scenario: "Ladders in an aisle, spills, extinguisher tags, and stockroom exits are on the same audit as visual standards. They lose.",
      setup: "Safety lines stay on opening or on their own short walk, with their own actions. A spill or a blocked exit is not a merchandising comment.",
      result: "Safety items have an owner the same day. They are not averaged into a brand score.",
    },
    {
      title: "District and multi-store view",
      scenario: "Stores email photos or a spreadsheet after a visit. The district manager cannot see who skipped opening this week.",
      setup: "One brand template, plus a few local questions for a store with a cafe or a mall rule. A view of missed openings and open actions. Power BI if the district already looks at sales there, using the same store names. Zapier can add a row or a task for a high-priority fail without dumping every answer.",
      result: "The week is visible without waiting for the quarterly visit.",
    },
  ],
  templates: [
    "Store opening",
    "Sales-floor walk",
    "Promo and endcap check",
    "Price accuracy spot check",
    "Fitting-room check",
    "Store closing",
    "Stockroom safety",
    "Cafe opening, where the store has one",
  ],
  stepsSub: "Two stores that are different on purpose: a small one and a large one. Then the brand list.",
  steps: [
    { title: "Discover current checks", body: "We read the brand audit and the opening list the best stores already use. We split safety from visual standards." },
    { title: "Build templates and workflows", body: "Short walks, photos only where a picture changes the decision, and actions to a department." },
    { title: "Train teams", body: "A store manager does one real opening and one floor walk on the phone during the day, not after close." },
    { title: "Report and improve", body: "We see what both the small and the large store skipped, then cut that before the rest of the fleet copies it." },
  ],
  outcomes: [
    "Opening is a daily record, not a quarterly event.",
    "A district manager can see the shelf, not only a score.",
    "Safety misses are not buried under promo questions.",
    "Close leaves a note the opener will actually see.",
    "Stores share one brand list, with a few local questions where the building is different.",
  ],
  faqs: [
    { q: "Will every store have the identical checklist?", a: "The brand checks should match. A store with a cafe or a different back room can have a few extra questions. Those extras should not appear in stores that do not have them." },
    { q: "How many photos are too many?", a: "Require a photo when someone who is not in the store needs to see the problem. Do not require one for every yes." },
    { q: "Is Mitti different from SafetyCulture for store audits?", a: "Mitti is the current name. SafetyCulture is the previous name, and iAuditor is an earlier name for the inspection app." },
    { q: "Can a district manager assign a fix from the audit?", a: "Yes. A failed line should become an action with the store manager or a named lead and a date. A score alone will still be there next week." },
    { q: "Do you rank our stores against each other?", a: "We can show missed checks and open actions. We do not invent a league table or a performance claim. If you want a number, it has to be one your team will use." },
  ],
  related: [templateLink, trainingLink, powerBiLink, zapierLink],
  ctaTitle: "Audit one store with us",
};

export const industryPages = [construction, manufacturing, facilities, healthcare, hospitality, retail] as const;

export const industryDirectory = industryPages.map((industry) => ({
  slug: industry.slug,
  path: industry.path,
  linkLabel: industry.linkLabel,
  icon: industry.icon,
  cardLine: industry.cardLine,
}));
