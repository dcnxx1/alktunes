import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'


function Modal({children, innerRef}) {
  
 console.log(innerRef)
    return ReactDom.createPortal(
    <>
    <div  className='body-back'>
       <div  className='portal'>
       <div ref={innerRef} className='portal-header'>
        Header
       </div>
        Expl
       </div> 
    </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal