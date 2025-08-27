"use client";
import React from "react";

const faqs = [
  { question: "What is the 3KS Framework?" },
  { question: "How can I open a student chapter?" },
  { question: "What are the benefits of joining the SMILE Network?" },
  { question: "How can I join the network as a Founder?" },
];

const Faqs: React.FC = () => {
  return (
    <section className="bg-[#121212] text-white py-16 px-6 lg:px-24">
      {/* Heading */}
      <div className="mb-12 ml-16 ">
        <h2 className="text-5xl font-light">FAQs</h2>
        <p className="italic text-5xl font-light text-gray-300">All about SMILE</p>
      </div>

      {/* FAQ List */}
      <div className="space-y-6 ml-16">
        {faqs.map((item, index) => (
          <div key={index} className="border-b border-gray-600 pb-4">
            <p className="text-lg">{item.question}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;

