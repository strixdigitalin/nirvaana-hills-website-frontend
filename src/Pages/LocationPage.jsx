import React from 'react'
import map from '../Assets/location map.png'
function LocationPage() {
  return (
    <>
     <div className='ab-banner ab-banner8'>
 <div className='ab-banner-overlay'>
<h3>Location</h3>
    </div>
    </div>
    <div className='ab-banner-img'>
    {/* <img src={img}/> */}
    <img src={map}/>
    </div>
    <div className='location-text'>
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
    </div>
    
    </>
  )
}

export default LocationPage