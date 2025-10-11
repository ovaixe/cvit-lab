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
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-cyan-400 text-sm font-mono">Our Team</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              Our <span className="gradient-text">Team</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Meet the researchers and students driving innovation at CVIT Lab
            </p>
          </div>
        </div>

        {/* Director Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="slide-in-left">
              <PersonCard person={director} variant="director" />
            </div>
            
            <div className="slide-in-right">
              <div className="card">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white font-orbitron">Administrative Experience</h2>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">
                      Dean of International Academy, Yuan Ze University, Taoyuan, Taiwan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">
                      Vice Director of AI Center, Yuan Ze University, Taoyuan, Taiwan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">
                      Senior Liaison of GAO, Yuan Ze University, Taoyuan, Taiwan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">
                      Chief of Global Affairs Office, Yuan Ze University, Taoyuan, Taiwan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">
                      Deputy Chief of Chief of Global Affairs Office, Yuan Ze University, Taoyuan, Taiwan
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300">
                      Chair, Department of Bioinformatics and Medical Engineering, Asia University, Taichung, Taiwan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Team Sections */}
        <div className="space-y-20">
          <div className="slide-in-up">
            <PeopleGrid title="Faculty" people={faculty} />
          </div>
          
          <div className="slide-in-up">
            <PeopleGrid title="PhD Students" people={phdStudents} />
          </div>
          
          <div className="slide-in-up">
            <PeopleGrid title="MS Students" people={msStudents} />
          </div>
          
          <div className="slide-in-up">
            <PeopleGrid title="PhD Graduates" people={phdGrads} />
          </div>
          
          <div className="slide-in-up">
            <PeopleGrid title="MS Graduates" people={msGrads} />
          </div>
        </div>

        {/* Join Our Team Section */}
        <div className="mt-20">
          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Join Our Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We&apos;re always looking for talented researchers to join our lab.
              If you&apos;re passionate about computer vision and machine
              learning, consider applying to our program.
            </p>
            
            <a
              href="/contact"
              className="btn-primary group"
            >
              <span>Contact Us About Opportunities</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
