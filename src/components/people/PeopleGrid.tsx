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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {people.map((person) => (
          <div
            key={person.id}
            className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition-shadow"
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 mx-auto mb-4" />
            <h3 className="font-bold text-lg">{person.name}</h3>
            <p className="text-gray-600 text-sm">{person.role}</p>
            <a
              href={`mailto:${person.email}`}
              className="text-blue-600 text-sm mt-2 block hover:underline"
            >
              {person.email}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
