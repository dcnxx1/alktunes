import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import React from 'react'

function Roller() {
  return (
    <Swiper
    spaceBetween={20}
    className="Roller"
    
    init={false}
   centeredSlides={true}
   slidesPerView={2}
    >
<SwiperSlide className='item-roller'><img src="https://unsplash.it/200/200" /></SwiperSlide>
<SwiperSlide className='item-roller'><img src="https://unsplash.it/200/200" /></SwiperSlide>
<SwiperSlide className='item-roller'><img src="https://unsplash.it/200/200" /></SwiperSlide>
</Swiper>
  )
}

export default Roller