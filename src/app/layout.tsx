import type { Metadata, Viewport } from "next";
import { Poppins, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MatrixBackground from "@/components/layout/MatrixBackground";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CVIT Lab - AI & Computer Vision Research",
  description: "Advanced Computer Vision and Interactive Technology Laboratory at National Central University",
  keywords: "computer vision, AI, machine learning, deep learning, research, Taiwan, NCU",
  authors: [{ name: "CVIT Lab" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${geistMono.variable} ${orbitron.variable} antialiased`}>
        <MatrixBackground />
        <div className="relative flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
