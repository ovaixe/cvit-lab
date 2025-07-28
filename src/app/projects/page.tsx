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
      id: 501,
      title: "Generative Models for Image Synthesis",
      description:
        "Developing advanced GAN architectures for high-fidelity image generation and manipulation.",
      technologies: ["StyleGAN", "Diffusion Models", "Neural Rendering"],
    },
    {
      id: 502,
      title: "Autonomous Navigation System",
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring cutting-edge solutions in visual information technology
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
        <div className="space-y-16">
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
        </div>

        {/* Collaborations Section */}
        <div className="mt-16 bg-blue-50 rounded-xl shadow-lg p-8">
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
        </div>

        {/* Project Proposal CTA */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
          <div>
            <h2 className="text-2xl font-bold mb-4">Have a Project Idea?</h2>
            <p className="mb-6">
              We're always interested in exploring new collaborations and
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
            <div className="bg-white bg-opacity-20 rounded-full p-8">
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
