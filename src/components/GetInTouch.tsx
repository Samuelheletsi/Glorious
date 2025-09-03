'use client';
import contactData from '@/data/contact.json';

export default function GetInTouch() {
  return (
    <section className="px-6 py-20 bg-[#3D367E] text-white">
      <h2 className="text-3xl font-bold text-center mb-2">Get In Touch</h2>
      <p className="text-center text-sm mb-10 max-w-2xl mx-auto">
        Have a question, a prayer request, or just want to say hello? We'd love to hear from you.
      </p>

      {/* form wrapper centered */}
      <div className="flex justify-center">
        <form className="w-full max-w-xl bg-[#4F4599] rounded-2xl p-8 flex flex-col gap-6 shadow-lg">
          <div className="flex gap-4 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-4 py-3 rounded-md border border-transparent placeholder-gray-600 bg-[#fbfbfe]"
            />
            <input
              type="text"
              placeholder="Surname"
              className="flex-1 px-4 py-3 rounded-md border border-transparent placeholder-gray-600 bg-[#fbfbfe]"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 rounded-md border border-transparent placeholder-gray-600 bg-[#fbfbfe] w-full"
          />
          <select
            className="px-4 py-3 rounded-md border border-transparent text-gray-700 bg-[#fbfbfe] w-full"
            defaultValue=""
          >
            <option disabled value="">
              Select an area of interest
            </option>
            {contactData.interests.map((i, idx) => (
              <option key={idx} value={i}>
                {i}
              </option>
            ))}
          </select>
          <textarea
            placeholder="Message"
            className="px-4 py-3 rounded-md border border-transparent placeholder-gray-600 bg-[#fbfbfe] w-full resize-none"
            rows={5}
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-md w-max mx-auto hover:bg-yellow-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
