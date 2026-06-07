export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        <div className="px-8">
          <h2 className="font-serif text-3xl mb-4">Contact Us</h2>
          <p className="text-lg mb-2 bg-white w-fit p-2 rounded-lg shadow-xl font-nunito">Treasure Field College</p>
          <p className="text-lg mb-2 bg-white w-fit p-2 rounded-lg shadow-xl font-nunito">Jos, Plateau State</p>
          <p className="text-lg mb-2 bg-white w-fit p-2 rounded-lg shadow-xl font-nunito">Email: info@treasurefield.edu</p>
          <p className="text-lg mb-2 bg-white w-fit p-2 rounded-lg shadow-xl font-nunito">Phone: +234 xxx xxx xxxx</p>
        </div>

        <form className="bg-white p-8 shadow rounded-xl">

          <input
            placeholder="Your Name"
            className="w-full border border-maroon p-3 mb-4 rounded font-nunito" required
          />

          <input
            placeholder="Your Email"
            className="w-full border border-maroon p-3 mb-4 rounded font-nunito" required
          />

          <textarea
            placeholder="Message"
            className="w-full border border-maroon p-3 mb-4 rounded font-nunito" required
          ></textarea>

          <button className="bg-maroon text-white px-6 py-3 rounded font-nunito">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}