import { Person } from "@/types/types";
import Image from "next/image";

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
            <div className="w-40 h-40 mx-auto mb-4 relative">
              <Image
                fill
                src={`/images/team/${person.id}.avif`}
                alt="img"
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">{person.name}</h3>
            <p className="text-gray-600 text-sm">{person.role}</p>
            <a
              href={`mailto:${person.email}`}
              className="text-blue-600 text-sm mt-2 block hover:underline"
            >
              {person.email}
            </a>

            <div className="text-start text-gray-600 mt-2">
              {person?.description}
            </div>
          </div>
        ))}

        {title === "Director" && (
          <div className="space-y-3">
            <h2 className="font-bold md:text-lg">ADMINISTRATIVE EXPERIENCE</h2>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              <li>
                Dean of International Academy, Yuan Ze University, Taoyuan,
                Taiwan
              </li>
              <li>
                Vice Director of AI Center, Yuan Ze University, Taoyuan, Taiwan
              </li>
              <li>
                Senior Liaison of GAO, Yuan Ze University, Taoyuan, Taiwan
              </li>
              <li>
                Chief of Global Affairs Office, Yuan Ze University, Taoyuan,
                Taiwan
              </li>
              <li>
                Deputy Chief of Chief of Global Affairs Office, Yuan Ze
                University, Taoyuan, Taiwan
              </li>
              <li>
                Chair, Department of Bioinformatics and Medical Engineering,
                Asia University, Taichung, Taiwan
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
