"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></span>
                <span className="text-cyan-400 text-sm font-mono">AI Research Laboratory</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text font-orbitron">CVIT</span>
                <br />
                <span className="text-white">Laboratory</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                Pioneering the future of{" "}
                <span className="text-cyan-400 font-semibold">Computer Vision</span>{" "}
                and{" "}
                <span className="text-blue-400 font-semibold">Artificial Intelligence</span>{" "}
                at National Central University
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/research"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Explore Research</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              
              <Link
                href="/contact"
                className="group px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Contact Us</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 font-orbitron">100+</div>
                <div className="text-sm text-gray-400">Publications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 font-orbitron">15+</div>
                <div className="text-sm text-gray-400">Years Research</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 font-orbitron">50+</div>
                <div className="text-sm text-gray-400">Students</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Robot Visualization */}
          <div className={`relative ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <div className="relative w-full h-96 lg:h-[600px]">
              {/* Main Robot Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse"></div>
                  
                  {/* Robot Image */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/robot.png"
                      alt="AI Robot"
                      fill
                      className="object-contain filter drop-shadow-2xl animate-float"
                    />
                    
                    {/* Floating Elements around Robot */}
                    <div className="absolute top-8 left-8 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-16 right-12 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-16 left-12 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-8 right-8 w-4 h-4 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                  
                  {/* Rotating Ring */}
                  <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                  <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                </div>
              </div>
              
              {/* Data Streams */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-20 bg-gradient-to-b from-cyan-400 to-transparent opacity-60 animate-pulse"
                    style={{
                      left: `${20 + i * 10}%`,
                      top: `${Math.random() * 80}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
