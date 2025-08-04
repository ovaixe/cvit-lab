import Image from "next/image";

type PersonCardProps = {
  person: {
    id: number;
    name: string;
    role: string;
    email: string;
    description?: string;
    research?: string;
    current?: string;
  };
  variant: "director" | "faculty" | "phd" | "ms" | "alumni";
};

export default function PersonCard({ person, variant }: PersonCardProps) {
  const isFaculty = () => {
    return variant === "faculty" || variant === "director" || variant === "phd";
  };
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${
        isFaculty() ? "max-w-2xl" : "h-full min-w-60"
      }`}
    >
      <div
        className={`flex ${isFaculty() ? "flex-col md:flex-row" : "flex-col"}`}
      >
        {/* Image */}
        <div
          className={`relative ${
            isFaculty() ? "w-full h-96 md:w-60 md:h-60" : "w-full h-48"
          }`}
        >
          <Image
            src={`/images/team/${person.id}.jpg`}
            alt={person.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
            <p className="text-gray-600 mb-2">{person.role}</p>

            {variant === "alumni" && person.current && (
              <p className="text-gray-700 mb-3">
                <span className="font-medium">Current: </span>
                {person.current}
              </p>
            )}

            {person.research && (
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-500">Research:</p>
                <p className="text-gray-700">{person.research}</p>
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <a
              href={`mailto:${person.email}`}
              className="text-blue-600 text-sm font-medium hover:underline flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {person.email}
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 text-gray-600 text-justify">{person?.description}</div>
    </div>
  );
}
