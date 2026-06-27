export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">New</p>
        <h1 className="text-7xl font-semibold tracking-tight">iPhone 16 Pro</h1>
        <p className="text-xl text-gray-400 mt-4">Hello. Apple Intelligence.</p>
        <div className="flex gap-4 mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-400 transition">Learn more</button>
          <button className="text-blue-500 border border-blue-500 px-6 py-2 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">Buy</button>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-5xl mx-auto px-4 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center">
          <p className="text-sm text-blue-400 font-semibold tracking-widest uppercase">New</p>
          <h2 className="text-4xl font-semibold mt-2">MacBook Air</h2>
          <p className="text-gray-400 mt-2">Supercharged by M3</p>
          <div className="flex gap-4 mt-6">
            <button className="text-blue-500 text-sm hover:underline">Learn more</button>
            <button className="text-blue-500 text-sm hover:underline">Buy</button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center">
          <p className="text-sm text-blue-400 font-semibold tracking-widest uppercase">New</p>
          <h2 className="text-4xl font-semibold mt-2">Apple Watch</h2>
          <p className="text-gray-400 mt-2">Your most personal device</p>
          <div className="flex gap-4 mt-6">
            <button className="text-blue-500 text-sm hover:underline">Learn more</button>
            <button className="text-blue-500 text-sm hover:underline">Buy</button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center">
          <p className="text-sm text-blue-400 font-semibold tracking-widest uppercase">New</p>
          <h2 className="text-4xl font-semibold mt-2">iPad Pro</h2>
          <p className="text-gray-400 mt-2">Thin. Powerful. Magical.</p>
          <div className="flex gap-4 mt-6">
            <button className="text-blue-500 text-sm hover:underline">Learn more</button>
            <button className="text-blue-500 text-sm hover:underline">Buy</button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-10 flex flex-col items-center text-center">
          <p className="text-sm text-blue-400 font-semibold tracking-widest uppercase">New</p>
          <h2 className="text-4xl font-semibold mt-2">AirPods Pro</h2>
          <p className="text-gray-400 mt-2">Adaptive Audio. Now playing.</p>
          <div className="flex gap-4 mt-6">
            <button className="text-blue-500 text-sm hover:underline">Learn more</button>
            <button className="text-blue-500 text-sm hover:underline">Buy</button>
          </div>
        </div>

      </section>

    </main>
  )
}
