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

   
    const sliderData = [
        {
            img: "/assets/home/img2.png",
            title: "Living thoughtfully designed",
            desc: "Designed for those who seek harmony with nature and effortless living, Nirvaana Hills blends European-inspired charm with nature-led design. Its layout balances openness, sustainability, and serenity, where every path, view, and detail is designed with purpose and care.",
        },
        {
            img: "/assets/home/img2.png",
            title: "Your everyday retreat",
            desc: "Here’s where everyday life feels a little brighter. A place buzzing with energy, laughter, and the simple joys of being together. Whether it’s friendly matches, lazy afternoons, or catching up with neighbours, there’s always something happening and always a reason to stay a little longer.",
        },
        {
                        img: "/assets/home/img2.png",

            title: "Where nature nurtures community",
            desc: "Nirvaana Hills is where the beauty of the hills meets the warmth of community. It’s where neighbours become friends and every corner invites togetherness, in shared adventures and moments that bring you closer to each other. Here, life flows easily, surrounded by nature and experiences to treasure."},
        {
                      img: "/assets/home/img2.png",

            title: "The finer details",
            desc: "Here, every farmhouse opens to vast greens & complete privacy. From inviting pathways to welcoming entrances, nature and comfort meet in perfect balance. Wide open spaces surround each home, offering room to breathe and unwind. Every window captures a view worth pausing for.",
        },
    ];

    return (
        <>
            <Slider {...settings}>
                {sliderData.map((item, idx) => (
                    <div key={idx} className='relative pb-[120px] pr-[20px]'>
                        <img
                            src={item.img}
                            className='h-[345px] w-[342px] rounded-[4px] rounded-r-[20px] object-cover'
                            alt={item.title}
                        />
                        <div className='w-full pb-[20px] pl-[27px] pr-[45px] rounded-[20px] bg-[#FFFFFF] max-w-[342px] absolute bottom-[0px] left-[40px]'>
                            <button className='bg-[#6F7849] mr-[40px] ml-auto h-[50px] w-[50px] flex justify-center items-center rounded-b-full'>
                                <img src="/assets/home/Vector.svg" alt="arrow" />
                            </button>
                            <h6 className="font-[700] font-cormorant text-[32px] leading-[30px] pt-[7px] pb-[8px] text-[#46543B]">
                                {item.title}
                            </h6>
                            <p className="font-[400] font-inter text-[18px] leading-[27px] text-[#27342B]">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default OurSlider;
