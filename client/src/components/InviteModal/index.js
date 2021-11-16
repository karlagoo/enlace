import { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'

const InviteModal = (props) => {
    if(props.show){

    return (
        <>
            <Modal show={props.show} >
                <Modal.Header closeButton>
                    <Modal.Title>New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control size="text" type="text" placeholder="Event Title" />
                        <br />
                        <Form.Control type="text" placeholder="Event Date" />
                        <br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
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

export default InviteModal
