'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, CalendarDays, MapPin, Play, Sparkles, Ticket, Users } from 'lucide-react';

const highlights = [
  { label: 'Attendees', value: '2.5K+', icon: Users },
  { label: 'Live sessions', value: '18', icon: Sparkles },
  { label: 'Passes left', value: '124', icon: Ticket },
];

export default function Hero() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const imageStyle = useMemo(
    () => ({
      transform: `perspective(1200px) rotateX(${pointer.y * -3}deg) rotateY(${pointer.x * 4}deg) translateY(${pointer.y * -8}px)`,
    }),
    [pointer]
  );

  return (
    <section className="section-shell relative min-h-screen overflow-hidden px-6 pb-16 pt-28">
      <div className="grid-fade absolute inset-0 opacity-40" />
      <div className="absolute left-[8%] top-32 h-48 w-48 rounded-full bg-cyan-400/14 blur-3xl" />
      <div className="absolute right-[10%] top-24 h-64 w-64 rounded-full bg-indigo-500/18 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            Programming Conference 2026
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
            Design the future of
            <span className="mt-3 block text-cyan-300">AI at Tangail Polytechnic Institute</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
            A sharper event experience for students, builders, and founders with interactive sessions,
            product demos, and live collaboration around practical AI.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <CalendarDays className="h-4 w-4 text-cyan-300" />
              27 April 2026
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
              <MapPin className="h-4 w-4 text-cyan-300" />
              Tangail Polytechnic Institute
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Reserve your pass
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#schedule"
              className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              <Play className="h-4 w-4" />
              Explore the program
            </a>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ label, value, icon: Icon }) => (
              <div
                key={label}
                className="panel-glow rounded-lg border border-[var(--border-soft)] bg-[var(--surface)] p-4 backdrop-blur"
              >
                <Icon className="h-5 w-5 text-cyan-300" />
                <div className="mt-5 text-2xl font-semibold">{value}</div>
                <div className="mt-1 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative"
          onMouseMove={(event) => {
            const bounds = event.currentTarget.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            setPointer({ x, y });
          }}
          onMouseLeave={() => setPointer({ x: 0, y: 0 })}
        >
          <div className="float-delay absolute -left-8 top-8 hidden h-28 w-28 rounded-lg border border-cyan-300/20 bg-cyan-300/10 backdrop-blur lg:block" />
          <div className="float-slow absolute -right-4 bottom-20 hidden h-24 w-24 rounded-lg border border-indigo-300/20 bg-indigo-300/10 backdrop-blur lg:block" />

          <div
            style={imageStyle}
            className="panel-glow relative overflow-hidden rounded-lg border border-white/10 bg-[var(--surface-strong)] p-3 transition duration-300"
          >
            <div className="relative aspect-[5/4] overflow-hidden rounded-md">
              <Image
                src="/ai-summit-hero.png"
                alt="Digital stage artwork for the AI Summit event website"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                preload
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#07101f] via-transparent to-transparent" />
            </div>

            <div className="absolute left-8 top-8 rounded-lg border border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur">
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Main stage</div>
              <div className="mt-1 text-lg font-semibold">Interactive AI demos</div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-slate-950/60 p-4 backdrop-blur">
                <div className="text-sm text-slate-400">Experience layer</div>
                <div className="mt-2 text-xl font-semibold">Live coding, startup rooms, and portfolio feedback</div>
              </div>
              <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-4 backdrop-blur">
                <div className="text-sm text-cyan-100/80">This redesign adds</div>
                <div className="mt-2 text-xl font-semibold text-cyan-50">Movement, depth, and clearer conversion points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
