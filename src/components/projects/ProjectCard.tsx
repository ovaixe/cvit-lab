import { Project } from "@/types/types";

type ProjectCardProps = {
  project: Project;
  isFeatured?: boolean;
};

export default function ProjectCard({
  project,
  isFeatured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-lg ${
        isFeatured ? "border-2 border-blue-500" : ""
      }`}
    >
      <div className="p-6 h-full flex flex-col">
        {isFeatured && (
          <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
            Featured Project
          </div>
        )}

        <h3 className={`font-bold mb-3 ${isFeatured ? "text-xl" : "text-lg"}`}>
          {project.title}
        </h3>

        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>

        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">
            Technologies:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((tech, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-blue-600 font-medium hover:text-blue-800 hover:underline flex items-center"
            >
              Project Details
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
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
            <button className="text-gray-500 hover:text-gray-700">
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
