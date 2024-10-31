"use client"

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => (
  <Swiper spaceBetween={20} slidesPerView={4} loop={true} autoplay={{ delay: 3000 }}>
    <SwiperSlide>
      <div className='h-56 w-full bg-gray-100'>
      </div>Slide 1
    </SwiperSlide>
    <SwiperSlide>
      <div className='h-56 w-full bg-gray-100'>
        Slide 2
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='h-56 w-full bg-gray-100'>
        Slide 3
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='h-56 w-full bg-gray-100'>
        Slide 4
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='h-56 w-full bg-gray-100'>
        Slide 5
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='h-56 w-full bg-gray-100'>
        Slide 6
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className='h-56 w-full bg-gray-100'>
        Slide 7
      </div>
    </SwiperSlide>
  </Swiper>
);
export default Carousel;
