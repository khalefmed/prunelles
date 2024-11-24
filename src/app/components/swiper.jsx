'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
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
    '/trois.jpg',
    '/quatre.jpg',
    '/cinq.jpg',
    '/six.jpg',
    '/sept.jpg',
    '/huit.jpg',
    '/neuf.jpg',
    '/dix.jpg',
  ];

  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Pagination, Navigation  ]}
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
