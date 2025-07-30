import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/utils/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-60 h-14">
                <Image fill src="/logo.avif" alt="CVIT Lab" />
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              The Computer Vision and Interactive Technology (CVIT) Lab
            </p>
            <p className="text-gray-400">
              National Central University, Mechanical Engineering Building -
              E4-464 No. 300, Zhongda Rd., Zhongli District, Taoyuan City
              320317, Taiwan (R.O.C.)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/research"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Image Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/research"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Pattern Recognition
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.linkedin.com/company/cvit-lab/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
            <p className="text-gray-400 mb-2">
              <span className="font-medium">Email:</span> cvit@iiit.ac.in
            </p>
            <p className="text-gray-400">
              <span className="font-medium">Phone:</span> +886-3-4227151 Ext.
              34318
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} CVIT Lab. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/sitemap"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
