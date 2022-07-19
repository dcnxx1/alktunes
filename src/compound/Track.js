import React, {useState, useRef} from 'react';

import {MoreWhite, Pause, Playlist, PointUpWhite, Close, Icon, QueueBlack, PlayBlack} from '../imports'
import useOutsideClick from '../hooks/useOutsideClick';

function Track({  children, ...args}) {
   const [showOptions, setOptions] = useState(false)
   const moreRef = useRef(null)
   useOutsideClick(moreRef, () => setOptions(false))
    
   return (
    <div className='Track' {...args}>
       {children}
    </div>
  )
}


/**
 * 
 *  <div className='track-holder '>
            <img className='track-cover-img' src='https://unsplash.it/500/500' />
        </div>
        <div className='track-holder t-flex-col track-name'>
            <span className='track-name'>Certified Loverboy</span>
            <span className='artist-name'>NLE CHOPPA</span>
        </div>
        <div className='track-holder track-album f-1'>
            <span>Certified Loverboy</span>
        </div>
        <div className='track-holder track-length f-1'>
            <span>2:15</span>
        </div>
        <div className='track-holder track-icon'>
        {defineOptions == false && <Icon onClick={() => setOptions(!showOptions)} path={MoreWhite}/> }
            <div ref={moreRef} className={`${showOptions == true ? 'show-more' : 'ds-none'}`}>
                <Icon className="icon-more" path={PlayBlack} />
                <Icon className="icon-more" path={Playlist} />
                <Icon className="icon-more" path={QueueBlack} />
                <Icon onClick={() => setOptions(false)} className="icon-more" path={Close} />
            </div>
        </div>
 * 
 * 
 */

Track.Holder = function TrackHolder({children, ...args}) {
    return <div {...args}>{children}</div>
}

export default Track