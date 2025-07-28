import ResearchCard from "@/components/research/ResearchCard";
import { RESEARCH_AREAS } from "@/utils/data";

export default function AboutPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About CVIT Lab
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advancing research in visual information technology since 1999
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4">
              The Centre for Visual Information Technology (CVIT) is a premier
              research center at IIIT Hyderabad dedicated to advancing the field
              of computer vision, image processing, machine learning, and
              pattern recognition.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to conduct cutting-edge research that addresses
              fundamental challenges in visual information processing while
              developing practical applications that benefit society.
            </p>
            <p className="text-gray-700">
              Founded in 1999, CVIT has grown to become one of India&apos;s
              leading research centers in computer vision, with collaborations
              spanning academia and industry worldwide.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH_AREAS.map((research) => (
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Collaborations</h3>
            <p className="text-gray-600">
              We partner with leading academic institutions and industry
              organizations worldwide to advance research in visual information
              technology.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Facilities</h3>
            <p className="text-gray-600">
              Our state-of-the-art lab features high-performance computing
              resources, specialized imaging equipment, and dedicated research
              spaces.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Education</h3>
            <p className="text-gray-600">
              We train the next generation of researchers through our graduate
              programs, workshops, and internship opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
