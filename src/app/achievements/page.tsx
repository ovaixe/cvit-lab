import AchievementCard from "@/components/achievements/AchievementCard";

export default function AchievementsPage() {
  // Achievement categories
  const achievementCategories = [
    {
      id: 1,
      title: "Awards & Honors",
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
          id: 101,
          title: "Best Paper Award at CVPR 2022",
          description:
            "Recognized for outstanding research in scene understanding using transformer architectures",
          year: 2022,
        },
        {
          id: 102,
          title: "Outstanding Researcher Award",
          description:
            "Faculty member honored for contributions to computer vision research",
          year: 2021,
        },
        {
          id: 103,
          title: "Best Student Paper at ACCV 2020",
          description:
            "PhD student recognized for innovative work in few-shot learning",
          year: 2020,
        },
      ],
    },
    {
      id: 2,
      title: "Patents",
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
          id: 201,
          title: "System for Automated Medical Image Analysis",
          description:
            "Patent granted for novel algorithm that improves diagnostic accuracy in radiology",
          year: 2021,
          patentNumber: "US11238921B2",
        },
        {
          id: 202,
          title: "Real-time Traffic Monitoring Method",
          description:
            "Patent for computer vision-based traffic flow analysis system",
          year: 2019,
          patentNumber: "US10467845B1",
        },
      ],
    },
    {
      id: 3,
      title: "Notable Publications",
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
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
        </svg>
      ),
      achievements: [
        {
          id: 301,
          title: "Highly Cited Paper in IEEE TPAMI",
          description:
            "Our work on attention mechanisms ranked in top 1% of cited papers in the field",
          year: 2021,
          citations: "5000+",
        },
        {
          id: 302,
          title: "Featured Article in Nature Machine Intelligence",
          description: "Research on explainable AI selected as editor's choice",
          year: 2020,
        },
      ],
    },
    {
      id: 4,
      title: "Industry Impact",
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
          id: 401,
          title: "Technology Transfer to Healthcare Startup",
          description:
            "Medical image analysis algorithms licensed to MedVision AI",
          year: 2022,
        },
        {
          id: 402,
          title: "Adopted by National Smart Cities Mission",
          description:
            "Our traffic monitoring system deployed in 5 major Indian cities",
          year: 2021,
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
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Achievements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognizing excellence in research and innovation
          </p>
        </div>

        {/* Achievement Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievementCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 text-blue-600">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-4">
                {category.achievements.map((achievement) => (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Milestones Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Lab Milestones
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-6 h-full w-0.5 bg-gray-200"></div>

            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="relative pl-10 md:pl-0 mb-10 md:mb-12"
              >
                {/* Year marker - visible on all screens */}
                <div className="absolute top-0 left-0 md:left-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transform md:-translate-x-1/2 -ml-1 md:ml-0">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>

                {/* Content card - alternates sides on desktop */}
                <div
                  className={`
          mt-6 md:mt-0 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500
          ${
            index % 2 === 0
              ? "md:ml-auto md:mr-16 md:pr-8"
              : "md:mr-auto md:ml-16 md:pl-8"
          }
          ${index % 2 === 0 ? "md:text-right" : "md:text-left"}
        `}
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Success Stories */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Alumni Success
          </h2>
          <p className="text-gray-600 mb-8">
            Our graduates have gone on to make significant contributions in
            academia and industry worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg mb-2">Faculty Positions</h3>
              <p className="text-gray-600">
                15+ alumni holding faculty positions at top universities
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg mb-2">Industry Leaders</h3>
              <p className="text-gray-600">
                30+ alumni in research roles at Google, Microsoft, Adobe, and
                more
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg mb-2">Entrepreneurs</h3>
              <p className="text-gray-600">
                5+ startups founded by our alumni in computer vision domain
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50">
              View Alumni Network
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
