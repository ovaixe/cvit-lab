"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/utils/data";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-black/80 backdrop-blur-md border-b border-cyan-500/20" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center group"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative w-32 h-12 md:w-40 md:h-16 group-hover:scale-110 transition-transform duration-300">
                <Image 
                  fill 
                  src="/logo.avif" 
                  alt="CVIT Lab" 
                  className="object-contain filter drop-shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-lg blur-sm transition-opacity duration-300"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative group px-4 py-2 rounded-lg transition-all duration-300 ${
                  pathname === item.href 
                    ? "text-cyan-400 bg-cyan-500/10" 
                    : "text-white hover:text-cyan-400"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 font-medium">{item.title}</span>
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  pathname === item.href 
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30" 
                    : "group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-blue-500/10"
                }`}></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none hover:text-cyan-400 transition-colors duration-300 p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}></span>
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-black/95 backdrop-blur-md border-t border-cyan-500/20 py-4 px-4 space-y-2">
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                pathname === item.href 
                  ? "text-cyan-400 bg-cyan-500/10 border border-cyan-500/30" 
                  : "text-white hover:text-cyan-400 hover:bg-cyan-500/5"
              }`}
              onClick={() => setIsOpen(false)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
