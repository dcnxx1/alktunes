import React, {useRef} from 'react'
import ReactDom from 'react-dom'


function Modal({header, children, ...args}) {
    
    return ReactDom.createPortal(
    <>
       <div {...args}  className='portal'>
       <div className='portal-header'>
        {header}
       </div>
        {children}
       </div> 
    </>,
    document.getElementById('portal')
  )
}

export default Modal