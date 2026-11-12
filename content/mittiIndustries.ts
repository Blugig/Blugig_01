import type { IconName } from "@/components/icons/DrawIcon";
import type { ShapeName } from "@/lib/three/shapes";

export type MittiIndustry = {
  slug: string;
  path: string;
  crumb: string;
  linkLabel: string;
  metaTitle: string;
  description: string;
  /** Words after "Mitti for" in the H1. */
  h1Accent: string;
  summary: string;
  chip: string;
  heading: string;
  sub: string;
  shape: ShapeName;
  icon: IconName;
  cardLine: string;
  items: { title: string; body: string }[];
  ctaTitle: string;
};

export const construction: MittiIndustry = {
  slug: "construction",
  path: "/mitti-experts/construction",
  crumb: "Construction",
  linkLabel: "Mitti for Construction",
  metaTitle: "Mitti for Construction | Avantra Technologies",
  description:
    "Mitti for construction. Avantra sets up jobsite inspections, checklists, actions, and equipment records in SafetyCulture's Mitti, then trains the crew.",
  h1Accent: "Construction",
  summary:
    "Avantra helps construction teams put Mitti to work on the jobsite. We set up the inspections, checklists, actions, and equipment records your crews already depend on. Mitti is by SafetyCulture, and SafetyCulture is now Mitti.",
  chip: "Jobsite",
  heading: "What a jobsite setup includes",
  sub: "Common construction workflows. We configure the checks your crews already run, not a generic pack of forms.",
  shape: "mitti",
  icon: "construction",
  cardLine: "Jobsite inspections, equipment checks, and actions.",
  items: [
    {
      title: "Inspections",
      body: "Site walks, scaffold and ladder checks, housekeeping, PPE, and pre-use checks on lifts, excavators, and other plant. The record stays with the site.",
    },
    {
      title: "Checklists and templates",
      body: "We turn your site-opening list, toolbox-talk sheet, and equipment pre-start into shared Mitti templates, so each crew is not keeping its own version.",
    },
    {
      title: "Actions",
      body: "A failed item becomes an action with an owner and a due date. A superintendent or the responsible contractor closes it, and you can inspect again before you sign it off.",
    },
    {
      title: "Assets",
      body: "Plant and equipment, such as lifts, generators, and scaffold, can carry their inspection history on the asset. A missed pre-start is visible before the machine goes to work.",
    },
  ],
  ctaTitle: "Talk through your jobsite setup",
};

export const manufacturing: MittiIndustry = {
  slug: "manufacturing",
  path: "/mitti-experts/manufacturing",
  crumb: "Manufacturing",
  linkLabel: "Mitti for Manufacturing",
  metaTitle: "Mitti for Manufacturing | Avantra Technologies",
  description:
    "Mitti for manufacturing. Avantra sets up line checks, quality inspections, actions, and machine records in SafetyCulture's Mitti, and trains the plant team.",
  h1Accent: "Manufacturing",
  summary:
    "Avantra helps manufacturing teams put Mitti to work on the line. We set up the inspections, checklists, actions, and machine records a plant uses to catch problems early. Mitti is by SafetyCulture, and SafetyCulture is now Mitti.",
  chip: "Plant",
  heading: "What a plant setup includes",
  sub: "Common manufacturing workflows. The templates follow your startup, changeover, and quality checks.",
  shape: "gear",
  icon: "factory",
  cardLine: "Line checks, quality inspections, and machine records.",
  items: [
    {
      title: "Inspections",
      body: "Pre-shift line checks, quality inspections, lockout/tagout checks, and housekeeping walks. Each one leaves a record the supervisor can review that shift.",
    },
    {
      title: "Checklists and templates",
      body: "We build Mitti templates from the startup, changeover, and end-of-shift lists your process already names, so the line is not running from a local spreadsheet.",
    },
    {
      title: "Actions",
      body: "A failed quality or safety check becomes an action for production, quality, or maintenance, with an owner and a due date. It stays open until someone closes it.",
    },
    {
      title: "Assets",
      body: "Machines, tooling, and gauges can hold their inspection history on the asset. The next check starts from that record instead of a blank form.",
    },
  ],
  ctaTitle: "Talk through your plant setup",
};

