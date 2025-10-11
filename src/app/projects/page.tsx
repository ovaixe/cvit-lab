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
          imageUrl: "/images/about/e1.png",
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
          imageUrl: "/images/about/e2.png",
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
          imageUrl: "/images/about/e3.png",
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
          imageUrl: "/images/about/e4.png",
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
          imageUrl: "/images/projects/robot.png",
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
          imageUrl: "/images/about/e1.png",
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
          imageUrl: "/images/about/e2.png",
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
          imageUrl: "/images/about/e3.png",
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
          imageUrl: "/images/about/e4.png",
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
      imageUrl: "/images/projects/robot.png",
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
      imageUrl: "/images/about/e2.png",
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
              <span className="text-cyan-400 text-sm font-mono">Research Projects</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              Research <span className="gradient-text">Projects</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The research projects conducted at the CVIT Lab have been supported
              through various funding sources and carried out in collaboration
              with several partner universities. These partnerships and financial
              contributions have played a vital role in advancing the lab&apos;s
              research objectives and fostering interdisciplinary innovation.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <ProjectCard
                  project={project}
                  isFeatured={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Project Categories */}
        <div className="space-y-16 mb-20">
          {projectCategories.map((category, categoryIndex) => (
            <div key={category.id} className="slide-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <div className="card">
                <div className="mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-white font-orbitron">
                      {category.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-300">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <div key={project.id} className="slide-in-up" style={{ animationDelay: `${projectIndex * 0.1}s` }}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Proposal CTA */}
        <div className="card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Have a Project Idea?</h2>
              <p className="text-xl text-gray-300 mb-6">
                We&apos;re always interested in exploring new collaborations and
                research opportunities. Contact us to discuss potential projects.
              </p>
              
              <a
                href="/contact"
                className="btn-primary group"
              >
                <span>Propose a Project</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl"></div>
                <div className="relative w-32 h-32 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-cyan-500/30 backdrop-blur-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-cyan-400"
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
        </div>
      </div>
    </section>
  );
}
