import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom'


const Modal = React.forwardRef(({header, children}, ref) => {

   return ReactDom.createPortal(
      <> 
      <div  className='body-back'>
         <div ref={ref} className='portal'>
            <div  className='portal-header'>
               {header}
            </div>
               {children}
         </div> 
      </div>
      </>,
      document.getElementById('portal')
    )
})




export default Modal