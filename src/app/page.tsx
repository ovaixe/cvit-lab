import Hero from "@/components/home/Hero";
import ResearchCard from "@/components/research/ResearchCard";
import { RESEARCH_AREAS, NEWS_ITEMS } from "@/utils/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Research Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Research Areas</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our cutting-edge research in computer vision and machine
              learning
            </p>
            <a
              href="/research"
              className="inline-block mt-6 text-blue-600 font-medium hover:underline"
            >
              View all research areas →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH_AREAS.slice(0, 2).map((research) => (
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 bg-gray-50  mb-12 space-y-3">
        <h2 className="text-3xl font-bold text-center text-gray-900">News</h2>

        <ul className="list-disc mx-auto w-fit">
          {NEWS_ITEMS.map(
            (item, i) =>
              i < 5 && (
                <li key={item.id} className="text-lg text-gray-700 mb-2">
                  {item.description}
                </li>
              )
          )}
        </ul>

        <div className="text-center">
          <Link href={"/news"} className="bg-gray-200 border-gray-300 border-2 text-gray-500 font-semibold p-2 rounded-md">
            View More
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Publications</h3>
              <p className="mb-6">Explore our latest research publications</p>
              <a
                href="/publications"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
              >
                View Publications
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Our Team</h3>
              <p className="mb-6">Meet our faculty and researchers</p>
              <a
                href="/people"
                className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-900"
              >
                View Team
              </a>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="mb-6">Get in touch with our research team</p>
              <a
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
