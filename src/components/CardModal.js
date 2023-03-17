import React from 'react'
import Button from 'react-bootstrap/Button';

function CardModal(props) {
    if (!props.show) {
        return null
    }
  return (
    <>
     <div className='modal-container' onClick={props.onClose} >
         <div className='modal-content'onClick={e => e.stopPropagation()} >
          <div className='modal-header'>
            <h3>{props.character.name}</h3>
           </div>
          <div>
            < img className='modal-picture' src={props.character.image} alt={props.character.id}/>
           </div>
           <div className='modal-body'>
            <p>Species: {props.character.species}</p>
            <p>Status: {props.character.status}</p>
           </div>
           <div className='modal-footer'>
             <Button onClick={props.onClose} className='modal-close-btn'>Close</Button>
           </div>
         </div>   
       </div>
      </>
  )
}

export default CardModal