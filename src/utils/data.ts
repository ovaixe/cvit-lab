import { NavItem, ResearchArea, Person, Publication } from "@/types/types";

export const NAV_ITEMS: NavItem[] = [
  { title: "About", href: "/about" },
  { title: "Our Team", href: "/people" },
  { title: "Research", href: "/research" },
  { title: "Publications", href: "/publications" },
  { title: "Projects", href: "/projects" },
  { title: "Achievements", href: "/achievements" },
  { title: "News", href: "/news" },
];

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 1,
    title: "Computer Vision",
    description:
      "Research in image recognition, object detection, and scene understanding.",
  },
  {
    id: 2,
    title: "Machine Learning",
    description:
      "Developing novel algorithms for pattern recognition and predictive modeling.",
  },
  {
    id: 3,
    title: "Image Processing",
    description: "Techniques for image enhancement, restoration, and analysis.",
  },
  {
    id: 4,
    title: "Pattern Recognition",
    description:
      "Algorithms for identifying patterns and regularities in data.",
  },
];

export const PEOPLE: Person[] = [
  {
    id: 1,
    name: "Dr. Ravi Kiran Sarvadevabhatla",
    role: "Assistant Professor",
    email: "ravi.kiran@iiit.ac.in",
    category: "faculty",
  },
  {
    id: 2,
    name: "John Doe",
    role: "PhD Student",
    email: "john.doe@research.iiit.ac.in",
    category: "phd",
  },
  // Add more people...
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 1,
    year: 2023,
    title: "Deep Learning Approaches for Scene Understanding",
    authors: "Ravi Kiran S., Jane Smith, et al.",
    venue: "IEEE Conference on Computer Vision and Pattern Recognition",
    link: "#",
  },
  // Add more publications...
];
