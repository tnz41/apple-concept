"use client";
import { motion } from "framer-motion";

export default function Watch() {
  return (
    <main className="bg-white min-h-screen text-black pt-12">

      <section className="flex flex-col items-center justify-center text-center px-4 py-32 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-blue-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6">New</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-8xl font-semibold tracking-tight">Apple Watch</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-2xl text-gray-400 mt-6 font-light">The ultimate device for a healthy life.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex gap-4 mt-10">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-sm hover:bg-blue-400 transition font-medium">Shop Apple Watch</button>
          <button className="text-blue-500 border border-blue-400 px-8 py-3 rounded-full text-sm hover:bg-blue-500 hover:text-white transition font-medium">Compare models</button>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Apple Watch Series 10", sub: "From $399", tag: "Most popular" },
          { title: "Apple Watch Ultra 2", sub: "From $799", tag: "Most capable" },
          { title: "Apple Watch SE", sub: "From $249", tag: "Best value" },
        ].map((watch, i) => (
          <motion.div key={watch.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className="bg-gray-50 border border-gray-100 rounded-3xl p-12 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
            <p className="text-xs text-blue-500 font-semibold tracking-[0.2em] uppercase">{watch.tag}</p>
            <h2 className="text-2xl font-semibold mt-3">{watch.title}</h2>
            <p className="text-gray-400 mt-2 font-light text-sm">{watch.sub}</p>
            <div className="w-16 h-px bg-gray-200 my-6"></div>
            <div className="flex gap-4">
              <button className="text-blue-500 text-sm hover:underline">Learn more</button>
              <button className="text-blue-500 text-sm hover:underline">Buy</button>
            </div>
          </motion.div>
        ))}
      </section>

    </main>
  )
}