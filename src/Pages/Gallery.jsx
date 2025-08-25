import React from "react";
import img1 from "../Assets/real (1).jpeg";
import img2 from "../Assets/real (1).png";
import img3 from "../Assets/real (2).jpeg";
import img4 from "../Assets/real (2).png";
import img5 from "../Assets/real (3).jpeg";
import img6 from "../Assets/real (3).png";
import img7 from "../Assets/real (4).jpeg";
import img8 from "../Assets/real (4).png";
import img9 from "../Assets/real (5).jpeg";
import img10 from "../Assets/real (5).png";
import img11 from "../Assets/real (6).jpeg";
import img12 from "../Assets/real (7).jpeg";
import whitelogo from '../Assets/white logo.png'



const images = [
  { src: img1, className: "wide" },
  { src: img2 },
  { src: img3 },
  { src: img4, className: "wide" },
  { src: img5 },
  { src: img6 },
  { src: img7, className: "wide2" },
  { src: img8 },
  { src: img9 },
  { src: img10, className: "wide" },
  { src: img11 },
  { src: img12 }
];

const Gallery = () => {
  return (
  <>
   <div className='ab-banner ab-banner2'>
   <div className='ab-banner-overlay'>
  <img className="small-banner-logo" src={whitelogo}/>
  <h3 className='Belleza'>Gallery</h3>
  
      </div>
      </div>
      <div className="gallery">
      {images.map((img, i) => (
        <div key={i} className={`gallery-item ${img.className || ""}`}>
          <img src={img.src} alt={`gallery-${i}`} />
        </div>
      ))}
    </div>
  </>
  );
};

export default Gallery;
