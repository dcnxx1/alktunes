import React, {useRef, useState, forwardRef, createRef} from 'react'
import Search from './Search'
import Modal from './Modal'
import useOutsideClick from '../hooks/useOutsideClick'
import Track from '../compound/Track'



function Playlist() {
  const [showModal, setModal] = useState(false)
  const modalRef = createRef()
  const [checkBox, setCheckBox] = useState(false)

  useOutsideClick(modalRef, () => setModal(false))

  return (
    <div className='Playlist-Comp'>
     {showModal && <Modal  header="Add to playlist" ref={modalRef}>
        <Track onClick={() => setCheckBox(prevValue => !prevValue)}>
        <Track.Holder className="track-holder ">
          <img className='playlist-img' src="https://unsplash.it/200/200" />
        </Track.Holder>
        <Track.Holder className="track-holder ">
          <span>Playlist Name</span>
        </Track.Holder>
        <Track.Holder className="track-holder f-1">
          <span className='addbox'>
            {checkBox && <span className='checktrue'></span>}
          </span>
        </Track.Holder>
        </Track>
        <Track onClick={() => setCheckBox(prevValue => !prevValue)}>
        <Track.Holder className="track-holder ">
          <img className='playlist-img' src="https://unsplash.it/200/200" />
        </Track.Holder>
        <Track.Holder className="track-holder ">
          <span>Playlist Name</span>
        </Track.Holder>
        <Track.Holder className="track-holder f-1">
          <span className='addbox'>
            {checkBox && <span className='checktrue'></span>}
          </span>
        </Track.Holder>
        </Track>
     </Modal>}
      <Search className="pl-s" />
      <div onClick={() => setModal(!showModal)} className='playlist-container'>
        Boezhoe
      </div>
    </div>
  )
}

export default Playlist