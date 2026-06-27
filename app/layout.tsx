import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apple",
  description: "Apple concept site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black">
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
          <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-12">
            <span className="text-white text-xl">🍎</span>
            <div className="flex gap-8 text-gray-300 text-sm">
              <a href="#" className="hover:text-white transition">Store</a>
              <a href="#" className="hover:text-white transition">Mac</a>
              <a href="#" className="hover:text-white transition">iPhone</a>
              <a href="#" className="hover:text-white transition">iPad</a>
              <a href="#" className="hover:text-white transition">Watch</a>
            </div>
            <span className="text-gray-300 text-sm">🔍</span>
          </div>
        </nav>
        {children}
      <footer className="border-t border-zinc-800 py-10 mt-auto">
          <div className="max-w-5xl mx-auto px-4">
            <p className="text-gray-500 text-xs mb-6">Copyright © 2024 Apple Inc. All rights reserved.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-gray-400">
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold mb-1">Shop and Learn</p>
                <a href="#" className="hover:text-white transition">Store</a>
                <a href="#" className="hover:text-white transition">Mac</a>
                <a href="#" className="hover:text-white transition">iPhone</a>
                <a href="#" className="hover:text-white transition">iPad</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold mb-1">Services</p>
                <a href="#" className="hover:text-white transition">Apple Music</a>
                <a href="#" className="hover:text-white transition">Apple TV+</a>
                <a href="#" className="hover:text-white transition">iCloud</a>
                <a href="#" className="hover:text-white transition">Apple Pay</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold mb-1">Account</p>
                <a href="#" className="hover:text-white transition">Manage Your Apple ID</a>
                <a href="#" className="hover:text-white transition">Apple Store Account</a>
                <a href="#" className="hover:text-white transition">iCloud.com</a>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white font-semibold mb-1">About Apple</p>
                <a href="#" className="hover:text-white transition">Newsroom</a>
                <a href="#" className="hover:text-white transition">Apple Leadership</a>
                <a href="#" className="hover:text-white transition">Careers</a>
                <a href="#" className="hover:text-white transition">Contact Apple</a>
              </div>
            </div>
          </div>
        </footer></body>
    </html>
  );
}
