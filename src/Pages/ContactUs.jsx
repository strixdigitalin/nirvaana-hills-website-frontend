

import whitelogo from '../Assets/white logo.png'
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function ContactUs() {
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
<h3 className='Belleza' data-aos="fade-up">Contact Us</h3>

    </div>
    </div>
    <div className='contact-div' data-aos="fade-up">
   <div className='contact-div-left'>
  <div className='circle-icon-info'>
  <div>

    <div className='circle-icon'>
<i class="bi bi-telephone-fill"></i>
    </div>
  </div>

    <div>
    <h4>Call</h4>
    <p>(Office) 0124 4071184 </p>
    <p>(Sales) +91 84800-64800 </p>
    </div>
   </div>
   <div className='circle-icon-info'>
   <div>

    <div className='circle-icon'>
<i class="bi bi-geo-alt-fill"></i>
    </div>
   </div>

    <div>
    <h4>Address</h4>
    <p>812, Magnum Global Park, <br/>Golf Course Ext. Road,<br/>G Sector 58, Gurugram 122011
</p>
    </div>
   </div>
    <div className='circle-icon-info'>
   <div>

    <div className='circle-icon'>
<i class="bi bi-envelope-fill"></i>
    </div>
    </div>
    <div>
    <h4>Mail</h4>
    <p>info@seadrealty.com</p>
    </div>
   </div>
     <div className='circle-icon-info'>
    
    <div>
    <h4>Social Media</h4>
    <div className='social-icons'>
      <i class="bi bi-instagram"></i>
      <i class="bi bi-linkedin"></i>
      <i class="bi bi-facebook"></i>
      <i class="bi bi-twitter"></i>
    </div>
    </div>
   </div>
    </div>
       <div className='contact-div-right'>
<div className='form-div'>
<h3>Get In Touch</h3>


<label>Name</label>
<input placeholder='Enter Your Name'/>
<br/>

<label>Email</label>
<input placeholder='Enter Your Email'/>

<br/>

<label>Mobile No.</label>
<input placeholder='Enter Your Mobile No.'/>
<br/>

<label>Message</label>
<input placeholder='Enter Your Message'/>
<br/>
<button>Submit</button>


</div>
    </div>
    </div>
    <div className='map'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.257393561002!2d77.10508752494863!3d28.4114892440851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d21574430835f%3A0x2418eeadee995606!2sMAGNUM%20GLOBAL%20PARK!5e0!3m2!1sen!2sin!4v1755596275433!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default ContactUs