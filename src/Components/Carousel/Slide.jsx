import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from '../helpers/Container';


import 'swiper/css/navigation';

import './carousel.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Slide() {
  return (
    <>
        <Container>
      <Swiper navigation={true} modules={[Navigation]} className="border-2 flex">
        <SwiperSlide className='w-full h-14'>Slide 1</SwiperSlide>
        <SwiperSlide className='w-full h-14'>Slide 2</SwiperSlide>
        <SwiperSlide className='w-full h-14'>Slide 3</SwiperSlide>
      </Swiper>      
        </Container>
    </>
  );
}
