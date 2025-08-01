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
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 md:grid-cols-3">
          <div className="w-full h-96 relative">
            <Image
              fill
              src={"/images/about.avif"}
              alt="robot"
              className="object-contain"
            />
          </div>

          <div className="text-center col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About CVIT Lab
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              The Computer Vision and Interactive Technology (CVIT) Lab is one
              of the{" "}
              <a
                href="https://www.me.ncu.edu.tw/en/"
                target="_blank"
                className="text-primary underline"
              >
                Department of Mechanical Engineering
              </a>{" "}
              laboratories in{" "}
              <a
                href="https://www.ncu.edu.tw/en/index.html"
                target="_blank"
                className="text-primary underline"
              >
                National Central University (NCU)
              </a>
              , Taiwan. Our Lab performs research on image, video and audio
              processing in the fields of Deep Learning, object recognition,
              multimedia processing and computer vision applications. We are
              passionate about new information technology and multimedia for
              many fields and applications. With sufficient facilities, our lab
              performs research on image and video processing for computer
              vision development. The research and study group are led by Prof.
              Chih-Yang Lin.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            About Computer Vision
          </h2>

          <div className="space-y-15 text-xl text-gray-700">
            <p>
              With the advancement of modern technology, Artificial Intelligence
              has become a vital part in every major industry. Processing and
              dealing with a huge amount of data in a short amount of time can
              be done with AI technology, which is an incredible feat that we
              could not imagine decades ago.
            </p>
            <p>
              By learning how we solve problems, programs and machines can do
              tasks without constant monitoring or adjustment. For example, we
              see the world through our eyes. With our complex optic nerve, our
              brain can obtain the lights and visualize the world so we know
              what we are looking at. But does computer or machine view the
              world the same as we do?
            </p>
            <Image
              src={"/images/about/dog.png"}
              alt="Computer Vision"
              width={1000}
              height={500}
              className="rounded-md aspect-auto mx-auto"
            />
            <p>
              By learning how we solve problems, programs and machines can do
              tasks without constant monitoring or adjustment. For example, we
              see the world through our eyes. With our complex optic nerve, our
              brain can obtain the lights and visualize the world so we know
              what we are looking at. But does computer or machine view the
              world the same as we do
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            What is Computer Vision?
          </h2>

          <div className="space-y-15 text-xl text-gray-700">
            <p>
              Basically, Computer Vision deals with how computers understand and
              do tasks from images and videos. It should be noted that Computer
              Vision is not considered a branch under AI. However, they are
              closely related to each other since Computer Vision involves
              multiple AI-related techniques.
            </p>

            <p>
              We know that computer do not get tired or bored for doing tasks
              for weeks and months (if properly maintained), and can detect the
              slightest difference, just like the color #b4fac8 and #b4fac9. But
              in order to let computer understands our goal, it has to learn how
              we interpret images.
            </p>

            <div className="relative mx-auto my-3 w-[90%] h-50 md:h-96 aspect-auto">
              <Image
                src={"/images/about/ele.jpg"}
                alt="Computer Vision"
                fill
                className="rounded-md"
              />
            </div>

            <p>
              There are many things which can be distinguished visually by
              describing their colors and shape, such as identifying an apple
              from a banana. But if someone were to tell a computer that a
              banana is “a fruit that is curved and is either yellow or green”
              and ask the computer to collect pictures of bananas on the
              internet, then it might bring in some interesting results like
              below:
            </p>

            <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
              <Image
                src={"/images/about/f1.jpg"}
                alt="Computer Vision"
                width={250}
                height={200}
                className="rounded-md"
              />
              <Image
                src={"/images/about/f2.jpg"}
                alt="Computer Vision"
                width={250}
                height={200}
                className="rounded-md"
              />
              <Image
                src={"/images/about/f3.jpg"}
                alt="Computer Vision"
                width={250}
                height={200}
                className="rounded-md"
              />
              <Image
                src={"/images/about/f4.jpg"}
                alt="Computer Vision"
                width={250}
                height={200}
                className="rounded-md"
              />
            </div>

            <p>
              The problem with teaching computer how to identify image is that
              they lack the learning process like us. Since the time of our
              birth, we have been observing our surroundings, learning and
              acquire knowledge as we grow up. When we receive instructions, the
              complex schema, or knowledge in our mind helps us understand and
              infer meaning through simple explanation and definitions. Now,
              imagine you can only use visual features to teach a computer,
              which in a sense know nothing at all. How long would it take to
              come up with definitions and exceptions which can exactly pinpoint
              the images you are looking for, but at the same time, comes with
              different colors and shapes? How difficult would that be? This is
              why we need another tactic to help computer learn.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            How do computers learn to see?
          </h2>

          <div className="space-y-15 text-xl text-gray-700">
            <p>
              Instead of giving complicated definitions with caveats, we can
              just teach computer by telling them the answer. For instance, we
              can show provide many (As in thousands or more) pictures of a
              banana to let the computer figure out the features in these
              pictures. If something is not a banana but has very similar colors
              and shapes, we will tell the computer that this is incorrect. The
              more data the computer can learn from, the more accurate it will
              be. Although there are various ways to train the computer which
              involves complex math and algorithm, this is a very simplified way
              to imagine the process. A better representation of this training
              process can be seen{" "}
              <a
                href="https://www.youtube.com/embed/R9OHn5ZF4Uo?start=108&end=359"
                target="_blank"
                className="text-primary underline"
              >
                here.
              </a>
            </p>

            <p>
              But there are other issues which are sometimes trivial to us, but
              challenging for computer to recognize. Different lighting,
              combination of colors, obtrusion could affect how a computer
              process images of videos. In reality, computer has to analyze data
              which contain other elements which are irrelevant, such as trying
              to detect people who are wearing mask in a crowd. The complex
              issues which the computer has to consider are usually simplified
              by algorithm formulated by researchers, so that they can let the
              computer do specific tasks based on the kind of data it would
              receive. In a sense, creating a computer to have the mind and
              vision of a human might be an impossible task, but{" "}
              <span className="text-primary font-semibold">
                when its purpose is limited to complete certain tasks, it can
                achieve great things.
              </span>
            </p>
            <p>
              Nowadays, the use of Computer Vision is prevalent not only in the
              industry, but in our lives as well. In the next section, we will
              discuss the common functions used in Computer Vision.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Applications of Computer Vision
          </h2>

          <div className="space-y-15 text-xl text-gray-700">
            <p>
              The main applications of Computer Vision is to assist in decision
              making based on what it `sees`. These functions are detection,
              recognition, tracking, counting, and etc. One or more of these
              functions are used together depending on the application, which is
              why most AI technologies do not solely use Computer Vision, but
              incorporate it with other functions to make a specific functional
              system. To further elaborate the issues which a computer might
              face, we will demonstrate using Pedestrian Detection as an
              example.
            </p>

            <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
              <div className="space-y-3 text-center">
                <Image
                  src={"/images/about/p1.jpg"}
                  alt="Computer Vision"
                  width={250}
                  height={200}
                  className="rounded-md"
                />
                <a
                  href="https://medium.com/computer-vision-technology-drives-the-future/are-there-any-resource-efficient-image-recognition-systems-96a0124e46b8"
                  target="_blank"
                  className="text-primary font-semibold underline"
                >
                  Detection
                </a>
              </div>

              <div className="space-y-3 text-center">
                <Image
                  src={"/images/about/p2.png"}
                  alt="Computer Vision"
                  width={250}
                  height={200}
                  className="rounded-md"
                />

                <a
                  href="https://towardsdatascience.com/face-recognition-for-beginners-a7a9bd5eb5c2"
                  target="_blank"
                  className="text-primary font-semibold underline"
                >
                  Recogition
                </a>
              </div>

              <div className="space-y-3 text-center">
                <Image
                  src={"/images/about/p3.gif"}
                  alt="Computer Vision"
                  width={250}
                  height={200}
                  className="rounded-md"
                />

                <a
                  href=""
                  target="_blank"
                  className="text-primary font-semibold underline pointer-events-none"
                >
                  Tracking
                </a>
              </div>

              <div className="space-y-3 text-center">
                <Image
                  src={"/images/about/p4.jpg"}
                  alt="Computer Vision"
                  width={250}
                  height={200}
                  className="rounded-md"
                />

                <a
                  href="https://www.fiverr.com/categories/data/data-science"
                  target="_blank"
                  className="text-primary font-semibold underline"
                >
                  Counting
                </a>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 justify-items-center">
              <p>
                Pedestrian Detection can be used for people counting or other
                useful applications. One of the main problems is occlusion, in
                which a target is being blocked by other objects that could
                affect the result. It is a challenge for various functions like
                urban autonomous driving and surveillance systems. One way to
                solve this problem, for example, is to limit the detection area
                using the head-shoulder feature of pedestrians. It is more
                stable and less likely to be occluded than other areas of the
                body.
              </p>

              <Image
                src={"/images/about/p5.gif"}
                alt="CVIT"
                width={400}
                height={300}
                className="rounded-md"
              />
            </div>

            <p>
              Through Computer Vision, image can be edited to facilitate further
              analysis by decreasing obstructive information and increasing
              accuracy. Instead of relying on manually editing the image, such
              as adjusting brightness, removing noise and etc., the computer can
              do these tasks automatically through specially designed algorithm.
              Below is an example of how a computer manages to turn a rainy
              image into a clear night sky.
            </p>

            <div className="grid gap-4 md:grid-cols-2 justify-items-center">
              <Image
                src={"/images/about/p6.png"}
                alt="CVIT"
                width={400}
                height={300}
                className="rounded-md"
              />

              <p>
                Various weather conditions, such as rain, haze, or snow, can
                degrade visual quality in images, which may significantly
                degrade the performance of related applications such as
                self-driving cars. Here, the rain has occluded much of the items
                in the image, and it would take a long time to remove them
                manually, let alone doing this on more than one image. This
                algorithm is designed to remove heavy rain. Even the rain drops
                which appeared in small subtle areas can be removed.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Experience Computer Vision
          </h2>

          <div className="space-y-15 text-xl text-gray-700">
            <p>
              The effort required to build and train a computer to see and
              accomplish tasks can be arduous, and the applications available
              for the public to experience might be limited. Below are some of
              the examples which anyone can visit and see what sort of outcome
              computers usually can generate.
            </p>

            {EXPERIENCES.map((exp) => (
              <Card
                key={exp.image}
                image={exp.image}
                title={exp.title}
                desc={exp.desc}
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Conclusions and Further Reading
          </h2>

          <div className="space-y-15 text-xl text-gray-700">
            <p>
              Computer Vision has come a long way, but there are many issues yet
              to be solved. It can be ubiquitous in different fields of
              research, but their problems can be summarized into accuracy and
              efficiency. Nowadays, Computer Vision has been applied in
              surveillance system, agricultural management, medical fields and
              others, which shows the flexibility of this technology and its
              ability to collaborate with various fields. There are many aspects
              of Computer Vision, such as algorithm which are not covered in
              this article, which is why the instinctive goal of Computer Vision
              should not be considered as easy at all. To learn more about
              Computer Vision, feel free to visit the following links:
            </p>

            <div className="space-y-3">
              <h2 className="text-primary font-semibold">Introductions</h2>

              <ul className="space-y-1 list-disc">
                {INTRO.map((int) => (
                  <li key={int.link}>
                    <a href={int.link} target="_blank" className="underline">
                      {int.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-primary font-semibold">Tutorials</h2>

              <ul className="space-y-1 list-disc">
                {TUT.map((int) => (
                  <li key={int.link}>
                    <a href={int.link} target="_blank" className="underline">
                      {int.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6">Research Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESEARCH_AREAS.map((research) => (
              <ResearchCard
                key={research.id}
                title={research.title}
                description={research.description}
              />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Collaborations</h3>
            <p className="text-gray-600">
              We partner with leading academic institutions and industry
              organizations worldwide to advance research in visual information
              technology.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Facilities</h3>
            <p className="text-gray-600">
              Our state-of-the-art lab features high-performance computing
              resources, specialized imaging equipment, and dedicated research
              spaces.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <svg
                className="h-8 w-8 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Education</h3>
            <p className="text-gray-600">
              We train the next generation of researchers through our graduate
              programs, workshops, and internship opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
