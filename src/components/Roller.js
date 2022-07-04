import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import React from 'react'

function Roller() {
  return (
    <Swiper
    spaceBetween={30}
    className="Roller"
    >
<SwiperSlide className='item-roller'><img src="https://unsplash.it/200/200" /></SwiperSlide>
<SwiperSlide className='item-roller'><img src="https://unsplash.it/200/200" /></SwiperSlide>
<SwiperSlide className='item-roller'><img src="https://unsplash.it/200/200" /></SwiperSlide>
</Swiper>
  )
}

export default Roller