import PersonCard from "./PersonCard";
import { Person } from "@/types/types";

type PeopleGridProps = {
  title: string;
  people: Person[];
};

export default function PeopleGrid({ title, people }: PeopleGridProps) {
  const isFacultySection = title === "Faculty" || title === "PhD Students";
  
  return (
    <div className="mb-16">
      <div className="flex items-center mb-8">
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
          <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-white font-orbitron">
          {title}
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent ml-6"></div>
      </div>
      
      <div className={`grid gap-6 ${
        isFacultySection 
          ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-2" 
          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      }`}>
        {people.map((person, index) => (
          <div key={person.id} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <PersonCard
              person={person}
              variant={person.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
