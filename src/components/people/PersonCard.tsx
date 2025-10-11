"use client";

import { useState } from "react";

type PersonCardProps = {
  person: {
    id: number;
    name: string;
    role: string;
    email: string;
    description?: string;
    research?: string;
    current?: string;
  };
  variant: "director" | "faculty" | "phd" | "ms" | "phdg" | "msg" | "alumni";
};

export default function PersonCard({ person, variant }: PersonCardProps) {
  const [imageError, setImageError] = useState(false);
  
  const isFaculty = () => {
    return variant === "faculty" || variant === "director" || variant === "phd";
  };

  const isPhD = () => {
    return variant === "phd";
  };

  const isDirector = () => {
    return variant === "director";
  };

  const getVariantColor = () => {
    switch (variant) {
      case "director":
        return "from-purple-500 to-pink-500";
      case "faculty":
        return "from-cyan-500 to-blue-500";
      case "phd":
        return "from-green-500 to-teal-500";
      case "ms":
        return "from-orange-500 to-red-500";
      case "phdg":
      case "msg":
      case "alumni":
        return "from-gray-500 to-gray-600";
      default:
        return "from-cyan-500 to-blue-500";
    }
  };

  const getVariantIcon = () => {
    switch (variant) {
      case "director":
        return (
          <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case "faculty":
        return (
          <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        );
      case "phd":
        return (
          <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case "ms":
        return (
          <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div
      className={`card hover:scale-105 transition-all duration-300 group ${
        isFaculty() ? "max-w-2xl w-full" : "h-full min-w-60"
      }`}
    >
      <div
        className={`flex ${isFaculty() ? "flex-col md:flex-row" : "flex-col"}`}
      >
        {/* Image */}
        <div
          className={`relative group/image ${
            isFaculty() ? "w-full h-96 md:w-60 md:h-60 flex-shrink-0" : "w-full h-48"
          }`}
        >
          {/* Special glow effect for faculty and PhD students */}
          <div className={`absolute inset-0 rounded-xl blur-sm group-hover/image:blur-md transition-all duration-300 ${
            isDirector() ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30" :
            isPhD() ? "bg-gradient-to-r from-green-500/30 to-teal-500/30" :
            variant === "faculty" ? "bg-gradient-to-r from-cyan-500/30 to-blue-500/30" :
            "bg-gradient-to-r from-cyan-500/20 to-blue-500/20"
          }`}></div>
          
          <div className={`relative w-full h-full rounded-xl border overflow-hidden ${
            isDirector() ? "bg-gradient-to-br from-purple-500/15 to-pink-500/15 border-purple-500/30" :
            isPhD() ? "bg-gradient-to-br from-green-500/15 to-teal-500/15 border-green-500/30" :
            variant === "faculty" ? "bg-gradient-to-br from-cyan-500/15 to-blue-500/15 border-cyan-500/30" :
            "bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
          }`}>
            {!imageError ? (
              // Using img instead of Next.js Image component for better compatibility and error handling
              <img
                src={`/images/team/${person.id}.jpg`}
                alt={person.name}
                className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                onError={() => {
                  console.log(`Failed to load image: /images/team/${person.id}.jpg`);
                  setImageError(true);
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-600/20 to-gray-700/20">
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${getVariantColor()} rounded-full flex items-center justify-center mx-auto mb-2`}>
                    <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-xs font-mono">No Image</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Enhanced Role Badge */}
          <div className="absolute top-4 right-4">
            <div className={`w-10 h-10 bg-gradient-to-r ${getVariantColor()} rounded-full flex items-center justify-center shadow-lg ${
              isDirector() ? "ring-2 ring-purple-400/50" :
              isPhD() ? "ring-2 ring-green-400/50" :
              variant === "faculty" ? "ring-2 ring-cyan-400/50" :
              ""
            }`}>
              {getVariantIcon()}
            </div>
          </div>

          {/* Special indicator for PhD students */}
          {isPhD() && (
            <div className="absolute top-4 left-4">
              <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                <svg className="h-3 w-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          )}

          {/* Special indicator for director */}
          {isDirector() && (
            <div className="absolute bottom-4 left-4">
              <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                <span className="text-purple-400 text-xs font-mono font-bold">DIRECTOR</span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1">
          <div>
            <h3 className={`font-bold text-white group-hover:text-cyan-400 transition-colors font-orbitron mb-2 ${
              isDirector() ? "text-2xl" : isPhD() ? "text-xl" : "text-xl"
            }`}>
              {person.name}
            </h3>
            <div className="flex items-center mb-3">
              <div className={`w-2 h-2 bg-gradient-to-r ${getVariantColor()} rounded-full mr-2 ${
                isDirector() ? "w-3 h-3" : ""
              }`}></div>
              <p className={`text-gray-300 font-medium ${
                isDirector() ? "text-lg" : ""
              }`}>{person.role}</p>
            </div>

            {variant === "alumni" && person.current && (
              <div className="mb-4 p-3 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-lg border border-gray-500/20">
                <p className="text-gray-300 text-sm">
                  <span className="font-medium text-gray-200">Current: </span>
                  {person.current}
                </p>
              </div>
            )}

            {person.research && (
              <div className={`mb-4 p-3 rounded-lg border ${
                isDirector() ? "bg-gradient-to-r from-purple-500/15 to-pink-500/15 border-purple-500/30" :
                isPhD() ? "bg-gradient-to-r from-green-500/15 to-teal-500/15 border-green-500/30" :
                variant === "faculty" ? "bg-gradient-to-r from-cyan-500/15 to-blue-500/15 border-cyan-500/30" :
                "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20"
              }`}>
                <p className={`text-sm font-medium mb-1 font-orbitron ${
                  isDirector() ? "text-purple-400" :
                  isPhD() ? "text-green-400" :
                  variant === "faculty" ? "text-cyan-400" :
                  "text-cyan-400"
                }`}>Research Focus:</p>
                <p className="text-gray-300 text-sm leading-relaxed">{person.research}</p>
              </div>
            )}
          </div>

          {person.email && (
            <div className="mt-4 pt-4 border-t border-white/20">
              <a
                href={`mailto:${person.email}`}
                className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors flex items-center group/link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2 transition-transform group-hover/link:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {person.email}
              </a>
            </div>
          )}
        </div>
      </div>

      {person?.description && (
        <div className="px-6 pb-6">
          <div className="p-4 bg-gradient-to-r from-white/5 to-white/10 rounded-lg border border-white/10 backdrop-blur-sm">
            <p className="text-gray-300 text-sm leading-relaxed text-justify">
              {person.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
