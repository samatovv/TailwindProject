import React from 'react'

import imageCaro from '../../assets/Abdurahman/image/imageCaro.png'
import svg1 from '../../assets/Abdurahman/svg/svg1.svg'
import svg2 from '../../assets/Abdurahman/svg/svg2.svg'
import svg3 from '../../assets/Abdurahman/svg/svg3.svg'
import cart from '../../assets/Abdurahman/svg/cart.svg'


function Carousel() {
  return (
    <>
      <div
        className="bg-cover bg-center h-screen xl:w-[1440px] xl:h-[469px] relative mx-auto sm: w-[305px] sm: h-[330px]"
        style={{ backgroundImage: `url(${imageCaro})` }}
      >
        <div class=" xl:ml-[250px] xl:mt-[50px] absolute  xl:w-[661px] xl:h-[329px]  flex flex-col gap-[34px]  sm:w-[297px] sm:h-[294px] sm: gap-[30px]">
          <p class=" text-white font-gilroy xl:text-3xl sm: text-[20px] font-bold leading-[127.47%] tracking-tighter  uppercase">Производим мебель <br/> с 1997 года</p>
          <p class=" text-white font-inter xl:text-base sm: text-[12px] font-normal leading-[127.47%] tracking-tighter ">Мы готовы принять и передать ваш заказ на мебель <br/> региональному представительству.</p>
          <p class=" text-white font-inter xl:text-base sm: text-[12px] font-normal leading-[127.47%] tracking-tighter">Для этого пришлите ваши пожелания и контактную <br/> информацию нам на почту zakaz@lerom.ru </p>
          <div class="xl:flex">
            <div class="flex">
              <img class="lg: w-[55px] lg: h-[55px] sm: w-[20px] sm: h-[20px] rounded-full bg-white" src={svg1}/>
              <div>
                <p class="text-white font-gilroy xl:text-xl sm: text-[10px] font-semibold leading-[127.47%] tracking-tighter text-left uppercase">100 000 м2</p>
                <p class="text-white font-inter xl:text-xs sm: text-[7px] font-normal leading-[127.47%] tracking-tighter text-left">Производственная площадь.</p>
              </div>
            </div>
            <div class="flex">
              <img class="lg: w-[55px] lg: h-[55px] sm: h-[20px] sm: w-[20px] rounded-full bg-white" src={svg2}/>
              <div>
                <p class="text-white font-gilroy xl:text-xl sm: text-[10px] font-semibold leading-[127.47%] tracking-tighter text-left uppercase">1 100 чел</p>
                <p class="text-white font-inter xl:text-xs sm: text-[7px] font-normal leading-[127.47%] tracking-tighter text-left"> Рабочий коллектив.</p>
              </div>
            </div>
            <div class="flex">
              <img class="lg: w-[55px] lg: h-[55px] sm: w-[20px] sm: h-[20px] rounded-full bg-white" src={svg3}/>
              <div>
                <p class="text-white font-gilroy xl:text-xl sm: text-[10px] font-semibold leading-[127.47%] tracking-tighter text-left uppercase" >Официально</p>
                <p class="text-white font-inter xl:text-xs sm: text-[7px] font-normal leading-[127.47%] tracking-tighter text-left">Производственная площадь.</p>
              </div>
            </div>
          </div>
        </div>
        <img class="w-[92px] h-[87px] xl: ml-[1370px] xl:block md: hidden" 
         src={cart}/>
      </div>
    
  </>
  )
}

export default Carousel