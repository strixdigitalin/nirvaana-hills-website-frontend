import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/white-logo.png'

function Footer() {
    return (
        <>
            <div className='bg-[#46543B] lg:px-[50px] md:px-[60px] px-[20px] lg:pt-[80px] md:pt-[60px] pt-[40px] footer-background'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-[50px] md:gap-[40px] gap-[20px]'>
                    <div >
                        <Link to="/">
                            <img src={logo} className='h-[150px] ' alt="logo" />
                        </Link>
                        <p className="pt-[22px] font-[400] font-inter text-[16px] leading-[24px] text-[#F9F7EF] lg:pb-[52px] md:pb-[30px] pb-[20px]">
                            Nirvaana Hills is not just land — it’s a forest crafted for living
                        </p>
                        <div className="flex gap-[20px] md:gap-[30px] text-[#fff] text-[20px]">
                            <Link to="https://www.facebook.com/sead.realty">
                                <i class="bi bi-facebook"></i>
                            </Link>
                            <Link to="https://www.instagram.com/nirvaanahills/">
                                <i class="bi bi-instagram"></i>
                            </Link>
                            <Link to="https://www.youtube.com/@NirvaanaHills">
                                <i class="bi bi-youtube"></i>
                            </Link>

                            <Link to="https://share.google/kHKxzAZCUMEsIIDJL">
                                <i class="bi bi-google"></i>
                            </Link>

                            <Link to="https://www.linkedin.com/company/sead-realty/">
                                <i class="bi bi-linkedin"></i>
                            </Link>


                        </div>
                    </div>
                    <div className='lg:pt-[34px] pt-0'>
                        <h6 className="font-[400] font-cormorant text-[16px] leading-[24px] uppercase pb-[20px] md:pb-[30px] text-[#FFFFFF]">Links</h6>
                        <div className="grid grid-cols-2 gap-[20px] md:gap-[30px]">
                            <div className='flex flex-col gap-[12px] md:gap-[16px]'>
                                <Link to="/" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Home</Link>
                                <Link to="/theproject" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>The Project</Link>
                                <Link to="/features" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Features</Link>
                                <Link to="/locationpage" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Location</Link>
                            </div>
                            <div className='flex flex-col gap-[12px] md:gap-[16px]'>
                                <Link to="/LifeAtNirvaana" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Life at Nirvaana</Link>
                                <Link to="/gallery" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Gallery</Link>
                                <Link to="/socialimpact" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Social impacts</Link>
                                <Link to="/ourlegacy" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Our Legacy</Link>
                                <Link to="/contact" className='font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]'>Contact Us</Link>
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
                                <p className="font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]">812, Magnum Global Park, Golf Course Ext. Road,
                                    Sector 58, Gurugram 122011</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <img src="/assets/footer/call.svg" alt="call" />
                                <p className="font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]  whitespace-nowrap">0124 4071184(Office)</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <img src="/assets/footer/call.svg" alt="call" />
                                <p className="font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]  whitespace-nowrap">+91 84800-64800(Sales)</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <img src="/assets/footer/call.svg" alt="call" />
                                <p className="font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF] whitespace-nowrap">+91 95895-85050(Sales)</p>
                            </div>
                            <div className="flex items-center gap-[14px]">
                                <img src="/assets/footer/mail.svg" alt="mail" />
                                <p className="font-[400] font-inter text-[16px] leading-[20px] text-[#F9F7EF]">info@seadrealty.com </p>
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
