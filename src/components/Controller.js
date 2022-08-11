import React, {useContext, useMemo, useRef, useState} from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {PlaylistWhite, Icon, LogoMedium, NextButton, BackButton, Range, Playing, Pause, Play, Moment} from '../imports'
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





function Controller() {
  const {song, playNext, setPlay, play, playPrevious} = useContext(ContextController)
  const [timePlayed, setPlayed] = useState(0)

  return (
    <div className={`Controller ${song.track_feel === 'dark' ? 'feel-dark' : 'feel-light'} `}>

      <div className='controller-setting '>
        <div className='controller-info'>
          <i className="logo-alk"></i>
          <div className='controller-holder'>
            <span className='controller-song'>{song.track_name}</span>
            <span className='controller-artist '>{song.track_artist}</span>
          </div>
          </div>
          <div className='controller-toggle'>
            <ControllerComponents onClick={() => playPrevious()} className="mini back"    path={BackButton} />
            <ControllerComponents onClick={() => setPlay(prevValue => !prevValue)} className="mini action"  path={play === true  ? Pause : Play} />
            <ControllerComponents className="mini forward" onClick={() => playNext()} path={NextButton} />
          </div>
          <div className='controller-action'>
            <Moment timeInt={{timePlayed}} />
            <Range playedTime={{timePlayed, setPlayed}}/>
            <span>{song.track_length}</span>
          </div>
          
      </div>
    </div>
  )
}

export default Controller