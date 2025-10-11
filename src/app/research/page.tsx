import Image from "next/image";

import ResearchGrid from "@/components/research/ResearchGrid";
import { RESEARCH_AREAS } from "@/utils/data";

export default function ResearchPage() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-cyan-400 text-sm font-mono">Research Areas</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              Research <span className="gradient-text">Areas</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our main research directions are related to applications in
              multimedia, including Computer Vision, Interactive Technology,
              Multimedia Content Analysis, Automated Optical Inspection and
              Machine Learning. Since we focus on innovative methodical designs
              which integrates interdisciplinary technologies, our team has close
              cooperation with various industries. Combining theory and practicum,
              our training provides ample opportunity for students career and
              research development.
            </p>
          </div>
        </div>

        {/* Research Areas Grid */}
        <div className="mb-20">
          <ResearchGrid researchAreas={RESEARCH_AREAS} />
        </div>

        {/* Research Facilities */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
              Research <span className="gradient-text">Facilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our lab is equipped with state-of-the-art computing resources
              including high-performance GPU clusters, specialized imaging
              equipment, and dedicated research spaces.
            </p>
          </div>

          <div className="card">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative w-full h-64 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/30 backdrop-blur-sm overflow-hidden">
                  <Image
                    fill
                    src="/images/research/1.png"
                    alt="Research Lab"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <div className="relative w-full h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm overflow-hidden">
                  <Image
                    fill
                    src="/images/research/2.png"
                    alt="Research Equipment"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Highlights */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-orbitron">
              Research <span className="gradient-text">Highlights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our state-of-the-art facilities and resources that enable cutting-edge research
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center group hover:scale-105 transition-all duration-300 slide-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors font-orbitron">GPU Computing</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                High-performance GPU clusters for deep learning and computer vision research
              </p>
            </div>

            <div className="card text-center group hover:scale-105 transition-all duration-300 slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors font-orbitron">Imaging Equipment</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Specialized cameras and sensors for computer vision experiments
              </p>
            </div>

            <div className="card text-center group hover:scale-105 transition-all duration-300 slide-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors font-orbitron">Research Spaces</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Dedicated collaborative spaces for research and development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
