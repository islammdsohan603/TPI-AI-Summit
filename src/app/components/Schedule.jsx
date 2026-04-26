const schedule = [
  {
    time: '9:00 AM',
    title: 'Registration & Networking',
  },
  {
    time: '10:00 AM',
    title: 'Opening Ceremony',
  },
  {
    time: '11:00 AM',
    title: 'AI Session',
  },
  {
    time: '1:00 PM',
    title: 'Programming Hero Session',
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Event Schedule</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-2xl border border-gray-800"
          >
            <h3 className="text-cyan-400 text-xl font-bold">{item.time}</h3>
            <p className="mt-2 text-lg">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
