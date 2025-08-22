import React, { useState, useEffect } from "react";
import ist from '../Assets/ist3.jpg'
import ist2 from '../Assets/ist2.jpg'
import ist3 from '../Assets/ist1.jpg'
import ist4 from '../Assets/ist14.jpg'


const images = [
  ist,
  ist2,
  ist3,
  ist4
];
function Galleryslider() {
     const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4 sec pr change hoga
    return () => clearInterval(interval);
  }, []);
  return (
    <>
  <div className="relative w-full mx-auto h-[500px] overflow-hidden shadow-lg">
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

      {/* Dots Indicator */}
      {/* <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer transition-all ${
              index === current ? "bg-white w-6" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div> */}
    </div>
    </>
  )
}

export default Galleryslider