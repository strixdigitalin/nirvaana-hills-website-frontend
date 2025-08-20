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
<p>In today’s world of endless notifications, crowded cities, and constant rush, space has become a luxury. Nirvaana Hills offers exactly that space to breathe, to think, to slow down, and to reconnect with what truly matters.
<br/><br/>Spread across 200 acres in the peaceful landscapes of Haryana, Nirvaana Hills is more than just a plotted development, it’s a return to a simpler, richer way of life. One that blends the best of nature with the comforts of modern living.
<br/><br/>We’ve spent over three years getting to know this land, studying its contours, seasons, and natural rhythms to ensure our masterplan works with the environment, not against it. Here, families don’t just buy property; they invest in well-being, stronger relationships, and a sustainable future.

</p>
    </div>
       <div className='about-div-right'>
<img src={img}/>
    </div>
    </div>

    <div className='meaning'>
    <h3>What Does Nirvaana Mean?</h3>
    <p>The name Nirvaana comes from ancient Sanskrit, meaning “a state of perfect peace and freedom.”
It represents a life beyond distractions, where the mind and soul find balance with nature.

At Nirvaana Hills, this philosophy guides everything we do — from planting 100,000+ native trees to designing homes that welcome sunlight and fresh air. Here, Nirvaana is not just a word, but a way of living — calm, conscious, and deeply connected.</p>
    <h4>Nirvaana = Peace. Balance. Harmony. Home.</h4>

    </div>
    <div className='whyus-heading'>
<h3>Why choose Nirvaana Hills</h3>
    </div>
    <div className='whyus'>
 <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Prime Location in Nature’s Lap</h3>
<p>Surrounded by lush greenery and serene landscapes, Nirvaana Hills offers you a life away from the city chaos yet connected to modern conveniences.</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Thoughtful & Sustainable Living</h3>
<p>From eco-friendly architecture to mindful landscaping, everything is designed to support sustainability and reduce the carbon footprint.</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>A Legacy of Trust</h3>
<p>Built on values of quality, commitment, and transparency, Nirvaana Hills carries forward a legacy that makes every resident proud to belong.</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Lifestyle That Inspires</h3>
<p>A community where you can belong, grow, and live well — with spaces for wellness, recreation, and balance between work & life.</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Modern Amenities & Wellness Spaces</h3>
<p>From state-of-the-art facilities to wellness-driven environments, every detail is curated to ensure a healthy, holistic lifestyle.</p>

</div>
    </div>
     <div className='whyus-card'>
<img src={img2}/>
<div className='whyus-text'>
<h3>Community & Togetherness</h3>
<p>Life here is about shared experiences — festivals, events, and everyday moments that bring people closer together.</p>

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