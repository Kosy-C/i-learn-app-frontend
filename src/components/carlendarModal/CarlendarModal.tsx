import React from 'react'
import { Calendar } from 'react-calendar';


interface Props {
modal: boolean,
closeModal: ()=>void
}

const Modal: React.FC<Props> = ({modal, closeModal}) =>{
    
    return(
        <>
          {modal && 
            <div className="carlendar-close">
             <Calendar className="react-calendar"/>
             <button onClick={closeModal}>Close</button>
             </div>
        }
        </>
    )
}

export default Modal;