import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2.3, 
        slidesToScroll: 1,
        arrows: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1.3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                {Array(4).fill(0).map((_, idx) => (
                    <div key={idx} className='relative pb-[120px] pr-[20px]'>
                        <img
                            src="/assets/home/img2.png"
                            className='h-[345px] w-[342px] rounded-[4px] rounded-r-[20px] object-cover'
                            alt=""
                        />
                        <div className='w-full pb-[20px] pl-[27px] pr-[45px] rounded-[20px] bg-[#FFFFFF] max-w-[342px] absolute bottom-[0px] left-[40px]'>
                            <button className='bg-[#6F7849] mr-[40px] ml-auto h-[50px] w-[50px] flex justify-center items-center rounded-b-full'>
                                <img src="/assets/home/Vector.svg" alt="" />
                            </button>
                            <h6 className="font-[700] font-cormorant text-[32px] leading-[30px] pt-[7px] pb-[8px] text-[#46543B]">
                                Re-start Balance
                            </h6>
                            <p className="font-[400] font-inter text-[18px] leading-[27px] text-[#27342B]">
                                Transform your outdoor space with Garden Tree's eco-friendly landscaping services.
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default OurSlider;
