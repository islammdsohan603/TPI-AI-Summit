'use client';

import { useMemo, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const topics = ['Partnership', 'Student ticket', 'Speaker inquiry'];

export default function Contact() {
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [message, setMessage] = useState('');

  const helperText = useMemo(() => {
    if (message.length > 140) {
      return 'Enough detail to route this quickly.';
    }
    if (message.length > 0) {
      return 'Add a bit more context for a faster reply.';
    }
    return 'Tell the team what you need.';
  }, [message]);

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">Contact</div>
          <h2 className="mt-3 text-4xl font-semibold">A cleaner handoff into questions and submissions</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            The contact area now gives visitors a clearer path and a more responsive form surface.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="panel-glow rounded-lg border border-[var(--border-soft)] bg-[var(--surface)] p-6">
            <h3 className="text-2xl font-semibold">Event Information</h3>

            <div className="mt-8 space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-cyan-300" />
                Tangail Polytechnic Institute
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-300" />
                +880123456789
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-300" />
                aisummit@email.com
              </div>
            </div>

            <div className="mt-10 rounded-lg border border-white/10 bg-slate-950/35 p-4">
              <div className="text-sm uppercase tracking-[0.16em] text-cyan-300">Active topic</div>
              <div className="mt-3 text-xl font-semibold">{selectedTopic}</div>
              <div className="mt-2 text-sm text-slate-400">{helperText}</div>
            </div>
          </div>

          <form className="panel-glow rounded-lg border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6 sm:p-8">
            <div>
              <label className="text-sm font-medium text-slate-300">Topic</label>
              <div className="mt-3 flex flex-wrap gap-3">
                {topics.map((topic) => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      topic === selectedTopic
                        ? 'border-cyan-300/30 bg-cyan-300/10 text-cyan-100'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Name"
                className="rounded-lg border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
              />

              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
              />
            </div>

            <textarea
              rows="6"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              className="mt-4 w-full rounded-lg border border-white/10 bg-slate-950/35 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
            />

            <div className="mt-3 flex items-center justify-between text-sm text-slate-500">
              <span>{helperText}</span>
              <span>{message.length}/240</span>
            </div>

            <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
              <Send className="h-4 w-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
