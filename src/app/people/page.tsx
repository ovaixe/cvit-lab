import PeopleGrid from "@/components/people/PeopleGrid";
import PersonCard from "@/components/people/PersonCard";
import { PEOPLE } from "@/utils/data";

export default function PeoplePage() {
  const director = PEOPLE.filter((p) => p.category === "director")[0];
  const faculty = PEOPLE.filter((p) => p.category === "faculty");
  const phdStudents = PEOPLE.filter((p) => p.category === "phd");
  const msStudents = PEOPLE.filter((p) => p.category === "ms");
  const phdGrads = PEOPLE.filter((p) => p.category === "phdg");
  const msGrads = PEOPLE.filter((p) => p.category === "msg");

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the researchers and students driving innovation at CVIT Lab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <PersonCard person={director} variant="director" />
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
        </div>

        <PeopleGrid title="Faculty" people={faculty} />
        <PeopleGrid title="PhD Students" people={phdStudents} />
        <PeopleGrid title="MS Students" people={msStudents} />
        <PeopleGrid title="PHD Graduates" people={phdGrads} />
        <PeopleGrid title="MS Graduates" people={msGrads} />

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
          <p className="mb-4">
            We&apos;re always looking for talented researchers to join our lab.
            If you&apos;re passionate about computer vision and machine
            learning, consider applying to our program.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700"
          >
            Contact Us About Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
