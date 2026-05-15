'use client';

import { useState } from 'react';
import { Clock3, MapPin, Sparkles } from 'lucide-react';

const schedule = [
  {
    time: '9:00 AM',
    title: 'Registration & Networking',
    stage: 'Forum Hall',
    description: 'Meet the community, scan in, and explore startup booths before the keynote run begins.',
    focus: ['Check-in', 'Coffee and intros', 'Creator booths'],
  },
  {
    time: '10:00 AM',
    title: 'Opening Ceremony',
    stage: 'Main Stage',
    description: 'Kick off the summit with the event vision, the student showcase, and sponsor reveals.',
    focus: ['Welcome remarks', 'Summit roadmap', 'Opening showcase'],
  },
  {
    time: '11:00 AM',
    title: 'AI Session',
    stage: 'Main Stage',
    description: 'A practical session on building with modern AI systems, from prototypes to deployable products.',
    focus: ['Prompt systems', 'Model workflows', 'Production demos'],
  },
  {
    time: '1:00 PM',
    title: 'Programming Hero Session',
    stage: 'Workshop Room',
    description: 'A hands-on block focused on portfolio building, execution speed, and product-minded learning.',
    focus: ['Live coding', 'Portfolio review', 'Growth tactics'],
  },
];

export default function Schedule() {
  const [activeIndex, setActiveIndex] = useState(1);
  const activeItem = schedule[activeIndex];

  return (
    <section id="schedule" className="section-shell scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">Program Flow</div>
          <h2 className="mt-3 text-4xl font-semibold">A schedule that feels like a product experience</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Each block is framed around one clear outcome so the event moves with energy instead of filler.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="space-y-3">
            {schedule.map((item, index) => (
              <button
                key={item.time}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`panel-glow w-full rounded-lg border p-5 text-left transition ${
                  activeIndex === index
                    ? 'border-cyan-300/40 bg-cyan-300/10'
                    : 'border-[var(--border-soft)] bg-[var(--surface)] hover:border-white/20 hover:bg-white/6'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-medium text-cyan-300">{item.time}</div>
                    <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                    <div className="mt-3 inline-flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="h-4 w-4" />
                      {item.stage}
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                    0{index + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="panel-glow rounded-lg border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-sm text-cyan-100">
                <Clock3 className="h-4 w-4 text-cyan-300" />
                {activeItem.time}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-cyan-300" />
                {activeItem.stage}
              </div>
            </div>

            <h3 className="mt-6 text-3xl font-semibold">{activeItem.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{activeItem.description}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {activeItem.focus.map((item) => (
                <div key={item} className="rounded-lg border border-white/10 bg-slate-950/35 p-4">
                  <Sparkles className="h-4 w-4 text-cyan-300" />
                  <div className="mt-4 text-sm font-medium text-slate-200">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
