import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import map from '../Assets/map.jpg'
import whitelogo from '../Assets/white-logo.png'

function LocationPage() {
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
<img className="small-banner-logo" src={whitelogo}  data-aos="fade-up"/>
<h3 className='Belleza'  data-aos="fade-up">OUR LOCATION</h3>

    </div>
    </div>
    <div className='ab-banner-img'>
    {/* <img src={img}/> */}
    <img src={map} data-aos="fade-up"/>
    </div>
    {/* <div className='location-text'>
   <div className='location-text-div'>
   <h3>Location Map </h3>
   <ul>
    <li>Gurugram (Rajiv Chowk) 115 km I 130 mins</li>
    <li>Delhi (Peeragarhi)  120 km I 135 mins</li>
    <li>Rohtak  70 km I 60 mins</li>
    <li>Jhajjar 72 km I 90 mins</li>
    <li>Mahendragarh 20 km I 20 mins</li>
    <li>Charkhi Dadri 30 km I 30 mins</li>
    <li>Rewari 65 km I 60 mins</li>
    <li>Narnaul 45 km I 45 mins</li>
    <li>Bhiwani 55 km I 70 mins</li>
    <li>Pilani 50 km I 50 mins</li>
    <li>Farrukh Nagar 95 km I 100 mins</li>
    <li>Reliance Met City 80 km I 90 mins</li>
    <li>Central University
of Haryana (CUH)*   15 km I 15 mins</li>
   </ul>

    </div>

     <div className='location-text-div'>
   <h3>In Close Proximity </h3>
   <ul>
    <li>NH-148B Bathinda - Kotputli (Rajasthan)</li>
    <li>NH-152D Ambala - Kotputli Expressway</li>
    <li>NH-352W Gurugram - Rewari</li>

   </ul>

    </div>


       <div className='location-text-div'>
   <h3>Please note</h3>
   <ul>
    <li>HSVP to bring Huge Township of 200+ Acres in Charkhi Dadri. </li>
    <li>Highway-34 connecting Mahendragarh, Charkhi Dadri, and Rohtak approved.</li>
  
   </ul>

    </div>
    </div> */}

     <div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.508893632435!2d76.0706328!3d28.403897599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d45898c3ccf2339%3A0xbcdd42083f79e894!2sNirvaana%20Hills%20by%20SEAD%20Realty!5e0!3m2!1sen!2sin!4v1756306768005!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    </>
  )
}

export default LocationPage