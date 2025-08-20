import React, { useState } from "react";

const faqs = [
  {
    question: "Where is Nirvaana Hills located?",
    answer:
      "Nirvaana Hills is located in the serene landscapes of Haryana, perfectly connected by three national highways and just 15 minutes from the upcoming Ambala–Kotputli Expressway."
  },
  {
    question: "What makes Nirvaana Hills different from other projects?",
    answer:
      "Every plot comes with 101+ native and fruit-bearing trees, 65% green coverage, vastu-compliant planning, and infrastructure designed for sustainability, not just convenience."
  },
  {
    question: "What plot sizes are available?",
    answer:
      "We offer large half-acre and full-acre plots, with low density — maximum 2.2 plots per acre."
  },
  {
    question: "Can I work remotely from Nirvaana Hills?",
    answer:
      "Yes! High-speed 1 Gbps fiber internet ensures seamless work-from-home, surrounded by peaceful greenery."
  },
  {
    question: "Is it a good investment?",
    answer:
      "Yes, but more than that, it’s a lifestyle choice. With rapid infrastructure growth and connectivity, value appreciation is expected while offering you a richer, healthier way of life."
  }
];

function FAQ() {
     const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <div className="max-w-3xl mx-auto py-10 px-4 ">
      <h2 className=" text-center mb-6 faq-heading" >Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 text-left font-medium text-lg"
            >
              <span>{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