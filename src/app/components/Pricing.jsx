const pricing = [
  {
    name: 'Basic',
    price: '$20',
  },
  {
    name: 'Premium',
    price: '$50',
  },
  {
    name: 'Ultimate',
    price: '$100',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#081020] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">Ticket Packages</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricing.map((item, index) => (
            <div
              key={index}
              className="bg-[#111827] p-8 rounded-3xl text-center"
            >
              <h3 className="text-2xl font-bold">{item.name}</h3>
              <h2 className="text-5xl font-bold text-cyan-400 mt-6">
                {item.price}
              </h2>

              <button className="mt-8 bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600 transition">
                Buy Ticket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
