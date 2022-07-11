import React, {useRef, useState, forwardRef, createRef} from 'react'
import Search from './Search'
import Modal from './Modal'
import useOutsideClick from '../hooks/useOutsideClick'

function Playlist() {
  const [showModal, setModal] = useState(false)
  const modalRef = createRef()
  const ModalRef = forwardRef((props, ref) => (<Modal ref={ref}></Modal>))
  useOutsideClick(modalRef, () => setModal(false))

  return (
    <div className='Playlist-Comp'>
      {showModal && <ModalRef innerRef={modalRef}></ModalRef>}
      <Search className="pl-s" />
      <div onClick={() => setModal(!showModal)} className='playlist-container'>
        Boezhoe
      </div>
    </div>
  )
}

export default Playlist