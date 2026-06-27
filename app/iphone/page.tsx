export default function iPhone() {
  return (
    <main className="bg-white min-h-screen text-black pt-24">
      <section className="flex flex-col items-center justify-center text-center px-4 py-32 border-b border-gray-200">
        <p className="text-blue-500 text-sm font-medium tracking-widest uppercase mb-4">Latest</p>
        <h1 className="text-8xl font-semibold tracking-tight">iPhone 16e</h1>
        <p className="text-2xl text-gray-500 mt-4 font-light">Apple Intelligence. More affordable than ever.</p>
        <div className="flex gap-4 mt-10">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full text-sm hover:bg-blue-400 transition">Shop iPhone</button>
          <button className="text-blue-500 border border-blue-500 px-8 py-3 rounded-full text-sm hover:bg-blue-500 hover:text-white transition">Compare models</button>
        </div>
      </section>
    </main>
  )
}