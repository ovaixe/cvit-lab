import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          <div className="relative mx-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500 rounded-2xl transform rotate-3 -z-10"></div>

            <div className="relative w-[300px] md:w-[600px] h-[300px] md:h-[600px] overflow-hidden">
              {/* Placeholder for lab image */}
              <Image
                src="/images/robot.png"
                alt="Robot"
                fill
                className="object-contain"
              />
              <div className="absolute top-7 left-19 md:top-18 md:left-41 w-5 md:w-6 h-5 md:h-6 bg-yellow-300 rounded-full animate-bounce"></div>
            </div>
          </div>

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
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-blue-200 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-40 right-5 w-10 h-10 bg-yellow-200 rounded-full animate-pulse opacity-50"></div>

      <div className="absolute top-20 left-10 w-16 h-16 bg-yellow-200 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-40 left-5 w-10 h-10 bg-blue-200 rounded-full animate-pulse opacity-50"></div>
    </section>
  );
}
