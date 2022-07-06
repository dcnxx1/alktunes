
import React from 'react';
import Icon from './Icon';
import statics from "../static/statics";
import {MoreWhite} from '../imports'
function Track() {
  return (
    <div className='Track'>
        <div className='track-holder '>
            <img className='track-cover-img' src='https://unsplash.it/500/500' />
        </div>
        <div className='track-holder t-flex-col track-name'>
            <span className='track-name'>SHOTTA FLOW 6</span>
            <span className='artist-name'>NLE CHOPPA</span>
        </div>
        <div className='track-holder track-album f-1'>
            <span>Certified Loverboy</span>
        </div>
        <div className='track-holder track-length f-1'>
            <span>2:15</span>
        </div>
        <div className='track-holder track-icon'>
            <Icon hide={true}  path={MoreWhite}/>
        </div>
    </div>
  )
}

export default Track