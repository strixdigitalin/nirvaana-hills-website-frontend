import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import seedlogo from '../Assets/seed-removebg-preview.png'
import seedlogo2 from '../Assets/Nirvaana Hills logo.png'
import whitelogo from '../Assets/white-logo.png'

function OurLegacy() {
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
<img className="small-banner-logo" src={whitelogo} data-aos="fade-up"/>
<h3 className='Belleza' data-aos="fade-up">OUR LEGACY</h3>

    </div>
    </div>
    {/* <div className='seedlogo'>

    <img src={seedlogo}/>
    </div> */}
    <div className='OurLegacy-div OurLegacy-div2'>
<div className='OurLegacy-div-left'>
<h3 data-aos="fade-up"><b>SEAD</b> Realty traces its legacy back over 2 decades, starting as <br/><i><b>S</b>hreeram <b>E</b>states <b>A</b>nd <b>D</b>evelopers.</i>
<br/>
<br/>
What began as a construction, and Real Estate Investment & Advisory firm has gradually evolved into a full-scale
Real Estate company specializing in Land, Plots, and Builder floors across Delhi NCR. Over time, our passion for
natural living, sustainable land use, and rural luxury led us to pivot into the Agricultural and Farmland segment.
This vision inspired our rebranding to S.E.A.D. and eventually SEAD Realty, a brand now synonymous with curated,
premium Farmland communities rooted in nature and thoughtful living.

</h3>

<h3 data-aos="fade-up">We are recognized as a trusted, niche real estate brand which specializes in Land and Farm based development.
Known for transparency, ethics, and long-term vision, we’ve built relationships that go beyond transactions and
last generations. Our vision is to become India’s leading name in the farmhouse and Farmland segment, delivering
premium, nature-first rural living.
</h3>
    </div>
    <div className='OurLegacy-div-right'>
    <img data-aos="fade-up" src={seedlogo}/>

    </div>
    </div>

    <div className='OurLegacy-div'>
        {/* <h3><b>SEAD</b> Realty traces its legacy back over 2 decades, starting as Shreeram Estates And Developers.
What began as a construction, and Real Estate Investment & Advisory firm has gradually evolved into a full-scale
Real Estate company specializing in Land, Plots, and Builder floors across Delhi NCR. Over time, our passion for
natural living, sustainable land use, and rural luxury led us to pivot into the Agricultural and Farmland segment.
This vision inspired our rebranding to S.E.A.D. and eventually SEAD Realty, a brand now synonymous with curated,
premium Farmland communities rooted in nature and thoughtful living.

</h3>
<br/>
<h3>We are recognized as a trusted, niche real estate brand which specializes in Land and Farm based development.
Known for transparency, ethics, and long-term vision, we’ve built relationships that go beyond transactions and
last generations. Our vision is to become India’s leading name in the farmhouse and Farmland segment, delivering
premium, nature-first rural living. We intend to:
</h3> */}
<h5 className='Belleza' data-aos="fade-up">OUR MISSION</h5>
<ul>
    <li data-aos="fade-up">Launch integrated Farmland communities across North India</li>

<li data-aos="fade-up">Introduce sustainable infrastructure in all our projects</li>
<li data-aos="fade-up">Offer a holistic ecosystem of organic farming, eco-tourism, and wellness spaces</li>
</ul>
<br/>

<h2 data-aos="fade-up" className='Belleza'>THE FOUNDERS</h2>
<br/>

<div className='founders'>
<div data-aos="fade-up" className='founders-div'>
<h3 style={{textAlign:'center' , marginBottom:'10px'}}><b><i>NEERAJ BANSAL</i></b>


</h3>
<p style={{textAlign:'center'}}> 26+ Years experience of multi-sector leadership spanning Electronics Retail, Distribution, Food
& Beverage, Wine & Beer Import, Manufacturing, Construction and Real Estate. He’s also the founder of the NGO,
Muskaan Care Foundation, driving impactful education, healthcare & community initiatives. </p>

</div>
<div data-aos="fade-up" className='founders-div'>

<h3 style={{textAlign:'center' , marginBottom:'10px'}}><b><i>SATPAL HARSANA</i></b> </h3>
    <p style={{textAlign:'center'}}>15+ years of Real Estate expertise with deep specialization in Agricultural Farms, Farmhouses,
Farm Lands & R-Zone Lands. He has a strong dealer network across Delhi NCR, with complete knowledge of land
documentation & legal processes.</p>
</div>
</div>

 
    </div>



      {/* <div className='OurLegacy-div OurLegacy-div2'>
<div className='OurLegacy-div-left'>
   <h2>ABOUT NIRVAANA HILLS</h2>
    <h3>After 15+ years of selling farmhouses & agricultural land, we observed a clear shift, people wanted more than just
land, they wanted a lifestyle. Post-COVID, demand for open spaces, wellness, and nature-driven living grew rapidly,
while owning even a single acre near Gurgaon became largely unaffordable.. When we discovered this pristine
200~acre stretch of land, surrounded by hills & forest, we saw the opportunity to create something different:
Nirvaana Hills, a thoughtfully designed Farmland community that blends affordability with premium living.
Our vision is simple yet powerful: to build a self sustainable community where families can live freely, grow their
own food, and enjoy a retreat-like lifestyle rooted in nature, without compromising on modern comforts. Whether
for weekend getaways, Airbnb rentals, or long-term stays, Nirvaana Hills brings together wellness, sustainability,
and community living in a unique way.
</h3>
    </div>
    <div className='OurLegacy-div-right'>
    <img src={seedlogo2}/>

    </div>
    </div> */}

    <div className='OurLegacy-div OurLegacy-div3'>
    <div className='legacyoverlay'>
<h2 data-aos="fade-up" className='Belleza'>ABOUT NIRVAANA HILLS</h2>
    <h3 data-aos="fade-up">After 15+ years of selling farmhouses & agricultural land, we observed a clear shift, people wanted more than just
land, they wanted a lifestyle. Post-COVID, demand for open spaces, wellness, and nature-driven living grew rapidly,
while owning even a single acre near Gurgaon became largely unaffordable.. When we discovered this pristine
200~acre stretch of land, surrounded by hills & forest, we saw the opportunity to create something different:
Nirvaana Hills, a thoughtfully designed Farmland community that blends affordability with premium living.
Our vision is simple yet powerful: to build a self sustainable community where families can live freely, grow their
own food, and enjoy a retreat-like lifestyle rooted in nature, without compromising on modern comforts. Whether
for weekend getaways, Airbnb rentals, or long-term stays, Nirvaana Hills brings together wellness, sustainability,
and community living in a unique way.
</h3>
    </div>
    </div>

    </>
  )
}

export default OurLegacy