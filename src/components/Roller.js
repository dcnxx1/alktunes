import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import Feature from '../compound/Feature'
import React from 'react'

function Roller({children}) {
  return (
    <Swiper spaceBetween={0} className="Roller" initialSlide={0} init={false} centeredSlides={true} slidesPerView={2}>
      {children}
    </Swiper>
  )
}

Roller.Sweep = function Sweep({features}){
  const {feature} = features
  return <SwiperSlide className="item-roller">
    
     <Feature pathToImg={feature.track_cover} artist={feature.track_artist} feel={feature.track_feel}/>
    </SwiperSlide>
}


export default Roller