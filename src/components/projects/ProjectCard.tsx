import { Project } from "@/types/types";

type ProjectCardProps = {
  project: Project;
  isFeatured?: boolean;
};

export default function ProjectCard({
  project,
  isFeatured = false,
}: ProjectCardProps) {
  // Generate SVG icon based on project title
  const getProjectIcon = () => {
    const title = project.title.toLowerCase();
    
    // Computer Vision related
    if (title.includes('scene') || title.includes('understanding') || title.includes('vision')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    }
    
    // Action Recognition
    if (title.includes('action') || title.includes('recognition') || title.includes('human')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      );
    }
    
    // Medical/Analysis
    if (title.includes('medical') || title.includes('analysis') || title.includes('detection')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      );
    }
    
    // Learning/AI
    if (title.includes('learning') || title.includes('ai') || title.includes('neural') || title.includes('deep')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    }
    
    // Explainable AI
    if (title.includes('explainable') || title.includes('interpretable')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    
    // Video/Multimedia
    if (title.includes('video') || title.includes('multimedia') || title.includes('summarization')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      );
    }
    
    // Retrieval/Search
    if (title.includes('retrieval') || title.includes('search') || title.includes('cross-modal')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
    }
    
    // Agricultural/Monitoring
    if (title.includes('agricultural') || title.includes('monitoring') || title.includes('crop')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    }
    
    // Traffic/Management
    if (title.includes('traffic') || title.includes('management') || title.includes('smart')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    
    // Industry/Collaboration
    if (title.includes('industry') || title.includes('collaboration') || title.includes('academia')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
    }
    
    // Generative AI
    if (title.includes('generative') || title.includes('synthesis') || title.includes('gan')) {
      return (
        <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    }
    
    // Default icon for other projects
    return (
      <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  };

  // Get gradient colors based on project type
  const getProjectGradient = () => {
    const title = project.title.toLowerCase();
    
    if (title.includes('vision') || title.includes('scene') || title.includes('understanding')) {
      return "from-cyan-500 to-blue-500";
    }
    if (title.includes('learning') || title.includes('ai') || title.includes('neural')) {
      return "from-purple-500 to-pink-500";
    }
    if (title.includes('medical') || title.includes('analysis') || title.includes('detection')) {
      return "from-green-500 to-teal-500";
    }
    if (title.includes('video') || title.includes('multimedia')) {
      return "from-orange-500 to-red-500";
    }
    if (title.includes('agricultural') || title.includes('monitoring')) {
      return "from-yellow-500 to-orange-500";
    }
    if (title.includes('traffic') || title.includes('management')) {
      return "from-indigo-500 to-purple-500";
    }
    if (title.includes('industry') || title.includes('collaboration')) {
      return "from-pink-500 to-rose-500";
    }
    
    return "from-cyan-500 to-blue-500";
  };

  return (
    <div
      className={`card hover:scale-105 transition-all duration-300 h-full group ${
        isFeatured ? "border-2 border-cyan-500/50" : ""
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Project Icon */}
        <div className="relative w-full h-48 mb-6 group/icon flex items-center justify-center">
          <div className={`absolute inset-0 bg-gradient-to-r ${getProjectGradient()}/20 rounded-xl blur-sm group-hover/icon:blur-md transition-all duration-300`}></div>
          <div className={`relative w-full h-full bg-gradient-to-br ${getProjectGradient()}/10 rounded-xl border border-${getProjectGradient().split('-')[1]}-500/20 flex items-center justify-center group-hover/icon:scale-105 transition-transform duration-500`}>
            {getProjectIcon()}
          </div>
          
          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 left-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
                <span className="text-cyan-400 text-xs font-mono">Featured</span>
              </div>
            </div>
          )}
        </div>

        <h3 className={`font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors font-orbitron ${
          isFeatured ? "text-xl" : "text-lg"
        }`}>
          {project.title}
        </h3>

        {project.data && project.data.length > 0 ? (
          <div className="mb-4 flex-grow">
            <ul className="space-y-2 text-sm text-gray-300">
              {project.data.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-xs leading-relaxed">{item}</span>
                </li>
              ))}
              {project.data.length > 3 && (
                <li className="text-xs text-cyan-400 font-mono">
                  +{project.data.length - 3} more items...
                </li>
              )}
            </ul>
          </div>
        ) : (
          <p className="text-gray-300 mb-4 flex-grow text-sm leading-relaxed">
            {project.description}
          </p>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-300 mb-3 font-orbitron">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-white/20">
          <div className="flex justify-between items-center">
            <a
              href={project.link || "#"}
              className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center group/link"
            >
              Project Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 transition-transform group-hover/link:translate-x-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <button className="text-gray-400 hover:text-cyan-400 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
