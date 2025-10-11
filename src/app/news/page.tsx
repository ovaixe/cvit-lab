import NewsItem from "@/components/news/NewsItem";

import { NEWS_ITEMS } from "@/utils/data";

export default function NewsPage() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-black/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></span>
              <span className="text-cyan-400 text-sm font-mono">Latest News</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-orbitron">
              <span className="gradient-text">News</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Stay updated with the latest happenings at CVIT Lab
            </p>
          </div>

        {/* Featured News Image - Yellow Panel Design */}
        <div className="relative w-full mb-12 animate-slide-in-up">
          {/* Main Yellow Panel */}
          <div className="relative w-full h-64 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-t-3xl rounded-b-2xl shadow-2xl flex flex-col items-center justify-center overflow-hidden animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-600 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-6 h-6 bg-yellow-700 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-8 left-8 w-10 h-10 bg-yellow-600 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 bg-yellow-700 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
            </div>
            
            {/* Central Orange-Yellow Card */}
            <div className="relative z-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl shadow-xl p-8 animate-scale-in hover:scale-105 transition-all duration-300" style={{ animationDelay: '0.5s' }}>
              {/* Figure with Trophy */}
              <div className="flex flex-col items-center space-y-4">
                {/* Helmeted Figure */}
                <div className="relative animate-bounce" style={{ animationDuration: '2s' }}>
                  {/* Helmet */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-full relative">
                    {/* Visor */}
                    <div className="absolute top-2 left-2 right-2 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full"></div>
                    {/* Helmet reflection */}
                    <div className="absolute top-3 left-3 w-2 h-2 bg-white/30 rounded-full"></div>
                  </div>
                  
                  {/* Body */}
                  <div className="w-12 h-8 bg-gradient-to-br from-blue-800 to-blue-900 rounded-b-lg mx-auto -mt-1"></div>
                  
                  {/* Trophy */}
                  <div className="absolute -right-2 top-4 animate-pulse">
                    <div className="w-6 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-t-lg relative">
                      {/* Trophy cup */}
                      <div className="w-4 h-6 bg-gradient-to-br from-red-400 to-red-500 rounded-t-lg mx-auto mt-1"></div>
                      {/* Trophy base */}
                      <div className="w-6 h-2 bg-gradient-to-br from-red-600 to-red-700 rounded-b-lg"></div>
                      {/* Gold emblem */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                
                {/* Floating particles around figure */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
                  <div className="absolute top-4 right-2 w-1 h-1 bg-orange-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-2 left-4 w-1 h-1 bg-yellow-200 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute bottom-4 right-4 w-1 h-1 bg-orange-200 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
                </div>
              </div>
            </div>
            
            {/* NEWS Text */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
              <h2 className="text-2xl font-bold text-blue-900 font-orbitron tracking-wider">NEWS</h2>
            </div>
            
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-t-3xl rounded-b-2xl border-2 border-yellow-300 animate-pulse opacity-50"></div>
          </div>
          
          {/* Stats Cards */}
          <div className="mt-8 grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
            {/* Publications Card */}
            <div className="card bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 font-orbitron animate-count-up mb-3">50+</div>
                <div className="w-full h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-500 mb-3"></div>
                <div className="text-sm text-gray-300 font-medium">Publications</div>
              </div>
            </div>
            
            {/* Awards Card */}
            <div className="card bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 font-orbitron animate-count-up mb-3" style={{ animationDelay: '0.2s' }}>15+</div>
                <div className="w-full h-0.5 bg-gradient-to-r from-purple-400 to-purple-500 mb-3"></div>
                <div className="text-sm text-gray-300 font-medium">Awards</div>
              </div>
            </div>
            
            {/* Conferences Card */}
            <div className="card bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
              <div className="p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 font-orbitron animate-count-up mb-3" style={{ animationDelay: '0.4s' }}>25+</div>
                <div className="w-full h-0.5 bg-gradient-to-r from-pink-400 to-pink-500 mb-3"></div>
                <div className="text-sm text-gray-300 font-medium">Conferences</div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* News Items */}
        <div className="card">
          <div className="p-8">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white font-orbitron">Latest News</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent ml-6"></div>
            </div>
            
            <div className="space-y-6">
              {NEWS_ITEMS.map((item, index) => (
                <div key={item.id} className="slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <NewsItem
                    title={item.title}
                    date={item.date}
                    description={item.description}
                    category={item.category}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20">
          <div className="card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Stay Connected</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to get the latest updates directly in your inbox
            </p>
            
            <form className="max-w-md mx-auto space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-transparent backdrop-blur-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Subscribe to Newsletter
              </button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-white/20">
              <h3 className="font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
