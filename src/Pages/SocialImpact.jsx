import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from '../Assets/Tree.jpg'
import img3 from '../Assets/ngo.jpg'
import img4 from '../Assets/ist1.jpg'
import img5 from '../Assets/ist14.jpg'
import img6 from '../Assets/ist12.jpg'
import img7 from '../Assets/impcat.jpg'
// import img8 from '../Assets/Solar Powered Community.jpg'
// import img9 from '../Assets/nhai.avif'
import whitelogo from '../Assets/white-logo.png'


function SocialImpact() {
        useEffect(() => {
                AOS.init({
                        duration: 1000, // animation duration in ms
                        once: true,     // whether animation should happen only once
                });
        }, []);
        return (
                <>
                        <div className='ab-banner ab-banner2'>
                                <div className='ab-banner-overlay'>
                                        <img className="small-banner-logo" src={whitelogo} data-aos="fade-up" />
                                        <h3 className='Belleza' data-aos="fade-up">SOCIAL IMPACT</h3>

                                </div>
                        </div>

                        {/* <div className='SocialImpact-div'>
    <div className='impact-card'>
        <div className='impact-circle'>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tree-palm-icon lucide-tree-palm"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"/><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"/><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"/></svg>
        </div>
        <div className='impact-text'>
        <h3>Where nature thrives</h3>
        <p>With over a lakh trees planted, we are building a greener tomorrow and a
sanctuary where nature thrives.</p>

        </div>
    </div>
    <div className='impact-card'>
        <div className='impact-circle'>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"/></svg>
        </div>
        <div className='impact-text'>
        <h3>NGO contributions</h3>
        <p>A portion of our revenue will be directed to NGOs working on various social
and environmental causes.
</p>

        </div>
    </div>
        <div className='impact-card'>
        <div className='impact-circle'>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>
        </div>
        <div className='impact-text'>
        <h3>Support for local Institutions</h3>
        <p>We plan to improve infrastructure & resources of five nearby government
schools and one hospital, fostering better education and healthcare for the
community.</p>

        </div>
    </div>
        <div className='impact-card'>
        <div className='impact-circle'>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>
        </div>
        <div className='impact-text'>
        <h3>Employment opportunities</h3>
        <p>By hiring locals, we aim to create new job opportunities, boosting the
economic growth of the area and enhancing community well-being.</p>

        </div>
    </div>
        <div className='impact-card'>
        <div className='impact-circle'>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-venus-icon lucide-venus"><path d="M12 15v7"/><path d="M9 19h6"/><circle cx="12" cy="9" r="6"/></svg>
        </div>
        <div className='impact-text'>
        <h3>Women empowerment</h3>
        <p>Empowering women through education, skills, and jobs to ensure their
active role in community building</p>

        </div>
    </div>
        <div className='impact-card'>
        <div className='impact-circle'>
<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-crown-icon lucide-crown"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"/><path d="M5 21h14"/></svg>
        </div>
        <div className='impact-text'>
        <h3>Legacy of Impact</h3>
        <p>An investment in Nirvaana Hills is more than financial - it’s a legacy your future
generations will cherish.</p>

        </div>
    </div>

       
    </div> */}

                        <>
                                <div className='whyus'>
                                        <div className='whyus-card whyus-card2 f-tab2' data-aos="fade-up">
                                                <img src={img2} />
                                                <div className='whyus-text'>
                                                        <h3>Tree Plantation & Biodiversity</h3>
                                                        <p>With over a lakh trees planted, we are building a greener tomorrow and a sanctuary where nature thrives.</p>

                                                </div>
                                        </div>
                                        <div className='whyus-card whyus-card2 f-tab4' data-aos="fade-up">
                                                <img src={img3} />
                                                <div className='whyus-text'>
                                                        <h3>NGO contributions</h3>
                                                        <p>A portion of our revenue will be directed to NGOs working on various social and environmental causes.</p>

                                                </div>
                                        </div>
                                        <div className='whyus-card whyus-card2 f-tab7' data-aos="fade-up">
                                                <img src={img4} />
                                                <div className='whyus-text'>
                                                        <h3>Support for local Institutions</h3>
                                                        <p>
                                                                We plan to improve infrastructure & resources of five nearby government schools and one hospital, fostering better education and healthcare for the community.</p>

                                                </div>
                                        </div>
                                        <div className='whyus-card whyus-card2 f-tab4' data-aos="fade-up" >
                                                <img src={img5} />
                                                <div className='whyus-text'>
                                                        <h3>Employment opportunities</h3>
                                                        <p>By hiring locals, we aim to create new job opportunities, boosting the economic growth of the area and enhancing community well-being.</p>

                                                </div>
                                        </div>
                                        <div className='whyus-card whyus-card2 f-tab7' data-aos="fade-up">
                                                <img src={img6} />
                                                <div className='whyus-text'>
                                                        <h3>Women empowerment</h3>
                                                        <p>Empowering women through education, skills, and jobs to ensure their active role in community building</p>

                                                </div>
                                        </div>
                                        <div className='whyus-card whyus-card2 f-tab2' data-aos="fade-up">
                                                <img src={img7} />
                                                <div className='whyus-text'>
                                                        <h3>Legacy of Impact</h3>
                                                        <p>An investment in Nirvaana Hills is more than financial - it’s a legacy your future generations will cherish.</p>

                                                </div>
                                        </div>

                                </div>
                        </>
                </>
        )
}

export default SocialImpact