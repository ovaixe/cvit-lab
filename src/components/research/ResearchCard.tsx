import Link from "next/link";

type ResearchCardProps = {
  title: string;
  description: string;
  // Optional props for additional customization
  icon?: React.ReactNode;
  link?: string;
};

export default function ResearchCard({
  title,
  description,
  icon,
  link = "/research",
}: ResearchCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-start">
          {icon || (
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-justify">{description}</p>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <Link
            href={link}
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors group"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1"
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
      </div>
    </div>
  );
}
