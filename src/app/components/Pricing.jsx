'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';

const pricing = [
  {
    name: 'Starter',
    price: '$20',
    summary: 'Good for students who want the full conference access.',
    perks: ['Main stage access', 'Community networking', 'Session recap pack'],
  },
  {
    name: 'Premium',
    price: '$50',
    summary: 'For attendees who want workshops and tighter speaker access.',
    perks: ['Everything in Starter', 'Workshop entry', 'Priority seating'],
  },
  {
    name: 'Ultimate',
    price: '$100',
    summary: 'For founders and builders who want the strongest room access.',
    perks: ['Everything in Premium', 'Mentor lounge', 'Private roundtable'],
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('Premium');
  const activePlan = pricing.find((item) => item.name === selectedPlan) ?? pricing[1];

  return (
    <section id="pricing" className="section-shell scroll-mt-24 bg-[#081020] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">Ticketing</div>
          <h2 className="mt-3 text-4xl font-semibold">A pricing area that helps people choose fast</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            Instead of three static blocks, visitors can compare plans and lock on to one clear option.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4">
            {pricing.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setSelectedPlan(item.name)}
                className={`panel-glow rounded-lg border p-5 text-left transition ${
                  item.name === activePlan.name
                    ? 'border-cyan-300/40 bg-cyan-300/10'
                    : 'border-[var(--border-soft)] bg-[var(--surface)] hover:border-white/20 hover:bg-white/6'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-xl font-semibold">{item.name}</div>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">{item.summary}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-semibold text-cyan-300">{item.price}</div>
                    <div className="text-sm text-slate-500">per ticket</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="panel-glow rounded-lg border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 sm:p-8">
            <div className="text-sm uppercase tracking-[0.16em] text-cyan-300">Selected plan</div>
            <h3 className="mt-3 text-3xl font-semibold">{activePlan.name}</h3>
            <div className="mt-4 text-5xl font-semibold text-white">{activePlan.price}</div>
            <p className="mt-4 text-base leading-7 text-slate-400">{activePlan.summary}</p>

            <div className="mt-8 space-y-3">
              {activePlan.perks.map((perk) => (
                <div key={perk} className="flex items-start gap-3 rounded-lg border border-white/10 bg-slate-950/30 p-3">
                  <Check className="mt-0.5 h-4 w-4 text-cyan-300" />
                  <span className="text-sm text-slate-200">{perk}</span>
                </div>
              ))}
            </div>

            <Link
              href="/signup"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Continue with {activePlan.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
