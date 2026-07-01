import type { ElementType } from "react";

export type PlannerStepKey =
  | "login"
  | "date"
  | "location"
  | "venue"
  | "guests"
  | "coverage"
  | "services"
  | "budget"
  | "style"
  | "result";

export type PlannerData = {
  weddingDate: string;
  country: string;
  city: string;
  venue: string;
  guests: string;
  coverage: string;
  photography: boolean;
  videography: boolean;
  drone: boolean;
  secondShooter: boolean;
  contentCreator: boolean;
  budget: string;
  style: string;
};

export type Recommendation = {
  name: string;
  price: string;
  icon: ElementType;
  text: string;
  enhancements: string[];
};

export const initialPlannerData: PlannerData = {
  weddingDate: "",
  country: "",
  city: "",
  venue: "",
  guests: "",
  coverage: "",
  photography: true,
  videography: true,
  drone: false,
  secondShooter: false,
  contentCreator: false,
  budget: "",
  style: "",
};

export const plannerSteps: {
  key: PlannerStepKey;
  label: string;
}[] = [
  {
    key: "login",
    label: "Access",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "location",
    label: "Location",
  },
  {
    key: "venue",
    label: "Venue",
  },
  {
    key: "guests",
    label: "Guests",
  },
  {
    key: "coverage",
    label: "Coverage",
  },
  {
    key: "services",
    label: "Services",
  },
  {
    key: "budget",
    label: "Budget",
  },
  {
    key: "style",
    label: "Style",
  },
  {
    key: "result",
    label: "Collection",
  },
];

export const coverageOptions = [
  "4 Hours",
  "6 Hours",
  "8 Hours",
  "10 Hours",
  "Full Day",
  "Multi-Day",
];

export const budgetOptions = [
  "Under €1,500",
  "€1,500 – €2,499",
  "€2,500 – €3,999",
  "€4,000 – €5,999",
  "€6,000+",
];

export const weddingStyleOptions = [
  "Luxury",
  "Elegant",
  "Editorial",
  "Classic",
  "Minimal",
  "Modern",
  "Traditional",
  "Emotional",
  "Documentary",
  "Cinematic",
];