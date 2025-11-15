import React, { useState, useEffect } from "react";
import ist from '../Assets/real (1).jpeg'
import ist2 from '../Assets/real (1).jpg'
import ist3 from '../Assets/real (2).jpeg'
import ist4 from '../Assets/real (2).jpg'
import ist5 from '../Assets/real (3).jpeg'
import ist6 from '../Assets/real (3).jpg'
import ist7 from '../Assets/real (4).jpeg'
import ist8 from '../Assets/real (4).jpg'
import ist9 from '../Assets/real (5).jpeg'
import ist10 from '../Assets/real (5).jpg'

const images = [
  ist,
  ist2,
  ist3,
  ist4,
  ist5,
  ist6,
  ist7,
  ist8,
  ist9,
  ist10
];

function Galleryslider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="
        relative w-full mx-auto 
        h-[200px]
        sm:h-[400px]
        md:h-[500px]
        lg:h-[600px]
        xl:h-[700px]
        overflow-hidden shadow-lg
      "
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Corner text added here */}
        <p className="absolute bottom-3 right-3 text-[16px] md:text-[16px] text-white opacity-70 bg-black/30 px-2 py-[2px] rounded">
          Actual Nirvaana Hills Images.
        </p>
      </div>
    </>
  );
}

export default Galleryslider;
