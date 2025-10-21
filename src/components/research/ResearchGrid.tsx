import Link from "next/link";
import { ResearchArea } from "@/types/types";

type ResearchGridProps = {
  researchAreas: ResearchArea[];
};

export default function ResearchGrid({ researchAreas }: ResearchGridProps) {
  const getGradientColor = (id: number) => {
    const gradients = [
      "from-cyan-500 to-blue-500",
      "from-purple-500 to-pink-500", 
      "from-green-500 to-teal-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
      "from-pink-500 to-rose-500"
    ];
    return gradients[id % gradients.length];
  };

  const getIcon = (id: number) => {
    const icons = [
      // Computer Vision
      <svg key="cv" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>,
      // Machine Learning
      <svg key="ml" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>,
      // Image Processing
      <svg key="ip" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>,
      // Pattern Recognition
      <svg key="pr" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>,
      // Deep Learning
      <svg key="dl" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      // Multimedia Security
      <svg key="ms" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ];
    return icons[id % icons.length];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {researchAreas.map((research, index) => (
        <div
          key={research.id}
          className="card hover:scale-105 transition-all duration-300 group slide-in-up"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="h-full flex flex-col">
            {/* Icon */}
            <div className={`w-16 h-16 bg-gradient-to-r ${getGradientColor(research.id)} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              {getIcon(research.id)}
            </div>

            {/* Content */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors font-orbitron mb-4">
                {research.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed text-justify">
                {research.description}
              </p>
            </div>

            {/* Link */}
            {research.link && (
              <div className="mt-6 pt-4 border-t border-white/20">
                <Link
                  href={research.link}
                  className="text-cyan-400 font-medium hover:text-cyan-300 transition-colors flex items-center group/link"
                >
                  Learn More
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
                </Link>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
