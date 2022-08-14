
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




Track.Holder = function TrackHolder({children, ...args}) {
    return <div {...args}>{children}</div>
}

export default Track