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
    title: "Automated Optical Inspection",
    description:
      "Automated Optical Inspection (AOI) has become a powerful solution in the steel making industry. AOI techniques are used  to inspect the surfaces of objects to reduce defective products with high precision and speed. In the inspection process, an AOI device acquires image of the object under inspection using an optical imaging system, and then identifies the type of defects by matching the input image with known template. Recently, deep learning has becoming a powerful solution for industrial inspection applications. In particular, deep learning-based object detection techniques are used to improve the speed and accuracy of an AOI device.",
  },
  {
    id: 2,
    title: "Multimedia Security",
    description:
      "With the development of web and digital products, camera devices including surveillance and digital cameras are widely used. However, there are public concerns on the confidentiality and security in data storage. There are multiple cases of stealth involving multimedia data stored online which are then distributed with malicious intention, which raise the public's awareness of privacy and how personal information is being stored and used. While privacy is important, surveillance cameras can help us monitor, providing social security or proofs for legal judgement. Thus, the ways to monitor and also preserve the privacy in real-time systems are the foci of our research in this field, most notably image encryption and digital rights management.",
  },
  {
    id: 3,
    title: "Video Surveillance",
    description:
      "Surveillance system is important in providing security and constant observation of locations to obtain information when needed. Over the years, various techniques in this field has been developed, such as recognition, identification, tracking, counting, authentication and so on. The challenges arose from developing these techniques are related to the quality of the video and issues that might affect how computer views the video, such as low resolution, obtrusion, moving objects and feature identifications. In this field, our research focuses on obtaining higher accuracy  in video surveillance to achieve multiple purposes, such as identifying while tracking moving objects without being affected by obtrusion. Additionally, we aim to achieve alternative practical applications of these techniques in other fields, such as human relationship mapping and unmanned store maintenance for robots.",
  },
  {
    id: 4,
    title: "Computer Vision & Image Processing",
    description:
      "Using computers in processing various images have been in the world for decades. With the ability for computer to understand complex features to achieve purpose, it has developed to complete difficult image professing, such as Deepfake and even manages to create special artworks made by AI. While Computer Vision & Image Processing has its artistic side, our lab focuses on relevant research which leans towards applications in the industry or practicality in every aspects of life. The field of this research is not limited to creating new image, but allows the computer to understand and execute necessary actions for specific intentions",
  },
];

export const  PEOPLE: Person[] = [
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
  {
    id: 15,
    name: "Kalil Muchtar",
    role: "Ph.D Graduate",
    email: "",
    category: "phdg",
  },
  {
    id: 16,
    name: "Panyaporn Prangjarote",
    role: "Ph.D Graduate",
    email: "",
    category: "phdg",
  },
  {
    id: 17,
   name: "Fityanul Akhyar",
    role: "Ph.D Graduate",
    email: "",
    category: "phdg",
  },
  {
    id: 18,
    name: "Isack Farady",
    role: "Ph.D Graduate",
    email: "",
    category: "phdg",
  },
  {
    id: 19,
    name: "Wei, Wen Chang",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 20,
    name: "Tatenda Muindisi",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 21,
    name: "Kao, Wei Chen",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 22,
    name: "Kanatip Prompol",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 23,
    name: "Amornthep Rojanasarit",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 24,
    name: "Sirakriangkrai Panida",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 25,
    name: "Fu, Jing Tong",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 26,
    name: "Hong, Jia Wei",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 27,
    name: "Cucliciu",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 28,
    name: "Hsiao, Kuo Wei",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 29,
    name: "Wang, Shang Ming",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 30,
    name: "Li, Zong Han",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 31,
    name: "Wang, Shun Wen",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 32,
    name: "Lo, Chang Yen",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 33,
    name: "Wang, Sheng Hung",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id:34,
    name: "Sang Lê",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 35,
    name: "Alifya Febriana",
    role: "MS Graduate",
    email: "",
    category: "msg",
  },
  {
    id: 36,
    name: "Elvin Nur Furqan",
    role: "MS Graduate",
    email: "",
    category: "msg",
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

export const NEWS_ITEMS = [
  {
    id: 1,
    title: "Yuan Ze Studies Gold Award 2024",
    date: "June 15, 2024",
    description:
      "Congratulations to Sang Le for achieving the Yuan Ze Studies Gold Award 2024 as the top-ranked student for the second year in a row.",
    category: "Awards",
  },
  {
    id: 2,
    title: "University of Illinois at Urbana-Champaign, USA",
    date: "May 3, 2024",
    description:
      "Congratulations to Chia-Chun Hsiao for being admitted to the Electrical and Computer Engineering program at the University of Illinois at Urbana-Champaign, USA, 2024.",
    category: "Addmissions",
  },
  {
    id: 3,
    title: "University of Southern California, USA",
    date: "April 20, 2024",
    description:
      "Congratulations to Yu-Wei Chen for being admitted to the Electrical and Computer Engineering program at the University of Southern California, USA, 2024.",
    category: "Addmissions",
  },
  {
    id: 4,
    title:
      "Best Paper Award from Sixth International Symposium on Computer, Consumer and Control (IS3C)",
    date: "March 12, 2023",
    description:
      "Congratulations to Junaidul Islam, Elvin Nur Furqon, Isack Farady received Best Paper Award from Sixth International Symposium on Computer, Consumer and Control (IS3C), 2023",
    category: "Awards",
  },
  {
    id: 5,
    title:
      "Best Paper Award from IEEE 26th International Computer Science and Engineering Conference (ICSEC)",
    date: "March 12, 2022",
    description:
      "Congratulations to Isack Farady received Best Paper Award from IEEE 26th International Computer Science and Engineering Conference (ICSEC) 2022",
    category: "Awards",
  },
  {
    id: 6,
    title: "Research Award!",
    date: "March 12, 2022",
    description:
      "Congratulations to Professor Chih-Yang Lin for receiving the 2022 YZU Outstanding Research Award!",
    category: "Awards",
  },
  {
    id: 7,
    title: "Columbia University and University of Washington, USA",
    date: "March 12, 2022",
    description:
      "Congratulations to Chang, Cheng-Chun (張程鈞) for being admitted to Columbia University and University of Washington, USA.",
    category: "Addmissions",
  },
  {
    id: 8,
    title: "IET Fellow",
    date: "March 12, 2022",
    description:
      "Congratulations to Professor Chih-Yang Lin for receiving an IET Fellow, 2022.",
    category: "Awards",
  },
  {
    id: 9,
    title: "Queensland University, Australia",
    date: "March 12, 2022",
    description:
      "Congratulations to Kao, Wei-Cheng (高偉成) for being admitted to Queensland University, Australia.",
    category: "Addmissions",
  },
  {
    id: 10,
    title: "2021 CECE_YZU Outstanding Research Award!",
    date: "March 12, 2021",
    description:
      "Congratulations to Professor Chih-Yang Lin for receiving the 2021 CECE_YZU Outstanding Research Award!",
    category: "Awards",
  },
];
