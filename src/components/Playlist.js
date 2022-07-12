import React, {useRef, useState, forwardRef, createRef} from 'react'
import Search from './Search'
import Modal from './Modal'
import useOutsideClick from '../hooks/useOutsideClick'

function Playlist() {
  const [showModal, setModal] = useState(false)
  const modalRef = createRef()
  useOutsideClick(modalRef, () => setModal(false))

  return (
    <div className='Playlist-Comp'>
     {showModal && <Modal ref={modalRef} ></Modal>}
      <Search className="pl-s" />
      <div onClick={() => setModal(!showModal)} className='playlist-container'>
        Boezhoe
      </div>
    </div>
  )
}

export default Playlist