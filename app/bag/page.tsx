"use client";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Bag() {
  const { items } = useCart();

  return (
    <main className="bg-white min-h-screen text-black pt-24">
      <section className="max-w-4xl mx-auto px-4 py-24">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-6xl font-semibold tracking-tight mb-16">Your Bag</motion.h1>

        {items.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="text-center py-32">
            <p className="text-2xl text-gray-400 font-light">Your bag is empty.</p>
            <a href="/store" className="mt-8 inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-sm hover:bg-blue-400 transition">Continue Shopping</a>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="flex items-center justify-between border-b border-gray-100 py-6">
                <div>
                  <p className="text-lg font-medium">{item.title}</p>
                  <p className="text-gray-400 text-sm mt-1">{item.price}</p>
                </div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-400 transition">Remove</button>
              </motion.div>
            ))}
            <div className="mt-8 flex justify-end">
              <button className="bg-blue-500 text-white px-10 py-4 rounded-full text-sm hover:bg-blue-400 transition font-medium">Checkout</button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}