export const facilities: MittiIndustry = {
  slug: "facilities",
  path: "/mitti-experts/facilities",
  crumb: "Facilities",
  linkLabel: "Mitti for Facilities Management",
  metaTitle: "Mitti for Facilities Management | Avantra Technologies",
  description:
    "Mitti for facilities management. Avantra sets up building rounds, life-safety checks, actions, and asset records in SafetyCulture's Mitti for US teams.",
  h1Accent: "Facilities Management",
  summary:
    "Avantra helps facilities teams put Mitti to work across buildings. We set up the rounds, checklists, actions, and asset records that keep sites safe and maintainable. Mitti is by SafetyCulture, and SafetyCulture is now Mitti.",
  chip: "Buildings",
  heading: "What a facilities setup includes",
  sub: "Common facilities workflows. Rounds, life-safety checks, and the assets your technicians already service.",
  shape: "hub",
  icon: "building",
  cardLine: "Building rounds, life-safety checks, and asset records.",
  items: [
    {
      title: "Inspections",
      body: "Building rounds, extinguisher and exit checks, emergency lighting, and janitorial quality. A failed item is on the record before the technician leaves the floor.",
    },
    {
      title: "Checklists and templates",
      body: "We turn your daily plant-room or lobby round, and the monthly life-safety list your portfolio already uses, into shared Mitti templates.",
    },
    {
      title: "Actions",
      body: "A failed check becomes work the facilities team owns, with a due date and a close-out. The person who found it is not left chasing it by email.",
    },
    {
      title: "Assets",
      body: "HVAC, elevators, and life-safety equipment can keep service and inspection history on the asset, so the next visit starts from what was done last time.",
    },
  ],
  ctaTitle: "Talk through your facilities setup",
};

export const healthcare: MittiIndustry = {
  slug: "healthcare",
  path: "/mitti-experts/healthcare",
  crumb: "Healthcare",
  linkLabel: "Mitti for Healthcare",
  metaTitle: "Mitti for Healthcare | Avantra Technologies",
  description:
    "Mitti for healthcare operations. Avantra sets up environment-of-care inspections, actions, and asset records in SafetyCulture's Mitti for facilities teams.",
  h1Accent: "Healthcare",
  summary:
    "Avantra helps healthcare operations, safety, and facilities teams put Mitti to work. We set up the inspections, checklists, actions, and asset records those teams already run. Mitti is by SafetyCulture, and SafetyCulture is now Mitti. This is operations work, not clinical advice.",
  chip: "Care sites",
  heading: "What a healthcare setup includes",
  sub: "Environment-of-care and facilities workflows. We do not certify devices, and we do not claim an accreditation result.",
  shape: "shield",
  icon: "team",
  cardLine: "Environment-of-care rounds, actions, and asset records.",
  items: [
    {
      title: "Inspections",
      body: "Environment-of-care rounds, life-safety and utility checks, and the cleanliness and waste checks your safety team already runs. The list is yours. We put it in Mitti.",
    },
    {
      title: "Checklists and templates",
      body: "Unit opening and close lists, and equipment-readiness checks, as your hospital or clinic already defines them. We do not hand you a clinical protocol.",
    },
    {
      title: "Actions",
      body: "A failed item goes to facilities, clinical engineering, or the unit lead, with an owner and a due date. It stays open until that person closes it.",
    },
    {
      title: "Assets",
      body: "Building systems and the clinical equipment you choose to track, such as beds or pumps, can hold the last inspection on the asset. We do not certify those devices.",
    },
  ],
  ctaTitle: "Talk through your healthcare setup",
};

export const mittiIndustries: MittiIndustry[] = [construction, manufacturing, facilities, healthcare];
