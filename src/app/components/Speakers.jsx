import { BrainCircuit, Code2, Lightbulb, Orbit } from 'lucide-react';

const speakers = [
  {
    name: 'Jhankar Mahbub',
    role: 'Founder of Programming Hero',
    icon: Lightbulb,
    session: 'Building momentum through practical learning systems',
  },
  {
    name: 'AI Research Expert',
    role: 'Machine Learning Engineer',
    icon: BrainCircuit,
    session: 'How applied AI teams move from lab ideas to useful products',
  },
  {
    name: 'Frontend Architect',
    role: 'React Specialist',
    icon: Code2,
    session: 'Designing fast interfaces that keep complex tools understandable',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="section-shell scroll-mt-24 bg-[#081020] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">Speakers</div>
            <h2 className="mt-3 text-4xl font-semibold">Guests with something concrete to teach</h2>
            <p className="mt-4 text-base leading-7 text-slate-400">
              The line-up is framed around execution, not just inspiration. Each speaker owns one usable idea.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            <Orbit className="h-4 w-4 text-cyan-300" />
            Founder, research, and product engineering tracks
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {speakers.map((speaker) => {
            const Icon = speaker.icon;

            return (
              <div
                key={speaker.name}
                className="panel-glow group rounded-lg border border-[var(--border-soft)] bg-[var(--surface)] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-cyan-300/12 text-cyan-300">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold">{speaker.name}</h3>
                  <p className="mt-2 text-sm font-medium text-cyan-300">{speaker.role}</p>
                  <p className="mt-5 text-base leading-7 text-slate-400">{speaker.session}</p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5 text-sm text-slate-500">
                  Live Q&A and curated session notes included
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
