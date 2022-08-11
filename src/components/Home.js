import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
import Feature from '../compound/Feature'
import Roller from './Roller'
import Track from '../compound/Track'
import {MoreWhite} from '../imports'
import {Swiper, SwiperSlide} from 'swiper/react'
import ContextController from '../Context/ControllerContext'
function Home({features}) {
  const {homeFeatures} = features
  const {song, setSong} = useContext(ContextController)
  


  return (
    <div className='Home '>
      <Search className="Search" />
      <div className='Featured '>
        <div className='feature-header'>
          <h2 className=''>Featured</h2>
        </div>
        <div className='feature-holder'>
        <Swiper spaceBetween={20} className="Roller" initialSlide={1} init={false} centeredSlides={true} slidesPerView={2}>
         {homeFeatures.features && homeFeatures.features.type.track_artists.map((feature) => (
          <SwiperSlide className='item-roller'>
          <Link className="link-home" state={{name : feature.track_artist, type: 'artist'}} to={`/artist/${feature.track_artist.replace(' ', '').replace(' ', '')}`}>
            <Feature pathToImg={feature.track_cover} artist={feature.track_artist} feel={feature.track_feel} />
          </Link> 
          </SwiperSlide>
         ))}
        </Swiper>
        {homeFeatures.features && homeFeatures.features.type.track_artists.map((feature) => (
            <div className='item-holder'>
            <Link key={feature.track_artist} state={{name : feature.track_artist, type: 'artist'}} className="link-home" to={`/artist/${feature.track_artist.replace(' ', '').replace(' ', '')}`}>
              <Feature artist={feature.track_artist} feel={feature.track_feel} pathToImg={feature.track_cover}></Feature>
          </Link>
           </div>
        ))}
        </div>
      </div>
      <div className='Trending'>
        <div className='trending-header'>
          <h2>Trending</h2>
        </div>

        <div className='trending-holder'>
          <ul className='trending-ul'>
            {homeFeatures.trending && homeFeatures.trending.type.track_artists.map((trending) => (
              <Track onClick={() => setSong(trending)} key={trending.track_id}>
              <Track.Holder className="track-holder">
                <img src={trending.track_cover} className="track-cover-img" />
              </Track.Holder>
              <Track.Holder className="track-holder f-1 t-flex-col">
                <span>{trending.track_name}</span>
                <span>Artist name</span>
              </Track.Holder>
              <Track.Holder className="track-holder f-1">
                <span>{trending.track_album}</span>
              </Track.Holder>
              <Track.Holder className="track-holder f-1">
                <span>{trending.track_length}</span>
              </Track.Holder>
            </Track>
            )) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home



{/* <Roller>
{homeFeatures.features && homeFeatures.features.type.track_artists.map((feature) => (
  <Roller.Sweep features={{feature}} />
))}
</Roller>  */}