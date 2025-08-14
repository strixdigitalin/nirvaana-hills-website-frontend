import React from 'react'
import OurSlider from '../Components/slider/OurSlider'

function Home() {
    return (
        <>
            <div className='bg-[#EEF2E6]'>
                <section className='hero-section flex justify-center items-center flex-col'>
                    <h1 className="font-[400] font-cormorant text-[84px] leading-[100px] text-center pb-[25px] text-[#FFFFFF]">Welcome To Nirvaana Hills</h1>
                    <p className="max-w-[532px] w-full mx-auto font-inter font-[400] text-[18px] leading-[27px] text-[#FFFFFF] text-center lg:pb-[54px] pb-[26px]">Garden Tree has blossomed into a leading company dedicated
                        to providing innovative solutions for gardening.</p>
                    <button className='bg-[#6F7849] border border-[#6F7849] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#6F7849] rounded-full py-[18px] px-[35px] font-[400] font-bricolage text-[18px] leading-[21px] text-[#FFFFFF]'>Get In Touch</button>
                </section>
                <section className='lg:pt-[106px] pt-[80px] lg:px-[175px] pl-[20px]'>
                    <div className="flex lg:flex-row flex-col lg:gap-[100px] justify-center items-center gap-[30px]">
                        <div>
                            <img src="/assets/home/img1.png" alt="" />
                        </div>
                        <div>
                            <img src="/assets/nav/logo.png" className='h-[54px] w-[54px]' alt="" />
                            <h6 className="font-[600] font-cormorant text-[48px] leading-[58px] capitalize text-[#46543B]">about Nirvaana Hills</h6>
                            <p className="max-w-[492px] w-full font-[400] font-inter text-[18px] leading-[27px] text-[#27342B] pb-[32px]">Nirvaana Hills, a 200-acre community. seeks a dynamic and user-friendly websites to reflect its ethos A world away,yet closer than you think. The website will showcases redefined farm living, blending modern convenience with natural tranquillity, and effectively communicate the community’s unique lifestyle offerings.</p>
                            <div className="flex items-center gap-[10px]">
                                <p className="font-[400] font-bricolage text-[18px] leading-[22px] text-[#021E05]">About Us</p>
                                <img src="/assets/home/arrow.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='our-section'>
                    <div className='pt-[80px] relative z-10'>
                        <div className="grid lg:grid-cols-4 grid-cols-1 pb-[204px]">
                            <div className='flex flex-col items-center gap-[10px] justify-center'>
                                <h6 className="font-[500] font-bricolage text-[62px] leading-[74px] text-center text-[#46543B]">29</h6>
                                <p className="font-[500] font-bricolage text-[20px] leading-[24px] text-center text-[#27342B]">Partner Companies</p>
                            </div>
                            <div className='flex flex-col items-center gap-[10px] justify-center'>
                                <h6 className="font-[500] font-bricolage text-[62px] leading-[74px] text-center text-[#46543B]">29</h6>
                                <p className="font-[500] font-bricolage text-[20px] leading-[24px] text-center text-[#27342B]">Partner Companies</p>
                            </div>
                            <div className='flex flex-col items-center gap-[10px] justify-center'>
                                <h6 className="font-[500] font-bricolage text-[62px] leading-[74px] text-center text-[#46543B]">29</h6>
                                <p className="font-[500] font-bricolage text-[20px] leading-[24px] text-center text-[#27342B]">Partner Companies</p>
                            </div>
                            <div className='flex flex-col items-center gap-[10px] justify-center'>
                                <h6 className="font-[500] font-bricolage text-[62px] leading-[74px] text-center text-[#46543B]">29</h6>
                                <p className="font-[500] font-bricolage text-[20px] leading-[24px] text-center text-[#27342B]">Partner Companies</p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:pl-[100px] pl-[20px] pb-[140px] flex lg:gap-[100px] gap-[20px] lg:flex-row flex-col'>
                        <div className='max-w-[162px] w-full'>
                            <h6 className="font-[600] font-cormorant text-[48px] leading-[58px] capitalize text-[#FFFFFF]">Our Services</h6>
                        </div>
                        <div className='max-w-full overflow-hidden w-full'>
                            <OurSlider />
                        </div>
                    </div>
                </section>
                <section className='bg-[#46543B] pt-[25px] pb-[100px] lg:px-[100px] px-[20px]'>
                    <h6 className="font-[500] text-center max-w-[504px] w-full mx-auto lg:pb-[80px] pb-[40px] font-cormorant text-[48px] leading-[58px] capitalize text-[#FFFFFF]">creating outdoor spaces
                        that enrich lives</h6>
                    <div className='grid grid-cols-1 gap-[32px]'>
                        <div className='flex gap-[34px] lg:flex-row justify-center items-start flex-col'>
                            <div className="max-w-[494px] w-full rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src="/assets/home/img3.jpg" className='w-full h-[367px] object-cover rounded-[30px]' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[36px] pb-[15px] leading-[44px] text-[#FFFFFF]">Modern Zen Retreat</h6>
                                    <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[60px] font-bricolage text-[18px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                </div>
                            </div>
                            <div className="max-w-[714px] w-full rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src="/assets/home/img4.jpg" className='w-full rounded-[30px] h-[367px] object-cover' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[36px] pb-[15px] leading-[44px] text-[#FFFFFF]">Modern Zen Retreat</h6>
                                    <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[60px] font-bricolage text-[18px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-[34px] lg:flex-row justify-center items-start flex-col'>
                            <div className="max-w-[714px] w-full rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src="/assets/home/img5.jpg" className='w-full rounded-[30px] h-[367px] object-cover' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[36px] pb-[15px] leading-[44px] text-[#FFFFFF]">Modern Zen Retreat</h6>
                                    <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[60px] font-bricolage text-[18px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                </div>
                            </div>
                            <div className="max-w-[494px] w-full rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src="/assets/home/img6.jpg" className='w-full h-[367px] object-cover rounded-[30px]' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[36px] pb-[15px] leading-[44px] text-[#FFFFFF]">Modern Zen Retreat</h6>
                                    <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[60px] font-bricolage text-[18px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='pt-[66px] lg:pl-[120px] pl-[20px] '>
                    <div className="flex lg:flex-row flex-col items-center justify-between">
                        <div>
                            <h6 className="font-[500] font-cormorant text-[48px] leading-[58px] text-[#46543B]">Life At Nirvaana</h6>
                            <p className="font-[400] font-inter text-[18px] leading-[27px] text-[#021E05] max-w-[506px] w-full pb-[32px]">Discover the beauty of Garden Tree – where every seed planted is a step towards a greener, more vibrant future.</p>
                            <div className="flex flex-col gap-[12px] pb-[32px]">
                                <div className="flex items-center gap-[10px]">
                                    <img src="/assets/home/done.svg" alt="" />
                                    <p className="font-[400] font-inter text-[16px] leading-[24px] text-[#021E05]">Sustainable Gardening Consultation</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <img src="/assets/home/done.svg" alt="" />
                                    <p className="font-[400] font-inter text-[16px] leading-[24px] text-[#021E05]">Eco-Friendly Landscaping Services</p>
                                </div>
                                <div className="flex items-center gap-[10px]">
                                    <img src="/assets/home/done.svg" alt="" />
                                    <p className="font-[400] font-inter text-[16px] leading-[24px] text-[#021E05]">Organic Soil and Fertilizer Subscription Box</p>
                                </div>
                            </div>
                            <button className='bg-[#6F7849] border border-[#6F7849] transition-all duration-300 hover:bg-transparent hover:text-[#6F7849] rounded-full py-[18px] px-[35px] font-[400] font-bricolage text-[18px] leading-[21px] text-[#FFFFFF]'>View More</button>
                        </div>
                        <div className='relative'>
                            <div className='absolute bottom-[130px] left-[-86px]'>
                                <img src="/assets/home/wrapper.png" alt="" />
                            </div>
                            <img src="/assets/home/img7.png" alt="" />
                        </div>
                    </div>
                </section>
                <section className='lg:pt-[130px] pt-[70px]'>
                    <h6 className="font-[500] text-center lg:pb-[58px] pb-[40px] font-cormorant text-[48px] leading-[58px] text-[#46543B]">Testimonials</h6>
                </section>
            </div>
        </>
    )
}

export default Home