import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img from '../Assets/ist13.jpg'
import img2 from '../Assets/ist5.jpg'
import img3 from '../Assets/ist11.jpg'
import img4 from '../Assets/ist6.jpg'
import img5 from '../Assets/ist3.jpg'
import img6 from '../Assets/ist7.jpg'
import img7 from '../Assets/ist4.jpg'

const timelineData = [
  {
    title: "Belonging",
    description:
      "A place where neighbors become friends and families grow together. At Nirvaana Hills, you don’t just own a plot — you become part of a community rooted in trust and warmth.",
    image: img,
  },
  {
    title: "Grow Wild, Grow Free",
    description:
      "Let your children climb trees, run through meadows, and learn from the land. Here, freedom is natural — not limited by walls or traffic.",
    image: img2,
  },
  {
    title: "Sustainability",
    description:
      "Every plot nurtures the future with 101 trees. With solar lights, water management, and eco-friendly design, Nirvaana Hills is built to give back more than it takes.",
    image: img3,
  },
  {
    title: "Wellness",
    description:
      "From yoga pavilions to walking trails, meditation spaces to fresh organic produce — wellness isn’t an activity here, it’s a way of life.",
    image: img4,
  },
  {
    title: "Work–Life Balance",
    description:
      "With high-speed internet, scenic views, and peaceful surroundings, work feels lighter, and life feels fuller. Escape the chaos without losing connectivity.",
    image: img5,
  },
  {
    title: "Restart Life Together",
    description:
      "Many families choose Nirvaana Hills to build a legacy home, where multiple generations live side by side yet with their own space.",
    image: img6,
  },
  {
    title: "The Legacy",
    description:
      "Nirvaana Hills is more than land — it’s a legacy for the generations that follow. Trees that grow with your children, memories that last beyond you, and a home that stands for something greater.",
    image: img7,
  },
];

const LifeAtNirvaana = () => {
  return (
    <>
       <div className='ab-banner ab-banner4'>
 <div className='ab-banner-overlay'>
<h3>Life At Nirvaana</h3>
    </div>
    </div>
<div className="LifeNirvaana-div">

    <div className="max-w-6xl mx-auto px-4 py-16 " >
     

      <div className="relative border-l-4  pl-6 space-y-24" style={{borderLeft: '10px solid #354123'}}>
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Circle marker */}
            <span className="absolute -left-10 w-6 h-6 rounded-full border-4 border-white shadow-lg animate-pulse" style={{backgroundColor:'#354123'}} />

            {/* Image with parallax-like effect */}
            <motion.div
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-shrink-0 w-full md:w-1/2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="w-full md:w-1/2"
            >
              <h3 className="text-4xl font-semibold mb-2">{item.title}</h3>
              <p className="text-xl text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
</div>

    </>

  );
};

export default LifeAtNirvaana;
