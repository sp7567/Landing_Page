import React from 'react';
import Button from '../components/elements/Button';
import { Link } from 'react-router-dom';



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// images
import educase from '../assets/educase.webp'
import school from '../assets/school.png'
import welcome from '../assets/welcome.jpeg';


const images = [
  welcome,
  educase,
  school,
];

const ImageSlider = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="rounded-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className=''>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};





const LandingPage = () => {
  return (
    <div className='w-full'>
        <div className="w-full absolute bottom-0 p-6">
          <ImageSlider />

          <h1 className="mt-5 text-xl font-bold text-gray-900">Welcome to Educase India</h1>
          <p className="text-gray-500 text-sm mt-2">
            Best school management software in India for facilitating a seamless app experience
          </p>
          
          <div className="mt-5 flex flex-col gap-2">
            <Link to='/user/register'>
              <Button className='w-full'>
                Create Account
              </Button>
            </Link>

            <Link to='/user/login'>
              <Button className='w-full bg-blue-300! hover:bg-blue-400! rounded-md'>
                  Already Registered? Login
              </Button>
            </Link>
          </div>
        </div>
    </div>
  )
}


export default LandingPage;
  