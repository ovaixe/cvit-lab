"use client";

import { useState } from "react";

import { JOURNALPapers, CONFERENCEPapers, PATENTS } from "@/utils/data";

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState<
    "journal" | "conference" | "patent"
  >("journal");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [expandedAbstracts, setExpandedAbstracts] = useState<
    Record<number, boolean>
  >({});

  const toggleAbstract = (id: number) => {
    setExpandedAbstracts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const allPublications = {
    journal: JOURNALPapers,
    conference: CONFERENCEPapers,
    patent: PATENTS,
  };

  const filteredPublications = allPublications[activeTab]
    .filter(
      (pub) =>
        pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.authors.some((author) =>
          author.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        pub.conference.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (pub) =>
        selectedYear === "all" || (pub.year?.toString() ?? "") === selectedYear
    );

  const years = Array.from(
    new Set(
      allPublications[activeTab]
        .map((pub) => pub.year)
        .filter((year) => year !== null)
    )
  ).sort((a, b) => b - a);

  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-cyan-400 text-sm font-mono">Publications</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              <span className="gradient-text">Publications</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Explore our research contributions in computer vision, machine learning, and multimedia processing
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <button
              onClick={() => setActiveTab("journal")}
              className={`px-6 py-3 font-medium text-sm rounded-lg transition-all duration-300 ${
                activeTab === "journal"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
            >
              Journal Papers
            </button>
            <button
              onClick={() => setActiveTab("conference")}
              className={`px-6 py-3 font-medium text-sm rounded-lg transition-all duration-300 ${
                activeTab === "conference"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
            >
              Conference Papers
            </button>
            <button
              onClick={() => setActiveTab("patent")}
              className={`px-6 py-3 font-medium text-sm rounded-lg transition-all duration-300 ${
                activeTab === "patent"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
              }`}
            >
              Patents
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Search Publications
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by title, author, or conference..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="w-full md:w-48">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Filter by Year
              </label>
              <select
                id="year"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
              >
                <option value="all">All Years</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Publication Count */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm">
            <span className="text-cyan-400 font-mono">
              Showing {filteredPublications.length}{" "}
              {activeTab === "journal"
                ? "journal papers"
                : activeTab === "conference"
                ? "conference papers"
                : "patents"}
            </span>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub, index) => (
            <div
              key={pub.id}
              className="card slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 hover:text-cyan-400 transition-colors font-orbitron">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {pub.title}
                  </a>
                </h3>

                <p className="text-gray-300 mb-4">{pub.authors.join(", ")}</p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {pub.conference}
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 text-sm rounded-full border border-purple-500/30">
                    {pub.year}
                  </span>
                  {pub.impactFactor && (
                    <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-400 text-sm rounded-full border border-green-500/30">
                      Impact Factor: {pub.impactFactor}
                    </span>
                  )}
                  {pub.journalRanking && (
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 text-sm rounded-full border border-orange-500/30">
                      Ranking: {pub.journalRanking}
                    </span>
                  )}
                </div>

                {pub.abstract && (
                  <div className="mt-4">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center group"
                    >
                      {expandedAbstracts[pub.id]
                        ? "Hide abstract"
                        : "Show abstract"}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          expandedAbstracts[pub.id] ? "rotate-180" : ""
                        } group-hover:translate-y-0.5`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {expandedAbstracts[pub.id] && (
                      <div className="mt-3 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
                        <p className="text-gray-300 mb-3">{pub.abstract}</p>
                        {pub.keywords && (
                          <div className="flex flex-wrap gap-2">
                            {pub.keywords.map((kw, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded border border-white/20"
                              >
                                {kw}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-4 flex justify-end">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-cyan-400 hover:text-cyan-300 flex items-center group"
                  >
                    View {activeTab === "patent" ? "Patent" : "Publication"}
                    <svg
                      className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-400 text-lg">
              No publications found matching your criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
