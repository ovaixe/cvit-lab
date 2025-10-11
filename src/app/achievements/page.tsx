import AchievementCard from "@/components/achievements/AchievementCard";

export default function AchievementsPage() {
  // Achievement categories
  const achievementCategories = [
    {
      id: 1,
      title: "Awards & Recognition",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      achievements: [
        {
          id: 1,
          title: "Best Paper Award at IS3C 2023",
          description:
            "Awarded for outstanding research at the Sixth International Symposium on Computer, Consumer and Control",
          year: 2023,
        },
        {
          id: 2,
          title: "Best Paper Award at ICSEC 2022",
          description:
            "Recognized for exceptional research contribution at IEEE 26th International Computer Science and Engineering Conference",
          year: 2022,
        },
        {
          id: 3,
          title: "Outstanding Research Award",
          description:
            "Honored by Yuan Ze University for significant research achievements",
          year: 2022,
        },
        {
          id: 4,
          title: "IET Fellow",
          description:
            "Elected as Fellow of the Institution of Engineering and Technology",
          year: 2022,
        },
        {
          id: 5,
          title: "Keynote Speaker at ICSEC 2022",
          description:
            "Invited to deliver keynote at International Computer Science and Engineering Conference in Thailand",
          year: 2022,
        },
        {
          id: 6,
          title: "Keynote Speaker at APWiMob 2022",
          description:
            "Featured as keynote speaker at IEEE Asia Pacific Conference on Wireless and Mobile in Indonesia",
          year: 2022,
        },
        {
          id: 7,
          title: "Keynote Speaker at IDSCS 2022",
          description:
            "Invited to present keynote at International Conference on Data Science, Computation and Security in India",
          year: 2022,
        },
        {
          id: 8,
          title: "Best Competition Award",
          description:
            'Won first place for "When Guitar Meets AI - Guitar Chord Thief" project at Yuan Ze University',
          year: 2021,
        },
        {
          id: 9,
          title: "Honorable Mention Poster Award at ISET 2021",
          description:
            "Recognized for outstanding poster presentation at 3rd International Symposium on Engineering and Technology",
          year: 2021,
        },
        {
          id: 10,
          title: "Outstanding Research Award",
          description:
            "Honored by Yuan Ze University's Electrical and Communication Engineering College",
          year: 2021,
        },
        {
          id: 11,
          title: "Keynote Speaker at DATABIA 2021",
          description:
            "Invited to deliver keynote at International Conference on Data Science, AI, and Business Analytics in Indonesia",
          year: 2021,
        },
        {
          id: 12,
          title: "IEEE Senior Member",
          description: "Elevated to Senior Member grade of IEEE",
          year: 2021,
        },
        {
          id: 13,
          title: "MOST Research Reward",
          description:
            "Recognized by Taiwan's Ministry of Science and Technology for outstanding research contributions",
          year: 2021,
        },
        {
          id: 14,
          title: "Best Paper Award at BCWSP 2020",
          description:
            "Awarded for exceptional research at 2nd International Conference on Broadband Communication, Wireless Sensors and Powering",
          year: 2020,
        },
        {
          id: 15,
          title: "Outstanding Research Award",
          description:
            "Honored by Yuan Ze University's Electrical and Communication Engineering College",
          year: 2020,
        },
        {
          id: 16,
          title: "UTAR International Collaborative Partner",
          description:
            "Appointed as International Collaborative Partner with Universiti Tunku Abdul Rahman",
          year: 2020,
        },
        {
          id: 17,
          title: "AI Competition Excellent Award",
          description:
            "Recognized for excellence in Yuan Ze University's AI competition",
          year: 2020,
        },
        {
          id: 18,
          title: "Young Scholar Research Award",
          description:
            "Honored by Yuan Ze University for early-career research achievements",
          year: 2019,
        },
        {
          id: 19,
          title: "Best Paper Award at CVGIP 2019",
          description:
            "Recognized for outstanding paper at 32th Computer Vision, Graphics, and Image Processing conference",
          year: 2019,
        },
        {
          id: 20,
          title: "Best Paper Award at IVIC 2019",
          description:
            "Awarded for exceptional research at 6th International Visual Informatics Conference",
          year: 2019,
        },
        {
          id: 21,
          title: "Excellent Paper Award",
          description:
            "Recognized at 2nd International Workshop of Machine Learning on Multimedia and Applications",
          year: 2019,
        },
        {
          id: 22,
          title: "Service Excellence Award",
          description:
            "Honored by Yuan Ze University Electronic Engineering Department for service and counseling",
          year: 2019,
        },
        {
          id: 23,
          title: "Teaching Excellence Award",
          description:
            "Recognized by Yuan Ze University Electronic Engineering Department for outstanding teaching",
          year: 2018,
        },
        {
          id: 24,
          title: "Best 3D Printing Project Award",
          description:
            "Awarded by Taiwan's Ministry of Science and Technology for innovative 3D printing demonstration",
          year: 2017,
        },
        {
          id: 25,
          title: "Outstanding Research Award",
          description:
            "Honored by Asia University for sustained research excellence (2011-2016)",
          year: 2016,
        },
        {
          id: 26,
          title: "ITSA Contest Leadership",
          description:
            "Led student teams to participate in ITSA programming contests over 20 times (2011-2016)",
          year: 2016,
        },
        {
          id: 27,
          title: "Excellent Thesis Award",
          description:
            "Recognized at 26th National Cryptology and Information Security Conference",
          year: 2016,
        },
        {
          id: 28,
          title: "National Software Contest - 2nd Place",
          description:
            "Student team won second place in National Intelligent Terminal and Human-Computer Interaction Software Contest",
          year: 2016,
        },
        {
          id: 29,
          title: "Energy-Saving APP Competition - 1st Place",
          description:
            "Student team won first place in Taichung City's national energy-saving app competition",
          year: 2016,
        },
        {
          id: 30,
          title: "High-Impact Paper Award",
          description:
            "Recognized by Asia University for research with significant academic impact",
          year: 2015,
        },
        {
          id: 31,
          title: "National Android Programming Contest - Excellent Award",
          description:
            "Student team recognized in 6th National Android Programming Contest",
          year: 2015,
        },
        {
          id: 32,
          title: "Outstanding Industry-University Award",
          description:
            "Honored by Asia University for exceptional industry-academic collaboration",
          year: 2014,
        },
        {
          id: 33,
          title: "Excellent Thesis Award",
          description: "Recognized by 3rd Chiuan-Yan Technology These Award",
          year: 2013,
        },
        {
          id: 34,
          title: "Excellent Paper Award at CVGIP 2013",
          description:
            "Awarded at 24th Computer Vision, Graphics, and Image Processing conference",
          year: 2013,
        },
        {
          id: 35,
          title: "National Electronics Design Contest - Excellent Award",
          description:
            "Student team recognized in National Intelligent Electronics System Design Contest",
          year: 2013,
        },
        {
          id: 36,
          title: "U21 Creative Invention Contest - 1st Place",
          description:
            "Student team won first place with Confidential Fall Prevention invention",
          year: 2012,
        },
        {
          id: 37,
          title: "Best Paper Award at CVGIP 2009",
          description:
            "Recognized for outstanding paper at 20th Computer Vision, Graphics, and Image Processing conference",
          year: 2009,
        },
        {
          id: 38,
          title: "ITRI Research Grant",
          description:
            "Awarded research funding by Industrial Technology Research Institute",
          year: 2009,
        },
        {
          id: 39,
          title: "Best Paper Award at PCM 2008",
          description:
            "Recognized for outstanding research at Pacific-Rim Conference on Multimedia",
          year: 2008,
        },
        {
          id: 40,
          title: "National Chung-Cheng University Research Grant",
          description:
            "Awarded research funding by National Chung-Cheng University",
          year: 2006,
        },
        {
          id: 41,
          title: "Distinguished Academic Record Award",
          description:
            "Ranked 1st in department at National Chung-Cheng University",
          year: 2005,
        },
        {
          id: 42,
          title: "Distinguished Academic Record Award",
          description:
            "Ranked 1st in department at National Chung-Cheng University",
          year: 2004,
        },
        {
          id: 43,
          title: "Hsing Tain Kong Scholarship",
          description:
            "Prestigious national scholarship with <7% acceptance rate (2003-2006)",
          year: 2003,
        },
        {
          id: 44,
          title: "Distinguished Academic Record Award",
          description:
            "Ranked 1st in admission exam at National Chi-Nan University",
          year: 1998,
        },
      ],
    },
    {
      id: 2,
      title: "Academic Activities & Services",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      achievements: [
        {
          id: 101,
          title: "Keynote Speaker at ICSEC 2022",
          description:
            "Invited keynote at 26th International Computer Science and Engineering Conference in Thailand",
          year: 2022,
        },
        {
          id: 102,
          title: "Keynote Speaker at APWiMob 2022",
          description:
            "Featured keynote at 7th IEEE Asia Pacific Conference on Wireless and Mobile in Indonesia",
          year: 2022,
        },
        {
          id: 103,
          title: "Keynote Speaker at IDSCS 2022",
          description:
            "Invited keynote at International Conference on Data Science, Computation and Security in India",
          year: 2022,
        },
        {
          id: 104,
          title: "Publication Chair at IEEE MIPR 2022",
          description:
            "Served as Publication Chair for IEEE 5th International Conference on Multimedia Information Processing and Retrieval",
          year: 2022,
        },
        {
          id: 105,
          title: "Special Session Chair at IEEE ICCE-TW 2022",
          description:
            "Organized special sessions and chaired at IEEE International Conference on Consumer Electronics in Taiwan",
          year: 2022,
        },
        {
          id: 106,
          title: "Guest Editor for Sensors Journal",
          description:
            "Edited special issue on Vision Sensors for Object Detection and Recognition",
          year: 2022,
        },
        {
          id: 107,
          title: "Keynote Speaker at DATABIA 2021",
          description:
            "Delivered keynote at International Conference on Data Science, AI, and Business Analytics in Indonesia",
          year: 2021,
        },
        {
          id: 108,
          title: "TPC Member at COSITE 2021",
          description:
            "Served on Technical Program Committee for IEEE International Conference on Computer Systems in Indonesia",
          year: 2021,
        },
        {
          id: 109,
          title: "Guest Editor for Sensors Journal",
          description:
            "Edited special issue on Sensor Technologies in Multimedia Computing and HCI",
          year: 2021,
        },
        {
          id: 110,
          title: "Publication Chair at IEEE ICCE-TW 2021",
          description:
            "Managed publications and chaired sessions at IEEE International Conference on Consumer Electronics in Taiwan",
          year: 2021,
        },
        {
          id: 111,
          title: "Program Chair at Ubi-Media 2020",
          description:
            "Led program organization for 13th IEEE International Conference on Ubi-Media Computing in Vietnam",
          year: 2020,
        },
        {
          id: 112,
          title: "Session Chair at IEEE ICCE-TW 2020",
          description:
            "Organized and chaired sessions at IEEE International Conference on Consumer Electronics in Taiwan",
          year: 2020,
        },
        {
          id: 113,
          title: "Managing Supervisor at IPPR",
          description:
            "Supervised operations for Chinese Image Processing and Pattern Recognition Society",
          year: 2020,
        },
        {
          id: 114,
          title: "Workshop Organizer at AVSS 2019",
          description:
            "Organized workshop and chaired sessions at 16th IEEE International Conference on Advanced Video Surveillance",
          year: 2019,
        },
        {
          id: 115,
          title: "Workshop Co-Chair at Ubi-Media 2019",
          description:
            "Co-chaired workshops at 12th IEEE International Conference on Ubi-Media Computing in Indonesia",
          year: 2019,
        },
        {
          id: 116,
          title: "Session Chair at IEEE ICCE-TW 2019",
          description:
            "Organized and chaired sessions at IEEE International Conference on Consumer Electronics in Taiwan",
          year: 2019,
        },
        {
          id: 117,
          title: "Session Chair at AHFE 2018",
          description:
            "Chaired sessions at 9th International Conference on Applied Human Factors and Ergonomics in USA",
          year: 2018,
        },
        {
          id: 118,
          title: "Session Chair at IEEE ICCE-TW 2018",
          description:
            "Organized and chaired sessions at IEEE International Conference on Consumer Electronics in Taiwan",
          year: 2018,
        },
        {
          id: 119,
          title: "Session Chair at IEEE ICCE-TW 2017",
          description:
            "Organized and chaired sessions at IEEE International Conference on Consumer Electronics in Taiwan",
          year: 2017,
        },
        {
          id: 120,
          title: "Workshop Organizer at ACCV 2016",
          description:
            "Organized workshop and chaired sessions at 13th Asian Conference on Computer Vision",
          year: 2016,
        },
        {
          id: 121,
          title: "Publication Chair at IEEE BIBE 2016",
          description:
            "Managed publications for IEEE International Conference on Bioinformatics and Bioengineering",
          year: 2016,
        },
        {
          id: 122,
          title: "Session Chair at IEEE ICCE-TW 2016",
          description:
            "Organized and chaired sessions at IEEE International Conference on Consumer Electronics in Taiwan",
          year: 2016,
        },
        {
          id: 123,
          title: "Publication Chair at IEEE BigMM 2016",
          description:
            "Managed publications for 2nd IEEE International Conference on Multimedia Big Data",
          year: 2016,
        },
        {
          id: 124,
          title: "Guest Editor for JEST",
          description:
            "Edited special issue for Journal of Electronic Science and Technology",
          year: 2016,
        },
        {
          id: 125,
          title: "Secretary-general at IPPR",
          description:
            "Served as Committee Secretary-general for Chinese Image Processing and Pattern Recognition Society",
          year: 2015,
        },
        {
          id: 126,
          title: "TPC Member at ACM IH&MMSec 2016",
          description:
            "Served on program committee for 4th ACM Workshop on Information Hiding and Multimedia Security in Spain",
          year: 2016,
        },
        {
          id: 127,
          title: "Publication Co-Chair at IEEE BigMM 2016",
          description:
            "Co-chaired publications for 2nd IEEE International Conference on Multimedia Big Data",
          year: 2016,
        },
        {
          id: 128,
          title: "Session Chair at IEEE ICCE-TW 2015",
          description:
            "Organized and chaired sessions at IEEE International Conference on Consumer Electronics in Taiwan",
          year: 2015,
        },
        {
          id: 129,
          title: "TPC Member at ACM IH&MMSec 2015",
          description:
            "Served on program committee for 3rd ACM Workshop on Information Hiding and Multimedia Security in USA",
          year: 2015,
        },
        {
          id: 130,
          title: "Guest Editor for IJDSN",
          description:
            "Edited special issue for International Journal of Distributed Sensor Networks",
          year: 2014,
        },
        {
          id: 131,
          title: "Session Chair at APSIPA 2014",
          description:
            "Organized and chaired sessions at Asia-Pacific Signal and Information Processing Association Summit in Thailand",
          year: 2014,
        },
        {
          id: 132,
          title: "TPC Member at ACM IH&MMSec 2014",
          description:
            "Served on program committee for 2nd ACM Workshop on Information Hiding and Multimedia Security in Austria",
          year: 2014,
        },
        {
          id: 133,
          title: "Registration Co-Chair at APSIPA 2013",
          description:
            "Co-managed registrations for Asia-Pacific Signal and Information Processing Association Summit in Taiwan",
          year: 2013,
        },
        {
          id: 134,
          title: "Session Chair at APSIPA 2013",
          description:
            "Organized and chaired sessions at Asia-Pacific Signal and Information Processing Association Summit in Taiwan",
          year: 2013,
        },
        {
          id: 135,
          title: "TPC Member at ACM IH&MMSec 2013",
          description:
            "Served on program committee for 1st ACM Workshop on Information Hiding and Multimedia Security in France",
          year: 2013,
        },
        {
          id: 136,
          title: "Track Chair at CISIS 2013",
          description:
            "Chaired Multimedia Systems and Virtual Reality track at 7th International Conference on Complex, Intelligent Systems in Taiwan",
          year: 2013,
        },
        {
          id: 137,
          title: "TPC Member at ICICS 2013",
          description:
            "Served on program committee for International Conference on Information, Communications and Signal Processing in Taiwan",
          year: 2013,
        },
        {
          id: 138,
          title: "TPC Member at UIC 2012",
          description:
            "Served on program committee for 9th IEEE International Conference on Ubiquitous Intelligence and Computing",
          year: 2012,
        },
        {
          id: 139,
          title: "Session Chair at ISIC 2012",
          description:
            "Chaired sessions at International Conference on Information Security and Intelligent Control",
          year: 2012,
        },
        {
          id: 140,
          title: "Session Chair at CVGIP 2012",
          description:
            "Chaired sessions at 25th IPPR Conference on Computer Vision, Graphics, and Image Processing",
          year: 2012,
        },
        {
          id: 141,
          title: "Session Chair at ICGEC 2012",
          description:
            "Chaired sessions at International Conference on Genetic and Evolutionary Computing",
          year: 2012,
        },
        {
          id: 142,
          title: "Session Chair at CVGIP 2011",
          description:
            "Chaired sessions at 24th IPPR Conference on Computer Vision, Graphics, and Image Processing",
          year: 2011,
        },
        {
          id: 143,
          title: "Session Chair at ICGEC 2011",
          description:
            "Chaired sessions at International Conference on Genetic and Evolutionary Computing",
          year: 2011,
        },
        {
          id: 144,
          title: "Session Chair at WIC 2011",
          description:
            "Chaired sessions at 1st National Conference on Web Intelligence and Applications",
          year: 2011,
        },
        {
          id: 145,
          title: "TPC Member at NCS 2011",
          description:
            "Served on program committee for National Computer Symposium",
          year: 2011,
        },
        {
          id: 146,
          title: "Editorial Board Member",
          description:
            "Served on editorial board for Advances in Computer Science and Engineering journal",
          year: 2010,
        },
        {
          id: 147,
          title: "Session Chair at ICGEC 2010",
          description:
            "Chaired sessions at International Conference on Genetic and Evolutionary Computing",
          year: 2010,
        },
      ],
    },
    {
      id: 3,
      title: "Students' Award and Achievements (Undergraduate Program)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      achievements: [
        {
          id: 201,
          title: "National Competition Silver Award",
          description:
            "Student Zhang Shun-Cheng won 2nd place in national software competition with AI guitar project (228 teams competing)",
          year: 2022,
        },
        {
          id: 202,
          title: "Admission to Top Universities",
          description:
            "Student Chang Cheng-Chun admitted to Columbia University and University of Washington",
          year: 2022,
        },
        {
          id: 203,
          title: "Maker Competition First Place",
          description:
            'Student Zhang Shun-Cheng won 1st place at Yuan Ze University competition with "When Guitar Meets AI" project',
          year: 2021,
        },
        {
          id: 204,
          title: "Admission to Carnegie Mellon",
          description:
            "Student Chen Lian-Grong admitted to Carnegie Mellon University",
          year: 2021,
        },
        {
          id: 205,
          title: "Master's Degree from Melbourne",
          description:
            "Student Yang Jing-Yuan obtained master's in IT from University of Melbourne, Australia",
          year: 2021,
        },
        {
          id: 206,
          title: "Admission to Durham University",
          description: "Student Song He-Xig admitted to Durham University, UK",
          year: 2021,
        },
        {
          id: 207,
          title: "AI Competition Honorable Mention",
          description:
            "Student team (Hong Bo-An, Liao Bo-Sheng, Fityanul Akhyar) recognized for mango classification project",
          year: 2020,
        },
        {
          id: 208,
          title: "NSC Research Project",
          description:
            'Students received funding from National Science Council for "Object surface defect detection based on 3D image sensing" project',
          year: 2018,
        },
        {
          id: 209,
          title: "ITSA Programming Awards",
          description:
            "Led students to win 15 awards in ITSA Online Programming Competitions (2011-2016)",
          year: 2016,
        },
        {
          id: 210,
          title: "National Software Design - 2nd Place",
          description:
            "Student team won 2nd place in National Smart Terminal and HCI Software Design Competition with Intellcalling project",
          year: 2016,
        },
        {
          id: 211,
          title: "Energy-Saving APP - 1st Place",
          description:
            "Student team won 1st prize in Taichung City's national energy-saving app competition",
          year: 2016,
        },
        {
          id: 212,
          title: "National Information Competition Finalist",
          description:
            "Student team reached finals in national college innovative information application service competition",
          year: 2015,
        },
        {
          id: 213,
          title: "Android Programming Honorable Mention",
          description:
            "Student team recognized in 6th National Android Programming Contest for W-eating invention",
          year: 2015,
        },
        {
          id: 214,
          title: "Energy Conservation Honorable Mention",
          description:
            "Student team recognized in Asia University Creative Energy Conservation Competition",
          year: 2013,
        },
        {
          id: 215,
          title: "U21 Invention Contest - 1st Place",
          description:
            "Student team won 1st place with Confidential Fall Prevention invention",
          year: 2012,
        },
        {
          id: 216,
          title: "U21 Invention Contest - 2nd Place",
          description:
            'Student team won 2nd place with "My Shape, My Style" Motion Sensing Camera',
          year: 2012,
        },
      ],
    },
    {
      id: 4,
      title:
        "Students' Award  and Achievements (Graduate and Post-graduate Program)",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      achievements: [
        {
          id: 301,
          title: "Best Paper Award at IS3C 2023",
          description:
            "Students Junaidul Islam, Elvin Nur Furqon, Isack Farady received best paper award",
          year: 2023,
        },
        {
          id: 302,
          title: "Best Paper Award at ICSEC 2022",
          description: "Student Isack Farady received best paper award",
          year: 2022,
        },
        {
          id: 303,
          title: "Admission to Queensland University",
          description:
            "Student Kao Wei-Cheng admitted to Queensland University, Australia",
          year: 2021,
        },
        {
          id: 304,
          title: "Gold Academic Excellence Award",
          description:
            "Student Amornthep Rojanasarit honored by Yuan Ze University",
          year: 2021,
        },
        {
          id: 305,
          title: "Best Paper Award at BCWSP 2020",
          description:
            "Student Isack Farady awarded for research on mask classification and head temperature detection using deep learning",
          year: 2020,
        },
        {
          id: 306,
          title: "Best Paper Award at IVIC 2019",
          description:
            "Student Ervin Yohannes awarded for research on content-aware video analysis to guide visually impaired",
          year: 2019,
        },
        {
          id: 307,
          title: "Best Paper Award at CVGIP 2019",
          description:
            "Student Hsieh Hong-Xia awarded for research on deep bilateral learning for pedestrian detection",
          year: 2019,
        },
        {
          id: 308,
          title: "Excellent Paper Award",
          description:
            "Student Hong Chen-Ya recognized for research on automatic signboard detection and ground truth generation",
          year: 2019,
        },
        {
          id: 309,
          title: "Best PhD Paper Competition - Excellent Award",
          description:
            "Student Kahlil Muchtar honored by iICM for research on background modeling in video surveillance",
          year: 2018,
        },
        {
          id: 310,
          title: "Outstanding Presentation Award",
          description:
            "Student Fu Jing-Tong recognized by MOST for 3D modeling in clinical precision medicine presentation",
          year: 2017,
        },
        {
          id: 311,
          title: "Honorable Mention Paper Award",
          description:
            "Students Wang Sheng-Hong and Fu Jing-Tong recognized at 26th Information Safety Conference",
          year: 2016,
        },
        {
          id: 312,
          title: "A&F Paper Honorable Mention",
          description: "Student Song Yu-Xian recognized by 3rd A&F Paper Award",
          year: 2013,
        },
        {
          id: 313,
          title: "Smart Electronics Design Award",
          description:
            'Student Kahlil Muchtar won Honorable Mention and Industrial Potential Award for "Creator Cloud" invention',
          year: 2013,
        },
      ],
    },
  ];

  // Milestones timeline
  const milestones = [
    {
      year: 2023,
      title: "Lab Expansion",
      description: "New high-performance computing cluster installed",
    },
    {
      year: 2022,
      title: "Research Funding Milestone",
      description: "Secured ₹5 crore in external research grants",
    },
    {
      year: 2021,
      title: "Industry Partnership",
      description: "Established collaboration with Google Research India",
    },
    {
      year: 2020,
      title: "Alumni Achievement",
      description: "Former PhD student named IEEE Senior Member",
    },
    {
      year: 2019,
      title: "International Recognition",
      description: "Lab ranked among top 10 CV labs in Asia",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-cyan-400 text-sm font-mono">Achievements</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              <span className="gradient-text">Achievements</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Recognizing excellence in research and innovation
            </p>
          </div>
        </div>

        {/* Achievement Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {achievementCategories.map((category, index) => (
            <div
              key={category.id}
              className="card slide-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 text-black">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-white font-orbitron">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {category.achievements.map((achievement, achievementIndex) => (
                  <div key={achievement.id} className="slide-in-up" style={{ animationDelay: `${achievementIndex * 0.05}s` }}>
                    <AchievementCard achievement={achievement} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Milestones Timeline */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
              Lab <span className="gradient-text">Milestones</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Key moments in our journey of excellence
            </p>
          </div>

          <div className="card">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500"></div>
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="relative flex items-start slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full border-2 border-white shadow-lg"></div>
                    
                    {/* Content */}
                    <div className="ml-16">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl font-bold text-cyan-400 font-orbitron mr-4">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-white font-orbitron">{milestone.title}</h3>
                      </div>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="card text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 font-orbitron">100+</h3>
            <p className="text-gray-300">Publications</p>
          </div>

          <div className="card text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 font-orbitron">50+</h3>
            <p className="text-gray-300">Awards</p>
          </div>

          <div className="card text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 font-orbitron">200+</h3>
            <p className="text-gray-300">Students</p>
          </div>

          <div className="card text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 font-orbitron">30+</h3>
            <p className="text-gray-300">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
