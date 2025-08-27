import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='Home-slider1 Home-slider11'>
            <div className='Home-slider-overlay'>
              <h3>Over 1,00,000+  Trees</h3>
              <p>Experience serenity surrounded by over 1,00,000 lush green trees,<br/> bringing you closer to nature every day.</p>
              <button>Read More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Home-slider1 Home-slider12'>
            <div className='Home-slider-overlay'>
              <h3>200 Acres of Pure Living</h3>
              <p>Join one of the Biggest Farmland community of North India,<br/> designed for like-minded families who believe in premium lifestyle living.</p>
              <button>Read More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Home-slider1 Home-slider33'>
            <div className='Home-slider-overlay'>
              <h3>At the Foot of the Aravallis</h3>
              <p>Wake up to the breathtaking views of the majestic Aravalli Hills, <br/> blending natural beauty with peaceful living.</p>
              <button>Read More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Home-slider1 Home-slider44'>
            <div className='Home-slider-overlay'>
              <h3>Living by the Golf Course</h3>
              <p>Wake up to the greens of a golf course right at your doorstep,<br/> where leisure blends with lifestyle.</p>
              <button>Read More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='Home-slider1 Home-slider55'>
            <div className='Home-slider-overlay'>
              <h3>The Clubhouse at Nirvaana</h3>
              <p>Celebrate life at our exclusive clubhouse with modern amenities,<br/> recreation, and premium gatherings.</p>
              <button>Read More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slider;
