import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";

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
      <body className="min-h-full flex flex-col bg-white">
        <CartProvider>
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-gray-200 py-10 mt-auto bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <p className="text-gray-400 text-xs mb-6">Copyright © 2025 Apple Inc. All rights reserved.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs text-gray-400">
                <div className="flex flex-col gap-2">
                  <p className="text-black font-semibold mb-1">Shop and Learn</p>
                  <a href="/store" className="hover:text-black transition">Store</a>
                  <a href="/mac" className="hover:text-black transition">Mac</a>
                  <a href="/iphone" className="hover:text-black transition">iPhone</a>
                  <a href="/ipad" className="hover:text-black transition">iPad</a>
                  <a href="/watch" className="hover:text-black transition">Watch</a>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-semibold mb-1">Services</p>
                  <a href="#" className="hover:text-black transition">Apple Music</a>
                  <a href="#" className="hover:text-black transition">Apple TV+</a>
                  <a href="#" className="hover:text-black transition">iCloud</a>
                  <a href="#" className="hover:text-black transition">Apple Pay</a>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-semibold mb-1">Account</p>
                  <a href="#" className="hover:text-black transition">Manage Your Apple ID</a>
                  <a href="#" className="hover:text-black transition">Apple Store Account</a>
                  <a href="#" className="hover:text-black transition">iCloud.com</a>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-semibold mb-1">About Apple</p>
                  <a href="#" className="hover:text-black transition">Newsroom</a>
                  <a href="#" className="hover:text-black transition">Apple Leadership</a>
                  <a href="#" className="hover:text-black transition">Careers</a>
                  <a href="#" className="hover:text-black transition">Contact Apple</a>
                </div>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}