export type NavItem = {
  title: string;
  href: string;
};

export type ResearchArea = {
  id: number;
  title: string;
  description: string;
  link: string;
};

export type Person = {
  id: number;
  name: string;
  role: string;
  email: string;
  category: "director" | "faculty" | "phd" | "ms" | "phdg" | "msg" | "alumni";
  research?: string;
  description?: string;
};

export type Publication = {
  id: number;
  title: string;
  authors: string[];
  conference: string;
  year: number | null;
  link: string;
  type: "journal" | "conference" | "patent";
  abstract?: string;
  keywords?: string[];
  impactFactor?: number;
  journalRanking?: string;
  category?: string;
  status?: string;
  month?: string;
  doi?: string;
  volume?: number;
  issue?: number;
  pages?: string;
  indexed?: string[];
  impactFactorYear?: number;
};

export type Project = {
  id: number;
  title: string;
  data?: string[];
  description: string;
  technologies?: string[];
  imageUrl?: string;
  link?: string;
};

export type Achievement = {
  id: number;
  title: string;
  description: string;
  year: number;
  patentNumber?: string;
  citations?: string;
  link?: string;
};

export type ResearchDetail = {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  objectives: string[];
  methodology: string;
  keyFeatures: string[];
  applications: string[];
  technologies: string[];
  publications: string[];
  teamMembers: string[];
  status: "ongoing" | "completed" | "upcoming";
  startDate: string;
  endDate?: string;
  funding?: string;
  images: string[];
  results?: {
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
  }[];
  challenges?: string[];
  futureWork?: string[];
  relatedProjects?: string[];
  datasets?: string[];
  algorithms?: string[];
  experimentalSetup?: {
    hardware: string[];
    software: string[];
  };
  evaluationMetrics?: {
    classification: string[];
    performance: string[];
  };
};
