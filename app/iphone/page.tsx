"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function iPhone() {
  return (
    <main className="bg-white min-h-screen text-black overflow-hidden">

      {/* Announcement Banner */}
      <div className="bg-black text-white text-center text-xs py-2 tracking-widest">
        ✦ iPhone 16e available now — <span className="underline cursor-pointer">Shop today</span> ✦
      </div>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-blue-500 text-xs font-semibold tracking-[0.3em] uppercase mb-6">Latest</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-8xl md:text-9xl font-semibold tracking-tight leading-none">iPhone 16e</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-2xl text-gray-400 mt-6 font-light">Apple Intelligence. More affordable than ever.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex gap-4 mt-10">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-sm hover:bg-blue-400 transition font-medium">Shop iPhone 16e</button>
          <button className="text-blue-500 border border-blue-400 px-8 py-3 rounded-full text-sm hover:bg-blue-500 hover:text-white transition font-medium">Compare models</button>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.85, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.4, ease: "easeOut" }} className="mt-10 relative w-96 h-[600px]">
          <Image src="/Apple-iPhone-16e-hero-GEO-250219-removebg-preview.png" alt="iPhone 16e" fill priority className="object-contain drop-shadow-2xl" />
        </motion.div>
      </section>

      {/* Model Picker */}
      <section className="py-24 px-4 border-b border-gray-100">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-5xl font-semibold text-center tracking-tight mb-16">Which iPhone is right for you?</motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "iPhone 16e", price: "From $599", tag: "New", color: "bg-gray-50", desc: "Apple Intelligence. Affordable." },
            { name: "iPhone 16", price: "From $699", tag: "New", color: "bg-blue-50", desc: "A18 chip. Advanced camera system." },
            { name: "iPhone 16 Pro", price: "From $999", tag: "New", color: "bg-gray-900", textColor: "text-white", subColor: "text-gray-400", tagColor: "text-blue-400", desc: "Titanium. A18 Pro chip. Pro camera." },
          ].map((model, i) => (
            <motion.div key={model.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} viewport={{ once: true }} className={`${model.color} rounded-3xl p-12 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer`}>
              <p className={`text-xs font-semibold tracking-[0.2em] uppercase ${model.tagColor || "text-blue-500"}`}>{model.tag}</p>
              <h3 className={`text-3xl font-semibold mt-3 ${model.textColor || "text-black"}`}>{model.name}</h3>
              <p className={`mt-2 font-light text-sm ${model.subColor || "text-gray-400"}`}>{model.desc}</p>
              <p className={`mt-2 font-light text-sm ${model.subColor || "text-gray-500"}`}>{model.price}</p>
              <div className="w-16 h-px bg-gray-300 my-6"></div>
              <div className="flex gap-4">
                <button className="text-blue-500 text-sm hover:underline">Learn more</button>
                <button className="text-blue-500 text-sm hover:underline">Buy</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Design Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-16 px-8 py-32 bg-white border-b border-gray-100">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-start max-w-md">
          <p className="text-xs text-blue-500 font-semibold tracking-[0.3em] uppercase mb-4">Design</p>
          <h2 className="text-6xl font-semibold tracking-tight leading-tight">Beautiful.<br />Inside and out.</h2>
          <p className="text-gray-400 mt-6 text-xl font-light">Precision-engineered aluminium and glass. Available in Starlight and Black.</p>
          <div className="flex gap-3 mt-6">
            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-gray-300 cursor-pointer hover:scale-110 transition"></div>
            <div className="w-8 h-8 rounded-full bg-gray-900 border-2 border-gray-700 cursor-pointer hover:scale-110 transition"></div>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-400 transition">Learn more</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative w-96 h-[500px]">
          <Image src="/Apple-iPhone-16e-front-and-back-250219-removebg-preview.png" alt="iPhone 16e design" fill className="object-contain drop-shadow-2xl" />
        </motion.div>
      </section>

      {/* Camera Section */}
      <section className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-16 px-8 py-32 bg-gray-50 border-b border-gray-100">
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-start max-w-md">
          <p className="text-xs text-blue-500 font-semibold tracking-[0.3em] uppercase mb-4">Camera</p>
          <h2 className="text-6xl font-semibold tracking-tight leading-tight">48MP.<br />Every detail.</h2>
          <p className="text-gray-400 mt-6 text-xl font-light">The most powerful camera ever on an iPhone at this price. Stunning portraits, landscapes and everything in between.</p>
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-400 transition">Learn more</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative w-full h-[600px] rounded-3xl overflow-hidden">
          <img src="/Apple-iPhone-16e-48MP-Fusion-photography-250219.jpg" alt="iPhone 16e camera" className="w-full h-full object-cover rounded-3xl" />
        </motion.div>
      </section>

      {/* Visual Intelligence */}
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-16 px-8 py-32 bg-white border-b border-gray-100">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-start max-w-md">
          <p className="text-xs text-blue-500 font-semibold tracking-[0.3em] uppercase mb-4">Apple Intelligence</p>
          <h2 className="text-6xl font-semibold tracking-tight leading-tight">See the world.<br />Understand it.</h2>
          <p className="text-gray-400 mt-6 text-xl font-light">Point your camera at anything and instantly learn more — restaurants, landmarks, plants and more.</p>
          <div className="flex gap-4 mt-8">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-400 transition">Learn more</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative w-80 h-[550px]">
          <Image src="/Apple-iPhone-16e-Visual-Intelligence-250219-removebg-preview.png" alt="Visual Intelligence" fill className="object-contain drop-shadow-2xl" />
        </motion.div>
      </section>

      {/* Genmoji */}
      <section className="relative flex flex-col md:flex-row-reverse items-center justify-center gap-16 px-8 py-32 bg-gradient-to-b from-purple-50 to-pink-50 border-b border-gray-100">
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-start max-w-md">
          <p className="text-xs text-purple-500 font-semibold tracking-[0.3em] uppercase mb-4">Apple Intelligence</p>
          <h2 className="text-6xl font-semibold tracking-tight leading-tight">Make any<br />emoji yours.</h2>
          <p className="text-gray-400 mt-6 text-xl font-light">Genmoji lets you create entirely new emoji from your imagination. Just describe what you want.</p>
          <div className="flex gap-4 mt-8">
            <button className="bg-purple-500 text-white px-6 py-2 rounded-full text-sm hover:bg-purple-400 transition">Learn more</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative w-80 h-[550px]">
          <Image src="/Apple-iPhone-16e-Apple-Intelligence-Genmoji-250219-removebg-preview.png" alt="Genmoji" fill className="object-contain drop-shadow-2xl" />
        </motion.div>
      </section>

      {/* USB-C */}
      <section className="relative flex flex-col md:flex-row items-center justify-center gap-16 px-8 py-32 bg-black border-b border-gray-800">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="flex flex-col items-start max-w-md">
          <p className="text-xs text-blue-400 font-semibold tracking-[0.3em] uppercase mb-4">Connectivity</p>
          <h2 className="text-6xl font-semibold tracking-tight leading-tight text-white">USB-C.<br />Universally yours.</h2>
          <p className="text-gray-400 mt-6 text-xl font-light">Charge, connect and transfer with the cable everyone already has.</p>
          <div className="flex gap-4 mt-8">
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm hover:bg-gray-200 transition">Learn more</button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative w-96 h-[450px]">
          <Image src="/Apple-iPhone-16e-USB-C-250219-removebg-preview.png" alt="USB-C" fill className="object-contain drop-shadow-2xl" />
        </motion.div>
      </section>

      {/* Specs */}
      <section className="max-w-4xl mx-auto px-4 py-24 border-b border-gray-100">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="text-5xl font-semibold text-center tracking-tight mb-16">Tech Specs</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {[
            { label: "Chip", value: "A16 Bionic" },
            { label: "Display", value: "6.1-inch Super Retina XDR" },
            { label: "Camera", value: "48MP Fusion camera" },
            { label: "Battery", value: "Up to 26 hours video playback" },
            { label: "Storage", value: "128GB, 256GB, 512GB" },
            { label: "Connectivity", value: "5G, Wi-Fi 6, Bluetooth 5.3, USB-C" },
            { label: "Apple Intelligence", value: "Yes" },
            { label: "Price", value: "From $599" },
          ].map((spec, i) => (
            <motion.div key={spec.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} className="bg-white p-6 flex flex-col gap-1">
              <p className="text-xs text-gray-400 uppercase tracking-widest">{spec.label}</p>
              <p className="text-lg font-medium">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  )
}