const speakers = [
  {
    name: 'Jhankar Mahbub',
    role: 'Founder of Programming Hero',
  },
  {
    name: 'AI Research Expert',
    role: 'Machine Learning Engineer',
  },
  {
    name: 'Frontend Architect',
    role: 'React Specialist',
  },
];

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-[#081020] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Programming Hero Speakers</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-[#111827] p-8 rounded-3xl text-center"
            >
              <div className="w-24 h-24 bg-cyan-500 rounded-full mx-auto mb-6"></div>

              <h3 className="text-2xl font-bold">{speaker.name}</h3>
              <p className="text-cyan-400 mt-2">{speaker.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
