"use client";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";

export default function Store() {
  const { addItem } = useCart();

  const products = [
    { title: "iPhone 16e", price: "From $599", category: "iPhone" },
    { title: "iPhone 16", price: "From $699", category: "iPhone" },
    { title: "iPhone 16 Pro", price: "From $999", category: "iPhone" },
    { title: "MacBook Air 13\"", price: "From $1,099", category: "Mac" },
    { title: "MacBook Pro 14\"", price: "From $1,599", category: "Mac" },
    { title: "iMac", price: "From $1,299", category: "Mac" },
    { title: "iPad Pro", price: "From $999", category: "iPad" },
    { title: "iPad Air", price: "From $599", category: "iPad" },
    { title: "Apple Watch Series 10", price: "From $399", category: "Watch" },
    { title: "Apple Watch Ultra 2", price: "From $799", category: "Watch" },
    { title: "AirPods 4", price: "From $129", category: "AirPods" },
    { title: "AirPods Pro 2", price: "From $249", category: "AirPods" },
  ];

  return (
    <main className="bg-white min-h-screen text-black pt-12">

      <section className="text-center px-4 py-24 border-b border-gray-100">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-7xl font-semibold tracking-tight">Store</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-xl text-gray-400 mt-4 font-light">The best way to buy the products you love.</motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, i) => (
          <motion.div key={product.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.05 }} viewport={{ once: true }} className="bg-gray-50 border border-gray-100 rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
            <p className="text-xs text-blue-500 font-semibold tracking-[0.2em] uppercase">{product.category}</p>
            <h2 className="text-xl font-semibold mt-3">{product.title}</h2>
            <p className="text-gray-400 mt-2 font-light text-sm">{product.price}</p>
            <div className="w-16 h-px bg-gray-200 my-6"></div>
            <button
              onClick={() => addItem({ title: product.title, price: product.price })}
              className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-400 transition"
            >
              Add to bag
            </button>
          </motion.div>
        ))}
      </section>

    </main>
  );
}