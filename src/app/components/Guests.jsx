const guests = [
  'Students',
  'Developers',
  'AI Researchers',
  'Tech Enthusiasts',
  'Startup Founders',
  'Industry Experts',
];

export default function Guests() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Who Should Attend?</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {guests.map((guest, index) => (
          <div key={index} className="bg-[#111827] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold">{guest}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
