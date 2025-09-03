import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useTransform } from "framer-motion";
import belonging from '../Assets/ist5.jpg'
import grow from '../Assets/brother-sister-playing-with-kite-plane-field-sunset.jpg'
import Sustainability from '../Assets/hispanic-mother-daughter-harvesting-vegetables-together-garden.jpg'
import yoga from '../Assets/ist3.jpg'
import Work from '../Assets/belongig.jpg'
import legacy from '../Assets/LAN-THE-LEGASY.jpg'
import img6 from '../Assets/ist3.jpg'
import whitelogo from '../Assets/white-logo.png'

const timelineData = [
  {
    title: "Nirvaana, where living feels like belonging",
    description:
      "From serene hilltop views to the gentle embrace of endless green, each day finds its quiet rhythm.The breeze carries the scent of earth, and the mind slows gently to nature’s rhythm. Morning tea finds its way under dappled light filtering through the trees. Life here moves at its own pace - unhurried, grounded, and deeply connected to the land. A place to think, breathe freely, and live meaningfully",
    image: belonging,
  },
  {
    title: "Grow wild, Grow Free",
    description:
      "This a place where childhood is shaped by nature, not screens. Where laughter rises from shared stories, not digital noise. Where open skies, muddy feet, and tree climbing afternoons awaken joy and curiosity. Surrounded by green spaces and simple pleasures, children are free to explore, imagine, and grow. It’s the kind of environment that nurtures imagination, calm, and carefree play, just the way childhood should be.",
    image: grow,
  },
  {
    title: "Sustainability, crafted for everyday living",
    description:
      "Rooted in sustainability and slow living, every detail is carefully designed, for you and for the planet. Fresh & seasonal produce grows close to home, bringing farm-to-fork living to your kitchen. Solar lighting along pathways adds a gentle glow after dusk, lighting the way home with nature’s touch. The open-air clubhouse blends comfort with climate-conscious design, creating spaces that are easy, open and in tune with nature. Natural & safe materials are chosen for their durability, reflecting a way of life in harmony with the land.",
    image: Sustainability,
  },
  {
    title: "Where wellness isn’t an escape",
    description:
      "It’s how you live Wellness here is not something you seek on a weekend. It’s part of everyday life. Mornings begin with soft light and slow stretches. Clean air fills your lungs. Fresh, homegrown food fills your plate. The pace is calm, the spaces are open, and balance finds its way into how you move, feel, and live. And when well-being becomes part of your everyday life, clarity, energy, and a quiet sense of fulfilment naturally follow.",
    image: yoga,
  },
  {
    title: "Find Your New Work-Life Balance",
    description:
      "Imagine starting your mornings with the soft mist rolling over green hills, and your workspace framed by endless open skies. At Nirvaana Hills, working remotely transforms into an experience where productivity meets peace, and ambition finds its rhythm in nature’s quiet pulse. Here, high-speed connectivity keeps you plugged in when you need it, while your surroundings inspire you to slow down, breathe deeper, and think clearer. Reconnect with your goals, with your passions, and most importantly, with yourself — in a place designed to nourish your spirit as much as your ambitions.",
    image: Work,
  },
  {
    title: "Restart Life, Together",
    description:
      "Imagine waking up to sun-drenched mornings, surrounded by hills, forests, and the laughter of your closest friends. A place where weekends turn into lifelong memories, and every sunset is shared over a cup of chai or a bonfire. What if that dream of owning a farmhouse wasn’t just yours alone? What if it became a shared reality, with the people who’ve always felt like home? At Nirvaana Hills, the life you’ve always imagined is now within reach. Pool in. Invest together. Build a space that reflects your bond, your rhythm, your vision of escape.",
    image: img6,
  },
  {
    title: "A legacy that lives on, nurtured over time",
    description:
      "Some spaces feel like they have always meant to be part of your family’s story. Spaces where stories are shared under the same trees, and values grow stronger with each passing day, rooted in love and togetherness. Built for quiet moments and lasting memories, this is where one generation finds joy, and the next finds roots. A legacy nurtured over time, lovingly passed from one generation to the next. A place to live well today, and leave something meaningful for tomorrow. It’s a place where memories grow into a lasting legacy.",
    image: legacy,
  },
];

const LifeAtNirvaana = () => {
    useEffect(() => {
              AOS.init({
                duration: 1000, // animation duration in ms
                once: true,     // whether animation should happen only once
              });
            }, []);
  return (
    <>
   <div className='ab-banner ab-banner2'>
 <div className='ab-banner-overlay'>
<img className="small-banner-logo" src={whitelogo}  data-aos="fade-up"/>
<h3 className='Belleza'  data-aos="fade-up">LIFE AT NIRVAANA</h3>

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
              <h3 className="text-3xl font-semibold mb-2 Belleza">{item.title}</h3>
              <p className="text-1xl text-gray-600 leading-relaxed">{item.description}</p>
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
