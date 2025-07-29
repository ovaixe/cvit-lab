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
    name: "Prof. Chih-Yang Lin",
    role: "Director",
    email: "andrewlin@ncu.edu.tw",
    category: "director",
    description:
      "Prof. Chih-Yang Lin is a professor in the Department of Mechanical Engineering at National Central University in Taoyuan, Taiwan. He earned his PhD in Computer Science & Information Engineering from National Chung Cheng University and is recognized as an IET Fellow and IEEE Senior Member. With a wealth of experience, he has authored or co-authored over 100 papers in highly-cited international conferences and journals, and has received numerous Best Paper Awards from renowned international conferences. In addition to his research pursuits, Dr. Lin has also played an active role in the academic community as a session chair, publication chair, and organizer for various international conferences. His research interests include computer vision, machine learning, deep learning, image processing, big data analysis, and the design of surveillance systems.​",
  },
  {
    id: 2,
    name: "Isack Farady",
    role: "Postdoctoral Researcher",
    email: "isackfarady@ncu.edu.tw",
    category: "faculty",
    description:
      "Isack Farady received his Ph.D. from Yuan Ze University, Taiwan, in 2023. He continues his research with Professor Chih-Yang Lin, working as a postdoctoral researcher at the CVIT Lab, National Central University, Taiwan. His current research focuses on computer vision, seismic image processing and core data analysis.",
  },
  {
    id: 3,
    name: "Junaidul Islam",
    role: "PhD Student",
    email: "112383601@cc.ncu.edu.tw",
    category: "phd",
    description:
      "Junaidul Islam received his Bsc IT degree from S. P. college (University of Kashmir) (2020), India and  Msc IT(AI and ML)  degree from Garden City University, Bangalore, India (2022). He started Ph.D degree in 2022 under supervision of Professor Chih-Yang Lin for computer vision and deep learning fields with a fully-funded scholarship from the Department of Mechanical Engineering, National Central University, Taoyuan, Taiwan.  ",
  },
  {
    id: 4,
    name: "Elvin Nur Furqon",
    role: "PhD Student",
    email: "113383602@cc.ncu.edu.tw",
    category: "phd",
    description:
      "Elvin Nur Furqan received his Bachelor of Engineering in Computer Engineering from Telkom University, Indonesia, in 2021. He then worked as an AI-HPC System Engineer at Novaglobal Pte. Ltd. in Singapore for one year. In 2024, he earned his Master of Science in Electrical Engineering with a focus on Computer Vision from Yuan Ze University, Taiwan. Currently, he is pursuing a PhD, starting in 2024, under the supervision of Professor Chih-Yang Lin in the field of computer vision and deep learning, supported by a fully funded scholarship from the Department of Mechanical Engineering, National Central University, Taiwan. He also achieved 3rd place in the National Data Engineer Indonesia competition by Bisa.AI in 2020.",
  },
  {
    id: 5,
    name: "Chen, Yi En",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 6,
    name: "Lin, Wei Jie",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 7,
    name: "Yan, Hong Ting",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 8,
    name: "Wu, Yi Lu",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 9,
    name: "Wu, He Yuan",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 10,
    name: "He, Xiang Ye",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 11,
    name: "Lo, Yi Ling",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 12,
    name: "Kuo, Yi Liang",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 13,
    name: "Xiao, Xu Yang",
    role: "MS Student",
    email: "",
    category: "ms",
  },
  {
    id: 14,
    name: "Lin, Yi Cheng",
    role: "MS Student",
    email: "",
    category: "ms",
  },
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
