import React from 'react'
import OurSlider from '../Components/slider/OurSlider'
import TestSlider from '../Components/slider/TestSlider'
import CountUp from 'react-countup';

const stats = [
    { value: 29, label: "Partner Companies" },
    { value: 120, label: "Projects Completed" },
    { value: 45, label: "Happy Clients" },
    { value: 15, label: "Years Experience" },
];

function Home() {
    return (
        <>
            <div className='bg-[#EEF2E6]'>
                <section className="hero-section flex justify-center items-center flex-col px-4 text-center">
                    <h1 className="font-[400] font-cormorant 
                 text-[32px] leading-[40px] 
                 sm:text-[48px] sm:leading-[56px] 
                 md:text-[64px] md:leading-[74px] 
                 lg:text-[84px] lg:leading-[100px] 
                 pb-[16px] lg:pb-[25px] text-[#FFFFFF]">
                        Welcome To Nirvaana Hills
                    </h1>

                    <p className="max-w-[532px] w-full mx-auto 
                font-inter font-[400] 
                text-[14px] leading-[22px] 
                sm:text-[16px] sm:leading-[24px] 
                md:text-[18px] md:leading-[27px] 
                text-[#FFFFFF] 
                pb-[20px] lg:pb-[54px]">
                        Garden Tree has blossomed into a leading company dedicated
                        to providing innovative solutions for gardening.
                    </p>

                    <button className="bg-[#6F7849] border border-[#6F7849] 
                     transition-all duration-300 
                     hover:bg-[#FFFFFF] hover:text-[#6F7849] 
                     rounded-full 
                     py-[12px] px-[28px] text-[14px] 
                     sm:py-[14px] sm:px-[30px] sm:text-[16px] 
                     md:py-[16px] md:px-[32px] md:text-[17px] 
                     lg:py-[18px] lg:px-[35px] lg:text-[18px] 
                     font-[400] font-bricolage leading-[21px] 
                     text-[#FFFFFF]">
                        Get In Touch
                    </button>
                </section>
                <section className="lg:pt-[106px] pt-[60px] lg:px-[175px] px-[20px]">
                    <div className="flex lg:flex-row flex-col lg:gap-[100px] gap-[40px] justify-center items-center">
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/assets/home/img1.png"
                                alt="About Nirvaana Hills"
                                className="max-w-[500px] w-full h-auto object-contain"
                            />
                        </div>
                        <div className="text-center lg:text-left">
                            <img
                                src="/assets/nav/logo.png"
                                className="h-[40px] w-[40px] lg:h-[54px] lg:w-[54px] mx-auto lg:mx-0"
                                alt="Logo"
                            />
                            <h6 className="font-[600] font-cormorant 
                     text-[28px] leading-[36px] 
                     sm:text-[36px] sm:leading-[44px] 
                     md:text-[42px] md:leading-[50px] 
                     lg:text-[48px] lg:leading-[58px] 
                     capitalize text-[#46543B] mt-4">
                                About Nirvaana Hills
                            </h6>
                            <p className="max-w-[492px] w-full 
                    font-[400] font-inter 
                    text-[14px] leading-[22px] 
                    sm:text-[16px] sm:leading-[24px] 
                    md:text-[17px] md:leading-[26px] 
                    lg:text-[18px] lg:leading-[27px] 
                    text-[#27342B] 
                    py-[20px] lg:pb-[32px]">
                                Nirvaana Hills, a 200-acre community. seeks a dynamic and user-friendly website to reflect its ethos.
                                A world away, yet closer than you think. The website showcases redefined farm living, blending modern
                                convenience with natural tranquillity, and effectively communicates the community’s unique lifestyle offerings.
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-[10px]">
                                <p className="font-[400] font-bricolage 
                      text-[16px] leading-[20px] 
                      sm:text-[17px] sm:leading-[21px] 
                      md:text-[18px] md:leading-[22px] 
                      text-[#021E05]">
                                    About Us
                                </p>
                                <img src="/assets/home/arrow.svg" alt="Arrow" className="h-[20px] w-[20px]" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='our-section'>
                    <div className="pt-[60px] lg:pt-[80px] relative z-10">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] lg:gap-0 pb-[100px] lg:pb-[204px]">
                            {stats.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex flex-col items-center gap-[10px] justify-center text-center"
                                >
                                    <h6 className="font-[500] font-bricolage 
                           text-[40px] leading-[50px] 
                           sm:text-[50px] sm:leading-[62px] 
                           lg:text-[62px] lg:leading-[74px] 
                           text-[#46543B]">
                                        <CountUp end={item.value} duration={2} />
                                    </h6>
                                    <p className="font-[500] font-bricolage 
                          text-[16px] leading-[22px] 
                          sm:text-[18px] sm:leading-[24px] 
                          lg:text-[20px] lg:leading-[24px] 
                          text-[#27342B]">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-[100px] px-5 lg:pl-[100px] pb-[80px] lg:pb-[140px]">
                        <div className="max-w-[220px] w-full flex-shrink-0">
                            <h6 className="font-[600] font-cormorant text-[32px] sm:text-[40px] lg:text-[48px] leading-[42px] sm:leading-[50px] lg:leading-[58px] capitalize text-[#FFFFFF]">
                                Our Services
                            </h6>
                        </div>
                        <div className="w-full overflow-hidden">
                            <OurSlider />
                        </div>
                    </div>
                </section>
                <section className="bg-[#46543B] pt-[25px] pb-[80px] lg:pb-[100px] px-[20px] lg:px-[100px]">
                    <h6 className="font-[500] text-center max-w-[504px] w-full mx-auto pb-[40px] lg:pb-[80px] font-cormorant text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[46px] lg:leading-[58px] capitalize text-[#FFFFFF]">
                        creating outdoor spaces that enrich lives
                    </h6>
                    <div className="grid grid-cols-1 gap-[32px]">
                        <div className="flex flex-col lg:flex-row items-start justify-center gap-[20px] lg:gap-[34px]">
                            <div className="w-full lg:max-w-[494px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img
                                    src="/assets/home/img3.jpg"
                                    className="w-full h-[240px] sm:h-[300px] lg:h-[367px] object-cover rounded-[30px]"
                                    alt=""
                                />
                                <div className="absolute bottom-0 p-[20px] sm:p-[30px] lg:p-[40px] left-0 w-full">
                                    <h6 className="font-[500] font-cormorant text-[22px] sm:text-[28px] lg:text-[36px] pb-[10px] sm:pb-[12px] lg:pb-[15px] leading-[30px] sm:leading-[36px] lg:leading-[44px] text-[#FFFFFF]">
                                        Modern Zen Retreat
                                    </h6>
                                    <button className="font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[48px] sm:h-[54px] lg:h-[60px] font-bricolage text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] text-[#FFFFFF] py-[6px] sm:py-[8px] px-[25px] sm:px-[30px] lg:px-[35px] rounded-full">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:max-w-[714px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img
                                    src="/assets/home/img4.jpg"
                                    className="w-full h-[240px] sm:h-[300px] lg:h-[367px] object-cover rounded-[30px]"
                                    alt=""
                                />
                                <div className="absolute bottom-0 p-[20px] sm:p-[30px] lg:p-[40px] left-0 w-full">
                                    <h6 className="font-[500] font-cormorant text-[22px] sm:text-[28px] lg:text-[36px] pb-[10px] sm:pb-[12px] lg:pb-[15px] leading-[30px] sm:leading-[36px] lg:leading-[44px] text-[#FFFFFF]">
                                        Modern Zen Retreat
                                    </h6>
                                    <button className="font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[48px] sm:h-[54px] lg:h-[60px] font-bricolage text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] text-[#FFFFFF] py-[6px] sm:py-[8px] px-[25px] sm:px-[30px] lg:px-[35px] rounded-full">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-start justify-center gap-[20px] lg:gap-[34px]">
                            <div className="w-full lg:max-w-[714px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img
                                    src="/assets/home/img5.jpg"
                                    className="w-full h-[240px] sm:h-[300px] lg:h-[367px] object-cover rounded-[30px]"
                                    alt=""
                                />
                                <div className="absolute bottom-0 p-[20px] sm:p-[30px] lg:p-[40px] left-0 w-full">
                                    <h6 className="font-[500] font-cormorant text-[22px] sm:text-[28px] lg:text-[36px] pb-[10px] sm:pb-[12px] lg:pb-[15px] leading-[30px] sm:leading-[36px] lg:leading-[44px] text-[#FFFFFF]">
                                        Modern Zen Retreat
                                    </h6>
                                    <button className="font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[48px] sm:h-[54px] lg:h-[60px] font-bricolage text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] text-[#FFFFFF] py-[6px] sm:py-[8px] px-[25px] sm:px-[30px] lg:px-[35px] rounded-full">
                                        View Details
                                    </button>
                                </div>
                            </div>
                            <div className="w-full lg:max-w-[494px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img
                                    src="/assets/home/img6.jpg"
                                    className="w-full h-[240px] sm:h-[300px] lg:h-[367px] object-cover rounded-[30px]"
                                    alt=""
                                />
                                <div className="absolute bottom-0 p-[20px] sm:p-[30px] lg:p-[40px] left-0 w-full">
                                    <h6 className="font-[500] font-cormorant text-[22px] sm:text-[28px] lg:text-[36px] pb-[10px] sm:pb-[12px] lg:pb-[15px] leading-[30px] sm:leading-[36px] lg:leading-[44px] text-[#FFFFFF]">
                                        Modern Zen Retreat
                                    </h6>
                                    <button className="font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[48px] sm:h-[54px] lg:h-[60px] font-bricolage text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[22px] text-[#FFFFFF] py-[6px] sm:py-[8px] px-[25px] sm:px-[30px] lg:px-[35px] rounded-full">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[40px] sm:pt-[50px] lg:pt-[66px] px-[20px] lg:pl-[120px]">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[80px]">
                        <div className="text-center lg:text-left">
                            <h6 className="font-[500] font-cormorant text-[28px] sm:text-[36px] lg:text-[48px] leading-[36px] sm:leading-[46px] lg:leading-[58px] text-[#46543B] pb-[16px]">
                                Life At Nirvaana
                            </h6>
                            <p className="font-[400] font-inter text-[16px] sm:text-[18px] leading-[24px] sm:leading-[27px] text-[#021E05] max-w-[506px] w-full mx-auto lg:mx-0 pb-[24px] sm:pb-[32px]">
                                Discover the beauty of Garden Tree – where every seed planted is a step
                                towards a greener, more vibrant future.
                            </p>
                            <div className="flex flex-col gap-[12px] pb-[24px] sm:pb-[32px]">
                                <div className="flex items-start sm:items-center gap-[10px]">
                                    <img src="/assets/home/done.svg" alt="" className="w-[18px] sm:w-[20px]" />
                                    <p className="font-[400] font-inter text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[#021E05]">
                                        Sustainable Gardening Consultation
                                    </p>
                                </div>
                                <div className="flex items-start sm:items-center gap-[10px]">
                                    <img src="/assets/home/done.svg" alt="" className="w-[18px] sm:w-[20px]" />
                                    <p className="font-[400] font-inter text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[#021E05]">
                                        Eco-Friendly Landscaping Services
                                    </p>
                                </div>
                                <div className="flex items-start sm:items-center gap-[10px]">
                                    <img src="/assets/home/done.svg" alt="" className="w-[18px] sm:w-[20px]" />
                                    <p className="font-[400] font-inter text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] text-[#021E05]">
                                        Organic Soil and Fertilizer Subscription Box
                                    </p>
                                </div>
                            </div>
                            <button className="bg-[#6F7849] border border-[#6F7849] transition-all duration-300 hover:bg-transparent hover:text-[#6F7849] rounded-full py-[14px] sm:py-[16px] lg:py-[18px] px-[28px] sm:px-[32px] lg:px-[35px] font-[400] font-bricolage text-[16px] sm:text-[17px] lg:text-[18px] leading-[20px] sm:leading-[21px] text-[#FFFFFF]">
                                View More
                            </button>
                        </div>
                        <div className="relative max-w-[400px] sm:max-w-[500px] lg:max-w-none w-full">
                            <div className="absolute bottom-[60px] sm:bottom-[100px] lg:bottom-[130px] left-[-30px] sm:left-[-60px] lg:left-[-86px] w-[120px] sm:w-[160px] lg:w-auto">
                                <img src="/assets/home/wrapper.png" alt="" className="w-full h-auto" />
                            </div>
                            <img
                                src="/assets/home/img7.png"
                                alt=""
                                className="w-full max-h-[350px] sm:max-h-[420px] lg:max-h-none object-contain"
                            />
                        </div>
                    </div>
                </section>
                <section className='lg:pt-[130px] md:pt-[100px] pt-[60px] lg:px-[22px] md:px-[16px] px-[10px]'>
                    <h6 className="font-[500] text-center 
                 lg:pb-[58px] md:pb-[45px] pb-[30px] 
                 font-cormorant 
                 lg:text-[48px] md:text-[36px] text-[28px] 
                 lg:leading-[58px] md:leading-[44px] leading-[36px] 
                 text-[#46543B]">
                        Testimonials
                    </h6>
                    <div className='overflow-hidden test-slider 
                  lg:pb-[200px] md:pb-[150px] pb-[100px]'>
                        <TestSlider />
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home