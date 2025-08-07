export type NavItem = {
  title: string;
  href: string;
};

export type ResearchArea = {
  id: number;
  title: string;
  description: string;
};

export type Person = {
  id: number;
  name: string;
  role: string;
  email: string;
  category: "director" | "faculty" | "phd" | "ms" | "phdg" | "msg" | "alumni";
  description?: string;
};

export type Publication = {
  id: number;
  title: string;
  authors: string[];
  conference: string;
  year: number;
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
  data: string[];
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
