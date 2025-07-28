import ResearchGrid from "@/components/research/ResearchGrid";
import { RESEARCH_AREAS } from "@/utils/data";

export default function ResearchPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Research Areas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our lab focuses on cutting-edge research in visual information
            technology
          </p>
        </div>

        <ResearchGrid researchAreas={RESEARCH_AREAS} />

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Research Facilities</h2>
          <p className="mb-4">
            Our lab is equipped with state-of-the-art computing resources
            including high-performance GPU clusters, specialized imaging
            equipment, and dedicated research spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
          </div>
        </div>
      </div>
    </section>
  );
}
