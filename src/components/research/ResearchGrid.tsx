import { ResearchArea } from "@/types/types";

type ResearchGridProps = {
  researchAreas: ResearchArea[];
};

export default function ResearchGrid({ researchAreas }: ResearchGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {researchAreas.map((research) => (
        <div
          key={research.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]"
        >
          <div className="p-6">
            <div className="bg-blue-100 text-blue-800 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <span className="text-xl font-bold">{research.id}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {research.title}
            </h3>
            <p className="text-gray-600 text-justify">{research.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
