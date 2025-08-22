import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-[100px] right-[10%] md:right-[45%] lg:right-[42%]"
    >
      <img src="/assets/home/next.svg" alt="next" />
    </button>
  );
}

function PrevArrow({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute -bottom-[100px] left-[10%] md:left-[45%] lg:left-[42%] z-10"
    >
      <img src="/assets/home/prev.svg" alt="prev" />
    </button>
  );
}

function TestSlider() {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: true,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {[1, 2, 3, 4].map((item, index) => (
        <div key={index} className="px-4">
          <div
            className="
              bg-white rounded-[20px] py-[26px] px-[26px]
              transition-all duration-500
              slick-slide-custom
            "
          >
            <p className="font-[400] font-figtree text-[18px] leading-[24px] text-[#27342B] pb-[45px]">
              Yogasan has tranformed my life! The community here is like a warm
              hug. Grateful for the balance and zen it brings. Highly recommend!
            </p>
            <div className="flex items-center gap-[20px]">
              <img
                src="/assets/home/profile.png"
                className="h-[55px] w-[55px] rounded-full"
                alt="profile"
              />
              <div>
                <p className="font-[700] font-cormorant text-[24px] leading-[28px] text-[#6F7849]">
                  Alice W.
                </p>
                <p className="font-[400] font-figtree text-[18px] leading-[24px] text-[#46543B]">
                  21 Year Old
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TestSlider;
