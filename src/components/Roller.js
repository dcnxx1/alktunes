import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Feature from '../compound/Feature'
import React from 'react'

function Roller() {
  return (
    <Swiper
    spaceBetween={20}
    className="Roller"
    initialSlide={1}
    init={false}
   centeredSlides={true}
   slidesPerView={2}
    >
  <SwiperSlide className='item-roller'>
    <Feature  pathToImg='https://unsplash.it/200/200' artist={"Drake"} feel="dark"/> 
  </SwiperSlide>
  <SwiperSlide defaultChecked className='item-roller'>
    <Feature  pathToImg='https://unsplash.it/200/200' artist={"Drake"} feel="dark"/> 
  </SwiperSlide>
  <SwiperSlide className='item-roller'>
    <Feature pathToImg='https://unsplash.it/200/200' artist={"Drake"} feel="dark"/> 
  </SwiperSlide>
</Swiper>
  )
}

export default Roller