"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function NavBar() {
  const { count } = useCart();

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-12">
        <Link href="/" className="text-black text-xl">🍎</Link>
        <div className="flex gap-8 text-gray-500 text-sm">
          <Link href="/store" className="hover:text-black transition">Store</Link>
          <Link href="/mac" className="hover:text-black transition">Mac</Link>
          <Link href="/iphone" className="hover:text-black transition">iPhone</Link>
          <Link href="/ipad" className="hover:text-black transition">iPad</Link>
          <Link href="/watch" className="hover:text-black transition">Watch</Link>
        </div>
        <Link href="/bag" className="text-gray-500 text-sm hover:text-black transition relative">
          🛍️
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}