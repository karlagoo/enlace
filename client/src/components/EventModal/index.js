import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
 

const EventModal = (props) => {
  
 if(props.show){
   console.log(props.pass);
 
    return (
<>

<div>

  <Modal show={props.show} >
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>{props.pass.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><ul><li>{props.pass.extendedProps.description}</li><li>{props.pass.extendedProps.time}</li></ul></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>))


</div>
</>
    )
}
else{
  return null;
}
}

export default EventModal
