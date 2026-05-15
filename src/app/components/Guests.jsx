import { BriefcaseBusiness, Cpu, GraduationCap, Rocket, Users, Wrench } from 'lucide-react';

const guests = [
  { title: 'Students', icon: GraduationCap, note: 'Learn faster with real project context.' },
  { title: 'Developers', icon: Wrench, note: 'Compare workflows, tools, and implementation patterns.' },
  { title: 'AI Researchers', icon: Cpu, note: 'Connect research themes to applied product work.' },
  { title: 'Tech Enthusiasts', icon: Users, note: 'Follow the ecosystem and join the community loop.' },
  { title: 'Startup Founders', icon: Rocket, note: 'Pressure-test product ideas with builders in the room.' },
  { title: 'Industry Experts', icon: BriefcaseBusiness, note: 'Mentor talent and spot strong student teams.' },
];

export default function Guests() {
  return (
    <section className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">Audience Fit</div>
          <h2 className="mt-3 text-4xl font-semibold">Built for people who want applied momentum</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            The site now explains who this event is for with more clarity and more useful visual structure.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {guests.map((guest) => {
            const Icon = guest.icon;

            return (
              <div
                key={guest.title}
                className="panel-glow rounded-lg border border-[var(--border-soft)] bg-[var(--surface)] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{guest.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{guest.note}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/5">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
