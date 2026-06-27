import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar";
import Link from "next/link";

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
                  <Link href="/store" className="hover:text-black transition">Store</Link>
                  <Link href="/mac" className="hover:text-black transition">Mac</Link>
                  <Link href="/iphone" className="hover:text-black transition">iPhone</Link>
                  <Link href="/ipad" className="hover:text-black transition">iPad</Link>
                  <Link href="/watch" className="hover:text-black transition">Watch</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-semibold mb-1">Services</p>
                  <Link href="#" className="hover:text-black transition">Apple Music</Link>
                  <Link href="#" className="hover:text-black transition">Apple TV+</Link>
                  <Link href="#" className="hover:text-black transition">iCloud</Link>
                  <Link href="#" className="hover:text-black transition">Apple Pay</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-semibold mb-1">Account</p>
                  <Link href="#" className="hover:text-black transition">Manage Your Apple ID</Link>
                  <Link href="#" className="hover:text-black transition">Apple Store Account</Link>
                  <Link href="#" className="hover:text-black transition">iCloud.com</Link>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-black font-semibold mb-1">About Apple</p>
                  <Link href="#" className="hover:text-black transition">Newsroom</Link>
                  <Link href="#" className="hover:text-black transition">Apple Leadership</Link>
                  <Link href="#" className="hover:text-black transition">Careers</Link>
                  <Link href="#" className="hover:text-black transition">Contact Apple</Link>
                </div>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}