'use client'
import { useState } from "react";

export default function ContactMain() {
  const [form, setForm] = useState({
    title: "Mx.",
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    consent: false,
  });

  return (
    <main className="bg-[#121212] w-full px-6 md:px-16 py-12 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <div>
            <h2 className="text-lg text-white font-semibold mb-2">Email</h2>
            <p className="text-white">founders@smile-global.org</p>
          </div>

          <div>
            <h2 className="text-lg text-white font-semibold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/society-for-mental-health-inclusivity-literacy-empowerment" className="text-white hover:text-gray-400">
                LinkedIn
              </a>
              <a href="https://www.instagram.com/we.spread.smiles/following/?hl=en" className="text-white hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg text-white font-semibold mb-2">Address</h2>
            <p className="text-white">
              SMILE GLOBAL <br />
              {/* Add actual address here if needed */}
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-3xl text-white font-bold mb-8">Contact Us</h1>
          <form className="space-y-6">
            
            {/* Name Row */}
            <div className="grid grid-cols-3 gap-4">
              <select
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="border-b border-gray-400 focus:outline-none py-1 bg-transparent text-white"
              >
                <option className="text-black">Mx.</option>
                <option className="text-black">Mr.</option>
                <option className="text-black">Ms.</option>
                <option className="text-black">Mrs.</option>
              </select>
              <input
                type="text"
                placeholder="First Name *"
                className="border-b border-gray-400 focus:outline-none py-1 bg-transparent text-white"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border-b border-gray-400 focus:outline-none py-1 bg-transparent text-white"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full border-b border-gray-400 focus:outline-none py-1 bg-transparent text-white"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            {/* Message */}
            <textarea
              placeholder="Message *"
              rows={4}
              className="w-full border-b border-gray-400 focus:outline-none py-1 bg-transparent text-white"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />

            {/* Checkbox */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) =>
                  setForm({ ...form, consent: e.target.checked })
                }
                className="mt-1"
              />
              <p className="text-sm text-gray-300">
                I consent having my information processed by SMILE Global and its
                partners. Data will be used to process your request, statistics,
                and promotion.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 font-medium hover:bg-[#3e1409] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
