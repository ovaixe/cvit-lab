import NewsItem from "@/components/news/NewsItem";

export default function NewsPage() {
  // Sample news data
  const newsItems = [
    {
      id: 1,
      title: "CVIT Lab wins Best Paper Award at CVPR 2023",
      date: "June 15, 2023",
      description:
        "Our research on scene understanding received the Best Paper Award at the prestigious CVPR conference.",
      category: "Awards",
    },
    {
      id: 2,
      title: "New research collaboration with Google AI",
      date: "May 3, 2023",
      description:
        "We're excited to announce a new partnership with Google AI to advance research in visual question answering.",
      category: "Partnerships",
    },
    {
      id: 3,
      title: "Dr. Sharma joins as Postdoctoral Researcher",
      date: "April 20, 2023",
      description:
        "We welcome Dr. Anjali Sharma who joins our lab to work on medical image analysis projects.",
      category: "People",
    },
    {
      id: 4,
      title: "Lab hosts International Workshop on Computer Vision",
      date: "March 12, 2023",
      description:
        "We successfully hosted over 100 researchers at our annual workshop on computer vision technologies.",
      category: "Events",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            News & Events
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings at CVIT Lab
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary text-white rounded-xl p-6 md:col-span-2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mb-4" />
            <span className="inline-block bg-blue-500 text-sm px-3 py-1 rounded-full mb-2">
              Featured
            </span>
            <h2 className="text-2xl font-bold mb-2">
              CVIT Annual Symposium 2023
            </h2>
            <p className="mb-4">
              Join us for our flagship event showcasing cutting-edge research in
              visual information technology.
            </p>
            <p className="font-bold">October 12-14, 2023 | IIIT Hyderabad</p>
            <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-lg font-medium hover:bg-blue-50">
              Register Now
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-4">
              Subscribe to our Newsletter
            </h2>
            <p className="text-gray-600 mb-4">
              Get the latest updates directly in your inbox
            </p>
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <h3 className="font-bold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Latest News</h2>
          <div className="space-y-6">
            {newsItems.map((item) => (
              <NewsItem
                key={item.id}
                title={item.title}
                date={item.date}
                description={item.description}
                category={item.category}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg font-medium hover:bg-gray-50">
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
