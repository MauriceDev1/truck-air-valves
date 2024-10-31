"use client"

// Import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';


const parts = [
  {
    id: 1,
    name: 'air 1 valve',
    image: '/Images/2e8aa396-350f-4921-a81b-b2ed87613a68-removebg-preview.png'
  },
  {
    id: 2,
    name: 'air 2 valve',
    image: '/Images/956b4e1f-8a2d-48b9-a754-9ef46df6ea25-removebg-preview.png'
  },
  {
    id: 3,
    name: 'air 3 valve',
    image: '/Images/974d1a56-6eaa-4b63-b4a9-a50937cda012-removebg-preview.png'
  },
  {
    id: 4,
    name: 'air 4 valve',
    image: '/Images/56522c07-6e3c-4831-b3b6-834d08225634-removebg-preview.png'
  },
]

const Carousel = () => (
  <Swiper spaceBetween={20} slidesPerView={4} loop={true} autoplay={{ delay: 3000 }}>
    {parts.map(p => (
      <SwiperSlide key={p.id}>
        <div className='h-56 w-full flex bg-gray-100'>
          <Image
            src={p.image}
            alt={p.name}
            width={1000}
            height={1000}
            className="w-48 m-auto"
            />
        </div>
      </SwiperSlide>

    ))}
  </Swiper>
);
export default Carousel;
