export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-cyan-400">AI Summit</h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#schedule" className="hover:text-cyan-400">
            Schedule
          </a>
          <a href="#speakers" className="hover:text-cyan-400">
            Speakers
          </a>
          <a href="#pricing" className="hover:text-cyan-400">
            Pricing
          </a>
          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </div>

        <button className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600 transition">
          Book Ticket
        </button>
      </div>
    </nav>
  );
}
