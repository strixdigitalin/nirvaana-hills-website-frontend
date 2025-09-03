
import { motion } from "framer-motion";
import OurSlider from '../Components/slider/OurSlider'
import user from '../Assets/image 31.png'
import Slider from '../Components/Slider'
import Galleryslider from '../Components/Galleryslider'
import img2 from '../Assets/ist10.jpg'
import img3 from '../Assets/ist14.jpg'
import img4 from '../Assets/ist6.jpg'
import img5 from '../Assets/ist13.jpg'
import img6 from '../Assets/ist5.jpg'
import img8 from '../Assets/ist8.jpg'
import bgVideo from "../Assets/new.mp4";
import newlogo from '../Assets/white-logo.png'

import belonging from '../Assets/ist5.jpg'
import grow from '../Assets/brother-sister-playing-with-kite-plane-field-sunset.jpg'
import Sustainability from '../Assets/hispanic-mother-daughter-harvesting-vegetables-together-garden.jpg'
import yoga from '../Assets/ist3.jpg'
import Work from '../Assets/belongig.jpg'
import legacy from '../Assets/LAN-THE-LEGASY.jpg'

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);
    return (
        <>
            <div className='bg-[#EEF2E6]'>
                {/* <section className='hero-section flex justify-center items-center flex-col'>
                    <h1 className="font-[400] text-[84px] leading-[100px] text-center pb-[25px] text-[#FFFFFF] main-h1">Welcome To Nirvaana Hills</h1>
                    <p className="max-w-[532px] w-full mx-auto font-Montserrat font-[400] text-[18px] leading-[27px] text-[#FFFFFF] text-center lg:pb-[54px] pb-[26px]">Garden Tree has blossomed into a leading company dedicated
                        to providing innovative solutions for gardening.</p>
                    <button className='bg-[#6F7849] border border-[#6F7849] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#6F7849] rounded-full py-[18px] px-[35px] font-[400] font-bricolage text-[18px] leading-[21px] text-[#FFFFFF]'>Get In Touch</button>
                </section> */}
                <section className="hero-section relative w-full h-screen flex justify-center items-center flex-col overflow-hidden">
                    {/* Background Video */}
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={bgVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Overlay for dark effect */}
                    <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

                    {/* Content */}
                    <motion.div
                        className="relative z-10 flex flex-col justify-center items-center text-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <img data-aos="fade-up" className='banner-logo' src={newlogo} />

                        {/* <h1 className="font-[400] text-[84px] leading-[100px] text-[#FFFFFF] pb-[25px] main-h1">
          Welcome To Nirvaana Hills
        </h1> */}
                        <p data-aos="fade-up" className="max-w-[720px] w-full mx-auto font-Montserrat font-[400] text-[16px] leading-[27px] text-[#FFFFFF] pb-[26px] lg:pb-[54px] py-[18px]">
                            Set within the heart of the Aravallis, Nirvaana Hills is a 200~acre Farmland Community in North India, unfolding across serene and untouched land,  where forests blend into hills, and every corner holds quiet promise.
                        </p>
                        <button data-aos="fade-up" className="banner-btn bg-[#6F7849] border border-[#6F7849] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#6F7849]  py-[1px] px-[35px] font-[400] font-bricolage text-[18px] leading-[21px] text-[#FFFFFF]">
                            Get In Touch
                        </button>
                    </motion.div>
                </section>
                <Slider />
                {/* <section className="lg:pt-[106px] pt-[60px] lg:px-[175px] px-[20px]">
                    <div className="flex lg:flex-row flex-col lg:gap-[100px] gap-[40px] justify-center items-center">
                        <div className="flex justify-center lg:justify-start">
                            <img
                                src="/assets/home/img1.png"
                                alt="About Nirvaana Hills"
                                className="max-w-[400px] w-full h-auto object-contain"
                            />
                        </div>
                        <div>
                            <img src="/assets/nav/logo.png" className='h-[54px] w-[54px]' alt="" />
                            <h6 className="font-[600] font-cormorant text-[48px] leading-[58px] capitalize text-[#46543B]">about Nirvaana Hills</h6>
                            <p className="max-w-[492px] w-full font-[400] font-inter text-[18px] leading-[27px] text-[#27342B] pb-[32px]">Tucked amidst rolling hills and greenery,
a hidden world awaits - quiet, rooted, real.
Not just land, but a return to life’s purest rhythms.
Where time slows, and nature gently takes over.
A place to breathe deeper, live softer, and grow freely.
Because owning land isn’t just an investment -
It’s a legacy in the making</p>
                            <div className="flex items-center gap-[10px]">
                                <p className="font-[400] font-bricolage text-[18px] leading-[22px] text-[#021E05]">About Us</p>
                                <img src="/assets/home/arrow.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </section> */}
                <div className='home-aboutus home-aboutus2'>
                    <div className='home-aboutus-overlay'>

                        <h3 className='Belleza' data-aos="fade-up">NIRVAANA HILLS</h3>
                        <p data-aos="fade-up"><i>Tucked away amid rolling hills and lush greenery, this secluded


                            200~farmland<br /> community offers more than just a piece of land.
                            <br />
                            <br />
                            It offers a sense of belonging, a quiet return to life’s purest rhythms where


                            time <br /> moves slower and nature takes the lead.
                            <br />
                            <br />
                            This is where the dream of owning your own farmland becomes a graceful

                            reality,
                            <br />
                            inviting you to breathe deeper, live gently, and grow freely.
                            <br />
                            <br />
                            For those who value stillness wrapped in sophistication and beauty rooted in <br /> meaning, this is the beginning of something truly personal.</i></p>
                        <br />
                        <h4 data-aos="fade-up" className='Belleza'>BECAUSE  OWNING A LAND ISN’T JUST AN INVESTMENT, IT’S A LEGACY IN THE MAKING</h4>

                    </div>
                </div>
                <div className='newfeatures'>
                    <div className='newfeatures-overlaty'>

                        <div className='newfeatures-heading'>
                            <h3 className='Belleza' data-aos="fade-up">OUR FEATURES</h3>
                        </div>
                        <div className='newfeatures-cards' data-aos="fade-up">

                            <div className='newfeatures-card'>
                                <Link to='/features'>
                                    <div className='newfeatures-card-overlay'>

                                        <h3>Living thoughtfully designed</h3>
                                        <p>For those seeking harmony with nature and ease of living, Nirvaana Hills blends European charm with nature-led design. Its layout balances openness, sustainability, and serenity, with every detail crafted with care.</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='newfeatures-card newfeatures-card2'>
                                <Link to='/features'>
                                    <div className='newfeatures-card-overlay'>

                                        <h3>Your everyday retreat</h3>
                                        <p>Everyday life here feels brighter. A place filled with energy, laughter, and simple joys. From friendly games to relaxed afternoons, there’s always a reason to stay a little longer.</p>
                                    </div>
                                </Link>
                            </div>


                            <div className='newfeatures-card newfeatures-card3'>
                                <Link to='/features'>
                                    <div className='newfeatures-card-overlay'>

                                        <h3>Where nature nurtures community</h3>
                                        <p>Here, hills meet the warmth of community. Neighbours turn into friends, and every corner invites togetherness. Life flows easily, surrounded by nature and moments to cherish.</p>
                                    </div>
                                </Link>
                            </div>


                            <div className='newfeatures-card newfeatures-card4'>
                                <Link to='/features'>
                                    <div className='newfeatures-card-overlay'>

                                        <h3>The finer details</h3>
                                        <p>Each farmhouse opens to greenery and privacy. From inviting paths to welcoming entrances, comfort meets nature. Wide spaces surround every home, with views worth pausing for.</p>
                                    </div>
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <section className='our-section'>
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
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className='lg:pl-[100px] pl-[20px] pb-[140px] flex lg:gap-[100px] gap-[20px] lg:flex-row flex-col'>
                        <div className='max-w-[162px] w-full'>
                            <h6 className="font-[600] font-cormorant text-[48px] leading-[58px] capitalize text-[#FFFFFF] Belleza">OUR FEATURES</h6>
                        </div>
                        <div className="w-full overflow-hidden">
                            <OurSlider />
                        </div>
                    </div>
                </section> */}
                <section className='bg-[#46543B] pt-[25px] pb-[100px] lg:px-[100px] px-[20px] back2'>
                    <br />
                    <br />
                    <h6 className="font-[500] text-center max-w-[504px] w-full mx-auto lg:pb-[80px] pb-[40px] font-cormorant  leading-[58px] capitalize text-[#FFFFFF] Belleza lifeatnirvaana-h6">LIFE AT NIRVAANA</h6>
                    <div className='grid grid-cols-1 gap-[32px]' data-aos="fade-up">
                        <div className='flex gap-[34px] lg:flex-row justify-center items-start flex-col'>
                            <div className="max-w-[350px] w-full rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src={belonging} className='w-full h-[250px] object-cover rounded-[30px]' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[25px] pb-[15px] leading-[44px] text-[#FFFFFF]">Belonging</h6>
                                    <Link to='/LifeAtNirvaana'>

                                        <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[40px] font-bricolage text-[12px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                    </Link>

                                </div>
                            </div>
                            <div className="max-w-[350px] w-full rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src={grow} className='w-full h-[250px] object-cover rounded-[30px]' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[25px] pb-[15px] leading-[44px] text-[#FFFFFF]">Grow wild, grow free</h6>
                                    <Link to='/LifeAtNirvaana'>
                                        <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[40px] font-bricolage text-[12px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                    </Link>

                                </div>
                            </div>
                            <div className="w-full lg:max-w-[500px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src={Sustainability} className='w-full rounded-[30px] h-[250px] object-cover' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[25px] pb-[15px] leading-[44px] text-[#FFFFFF]">Sustainability </h6>
                                    <Link to='/LifeAtNirvaana'>

                                        <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[40px] font-bricolage text-[12px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-start justify-center gap-[20px] lg:gap-[34px]">
                            <div className="w-full lg:max-w-[400px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src={yoga} className='w-full rounded-[30px] h-[250px] object-cover' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[25px] pb-[15px] leading-[44px] text-[#FFFFFF]">Wellness</h6>
                                    <Link to='/LifeAtNirvaana'>
                                        <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[40px] font-bricolage text-[12px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                    </Link>

                                </div>
                            </div>
                            <div className="w-full lg:max-w-[250px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src={Work} className='w-full h-[250px] object-cover rounded-[30px]' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[25px] pb-[15px] leading-[44px] text-[#FFFFFF]">Work Life balance</h6>
                                    <Link to='/LifeAtNirvaana'>
                                        <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[40px] font-bricolage text-[12px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                    </Link>

                                </div>
                            </div>
                            <div className="w-full lg:max-w-[300px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src={img5} className='w-full h-[250px] object-cover rounded-[30px]' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[25px] pb-[15px] leading-[44px] text-[#FFFFFF]">Restart Life together</h6>
                                    <Link to='/LifeAtNirvaana'>
                                        <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[40px] font-bricolage text-[12px] leading-[22px] text-[#FFFFFF] py-[8px] px-[35px] rounded-full'>View Details</button>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-full lg:max-w-[200px] rounded-[30px] relative">
                                <div className="absolute inset-0 bg-[#00000033] rounded-[30px]"></div>
                                <img src={legacy} className='w-full h-[250px] object-cover rounded-[30px]' alt="" />
                                <div className='absolute bottom-0 p-[40px] left-0 w-full'>
                                    <h6 className="font-[500] font-cormorant text-[25px] pb-[15px] leading-[44px] text-[#FFFFFF]">The legacy</h6>
                                    <Link to='/LifeAtNirvaana'>
                                        <button className='font-[400] transition-all duration-300 hover:bg-[#6F7849] border border-[#FFFFFF] h-[40px] font-bricolage text-[12px] leading-[15px] text-[#FFFFFF] py-[8px] px-[20px] rounded-full'>View Details</button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <div>
                    <Galleryslider />
                </div>
                {/* <section className='pt-[66px] lg:pl-[120px] pl-[20px] '>
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
                </section> */}
                {/* <section className='lg:pt-[130px] pt-[70px]'>
                    <h6 className="font-[500] text-center lg:pb-[58px] pb-[40px] font-cormorant text-[48px] leading-[58px] text-[#46543B] Belleza">TESTIMONIALS</h6>
                </section>
                <div className='testimonial-cards'>
 <div className='testimonial-card'>
 <p>Yogasan has tranformed my life! The community here is like a warm hug. grateful for the balance and zen it brings.highly recommend!</p>
 <br/>
 <br/>
 <div className='testimonial-card-name'>
    <img src={user}/>
    <div >
        <p>Alice W.</p>
        <p>21 Year Old</p>
    </div>
 </div>

                </div>
                 <div className='testimonial-card'>
 <p>Yogasan has tranformed my life! The community here is like a warm hug. grateful for the balance and zen it brings.highly recommend!</p>
 <br/>
 <br/>
 <div className='testimonial-card-name'>
    <img src={user}/>
    <div >
        <p>Alice W.</p>
        <p>21 Year Old</p>
    </div>
 </div>

                </div>
                 <div className='testimonial-card'>
 <p>Yogasan has tranformed my life! The community here is like a warm hug. grateful for the balance and zen it brings.highly recommend!</p>
 <br/>
 <br/>
 <div className='testimonial-card-name'>
    <img src={user}/>
    <div >
        <p>Alice W.</p>
        <p>21 Year Old</p>
    </div>
 </div>

                </div>
                </div> */}
            </div>

        </>
    )
}

export default Home