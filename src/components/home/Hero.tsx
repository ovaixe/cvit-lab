import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to CVIT Lab
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Computer Vision and Interactive Technology
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Research
              </Link>
              <Link
                href="/contact"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-2xl transform rotate-3 -z-10"></div>
            <div className="relative bg-gray-200 border-2 border-dashed rounded-2xl w-full h-80 md:h-96 overflow-hidden">
              {/* Placeholder for lab image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Lab Photo
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 w-24 h-24 rounded-full z-10 flex items-center justify-center text-white font-bold shadow-lg">
              Since 1999
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-40 left-5 w-10 h-10 bg-yellow-200 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-50"></div>
    </section>
  );
}
