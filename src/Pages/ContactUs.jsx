

import whitelogo from '../Assets/white-logo.png'
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [IsLoading, setIsLoading] = useState(false);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Number, setNumber] = useState('');
  const [Message, setMessage] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Name) return toast.error('Name is required')
    if (!Email) return toast.error('Email is required')
    if (!Number) return toast.error('Mobile Number is required')
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(Number)) {
      toast.error("Enter a valid 10-digit mobile number");
      return false;
    }

    setIsLoading(true);

    try {
      const params = new URLSearchParams({
        UID: "fourqt",
        PWD: "wn9mxO76f34=",
        Channel: "MS",
        Src: "Website",
        ISD: "91",
        Mob: Number,
        Email: Email,
        name: Name,
        City: "",
        Location: "",
        Project: "",
        Remark: Message,
        url: window.location.href,
        UniqueId: "0",
      });

      const res = await fetch(
        `https://seadrealty08.4qterp.com/WebCreate.aspx?${params.toString()}`
      );

      const data = await res.json();

      if (data?.Status) {
        if (data?.Duplicate) {
          toast.error(`Lead already exists!`);
        } else {
          toast.success(`Lead created successfully!`);
        }
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        toast.error(data?.Message || "Failed to submit form");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <>
      <div className='ab-banner ab-banner2'>
        <div className='ab-banner-overlay'>
          <img className="small-banner-logo" src={whitelogo} data-aos="fade-up" />
          <h3 className='Belleza' data-aos="fade-up">CONTACT US</h3>

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
              <p>(Sales) +91 95895-85050 </p>

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
              <p>812, Magnum Global Park, <br />Golf Range Ext. Road,<br />G Sector 58, Gurugram 122011
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
          </div>
        </div>
        <div className='contact-div-right'>
          <div className='form-div'>
            <h3>Get In Touch</h3>
            <label>Name</label>
            <input
              placeholder='Enter Your Name'
              value={Name}
              onChange={(e) => { setName((e.target.value)) }}
            />
            <br />

            <label>Email</label>
            <input
              placeholder='Enter Your Email'
              value={Email}
              onChange={(e) => { setEmail((e.target.value)) }}
            />
            <br />

            <label>Mobile No.</label>
            <input
              type='number'
              placeholder='Enter Your Mobile No.'
              value={Number}
              onChange={(e) => { setNumber((e.target.value)) }}
            />
            <br />

            <label>Message</label>
            <input
              placeholder='Enter Your Message'
              value={Message}
              onChange={(e) => { setMessage((e.target.value)) }}
            />
            <br />
            <button
              onClick={handleSubmit}
              disabled={IsLoading}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              {IsLoading ? (
                <>
                  <span className="loader"></span>
                  Wait
                </>
              ) : (
                "Submit"
              )}
            </button>
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