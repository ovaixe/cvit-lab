import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/utils/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-transparent to-black/80 border-t border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Lab Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="relative w-56 h-24">
                <Image fill src="/logo.avif" alt="CVIT Lab" className="object-contain filter drop-shadow-lg" />
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The Computer Vision and Interactive Technology (CVIT) Lab at National Central University
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mechanical Engineering Building - E4-464<br />
              No. 300, Zhongda Rd., Zhongli District<br />
              Taoyuan City 320317, Taiwan (R.O.C.)
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-orbitron">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-orbitron">Research Areas</h3>
            <ul className="space-y-3">
              {[
                "Computer Vision",
                "Machine Learning", 
                "Image Processing",
                "Pattern Recognition",
                "Deep Learning",
                "Multimedia Security"
              ].map((area) => (
                <li key={area}>
                  <Link
                    href="/research"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 group flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white font-orbitron">Connect With Us</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Email</p>
                  <a href="mailto:andrewlin@ncu.edu.tw" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                    andrewlin@ncu.edu.tw
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone</p>
                  <a href="tel:+886-3-4227151" className="text-purple-400 hover:text-purple-300 transition-colors text-sm">
                    +886-3-4227151 Ext. 34318
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/cvit-lab/"
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
              
              <a
                href="https://github.com/cvit-lab"
                className="w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="GitHub"
              >
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 mt-16 pt-8">
            <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0 mx-auto w-fit">
              © {currentYear} CVIT Lab. All rights reserved. | National Central University
            </p>
        </div>
      </div>
    </footer>
  );
}
