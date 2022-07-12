import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'


const Modal = React.forwardRef((props, ref) => {
   return ReactDom.createPortal(
      <>
      <div  className='body-back'>
         <div ref={ref} className='portal'>
         <div  className='portal-header'>
          Header
         </div>
          Expl
         </div> 
      </div>
      </>,
      document.getElementById('portal')
    )
})




export default Modal