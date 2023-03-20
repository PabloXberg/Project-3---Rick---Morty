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
            <h5>Species: {props.character.species}</h5> 
            <h5>Status: {props.character.status}</h5>
            <h5>Gender: {props.character.gender}</h5>
            <h5>Species: {props.character.species}</h5>
            <h5>Location: {props.character.location.name}</h5>
            <h5>Origin: {props.character.origin.name}</h5>
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