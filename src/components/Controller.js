import React, {useContext, useMemo} from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {PlaylistWhite, Icon, LogoMedium, NextButton, BackButton, Range, Playing, Pause} from '../imports'
import statics from '../static/statics'
import ContextController from '../Context/ControllerContext'

const ControllerComponents = styled(Icon)`
display: block;
background-size: 25px;
width: 25px;
height: 25px;
@media only screen and (max-width: ${statics.SCREEN_SIZE.DESKTOP_MEDIUM}){
  background-size: 20px;
}


@media only screen and (max-width: ${statics.SCREEN_SIZE.DESKTOP_MEDIUM}){
  background-size: 15px;
}

`

// const urler = 'https://cf-hls-media.sndcdn.com/media/159660/79411/159240/ZN6AZgnTN6v5.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLWhscy1tZWRpYS5zbmRjZG4uY29tL21lZGlhLzE1OTY2MC8qLyovWk42QVpnblRONnY1LjEyOC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2NTc3Mjc2MTB9fX1dfQ__&Signature=VsyTHxvR8lV2tWNmLOTaN7d5vS7kfZD-K9EgslAcAbjl70B~tYC4uhLvKjL~HKTxU~UqQjsBiiUi1bmW4pmjbqHkMbJDBqKIVazinJP6TI8flaKrgMT7F7-Yekm9qnePiqiYW1Nm7ek6dvE2dlPNzZNoreMC68ZE5s-r5Rh-VjDN-MvvgHNrlJeHQw0OpWVRBg0deyGs6NlGwvSB0-3b9LNk2KswhSU5pN1dz6CQyS3vMM3VMslGFZ~vztWQfPRDD37lOmyydFefI~Bffjq-5IV0QiSWxqhcB1nPl9tu~gWHCvJd6ZBHAGsiRDt-jOPfHmLf2UC6tqsVuHDo9TnOJg__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ'



function Controller() {
  const {at} = useContext(ContextController)
  const {song, playNext, setPlay} = useContext(ContextController)

  const currentSongPlaying = useMemo(() => at, [at])
  
  return (
    <div className='Controller'>

      <div className='controller-setting '>
        <div className='controller-info'>
          <i className="logo-alk"></i>
          <div className='controller-holder'>
            <span className='controller-song'>{song.track_name}</span>
            <span className='controller-artist '>{song.track_artist}</span>
          </div>
          </div>
          <div className='controller-toggle'>
            <ControllerComponents className="mini back"    path={BackButton} />
            <ControllerComponents onClick={() => setPlay(prevValue => !prevValue)} className="mini action"  path={Pause} />
            <ControllerComponents className="mini forward" onClick={() => playNext()} path={NextButton} />
          </div>
          <div className='controller-action'>
          <span>{at.toFixed(0)}</span>
            <Range />
            <span>{song.track_length}</span>
          </div>
  
      </div>
    </div>
  )
}

export default Controller