import PersonCard from "./PersonCard";
import { Person } from "@/types/types";

type PeopleGridProps = {
  title: string;
  people: Person[];
};

export default function PeopleGrid({ title, people }: PeopleGridProps) {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {people.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
            variant={person.category}
          />
        ))}
      </div>
    </div>
  );
}
