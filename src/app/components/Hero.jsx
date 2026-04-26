import Image from 'next/image';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 bg-linear-to-br from-[#050816] to-[#0d1326]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center pt-20">
        <div>
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm">
            Programming Conference 2026
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight">
            AI Summit
            <span className="text-cyan-400 block">
              Tangail Polytechnic Institute
            </span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Join Bangladesh’s biggest AI and Programming Conference.
          </p>

          <button className="mt-8 bg-cyan-500 px-8 py-4 rounded-xl text-lg hover:bg-cyan-600 transition">
            Book Tickets Now
          </button>
        </div>
      </div>
    </section>
  );
}
