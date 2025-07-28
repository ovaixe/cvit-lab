import PublicationList from "@/components/publicatioins/PublicationList";
import { PUBLICATIONS } from "@/utils/data";

export default function PublicationsPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Publications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest research contributions and scholarly work
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
            All Publications
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">
            Recent
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">
            By Year
          </button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50">
            By Topic
          </button>
        </div>

        <PublicationList publications={PUBLICATIONS} />

        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Publication Archives</h2>
          <p className="mb-6">
            Browse our complete collection of publications dating back to the
            establishment of our lab.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015].map(
              (year) => (
                <a
                  key={year}
                  href="#"
                  className="bg-blue-50 text-blue-700 text-center py-3 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                >
                  {year}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
