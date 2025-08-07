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
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            onClick={() => setActiveTab("journal")}
            className={`px-6 py-3 font-medium text-sm rounded-t-lg ${
              activeTab === "journal"
                ? "bg-white text-blue-600 border-t border-l border-r border-gray-200"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Journal Papers
          </button>
          <button
            onClick={() => setActiveTab("conference")}
            className={`px-6 py-3 font-medium text-sm rounded-t-lg ${
              activeTab === "conference"
                ? "bg-white text-blue-600 border-t border-l border-r border-gray-200"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Conference Papers
          </button>
          <button
            onClick={() => setActiveTab("patent")}
            className={`px-6 py-3 font-medium text-sm rounded-t-lg ${
              activeTab === "patent"
                ? "bg-white text-blue-600 border-t border-l border-r border-gray-200"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            Patents
          </button>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label
                htmlFor="search"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by title, author, or conference..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="w-full md:w-48">
              <label
                htmlFor="year"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Filter by Year
              </label>
              <select
                id="year"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
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
        <div className="mb-4 text-gray-600">
          Showing {filteredPublications.length}{" "}
          {activeTab === "journal"
            ? "journal papers"
            : activeTab === "conference"
            ? "conference papers"
            : "patents"}
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((pub) => (
            <div
              key={pub.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {pub.title}
                  </a>
                </h3>

                <p className="text-gray-600 mb-2">{pub.authors.join(", ")}</p>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {pub.conference}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                    {pub.year}
                  </span>
                  {pub.impactFactor && (
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                      Impact Factor: {pub.impactFactor}
                    </span>
                  )}
                  {pub.journalRanking && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                      Ranking: {pub.journalRanking}
                    </span>
                  )}
                </div>

                {pub.abstract && (
                  <div className="mt-3">
                    <button
                      onClick={() => toggleAbstract(pub.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                    >
                      {expandedAbstracts[pub.id]
                        ? "Hide abstract"
                        : "Show abstract"}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${
                          expandedAbstracts[pub.id] ? "rotate-180" : ""
                        }`}
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
                      <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                        <p className="text-gray-700">{pub.abstract}</p>
                        {pub.keywords && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {pub.keywords.map((kw, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded"
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
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    View {activeTab === "patent" ? "Patent" : "Publication"}
                    <svg
                      className="ml-1 h-4 w-4"
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
            <p className="text-gray-500">
              No publications found matching your criteria
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
