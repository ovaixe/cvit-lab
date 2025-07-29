import PeopleGrid from "@/components/people/PeopleGrid";
import { PEOPLE } from "@/utils/data";

export default function PeoplePage() {
  const director = PEOPLE.filter((p) => p.category === "director");
  const faculty = PEOPLE.filter((p) => p.category === "faculty");
  const phdStudents = PEOPLE.filter((p) => p.category === "phd");
  const msStudents = PEOPLE.filter((p) => p.category === "ms");

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the researchers and students driving innovation at CVIT Lab
          </p>
        </div>

        <PeopleGrid title="Director" people={director} />
        <PeopleGrid title="Faculty" people={faculty} />
        <PeopleGrid title="PhD Students" people={phdStudents} />
        <PeopleGrid title="MS Students" people={msStudents} />

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
