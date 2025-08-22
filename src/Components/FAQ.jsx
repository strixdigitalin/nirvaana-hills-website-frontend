import React, { useState } from "react";

const faqs = [
  {
    question: "What is Nirvaana Hills?",
    answer:
      "Nirvaana Hills is a 200-acre premium farmhouse community located in Naurangabas Rajputana, Haryana. It has been thoughtfully planned around the principles of sustainability, nature, and wellness. With scenic landscapes, curated amenities, and a secure gated environment, it offers families a long-term opportunity to own agricultural land while enjoying the comforts of modern rural living."
  },
  {
    question: "How far is it from Gurgaon/Delhi?",
    answer:
      "Nirvaana Hills is approximately 130–135 minutes from both Gurgaon and Delhi, making it highly accessible for weekend getaways or even a permanent retreat. Its proximity to NH-148B and NH-152D highways ensures smooth connectivity while still offering the tranquility of countryside living."
  },
  {
    question: "What makes Nirvaana Hills different from other farmhouse projects?",
    answer:
      "Unlike scattered farmhouse plots, Nirvaana Hills is a master-planned, contiguous 200-acre gated community. It combines farmland ownership with sustainable infrastructure, lifestyle amenities, and professionally managed green spaces. This unique blend ensures buyers don’t just own land but also become part of a vibrant, eco-conscious community."
  },
  {
    question: "What is the plot size offered?",
    answer:
      "Plots at Nirvaana Hills start from ½ acre (approximately 2,420 sq. yards) onwards. Buyers can choose their preferred size depending on availability, ensuring flexibility for personal, investment, or larger farmhouse development needs."
  },
  {
    question: "Is the land freehold or leasehold?",
    answer:
      "The land is 100% freehold agricultural land. Buyers receive complete ownership rights, including a separate registry and mutation in their name, making the investment secure and future-proof."
  },
  {
    question: "What lifestyle amenities does Nirvaana Hills offer?",
    answer:
      "Nirvaana Hills is thoughtfully designed to be much more than just farmland ownership. The community offers a scenic golf course, clubhouse, curated forest trails, and table-to-farm living experiences, creating the perfect balance of leisure and nature. With the plantation of over 1,00,000 trees across dedicated green zones, residents enjoy a truly serene environment that enhances wellness, recreation, and community living."
  },
  {
    question: "Any sustainable practices which are being followed inside the community?",
    answer:
      "Yes. Sustainability is at the heart of Nirvaana Hills. The project incorporates solar-powered street lighting, eco-farming initiatives, segregated waste disposal, organic farming zones, and a compost plant. Additionally, a large-scale plantation of over 1,00,000 trees ensures a long-term ecological balance."
  },
  {
    question: "Can I grow my own fruits, vegetables, or plants?",
    answer:
      "Absolutely. Owners can cultivate their farmland for personal use, organic farming, or farm-to-fork produce. Whether it’s fruits, vegetables, medicinal herbs, or seasonal crops, the project encourages a self-sufficient and healthy lifestyle."
  },
  {
    question: "What is the price of farmland here?",
    answer:
      "Pricing varies depending on plot size and location within the community. Premium locations such as corner plots, East-facing, or Hill Adjacent options are available at an additional PLC (Preferential Location Charges). This ensures buyers can choose according to both budget and preference."
  },
  {
    question: "What are the payment plans available?",
    answer:
      "We offer flexible payment plans tailored to buyer preferences. Options can be structured based on booking stage, installment schedules, and buyer requirements, ensuring ease and convenience in ownership."
  },
  {
    question: "How much appreciation can I expect in 2-3 years?",
    answer:
      "While appreciation depends on market trends, location advantages, and infrastructure growth, Nirvaana Hills lies in a fast-developing belt near expressways and upcoming tourism hubs. Based on projections, land values are expected to rise significantly—early buyers stand to benefit from an estimated 50% appreciation in the next 2–3 years."
  },
  {
    question: "Are there any expansion plans in future phases?",
    answer:
      "Yes. Nirvaana Hills is envisioned as a large-scale community project. After the successful launch of Phase 1, Phase 2 and Phase 3 expansions are planned, which will further enhance the community ecosystem and offer additional opportunities for buyers."
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