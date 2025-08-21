import React from 'react'
import img from '../Assets/Group 9.png'
import FAQ from '../Components/FAQ'
import img2 from '../Assets/img4.jpg'

function TheProject() {
  return (
   <>
    <div className='ab-banner'>
 <div className='ab-banner-overlay'>
<h3>The Projects</h3>
    </div>
    </div>
    <div className='about-div'>
   <div className='about-div-left'>
<h3>About Nirvaana Hills</h3>
<br/>
<p>Tucked away amid rolling hills and lush greenery, this secluded farmhouse community offers more than just a piece of land.
It offers a sense of belonging, a quiet return to life’s purest rhythms where time moves slower and nature takes the lead.
This is where the dream of owning your own farmland becomes a graceful reality, inviting you to breathe deeper, live gently,
and grow freely. For those who value stillness wrapped in sophistication and beauty rooted in meaning, this is the beginning
of something truly personal.
<br/>
BEC A USE OWN I N G L A N D I S N ’ T JUS T A N I N V ES TME N T , I T ’ S A LEG A CY I N T H E MA KI N G

</p>
    </div>
       <div className='about-div-right'>
<img src={img}/>
    </div>
    </div>

    <div className='meaning'>
    <h3>What Does Nirvaana Mean?</h3>
    <p>Derived from ancient Sanskrit, “Nirvaana” means liberation—freedom from the cycle of noise, stress, and daily entanglements.
It is the ultimate state of bliss and balance. In Buddhism, it signifies a soul’s release into peace, purpose, and presence.</p>
    <h3>Nirvaana ~ निर्वाणा </h3>

    </div>
    <div className='whyus-heading'>
<h3>Why choose Nirvaana Hills</h3>
    </div>
    <div className='whyus'>
 <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Premium Location</h3>
<p>Premium location, nestled in the Aravallis of Haryana with Hills & forest cover on 3 sides.</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Affordable Entry</h3>
<p>Affordable entry, without the premium price tags seen elsewhere</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Integrated 200+ Acre Community</h3>
<p>
A single, 200~ acre integrated community, not scattered parcels</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>1 Lakh+ Trees Plantation</h3>
<p>1 lakh+ trees being planted to create a forest-like, breathing environment</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Golf Course & Clubhouse</h3>
<p>Golf Course & modern Clubhouse for leisure and recreation.</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>2 Hours from Delhi & Gurgaon</h3>
<p>Only a 2~hour drive from Delhi & Gurgaon, yet far from the noise and chaos</p>

</div>
    </div>
      <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Solar Powered Community</h3>
<p>Solar Powered community with sustainable infrastructure.</p>

</div>
    </div>
      <div className='whyus-card'>
<img src={img2}/>
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