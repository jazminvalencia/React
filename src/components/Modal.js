import React from 'react'
import ReactDOM from 'react-dom'

import './style/Modal.css'

function Modal (propos){
    if(!propos.isOpen){
        return null;
    }

    return (
        ReactDOM.createPortal(
           <div className='Modal'>
               <div className='Modal__container'>
                    <button onClick={propos.onClose} className='Modal__close-button'>X</button>
                    {propos.children}
               </div>

           </div>,
            document.getElementById('modal')
        )
    )
}

export default Modal