'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Optional modules styles
import 'swiper/css/pagination'; // Optional modules styles
// import 'swiper/less';
// import 'swiper/less/navigation';
// import 'swiper/less/pagination';
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';

const ImageSwiper = () => {
  const images = [
    '/un.jpg',
    '/deux.jpg',
    '/un.jpg',
    '/deux.jpg',
  ];

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      navigation={{
        nextEl: '.swiper-button-next', // Flèche suivante
        prevEl: '.swiper-button-prev', // Flèche précédente
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      autoplay={{
        delay: 2500, // Intervalle de 2.5 secondes pour chaque image
        disableOnInteraction: false, // L'auto-défilement continue même après l'interaction
      }} 
      loop={true}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} className="rounded-xl w-[800px]" width={800} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSwiper;
