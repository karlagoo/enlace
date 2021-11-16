import {useState} from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
//import InviteModal from '../InviteModal'

const InviteBtn = () => {
    const [show, setShow]=useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            {/* <InviteModal show={show} handleClose={handleClose}/> */}
            <Button variant='primary' onClick={handleShow}>New Event</Button>
            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3' controlId='eventTitle'>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type='text' placeholder='My party'/>
                            <Form.Text className='text-muted'>Title Here</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='eventDate'>
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type='text' placeholder='MM-DD-YYYY'></Form.Control>
                            <Form.Text className='text-muted'>Date Here</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='eventDesc'>
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control type='textarea' rows={3} placeholder='My party is lit'/>
                            <Form.Text className='text-muted'>Description Here</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='usersByEmail'>
                            <Form.Label>Add users by Email</Form.Label>
                            <Form.Control type='text' placeholder='tom@fun.com'></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default InviteBtn;