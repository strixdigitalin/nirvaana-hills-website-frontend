import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='bg-[#46543B] lg:px-[120px] md:px-[60px] px-[20px] lg:pt-[80px] md:pt-[60px] pt-[40px]'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[70px] md:gap-[40px] gap-[20px]'>
                    <div>
                        <Link to="/">
                            <img src="/assets/nav/logo.png" className='h-[69px] w-[69px]' alt="logo" />
                        </Link>
                        <p className="pt-[22px] font-[400] font-inter text-[16px] leading-[24px] text-[#F9F7EF] lg:pb-[52px] md:pb-[30px] pb-[20px]">
                            At Garden Tree, we believe that our success is intertwined
                            with the prosperity of our customers.
                        </p>
                        <div className="flex gap-[20px] md:gap-[30px]">
                            <Link to="/facebook">
                                <img src="/assets/footer/facebook.svg" alt="facebook" />
                            </Link>
                            <Link to="/instagram">
                                <img src="/assets/footer/instagram.svg" alt="instagram" />
                            </Link>
                            <Link to="/print">
                                <img src="/assets/footer/print.svg" alt="print" />
                            </Link>
                        </div>
                    </div>
                    <div className='lg:pt-[34px] pt-0'>
                        <h6 className="font-[400] font-cormorant text-[16px] leading-[24px] uppercase pb-[20px] md:pb-[30px] text-[#FFFFFF]">Links</h6>
                        <div className="grid grid-cols-2 gap-[20px] md:gap-[30px]">
                            <div className='flex flex-col gap-[12px] md:gap-[16px]'>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Home</Link>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>About Us</Link>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Our Team</Link>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Services</Link>
                            </div>
                            <div className='flex flex-col gap-[12px] md:gap-[16px]'>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Process</Link>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Testimonials</Link>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Projects</Link>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="lg:pt-[34px] pt-0">
                        <h6 className="font-[400] font-cormorant text-[16px] leading-[24px] uppercase pb-[20px] md:pb-[30px] text-[#FFFFFF]">Instagram</h6>
                        <div className='grid grid-cols-3 gap-[10px]'>
                            {[1, 2, 3, 4, 5, 6].map((img, i) => (
                                <img key={i} src={`/assets/footer/img${img}.png`} className='h-[60px] w-[60px] md:h-[70px] md:w-[70px] object-cover' alt={`insta-${i}`} />
                            ))}
                        </div>
                    </div>
                    <div className="lg:pt-[34px] pt-0">
                        <h6 className="font-[400] font-cormorant text-[16px] leading-[24px] uppercase pb-[20px] md:pb-[30px] text-[#FFFFFF]">Our contacts</h6>
                        <div className='grid grid-cols-1 gap-[16px] md:gap-[20px]'>
                            <div className="flex items-start gap-[14px]">
                                <img src="/assets/footer/location.svg" alt="location" />
                                <p className="font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]">2307 Beverley, New York</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <img src="/assets/footer/call.svg" alt="call" />
                                <p className="font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]">+ (0777) 888 88 888</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <img src="/assets/footer/mail.svg" alt="mail" />
                                <p className="font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]">information@office.com</p>
                            </div>
                            <div className="flex items-start gap-[14px]">
                                <img src="/assets/footer/clock.svg" alt="clock" />
                                <p className="font-[400] max-w-[194px] w-full font-inter text-[16px] leading-[20px] text-[#F9F7EF]">
                                    Our Working Hours Mon - Sat: 8 am - 6 pm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:pt-[70px] md:pt-[50px] pt-[30px]'>
                    <p className="font-[400] font-inter text-[14px] leading-[24px] text-center text-[#F9F7EF] lg:pb-[40px] md:pb-[30px] pb-[20px]">
                        © Nirvaana Hills. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
