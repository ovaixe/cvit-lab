import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  // Project categories and items
  const projectCategories = [
    {
      id: 1,
      title: "Computer Vision Projects",
      description: "Cutting-edge research in visual understanding and analysis",
      projects: [
        {
          id: 101,
          title: "Scene Understanding",
          description:
            "Developing algorithms for comprehensive scene analysis and interpretation in complex environments.",
          technologies: [
            "Deep Learning",
            "Semantic Segmentation",
            "3D Reconstruction",
          ],
        },
        {
          id: 102,
          title: "Human Action Recognition",
          description:
            "Recognizing and classifying human actions from video sequences for surveillance and human-computer interaction applications.",
          technologies: [
            "LSTM Networks",
            "Spatio-temporal Features",
            "Transfer Learning",
          ],
        },
        {
          id: 103,
          title: "Medical Image Analysis",
          description:
            "Advanced techniques for medical image segmentation, classification, and disease detection.",
          technologies: [
            "CNN Architectures",
            "Image Registration",
            "Pathology Detection",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Machine Learning Projects",
      description:
        "Innovative approaches to pattern recognition and predictive modeling",
      projects: [
        {
          id: 201,
          title: "Few-shot Learning",
          description:
            "Developing models that can learn new concepts with minimal training examples.",
          technologies: [
            "Meta-learning",
            "Prototypical Networks",
            "Metric Learning",
          ],
        },
        {
          id: 202,
          title: "Explainable AI",
          description:
            "Creating interpretable machine learning models that provide insights into their decision-making processes.",
          technologies: [
            "Attention Mechanisms",
            "SHAP Values",
            "Layer-wise Relevance Propagation",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Multimedia Analysis Projects",
      description:
        "Research in processing and understanding multimedia content",
      projects: [
        {
          id: 301,
          title: "Video Summarization",
          description:
            "Automatically generating concise summaries of long video content.",
          technologies: [
            "Keyframe Extraction",
            "Importance Scoring",
            "Reinforcement Learning",
          ],
        },
        {
          id: 302,
          title: "Cross-modal Retrieval",
          description:
            "Developing systems that can retrieve relevant content across different media types (text, image, video).",
          technologies: [
            "Joint Embedding Spaces",
            "Transformer Networks",
            "Contrastive Learning",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Applied Research Projects",
      description: "Real-world applications of visual information technology",
      projects: [
        {
          id: 401,
          title: "Agricultural Monitoring System",
          description:
            "Using drone imagery and computer vision for crop health assessment and yield prediction.",
          technologies: [
            "Aerial Imaging",
            "Vegetation Indices",
            "Anomaly Detection",
          ],
        },
        {
          id: 402,
          title: "Smart Traffic Management",
          description:
            "Computer vision-based system for traffic flow analysis, congestion prediction, and incident detection.",
          technologies: [
            "Object Tracking",
            "Trajectory Analysis",
            "Real-time Processing",
          ],
        },
      ],
    },
  ];

  // Featured projects
  const featuredProjects = [
    {
      id: 1,
      title:
        "Ministry of Science and Technology (MOST) Projects (PI) Industry-academia Collaboration Projects",
      data: [
        "The research of lightweight deep learning modeling with lifelong learning capability and security robustness, NSTC 110-2221-E-008 -104-MY3, 2011/08/01 ~ 2024/07/31",
        "Few-shot learning for fruit ripeness classification and prediction, Proactive Magic Add-on Project, MOST 107-2221-E-155-048-MY3, 2018/08/01 - 2021/07/31.",
        "The Research of Automatic Surface Defect Detection for Industrial Applications Based on Deep Learning, MOST 107-2221-E-155-048-MY3, 2018/08/01 - 2021/07/31.",
        "Development of deep learning framework for plant disease detection and classification, Proactive Magic Add-on Project, MOST 107-2221-E-155-048-MY3, 2018/08/01 - 2021/07/31.",
        "Head-Shoulder Detection Based on Template Matching and Deep Learning, MOST 106-2221-E-468-020, 2017/08/01 - 2018/07/31.",
        "Rain and Haze Removal, and Vehicle and Human Detection based on NMF, MOST 105-2221-E-468-008, 2016/08/01 - 2017/07/31.",
        "Software Development in 3D Modeling and Manipulation for Precisely Clinical Applications, MOST 104-2218-E-468-001, 2015/08/01 - 2018/10/31.",
        "Privacy and Digital Rights Protection for Multimedia Streaming, MOST 103-2221-E-468-007-MY2, 2014/08/01 - 2016/07/31.",
        "Video Surveillance in Encrypted Cloud Environments, NSC 102-2918-I-468-002, 2013/08/01 - 2014/07/31.",
        "The Design of High Fidelity of Foreground Segmentation and New Background Modeling, NSC 102-2221-E-468 -017, 2013/08/01 - 2014/07/31.",
        "Robust Moving Objects Detection for Video Surveillance, NSC 101-2221-E-468 -021, 2012/08/01 - 2013/07/31.",
        "Compressive Sensing and Its Applications to Multimedia in Cloud Computing Environments, NSC 100-2221-E-468 -021, 2011/08/01 - 2012/07/31.",
        "Privacy-Preserving Video Surveillance and Image Retrieval, NSC 99-2221-E-468 -023, 2010/08/01 - 2011/07/31.",
        "Human Appearance Identification Based on a Robust Multi-Camera Surveillance System, NSC 99-2218-E-468-005, 2010/02/01 - 2010/10/31.",
      ],
      description:
        "Developing advanced GAN architectures for high-fidelity image generation and manipulation.",
      technologies: ["StyleGAN", "Diffusion Models", "Neural Rendering"],
    },
    {
      id: 2,
      title: "Industry-academia Collaboration Projects",
      data: [
        "Development of all-purpose character recognition system for edge computing device, 2020/06 - 2021/03, PI.",
        "Asynchronous continuous human tracking method, 2020/08 - 2020/12, PI.",
        "Development of all-purpose steel coil serial number identification technology, 2019/10 - 2020/07, PI.",
        "Reinforcement and system integration of ID 3D image recognition on billet's surface, 2019/01 - 2019/10, PI.",
        "Development of new technology for defect features extraction on surface of steel products, 2018/04 - 2018/11, PI.",
        "Development of deep learning technology for detecting defect features extraction on surface of steel products, 2017/09 - 2018/08, PI.",
        "Development of auto-segmentation system of lesson recordings in multiple cameras, 2017/02 - 2018/01, PI.",
        "Development of calibration and coordinate correspondence of laser- and light-scanned depth image, 2016/10 - 2016/12, PI.",
        "Building of tire and steel surface defects image database, 2016/10 - 2016/12, PI.",
        "Building and optimization of automatic 3D spine model, 2016/10 - 2017/09, PI.",
        "Research on the benefits and expansibility of Health Check Cloud, 2016/08 - 2016/11, PI.",
        "Development of smart lesson recording system, 2016/02 - 2017/01, PI.",
        "Rehabilitation Cloud Project, 2015/04 - 2016/07, Co-PI.",
        "Innovative information and communication software talent promotion project, 2015/02 - 2016/01, Co-PI.",
        "Application of non-negative matrix subdivision on object image classification technology, 2013/07 - 2013/12, PI.",
        "Talent cultivation and internship project, 2013/02 - 2016/01, PI.",
      ],
      description:
        "Vision-based navigation system for autonomous vehicles in complex urban environments.",
      technologies: ["SLAM", "Depth Estimation", "Path Planning"],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research Projects
          </h1>
          <p className="text-xl text-justify text-gray-600 max-w-3xl mx-auto">
            The research projects conducted at the CVIT Lab have been supported
            through various funding sources and carried out in collaboration
            with several partner universities. These partnerships and financial
            contributions have played a vital role in advancing the lab&apos;s
            research objectives and fostering interdisciplinary innovation.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                isFeatured={true}
              />
            ))}
          </div>
        </div>

        {/* All Projects by Category */}
        {/* <div className="space-y-16">
          {projectCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-lg p-6 md:p-8"
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div> */}

        {/* Collaborations Section */}
        {/* <div className="mt-16 bg-blue-50 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">
            Collaborations & Partnerships
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="bg-white p-6 rounded-lg flex items-center justify-center h-32">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center h-32">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center h-32">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
            <div className="bg-white p-6 rounded-lg flex items-center justify-center h-32">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50">
              View All Collaborators
            </button>
          </div>
        </div> */}

        {/* Project Proposal CTA */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div>
            <h2 className="text-2xl font-bold mb-4">Have a Project Idea?</h2>
            <p className="mb-6">
              We&apos;re always interested in exploring new collaborations and
              research opportunities. Contact us to discuss potential projects.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50"
            >
              Propose a Project
            </a>
          </div>
          <div className="flex justify-center">
            <div className="bg-blue-600 bg-opacity-20 rounded-full p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
