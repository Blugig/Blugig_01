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

const templateLink = { label: "Mitti template setup", href: "/mitti-template-setup" };
const trainingLink = { label: "Free Mitti training and Masterclass", href: "/mitti-training" };
const servicesLink = { label: "Mitti services", href: "/services" };
const contactLink = { label: "Contact Mitti experts", href: "/contact" };
const rebrandLink = { label: "SafetyCulture is now Mitti", href: "/blog/safetyculture-is-now-mitti" };
const coreLinks = [templateLink, trainingLink, servicesLink, contactLink, rebrandLink];
const zapierLink = { label: "Mitti and Zapier", href: "/integrations/zapier" };
const powerBiLink = { label: "Mitti and Power BI", href: "/integrations/power-bi" };
const maintainxLink = { label: "Mitti and MaintainX", href: "/integrations/maintainx" };

const experts =
  "Avantra is an Official Mitti Partner and a team of Mitti experts. We do not make Mitti. Mitti is the new name for SafetyCulture. Many people still call the inspection app iAuditor.";

export const construction: IndustryPageContent = {
  slug: "construction",
  path: "/industries/construction",
  crumb: "Construction",
  linkLabel: "Mitti for Construction",
  metaTitle: "Mitti for Construction | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for construction. Avantra sets up SafetyCulture jobsite inspections and checklists so a failed check is assigned to a person before the crew moves on.",
  h1Lead: "Jobsite problems",
  h1Accent: "get a person to fix them",
  summary:
    "Paper inspections get filed in a truck. Then nobody is assigned to fix the problem. We set up Mitti so the crew records the checklist on the phone, and the superintendent can see what is still open.",
  shape: "mitti",
  icon: "construction",
  cardLine: "Jobsite inspections, equipment checks, and actions.",
  problemsLead: "Problems we hear on jobsites",
  problemsSub: "Crews tell us the same things when the checklist is a binder or a group text.",
  problems: [
    { title: "The pre-start is in the truck", body: "Each operator keeps a paper card, or a photo of last week's form. A new hire does not see the current checklist." },
    { title: "Nobody is assigned to fix it", body: "Someone circles a missing guard or a blocked exit. By the next morning the paper is in a folder. The problem is still there." },
    { title: "The superintendent is in the truck", body: "They hear about problems by phone. They cannot see which jobs finished the inspection and which jobs skipped it." },
    { title: "Machines move between jobs", body: "A lift or generator shows up with no record of the last check. The crew that receives it starts over." },
    { title: "Inspection week is a scramble", body: "When an owner or an insurer asks for records, someone spends a day taking photos of old paper." },
  ],
  dayInTheLife: [
    { stage: "Morning", title: "The walk finds the problems", body: "A missing rail, a blocked stair, and yesterday's failed lift are written in a notebook, a text, and a card in the cab." },
    { stage: "Midday", title: "A person is assigned to fix it", body: "With Mitti, the same walk is on the phone. Each problem has a crew and a due date. The project manager can open the list without calling." },
    { stage: "Next day", title: "The checklist is still there", body: "Paper can stay next to the phone for one week while people learn it. After that, the phone checklist is the one people use." },
  ],
  useCasesLead: "Jobsite inspections",
  useCasesAccent: "we set up in Mitti",
  useCasesSub: "These are walks the crew already does. We put each one on a phone. When something fails, a person is assigned to fix it.",
  useCases: [
    {
      title: "Daily site walk",
      scenario: "A superintendent walks the job before the crews spread out. They look at trash, access, scaffold tags, and open holes from memory. The notes stay in a notebook.",
      setup: "We build one site-walk checklist in the order of the walk. If a line fails, Mitti creates a task for a contractor or a lead, with a due date. We ask for a photo only when the picture matters, such as a missing rail.",
      result: "The inspection has a time, a name, and a short list of open problems. The next person does not find the same hole again.",
    },
    {
      title: "Equipment pre-start",
      scenario: "Operators fill out a card for the lift, excavator, or generator. Cards blow away or stay in the cab. A machine can move to another job with a problem people already knew about.",
      setup: "Each type of machine gets a short pre-start checklist. If you track that machine in Mitti, the inspection stays on it. If maintenance should fix it, the failed item can open a work order in MaintainX.",
      result: "The next job can see the last inspection before the machine goes to work. The operator does not have to write a long note.",
    },
    {
      title: "Scaffold and ladder checks",
      scenario: "Tags are marked in the field. The office finds out later, or not at all. One person says the scaffold is fine. Another person says it is not.",
      setup: "The checklist asks the checks your qualified person already makes: ties, decking, access, and tags. If it fails, the scaffold contractor is assigned. The item stays open until they close it.",
      result: "A lead can see open scaffold items on the phone. They do not have to walk every bay to see which tag is real.",
    },
    {
      title: "Housekeeping and access",
      scenario: "Trash, cords, and blocked exits get mentioned in the morning meeting. Then the pour takes over. Nobody writes down who was supposed to clear the stair.",
      setup: "We add a short list for the middle or the end of the day. A blocked exit becomes a task for a named crew. It is not a general note that says housekeeping.",
      result: "The next shift starts from a list. They do not start from a complaint.",
    },
    {
      title: "Subcontractor handoff",
      scenario: "Someone texts a problem to a foreman who is on another floor. The text is not the record. The general contractor cannot show it later.",
      setup: "In Mitti, the task can be assigned to the company that should fix it. We write the questions in plain jobsite words, so the subcontractor knows what done looks like.",
      result: "The record shows who had the problem and whether they closed it. People can still text for speed. Mitti is the record you can show later.",
    },
    {
      title: "Several jobs, one view",
      scenario: "A project manager covers several jobs. Monday is a set of calls that ask, did you do the walk? The answer depends on who picks up the phone.",
      setup: "Every job uses the same checklists. A simple screen shows which jobs finished the inspection and which tasks are late. If leaders already use Power BI, we can put those few numbers there. We do not send every answer.",
      result: "The call is about the three items that are still open. It is not a call to ask if anyone looked.",
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
    "New hire first-day site walk",
  ],
  stepsSub: "We start from the inspections your crews already do. Then we share one checklist with the jobs that need it.",
  steps: [
    { title: "See the checks you use now", body: "We collect the pre-start cards, the site-walk sheet, and the texts people really send. We remove lines nobody uses." },
    { title: "Build the checklists and the follow-up", body: "Each walk gets one shared checklist. A failed line becomes a task for a crew or a subcontractor, with a due date." },
    { title: "Train the people who do the work", body: "Superintendents and operators do a real walk on the phone, on the job. They do not sit through a slideshow in the trailer." },
    { title: "Review the reports and improve", body: "After one week we remove questions people skip. We also fix tasks that went to the wrong company." },
  ],
  outcomes: [
    "The current pre-start is on the phone, not on a card in the truck.",
    "A failed inspection is assigned to a person before the crew moves on.",
    "A project manager can see which jobs skipped the walk, without calling each one.",
    "A machine shows its last inspection when it arrives on a new job.",
    "When someone asks for records, you open Mitti. You do not dig through a box of paper.",
  ],
  faqs: [
    { q: "Will crews fill this out in the mud and the noise?", a: "They will if it is shorter than the paper card and follows the walk. We time a real pre-start. If it adds more than a couple of minutes, we remove lines." },
    { q: "Is Mitti the same as SafetyCulture or iAuditor?", a: "Yes. Mitti is the new name. SafetyCulture is the old company name. iAuditor is an older name for the inspection app. It is the same kind of checklist." },
    { q: "Can a subcontractor close their own items?", a: "Yes, if you want that. We set who can fill out a checklist, who can close a task, and who can edit the questions. Only a small group can edit." },
    { q: "Do we have to track every tool?", a: "No. Start with the machines that move between jobs or that fail the pre-start. Hand tools do not need their own record." },
    { q: "What if the job has no phone signal?", a: "Mitti can save the inspection on the phone and send it when the phone has signal again. We test that on your job before we say the setup is done." },
    { q: "Do you replace our safety program?", a: `${experts} We put the checks you already do into one shared checklist. We do not write your safety program, and we do not sign off the job.` },
  ],
  related: [...coreLinks, maintainxLink, powerBiLink],
  ctaTitle: "Walk one jobsite with us",
};

export const manufacturing: IndustryPageContent = {
  slug: "manufacturing",
  path: "/industries/manufacturing",
  crumb: "Manufacturing",
  linkLabel: "Mitti for Manufacturing",
  metaTitle: "Mitti for Manufacturing | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for manufacturing. Avantra sets up SafetyCulture line inspections and checklists so a miss on the floor is assigned to a person before the next shift.",
  h1Lead: "Line checks that",
  h1Accent: "do not stay on paper",
  summary:
    "People sign the startup sheet and file it. The next shift does not know what failed. We set up Mitti so the inspection is done on the line, and each problem is assigned to a person.",
  shape: "gear",
  icon: "factory",
  cardLine: "Line checks, quality inspections, and machine records.",
  problemsLead: "Problems we hear in plants",
  problemsSub: "The inspection happens. The fix, and the person who should see it, often do not.",
  problems: [
    { title: "The startup sheet is only a signature", body: "People initial the sheet because the shift has to start. Nobody reads the answers unless something breaks later." },
    { title: "Quality finds it. The line hears later.", body: "A failed check stays on a form in the quality office. The line lead hears about it in a meeting, after more product has run." },
    { title: "Each line made its own list", body: "Two lines make the same product and ask different questions. A plant manager cannot compare one Tuesday with the next." },
    { title: "A stop has no repair assigned", body: "The reason for a stop is one sentence in a log. The same fault comes back because nobody was assigned to fix it." },
    { title: "The last month is in three binders", body: "A customer or an internal audit asks for the last month of inspections. Someone pulls binders from three shifts." },
  ],
  dayInTheLife: [
    { stage: "Startup", title: "The paper gets signed", body: "The line has to run, so people initial the paper. A guard that was skipped is a sentence nobody reads until quality stops the run." },
    { stage: "This shift", title: "A person is assigned", body: "With Mitti, the same walk is on the phone, in the same order. A failed line names maintenance or the lead before the line starts." },
    { stage: "The next line", title: "We copy it only after it works", body: "We start on one line. If that crew can finish startup without extra time, the checklist is ready for the next line." },
  ],
  useCasesLead: "Plant inspections",
  useCasesAccent: "we set up in Mitti",
  useCasesSub: "We use the lists your leads already walk. We do not hand you a generic factory pack.",
  useCases: [
    {
      title: "Shift startup",
      scenario: "The lead walks the line before it starts. They check guards, labels, the first piece, and the board. The paper is signed even when one item was skipped to keep the schedule.",
      setup: "We build a startup checklist in the order of the line. People cannot skip a required item without a note. A fail becomes a task for maintenance or the lead, due on that shift.",
      result: "The shift starts with a record of what was really checked. The next lead can see what is still open.",
    },
    {
      title: "Quality patrol",
      scenario: "A quality tech checks product and writes defects on a sheet that stays in the lab. The line sees a summary at the end of the week.",
      setup: "The walk is a short checklist in Mitti. A defect can require a photo and a person on the line. We do not add a score unless someone will use the number.",
      result: "The line sees the defect the same day. The sheet in the lab is not the only copy.",
    },
    {
      title: "Changeover",
      scenario: "The changeover checklist lives in a supervisor's folder. Steps get skipped when the schedule is tight. The first pallet of the new run still has the last run's label.",
      setup: "Each product family gets one changeover checklist, using the steps you already use. The last step can require a second person to sign off, if you want that.",
      result: "The changeover is done, or it has an open task. It is not a signature with missing lines.",
    },
    {
      title: "Machine pre-use and assets",
      scenario: "Presses, fillers, and forklifts have a plastic card. People say a known leak is on the list. The card does not move with the machine.",
      setup: "Each machine gets a short checklist before use, so the history stays with that machine. If it needs a repair, the fail can open a work order in MaintainX. A people problem stays a task for the shift lead.",
      result: "Maintenance sees the problem and a photo. The operator does not write the work order by hand.",
    },
    {
      title: "Weekly manager check",
      scenario: "Managers are supposed to check a process each week. Most of the checks happen at the end of the month. The questions do not match the line.",
      setup: "We schedule a short checklist a manager can finish on the floor. If they miss the week, Mitti shows it as not done. It does not show a blank page.",
      result: "You can see which processes were checked this week, and which problems are still open.",
    },
    {
      title: "Plant and multi-site review",
      scenario: "Each plant emails a spreadsheet. The operations lead spends Monday adding them up, and still does not trust the totals.",
      setup: "Every plant uses the same checklists, and the same spelling for each site. A short screen shows finished inspections and late tasks. We add Power BI only if leaders already open a report there. We do not chart every question.",
      result: "The review uses the same meaning of done and late. A late task is visible without a new spreadsheet.",
    },
  ],
  templates: [
    "Line startup",
    "First-piece check",
    "Changeover",
    "Quality patrol",
    "Press pre-use",
    "Forklift pre-use",
    "Weekly manager check",
    "End-of-shift handoff",
  ],
  stepsSub: "We start with one line. We do not copy a half-finished checklist to every plant.",
  steps: [
    { title: "See the checks you use now", body: "We read the startup sheet, the quality form, and the plastic card. We keep the lines that change what someone does next." },
    { title: "Build the checklists and the follow-up", body: "People share the same questions. A failed answer becomes a task. We add a schedule only when someone is really supposed to repeat the check." },
    { title: "Train the people who do the work", body: "Leads and operators do one real startup on the phone during the shift, not after it." },
    { title: "Review the reports and improve", body: "We look at questions people skip and tasks that stay open. We fix those before the second line copies the checklist." },
  ],
  outcomes: [
    "Startup shows what was checked. It is not only a signature.",
    "Quality problems reach the shift that can still stop the run.",
    "Two lines that make the same product ask the same questions.",
    "A machine problem can reach maintenance without a second handwritten form.",
    "A review of several plants uses the same meaning of done and late.",
  ],
  faqs: [
    { q: "Will this slow the start of the shift?", a: "It should not. If the phone list is longer than the paper, we remove questions. A check people skip does not help you." },
    { q: "Can quality and production share one checklist?", a: "Sometimes. If they look for different things, they get two short checklists. One long form gets skipped." },
    { q: "Do you connect Mitti to our maintenance system?", a: "Yes, when a failed equipment check should become a work order. MaintainX is one system we connect. A messy floor is not a work order. It stays a task for the lead." },
    { q: "Is this SafetyCulture?", a: "Mitti is the new name for that product. SafetyCulture is the old name. iAuditor is an older name for the inspection app." },
    { q: "Who can change the questions?", a: "A small group. Everyone else fills out the checklist. If every supervisor can edit it, each line ends up with a different list." },
    { q: "Do you certify the plant or the process?", a: `${experts} We set up inspections and follow-up. We do not certify the plant, the product, or a quality standard.` },
  ],
  related: [...coreLinks, maintainxLink, powerBiLink],
  ctaTitle: "Walk one line with us",
};

export const facilities: IndustryPageContent = {
  slug: "facilities",
  path: "/industries/facilities",
  crumb: "Facilities",
  linkLabel: "Mitti for Facilities",
  metaTitle: "Mitti for Facilities | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for facilities teams. Avantra sets up SafetyCulture inspections and checklists for rounds and fire safety, so a failed item is assigned before the tech leaves.",
  h1Lead: "Building problems",
  h1Accent: "do not get lost between shifts",
  summary:
    "Rounds, fire-safety checks, and vendor walks get done. The problem stays in a notebook or a text. We set up Mitti so the next tech and the regional lead can see what is still open.",
  shape: "hub",
  icon: "building",
  cardLine: "Building rounds, life-safety checks, and asset records.",
  problemsLead: "Problems we hear from facilities teams",
  problemsSub: "The work gets done. The record of the work is not in one place.",
  problems: [
    { title: "The walk is not written down", body: "A tech walks the equipment rooms and writes problems in a book that stays in the shop. The next shift walks the same rooms." },
    { title: "Fire-safety checks happen when someone remembers", body: "Extinguishers, exits, and emergency lights get checked late. Then the sheets are stored by building." },
    { title: "The vendor says it is done", body: "A contractor says the repair is done. Your team still has an open note. Or your note is closed and the vendor never came." },
    { title: "Each building has its own spreadsheet", body: "A regional manager hears about a repeat leak from a tenant, not from the rounds. Calling every site is not a report." },
    { title: "Equipment names do not match", body: "The name on the door and the name in the work-order system are different, so the history never lines up." },
    { title: "The same room fails twice", body: "A restroom or an equipment room is written up, marked done, and written up again next week. Nobody kept the first note, so the repeat looks new." },
  ],
  dayInTheLife: [
    { stage: "The route", title: "The notes stay in the shop", body: "The tech walks the lobby, restrooms, equipment rooms, and roof. The notes stay in a book. The next shift walks the same rooms without them." },
    { stage: "This week", title: "The lead hears about it late", body: "A lead who will not visit today finds out about a repeat leak from a tenant. They do not find it in the round." },
    { stage: "The handoff", title: "A repair and a mess are different jobs", body: "A warm cooler goes to the person who fixes equipment. A messy closet stays with the crew still in the building." },
  ],
  useCasesLead: "Building inspections",
  useCasesAccent: "we set up in Mitti",
  useCasesSub: "We turn the walks you already do into shared checklists. We do not invent a new maintenance program.",
  useCases: [
    {
      title: "Building rounds",
      scenario: "A tech starts in the lobby and ends in the roof plant. Exceptions are remembered, or written where the next person will not look.",
      setup: "We build a round checklist in the order of the route. A failed item becomes a task for the tech, a vendor, or a lead, with a due date. We ask for a photo only when someone off site needs to see the problem.",
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
      result: "Technicians get the job. They do not get a forwarded text. The round still shows the item until the work is done. A repeat in the same room is easy to see because the first task is still there.",
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
    { title: "See the checks you use now", body: "We walk the route with a tech and read the monthly fire-safety sheet. We keep their order, not ours." },
    { title: "Build the checklists and the follow-up", body: "We set up the rounds, the schedules, and the tasks. Equipment problems can go to MaintainX when the names match." },
    { title: "Train the people who do the work", body: "Techs and supervisors finish one real round on the phone. They also practice what to do when something fails." },
    { title: "Review the reports and improve", body: "We look at skipped rooms and tasks that were not assigned to a person. Then we fix the checklist before the next building copies it." },
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
    { q: "Can this replace our work-order system?", a: "No. Mitti holds the inspection. MaintainX, or another work-order tool, holds the repair. We connect them when a failed equipment check should become a job." },
    { q: "What if every building is different?", a: "Shared life-safety questions, plus a short local section for the pool, the data hall, or the loading dock that only some sites have." },
    { q: "Is Mitti the same product as SafetyCulture?", a: "Yes. Mitti is the current name. SafetyCulture is the previous name, and iAuditor is an earlier name for the inspection app." },
    { q: "Who can change the round after it is in use?", a: "A small group of supervisors. Techs fill it out. If everyone can rewrite questions, each building ends up with a different list." },
    { q: "What if the problem is not a repair?", a: "It stays a task in Mitti for the crew or the lead. Only equipment that needs a technician becomes a work order. If both go to the same list, people ignore both." },
  ],
  related: [...coreLinks, maintainxLink, powerBiLink],
  ctaTitle: "Walk one building with us",
};

export const healthcare: IndustryPageContent = {
  slug: "healthcare",
  path: "/industries/healthcare",
  crumb: "Healthcare",
  linkLabel: "Mitti for Healthcare",
  metaTitle: "Mitti for Healthcare | Avantra Technologies - Mitti Experts",
  description:
    "Mitti experts for healthcare operations. Avantra sets up SafetyCulture inspections and checklists for rounds, cleanliness, and equipment. This is daily operations, not medical advice.",
  h1Lead: "Paper rounds",
  h1Accent: "get typed up days later",
  summary:
    "Building walks, cleanliness checks, and fridge logs get done on paper. Who fixes the problem depends on who kept the sheet. We set up Mitti so every problem has a person and a due date before the round is over.",
  shape: "shield",
  icon: "team",
  cardLine: "Environment-of-care rounds, actions, and asset records.",
  note: "This is work for facilities, safety, and daily operations. It is not medical advice. We do not certify equipment, and we do not say you will pass an inspection.",
  problemsLead: "Problems we hear from healthcare teams",
  problemsSub: "The rounds get done. The hard part is the problem that is still open when a director, an inspector, or the next shift asks.",
  problems: [
    { title: "Rounds sit in a binder", body: "Building and safety walks are finished on paper. Problems get typed up days later, or they never get typed up." },
    { title: "A bad room is only a score", body: "A failed room is a number on a sheet. The unit does not know which room failed, or who should go back." },
    { title: "Only one shift knows the equipment", body: "A missing cable or a broken pump is known to the person on that shift. The next unit finds out when they need the equipment." },
    { title: "Fridge logs are a clipboard", body: "Someone writes a temperature twice a day. A miss shows up when the log is reviewed, not when the fridge was warm." },
    { title: "Hazard reports stay in a drawer", body: "A spill, a broken outlet, or a blocked exit is reported in whatever place the person remembers. Facilities may never see it." },
    { title: "Each site has its own version", body: "Each hospital or clinic changed the round. A leader cannot tell which sites are late." },
  ],
  dayInTheLife: [
    { stage: "The round", title: "Paper checklists get typed up days later", body: "Exits, outlets, and clutter are on a paper form. Problems get noted for a meeting. By then, a new shift is on the unit." },
    { stage: "The log", title: "Problems get noted, but nobody is assigned", body: "A cleanliness score or a fridge reading is written down. Often there is no room, no time, and no person assigned to go back." },
    { stage: "Next shift", title: "Every problem has a person and a due date", body: "With Mitti, the open problem still shows a person and a due date when the next shift starts. This does not mean you will pass an inspection." },
  ],
  useCasesLead: "Daily checks",
  useCasesAccent: "we set up in Mitti",
  useCasesSub: "These are building, safety, and unit-readiness walks. They are not medical instructions.",
  useCases: [
    {
      title: "Building and safety rounds",
      scenario: "A safety or facilities lead walks units with a paper form. They check exits, outlets, clutter, medical gas, and the other items already on your round. Problems are talked about in a meeting days later. Hospitals often call this an environment-of-care round.",
      setup: "We turn your round into one checklist, in the order of the walk. A failed line becomes a task for facilities, the unit, or a vendor, with a due date. We use your words. We do not add medical questions.",
      result: "The round ends with a person assigned to each problem. You do not leave with a stack of sheets to type. Open problems are still visible the next morning.",
    },
    {
      title: "Cleanliness audits",
      scenario: "Housekeeping or infection-prevention staff check rooms and public areas. The result is a percent. The room that failed is hard to find again.",
      setup: "We build a short room checklist. A fail names the room and assigns the crew still on shift, when they are the right people to fix it. We ask for a photo only when a supervisor needs to see it.",
      result: "The crew can go back to that room. The leader can see the same room fail again, not only an average.",
    },
    {
      title: "Equipment-readiness checks",
      scenario: "Crash carts, pumps, and stretchers are checked on a log that stays on the unit. A missing item is replaced with no record of how often it happens.",
      setup: "Each cart or type of equipment gets a readiness checklist. If you track that piece of equipment in Mitti, the inspection stays on it. A repair, not a missing supply, can become a MaintainX work order when facilities should fix it. We do not certify the equipment.",
      result: "The unit can see what is ready. Facilities can see what is actually broken.",
    },
    {
      title: "Fridge and vaccine temperature",
      scenario: "A clipboard on the fridge asks for a number twice a day. Missed weekends get filled in on Monday. A warm fridge is a story, not a record with a time.",
      setup: "We schedule a temperature checklist with the number, the time, and the person. If you already use a sensor, the reading can sit next to the check. If you do not, a person still types the number. A number outside the range becomes a task right away, not at the monthly review.",
      result: "A miss shows up the day it happens. People do not fill in the log later from memory.",
    },
    {
      title: "Incident and hazard reporting",
      scenario: "A wet floor, a broken outlet, or a blocked exit is told to the charge nurse and may never reach facilities. The report form is long, so people skip it.",
      setup: "We build a short hazard checklist: where, what, a photo if it helps, and a task for the right team. This is not a patient-incident system, and it is not a medical record.",
      result: "Facilities gets the hazard and the place. The unit does not have to write a long story.",
    },
    {
      title: "Multi-site view",
      scenario: "A system with several hospitals or clinics gets a different spreadsheet from each site. Leaders cannot see which rounds were skipped.",
      setup: "Shared templates and the same site names. A simple list of finished rounds and overdue actions. Power BI only if those leaders already use it, and only for those few numbers.",
      result: "Leaders can see which sites are late. They do not have to guess which file to open. This does not mean you will pass an inspection.",
    },
  ],
  templates: [
    "Building and safety round",
    "Life-safety walk",
    "Room cleanliness check",
    "Public area cleanliness",
    "Crash cart readiness",
    "Fridge and vaccine temperature",
    "Hazard report",
    "After-hours security walk",
  ],
  stepsSub: "We use your round, not a generic hospital pack. We start with one unit or one clinic.",
  steps: [
    { title: "See the checks you use now", body: "We read the round form, the fridge log, and the cleanliness sheet. We remove anything that is medical advice or a claim that equipment is certified." },
    { title: "Build the checklists and the follow-up", body: "Sites share the same checklists. Each problem gets a person and a due date. We add a sensor only if you already have one." },
    { title: "Train the people who do the work", body: "The people who walk the unit do one real round on the phone. They practice assigning a problem to a person." },
    { title: "Review the reports and improve", body: "We look at questions people skip and tasks that never close. We fix those before other sites copy the checklist." },
  ],
  outcomes: [
    "A round ends with a person assigned to each problem. You do not retype a binder.",
    "A failed room can be fixed on the same shift.",
    "A missed fridge check shows up the day it happens.",
    "Facilities can see hazards that used to stop at the nurses' station.",
    "Several sites use the same checklist, so a finished round means the same thing.",
  ],
  faqs: [
    { q: "Is this medical advice?", a: "No. We set up the building, safety, and daily checks your facilities and unit teams already do. We do not write medical instructions, and we do not give medical advice." },
    { q: "Will this help us pass an inspection?", a: "It can make your own rounds and open problems easier to show. We do not say you will pass an inspection." },
    { q: "Do you certify medical equipment?", a: "No. A readiness checklist records what your team looked at. It does not certify the equipment." },
    { q: "Can a temperature sensor fill in the log?", a: "If you already use a sensor, we can put the reading next to the checklist. If you do not, a person types the number. We will not pretend you have a sensor." },
    { q: "Is Mitti the same as SafetyCulture?", a: "Yes. Mitti is the new name. SafetyCulture is the old name. iAuditor is an older name for the inspection app." },
    { q: "Who can change the round?", a: "A small group. Everyone else fills it out. That is how the sites stay easy to compare." },
  ],
  related: [...coreLinks, maintainxLink, powerBiLink],
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
  h1Accent: "get done on a busy Saturday",
  summary:
    "Opening, closing, and temperature logs get skipped or filled in later when the building is full. We set up Mitti so each job has a short checklist, and each miss is assigned to a person.",
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
    { title: "Each property edits the list", body: "Each hotel or restaurant changes the checklist. A regional manager cannot tell a real miss from a local habit." },
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
      setup: "We build a short opening checklist for the building, not for the kitchen. A failed exit or a broken machine becomes a task with a person assigned, before guests arrive.",
      result: "Opening is either done or it has an open item. It is not a feeling that the house is ready.",
    },
    {
      title: "Kitchen line and temperatures",
      scenario: "Cold hold, hot hold, cooling, and date labels are on a clipboard. During a rush the log is skipped and reconstructed when the rush ends.",
      setup: "We build a line checklist in the order of the stations. Where a number matters, the person enters the number. A temperature outside the safe range becomes a task for the chef or the manager on that shift. It is not a note for tomorrow.",
      result: "The log has a time and a person. A bad temp is dealt with while the product is still there.",
    },
    {
      title: "Closing",
      scenario: "Close is a race. Equipment off, doors, cash, and food put away are assumed. The morning team finds a cooler left open or a door unlatched.",
      setup: "We build a closing list the closing lead can finish in a few minutes. Anything left for the morning becomes a task. It is not a sticky note.",
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
      setup: "These checks are on their own schedule, separate from the kitchen and the rooms. A failed exit or extinguisher becomes a task for engineering. It is not a line on a food form.",
      result: "You can see which properties are late before a guest or an inspector is the one who notices.",
    },
    {
      title: "Several properties",
      scenario: "A brand with many hotels or restaurants gets a different checklist in each city. Regional calls are arguments about whose form is right.",
      setup: "The brand agrees the checks once. A short local section covers the pool, the rooftop, or the banquet kitchen that only some sites have. Zapier can email a regional manager when an urgent task is created. It does not copy every answer into email.",
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
    { title: "See the checks you use now", body: "We separate the kitchen, the rooms, and the building. We remove questions the other job will never answer." },
    { title: "Build the checklists and the follow-up", body: "Each job gets a short checklist. A bad temperature or a missed room becomes a task. A group of properties gets one brand list, plus a few local questions." },
    { title: "Train the people who do the work", body: "A manager and a cook, or a room attendant, complete one real opening or one real room on the phone." },
    { title: "Review the reports and improve", body: "We look at what people skipped on a busy day and remove it, before the checklist is copied to the next property." },
  ],
  outcomes: [
    "Kitchen, rooms, and the building each have a list they can finish.",
    "A bad temperature becomes a task during the shift. People do not rewrite the log later.",
    "The morning team sees what closing left behind.",
    "A room can be fixed before it is offered to a guest.",
    "A brand with many sites shares one list, with a small local section.",
  ],
  faqs: [
    { q: "Can housekeeping and the kitchen use one form?", a: "They should not. Two short forms get finished. One long form gets skipped on a busy night." },
    { q: "Does this replace our health-department duties?", a: "It can hold the temperature and opening checks you already keep, with a time and a name. It does not replace your health-department obligations or certify the kitchen." },
    { q: "Will a Saturday crew use it?", a: "Only if it is short. We would rather remove a question than watch people fill in a long list from memory at the end of the night." },
    { q: "We still say SafetyCulture or iAuditor. Is that a different app?", a: "No. Mitti is the current name. SafetyCulture is the earlier name, and iAuditor is an older name for the inspection app." },
    { q: "Can a regional manager get a note when something fails?", a: "Yes, for the few events you choose. A simple handoff can go through Zapier. We do not email every answer." },
  ],
  related: [...coreLinks, zapierLink, powerBiLink],
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
    "A score without a photo does not tell a store what to move before the afternoon rush. We set up Mitti so opening, the floor, and closing are short walks, and each miss is assigned to a person.",
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
      setup: "We build a short opening checklist, done before customers are in the store. A failed exit or alarm becomes a task for that manager, due before the doors open. It is not mixed in with floor displays.",
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
      setup: "The checklist asks for the aisle, what the sign says, what the shelf says, and a photo. The task goes to the person who can change the sign that day.",
      result: "The mismatch is a specific place, not a category score.",
    },
    {
      title: "Closing and cash controls",
      scenario: "Close is a race to the alarm. Safe, doors, and the back room are assumed. The morning shift finds a door or a safe step missed.",
      setup: "Closing has its own checklist, separate from the floor walk. Anything not finished becomes a task the opener can see. It is not a note lost in last night's list.",
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
      setup: "Every store uses one brand checklist, plus a few local questions for a store with a cafe or a mall rule. Leaders see missed openings and open tasks. We use Power BI if the district already looks at sales there, with the same store names. Zapier can add a row or a task for an urgent fail. It does not send every answer.",
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
    { title: "See the checks you use now", body: "We read the brand inspection and the opening list your best stores already use. We separate safety questions from how the floor looks." },
    { title: "Build the checklists and the follow-up", body: "The walks stay short. We ask for a photo only when the picture changes what someone does. Each problem goes to a department." },
    { title: "Train the people who do the work", body: "A store manager does one real opening and one floor walk on the phone during the day, not after close." },
    { title: "Review the reports and improve", body: "We see what both the small store and the large store skipped. We remove that before the other stores copy the checklist." },
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
    { q: "Can a district manager assign a fix from the inspection?", a: "Yes. A failed line should become a task for the store manager or a named lead, with a due date. A score by itself will still be there next week." },
    { q: "Do you rank our stores against each other?", a: "We can show missed inspections and open tasks. We do not make up a ranking. If you want a number, it has to be one your team will use." },
  ],
  related: [...coreLinks, powerBiLink, zapierLink],
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
