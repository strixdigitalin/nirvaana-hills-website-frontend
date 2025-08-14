import React from 'react'
import Slider from 'react-slick';

function BlogSlider() {
    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        cssEase: "ease",
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            <Slider {...settings}>
                <div>
                    <div className='mr-[30px]'>
                        <img src="/assets/home/img8.png" className='h-[250px] w-full object-cover rounded-[200px]' alt="" />
                        <div className='p-[10px] flex flex-col gap-[20px]'>
                            <h2 className='font-[500] text-[25px] text-[#A3A3A3] figtree'>Pentagon is on the Quest for Exceptional Talent to Join Our Team</h2>
                            <p className='font-[500] text-[16px] text-[#A3A3A3] figtree uppercase'>April 1, 2025</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mr-[30px]'>
                        <img src="/assets/home/img9.png" className='h-[250px] w-full object-cover rounded-[200px]' alt="" />
                        <div className='p-[10px] flex flex-col gap-[20px]'>
                            <h2 className='font-[500] text-[25px] text-[#A3A3A3] figtree'>Pentagon is on the Quest for Exceptional Talent to Join Our Team</h2>
                            <p className='font-[500] text-[16px] text-[#A3A3A3] figtree uppercase'>April 1, 2025</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mr-[30px]'>
                        <img src="/assets/home/img10.png" className='h-[250px] w-full object-cover rounded-[200px]' alt="" />
                        <div className='p-[10px] flex flex-col gap-[20px]'>
                            <h2 className='font-[500] text-[25px] text-[#A3A3A3] figtree'>Pentagon is on the Quest for Exceptional Talent to Join Our Team</h2>
                            <p className='font-[500] text-[16px] text-[#A3A3A3] figtree uppercase'>April 1, 2025</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mr-[30px]'>
                        <img src="/assets/home/img8.png" className='h-[250px] w-full object-cover rounded-[200px]' alt="" />
                        <div className='p-[10px] flex flex-col gap-[20px]'>
                            <h2 className='font-[500] text-[25px] text-[#A3A3A3] figtree'>Pentagon is on the Quest for Exceptional Talent to Join Our Team</h2>
                            <p className='font-[500] text-[16px] text-[#A3A3A3] figtree uppercase'>April 1, 2025</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mr-[30px]'>
                        <img src="/assets/home/img9.png" className='h-[250px] w-full object-cover rounded-[200px]' alt="" />
                        <div className='p-[10px] flex flex-col gap-[20px]'>
                            <h2 className='font-[500] text-[25px] text-[#A3A3A3] figtree'>Pentagon is on the Quest for Exceptional Talent to Join Our Team</h2>
                            <p className='font-[500] text-[16px] text-[#A3A3A3] figtree uppercase'>April 1, 2025</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='mr-[30px]'>
                        <img src="/assets/home/img10.png" className='h-[250px] w-full object-cover rounded-[200px]' alt="" />
                        <div className='p-[10px] flex flex-col gap-[20px]'>
                            <h2 className='font-[500] text-[25px] text-[#A3A3A3] figtree'>Pentagon is on the Quest for Exceptional Talent to Join Our Team</h2>
                            <p className='font-[500] text-[16px] text-[#A3A3A3] figtree uppercase'>April 1, 2025</p>
                        </div>
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default BlogSlider