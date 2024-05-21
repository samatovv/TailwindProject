import { Swiper, SwiperSlide } from 'swiper/react';
import image from '../../assets/Abdurahman/image/imageCaro.png'

function Slide2() {
  return (
    <div>
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
    >
      <div className='flex'>
        <SwiperSlide>
            <img className='w-[500px] h-[300px]' src={image}/>
        </SwiperSlide>
        <SwiperSlide><img src={image}/></SwiperSlide>
        <SwiperSlide><img src={image}/></SwiperSlide>
        <SwiperSlide><img src={image}/></SwiperSlide>
      </div>
      
    </Swiper>
    
    </div>
  )
}

export default Slide2






// import image from '../../assets/Abdurahman/image/imageCaro'

// export default () => {
//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={3}
//       onSlideChange={() => console.log()}
//       onSwiper={(swiper) => console.log(swiper)}
//     >
//       <SwiperSlide>
//         <img src={image}/>
//       </SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
      
//     </Swiper>
//   );
// };