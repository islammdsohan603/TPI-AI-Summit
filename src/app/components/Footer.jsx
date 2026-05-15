export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-6 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-sm font-semibold tracking-[0.24em] text-white/90">AI SUMMIT</div>
          <p className="mt-2 text-sm">2026 Tangail Polytechnic Institute. All rights reserved.</p>
        </div>
        <div className="flex gap-5 text-sm">
          <a href="#schedule" className="transition hover:text-cyan-300">Schedule</a>
          <a href="#speakers" className="transition hover:text-cyan-300">Speakers</a>
          <a href="#pricing" className="transition hover:text-cyan-300">Pricing</a>
          <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}
