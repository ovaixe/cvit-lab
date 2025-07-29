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
  category: "director" | "faculty" | "phd" | "ms" | "alumni";
  description?: string;
};

export type Publication = {
  id: number;
  year: number;
  title: string;
  authors: string;
  venue: string;
  link: string;
};

export type Project = {
  id: number;
  title: string;
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
