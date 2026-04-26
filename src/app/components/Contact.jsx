export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold">Contact Us</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-6">Event Information</h3>

          <div className="space-y-4 text-gray-300">
            <p>📍 Tangail Polytechnic Institute</p>
            <p>📞 +880123456789</p>
            <p>📧 aisummit@email.com</p>
          </div>
        </div>

        <form className="bg-[#111827] p-8 rounded-3xl space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-[#1f2937] p-4 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full bg-[#1f2937] p-4 rounded-xl"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full bg-[#1f2937] p-4 rounded-xl"
          ></textarea>

          <button className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
