import Image from "next/image";

import Card from "@/components/about/Card";
import ResearchCard from "@/components/research/ResearchCard";
import { RESEARCH_AREAS } from "@/utils/data";

export default function AboutPage() {
  const EXPERIENCES = [
    {
      image: "/images/about/e1.png",
      title: "This Person Does Not Exist",
      desc: 'What would a person look like to a computer? Artists are able to draw fictional characters, so does computers can generate realistic people who do not exist. This website generates image of a real person based on what it knows about human features. Some of the images might feel "strange" due to some of the data used for learning, which is why you could get something like this, this, or even scary image like this. An image will be generated once you visit the website. Simply refresh it to generate another image. You can even generate artwork, cat, horse and even chemicals as well.',
    },
    {
      image: "/images/about/e2.png",
      title: "Face Generator",
      desc: "Similar to the aforementioned website, the person on the left does not exist either, but you can decide certain features for the computer to generate. Aside from sex, head pose and age, you can select what emotion the person will show and, their skin tone, hair length and colors etc.",
    },
    {
      image: "/images/about/e3.png",
      title: "Anonymizer",
      desc: "Every person has their own facial features, and might change as time goes by. Anonymizer analyzes the facial features from an image and generates multiple people who do not exists, has certain resemblance of the uploaded image. This is particularly useful to upload image on certain website profiles to keep your true face private. Note that the images generated are not meant to be close to the uploaded photo, but to combine and mixed the features instead. The portraits on the left were generated based on this image.",
    },
    {
      image: "/images/about/e4.png",
      title: "Remini for Android and iOS",
      desc: "Most people are familiar with Photoshop when thinking about editing photos. But if the image has low resolutions, it will be difficult to polish the photo. Remini can enhance photos with low resolutions using AI and Computer Vision. After learning from countless photo images, this application will enlarge the image and add realistic details. Since the data using for training this application are human photos, Remini will not be able to produce the similar quality if photos containing animals are given as input. Here is an example. If you look closely at the second picture on the second row, the frame on the man's right has been slightly distorted. As the application keeps training on more photos, it might become more efficient in the future, producing more stunning photos. So go ahead and have some fun with the app!",
    },
  ];

  const INTRO = [
    {
      title: "Everything You Ever Wanted To Know About Computer Vision.",
      link: "https://towardsdatascience.com/everything-you-ever-wanted-to-know-about-computer-vision-heres-a-look-why-it-s-so-awesome-e8a58dfb641e",
    },
    {
      title: "An Introductory Guide to Computer Vision.",
      link: "https://tryolabs.com/resources/introductory-guide-computer-vision/",
    },
    {
      title: "Computer Vision Applications - Shopping, Driving and More.",
      link: "https://emerj.com/ai-sector-overviews/computer-vision-applications-shopping-driving-and-more/",
    },
    {
      title: "How Computer Vision Applications are Changing the World.",
      link: "https://techsee.me/blog/computer-vision-applications/",
    },
    {
      title:
        "Computer Vision Applications Examples Across Different Industries.",
      link: "https://indatalabs.com/blog/applications-computer-vision-across-industries",
    },
  ];

  const TUT = [
    {
      title: "Start Here with Computer Vision, Deep Learning, and OpenCV.",
      link: "https://www.pyimagesearch.com/start-here/",
    },
    {
      title: "Build convolutional neural networks with TensorFlow and Keras.",
      link: "https://www.kaggle.com/learn/computer-vision",
    },
    {
      title: "Python Computer Vision Tutorials.",
      link: "https://realpython.com/tutorials/computer-vision/",
    },
    {
      title: "AI with Python - Computer Vision.",
      link: "https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_computer_vision.htm",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-cyan-400 text-sm font-mono">About CVIT Lab</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              About <span className="gradient-text">CVIT Lab</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-1">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative w-full h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden">
                  <Image
                    fill
                    src={"/images/about.avif"}
                    alt="CVIT Lab"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed">
                  The Computer Vision and Interactive Technology (CVIT) Lab is one
                  of the{" "}
                  <a
                    href="https://www.me.ncu.edu.tw/en/"
                    target="_blank"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/50 hover:decoration-cyan-300"
                  >
                    Department of Mechanical Engineering
                  </a>{" "}
                  laboratories in{" "}
                  <a
                    href="https://www.ncu.edu.tw/en/index.html"
                    target="_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline decoration-blue-400/50 hover:decoration-blue-300"
                  >
                    National Central University (NCU)
                  </a>
                  , Taiwan.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our Lab performs research on image, video and audio
                  processing in the fields of Deep Learning, object recognition,
                  multimedia processing and computer vision applications. We are
                  passionate about new information technology and multimedia for
                  many fields and applications.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  With sufficient facilities, our lab
                  performs research on image and video processing for computer
                  vision development. The research and study group are led by Prof.
                  Chih-Yang Lin.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Computer Vision Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
              Experience <span className="gradient-text">Computer Vision</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              The effort required to build and train a computer to see and
              accomplish tasks can be arduous, and the applications available
              for the public to experience might be limited. Below are some of
              the examples which anyone can visit and see what sort of outcome
              computers usually can generate.
            </p>
          </div>

          <div className="space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.image} className="slide-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card
                  image={exp.image}
                  title={exp.title}
                  desc={exp.desc}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Research Focus Areas */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
              Research <span className="gradient-text">Focus Areas</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {RESEARCH_AREAS.map((research, index) => (
              <div key={research.id} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ResearchCard
                  title={research.title}
                  description={research.description}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Further Reading Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
              Further <span className="gradient-text">Reading</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Computer Vision has come a long way, but there are many issues yet
              to be solved. It can be ubiquitous in different fields of
              research, but their problems can be summarized into accuracy and
              efficiency. Nowadays, Computer Vision has been applied in
              surveillance system, agricultural management, medical fields and
              others, which shows the flexibility of this technology and its
              ability to collaborate with various fields.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Introductions */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white font-orbitron">Introductions</h3>
              </div>

              <ul className="space-y-4">
                {INTRO.map((int, index) => (
                  <li key={int.link} className="group">
                    <a 
                      href={int.link} 
                      target="_blank" 
                      className="block p-4 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group-hover:scale-105"
                    >
                      <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {int.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tutorials */}
            <div className="card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white font-orbitron">Tutorials</h3>
              </div>

              <ul className="space-y-4">
                {TUT.map((tut, index) => (
                  <li key={tut.link} className="group">
                    <a 
                      href={tut.link} 
                      target="_blank" 
                      className="block p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group-hover:scale-105"
                    >
                      <span className="text-purple-400 group-hover:text-purple-300 transition-colors">
                        {tut.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Lab Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">Collaborations</h3>
            <p className="text-gray-300">
              We partner with leading academic institutions and industry
              organizations worldwide to advance research in visual information
              technology.
            </p>
          </div>

          <div className="card text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">Facilities</h3>
            <p className="text-gray-300">
              Our state-of-the-art lab features high-performance computing
              resources, specialized imaging equipment, and dedicated research
              spaces.
            </p>
          </div>

          <div className="card text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">Education</h3>
            <p className="text-gray-300">
              We train the next generation of researchers through our graduate
              programs, workshops, and internship opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
