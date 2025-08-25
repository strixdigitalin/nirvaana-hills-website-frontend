import React, { useState } from "react";

const images = [
  "https://picsum.photos/id/1018/800/600",
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1019/800/600",
  "https://picsum.photos/id/1020/800/600",
  "https://picsum.photos/id/1024/800/600",
  "https://picsum.photos/id/1035/800/600",
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
       <div className='ab-banner ab-banner5'>
 <div className='ab-banner-overlay'>
<h3>Our Gallery</h3>
    </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-10">
    

      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => openImage(index)}
          >
            <img
              src={src}
              alt={`Gallery ${index}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <button
            onClick={showPrev}
            className="absolute left-6 text-white text-4xl font-bold"
          >
            ‹
          </button>
          <img
            src={images[selectedIndex]}
            alt="Selected"
            className="max-h-[90%] max-w-[90%] rounded-xl shadow-lg"
          />
          <button
            onClick={showNext}
            className="absolute right-6 text-white text-4xl font-bold"
          >
            ›
          </button>
          <button
            onClick={closeImage}
            className="absolute top-6 right-6 text-white text-3xl font-bold"
          >
            ✕
          </button>
        </div>
      )}
    </div>

    </>

  );
};

export default Gallery;
