import NewsItem from "@/components/news/NewsItem";
import Image from "next/image";

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Yuan Ze Studies Gold Award 2024",
      date: "June 15, 2024",
      description:
        "Congratulations to Sang Le for achieving the Yuan Ze Studies Gold Award 2024 as the top-ranked student for the second year in a row.",
      category: "Awards",
    },
    {
      id: 2,
      title: "University of Illinois at Urbana-Champaign, USA",
      date: "May 3, 2024",
      description:
        "Congratulations to Chia-Chun Hsiao for being admitted to the Electrical and Computer Engineering program at the University of Illinois at Urbana-Champaign, USA, 2024.",
      category: "Addmissions",
    },
    {
      id: 3,
      title: "University of Southern California, USA",
      date: "April 20, 2024",
      description:
        "Congratulations to Yu-Wei Chen for being admitted to the Electrical and Computer Engineering program at the University of Southern California, USA, 2024.",
      category: "Addmissions",
    },
    {
      id: 4,
      title:
        "Best Paper Award from Sixth International Symposium on Computer, Consumer and Control (IS3C)",
      date: "March 12, 2023",
      description:
        "Congratulations to Junaidul Islam, Elvin Nur Furqon, Isack Farady received Best Paper Award from Sixth International Symposium on Computer, Consumer and Control (IS3C), 2023",
      category: "Awards",
    },
    {
      id: 5,
      title:
        "Best Paper Award from IEEE 26th International Computer Science and Engineering Conference (ICSEC)",
      date: "March 12, 2022",
      description:
        "Congratulations to Isack Farady received Best Paper Award from IEEE 26th International Computer Science and Engineering Conference (ICSEC) 2022",
      category: "Awards",
    },
    {
      id: 6,
      title: "Research Award!",
      date: "March 12, 2022",
      description:
        "Congratulations to Professor Chih-Yang Lin for receiving the 2022 YZU Outstanding Research Award!",
      category: "Awards",
    },
    {
      id: 7,
      title: "Columbia University and University of Washington, USA",
      date: "March 12, 2022",
      description:
        "Congratulations to Chang, Cheng-Chun (張程鈞) for being admitted to Columbia University and University of Washington, USA.",
      category: "Addmissions",
    },
    {
      id: 8,
      title: "IET Fellow",
      date: "March 12, 2022",
      description:
        "Congratulations to Professor Chih-Yang Lin for receiving an IET Fellow, 2022.",
      category: "Awards",
    },
    {
      id: 9,
      title: "Queensland University, Australia",
      date: "March 12, 2022",
      description:
        "Congratulations to Kao, Wei-Cheng (高偉成) for being admitted to Queensland University, Australia.",
      category: "Addmissions",
    },
    {
      id: 10,
      title: "2021 CECE_YZU Outstanding Research Award!",
      date: "March 12, 2021",
      description:
        "Congratulations to Professor Chih-Yang Lin for receiving the 2021 CECE_YZU Outstanding Research Award!",
      category: "Awards",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-fit pt-20 bg-secondary rounded-xl shadow-3xl drop-shadow-2xl flex flex-col items-center justify-center gap-2 mb-12">
          <div className="bg-[#F8C302] relative w-[80%] md:w-96 h-48 rounded-xl shadow-amber-700 shadow-2xl">
            <div className="relative -top-12 left-[50%] translate-x-[-50%] w-70 h-52">
              <Image
                src={"/images/news.avif"}
                alt="New"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-4xl font-bold text-primary mb-4">NEWS</h1>
            <p className="text-xl text-primary max-w-3xl mx-auto">
              Stay updated with the latest happenings at CVIT Lab
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
        </div> */}

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
        </div>
      </div>
    </section>
  );
}
