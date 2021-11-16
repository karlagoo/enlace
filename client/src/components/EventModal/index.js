import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
 

const EventModal = (props) => {
  
 if(props.show){
 
    return (
<>


      <Modal show={props.show} >
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>{props.passThrough.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><ul><li>{props.passThrough.date}</li><li>{props.passThrough.desc}</li></ul></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

</>
    )
}
else{
  return null;
}
}

export default EventModal
