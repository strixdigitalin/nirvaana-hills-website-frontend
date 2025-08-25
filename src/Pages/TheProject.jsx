import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img from '../Assets/Nirvaana Hills logo.png'
import FAQ from '../Components/FAQ'
import img2 from '../Assets/nested.jpg'
import img3 from '../Assets/Seamless Entry to Ownership.jpg'
import img4 from '../Assets/200.jpg'
import img5 from '../Assets/ist2.jpg'
import img6 from '../Assets/848.jpg'
import img7 from '../Assets/near.jpg'
import img8 from '../Assets/Solar Powered Community.jpg'
import img9 from '../Assets/33ft road.jpg'
import newlogo from '../Assets/meaning logo.png'
import whitelogo from '../Assets/white logo.png'
function TheProject() {
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
<img data-aos="fade-up" style={{height:'200px'}} src={whitelogo}/>
<h3 data-aos="fade-up" className='Belleza'>The Project</h3>

    </div>
    </div>
    {/* <div className='about-div'>
   <div className='about-div-left'>
<h3 className='Garamond'>Our Story</h3>
<br/>
<p>Tucked away amid rolling hills and lush greenery, this secluded farmhouse community offers more than just a piece of land.
It offers a sense of belonging, a quiet return to life’s purest rhythms where time moves slower and nature takes the lead.
This is where the dream of owning your own farmland becomes a graceful reality, inviting you to breathe deeper, live gently,
and grow freely. For those who value stillness wrapped in sophistication and beauty rooted in meaning, this is the beginning
of something truly personal.
<br/>
BECAUSE OWNING LAND ISN’T JUST AN INVESTMENT, IT’S A LEGACY IN THE MAKING

</p>
    </div>
       <div className='about-div-right'>
<img src={img}/>
    </div>
    </div> */}
    <div className='home-aboutus'>
<div className='home-aboutus-overlay UNFOLDS'>

<h3 className='Belleza'  data-aos="fade-up">OUR STORY UNFOLDS</h3>
<p data-aos="fade-up">Tucked away amid rolling hills and lush greenery, this secluded 
 

 200~farmland<br/> community offers more than just a piece of land.
 <br/>
 <br/>
It offers a sense of belonging, a quiet return to life’s purest rhythms where


 time <br/> moves slower and nature takes the lead. 
 <br/>
 <br/>
This is where the dream of owning your own farmland becomes a graceful 

reality,
 <br/>
  inviting you to breathe deeper, live gently, and grow freely. 
 <br/>
 <br/>
For those who value stillness wrapped in sophistication and beauty rooted in <br/> meaning, this is the beginning of something truly personal.</p>
 <br/>
 <h4 data-aos="fade-up" className='Belleza'>BECAUSE A OWNING LAND ISN’T JUST AN INVESTMENT, IT’S A LEGACY IN THE MAKING</h4>

</div>
</div>

    <div className='meaning'>
    <img data-aos="fade-up" src={newlogo}/>
    <h3 className='Belleza' data-aos="fade-up">NIRVAANA ~ निर्वाणा</h3>
    <h4 className='Belleza' data-aos="fade-up">(nir-vaah-nuh)</h4>
    <p data-aos="fade-up">Derived from ancient Sanskrit, “Nirvaana” means liberation—freedom from the cycle of noise, stress, and daily entanglements.
It is the ultimate state of bliss and balance. In Buddhism, it signifies a soul’s release into peace, purpose, and presence.</p>
   <p>Nirvaana Hills isn’t just a name, it’s a feeling. A whisper of calm in a chaotic world. A reminder that peace still exists, waiting to be embraced.</p>
    <h3 > </h3>

    </div>
    <div className='whyus-heading'>
<h3 data-aos="fade-up" className='Belleza'>WHY CHOOSE NIRVAANA HILLS?</h3>
    </div>
    <div className='whyus'>
 <div className='whyus-card' data-aos="fade-up">
<img src={img2}/>
<div className='whyus-text'>
<h3>Nestled in Between the Aravallis</h3>
<p>Premium location, nestled in the Aravallis of Haryana with Hills & forest cover on 3 sides.</p>

</div>
    </div>
     <div className='whyus-card' data-aos="fade-up">
<img src={img3}/>
<div className='whyus-text'>
<h3>Seamless Entry to Ownership</h3>
<p>Affordable entry, without the premium price tags seen elsewhere</p>

</div>
    </div>
     <div className='whyus-card' data-aos="fade-up">
<img src={img4}/>
<div className='whyus-text'>
<h3>200~ Acre Community</h3>
<p>
A single, 200~ acre integrated community, not scattered parcels</p>

</div>
    </div>
     <div className='whyus-card' data-aos="fade-up">
<img src={img5}/>
<div className='whyus-text'>
<h3>Breathing Life with 1,00,000 Trees</h3>
<p>1 lakh+ trees being planted to create a forest-like, breathing environment</p>

</div>
    </div>
     <div className='whyus-card' data-aos="fade-up">
<img src={img6}/>
<div className='whyus-text'>
<h3>Golf Course & Clubhouse</h3>
<p>Golf Course & modern Clubhouse for leisure and recreation.</p>

</div>
    </div>
     <div className='whyus-card' data-aos="fade-up">
<img src={img7}/>
<div className='whyus-text'>
<h3>Easy Delhi-NCR Access</h3>
<p>Only a 2~hour drive from Delhi & Gurgaon, yet far from the noise and chaos</p>

</div>
    </div>
      <div className='whyus-card' data-aos="fade-up">
<img src={img8}/>
<div className='whyus-text'>
<h3>Solar Powered Community</h3>
<p>Solar Powered community with sustainable infrastructure.</p>

</div>
    </div>
      <div className='whyus-card' data-aos="fade-up">
<img src={img9}/>
<div className='whyus-text'>
<h3>33 ft. Wide Internal Roads</h3>
<p>33 ft. wide internal roads for easy accessibility and smooth connectivity.</p>

</div>
    </div>
    </div>
    <div className='faq-div'>

    <FAQ/>
    </div>
   </>
  )
}

export default TheProject