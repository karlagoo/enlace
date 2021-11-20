import { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_EVENT, UPDATE_PLANNED } from '../../utils/mutations';
import Auth from '../../utils/auth';

const InviteBtn = () => {
    const userToken = Auth.getToken();
    const userInfo = Auth.getUserInfo(userToken);
    const userId = userInfo.data._id

    const [addEvent, { error }] = useMutation(CREATE_EVENT);


    const [eventState, setEventState] = useState(
        {
            title: '',
            description: '',
            date: '',
            time: '',
        }
    )
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const createEvent = await addEvent(
                {
                    variables:
                    {
                        title: eventState.title,
                        description: eventState.description,
                        date: eventState.date,
                        time: eventState.time,
                        users: [userId]
                    }
                }
            )

            handleClose();
            window.location.reload();
            console.log(createEvent)
        }
        catch (err) {
            console.log(err)
        }

    }



    const handleFormChange = (event) => {

        const { title, value } = event.target;

        setEventState({
            ...eventState,
            [title]: value,
        })
        console.log(eventState)

    };




    return (
        <div>
            {/* <InviteModal show={show} handleClose={handleClose}/> */}
            <Button style={{ backgroundColor: '#449342', borderColor: "#449342", borderRadius: "15px"}} className="col-12" onClick={handleShow}>New Event</Button>
            <Modal show={show}>
                <Modal.Header closeButton onClick={handleClose} style={{backgroundColor: '#02353C', borderColor: "#02353C", color: "white"}}>
                    <Modal.Title style={{backgroundColor: '#02353C', borderColor: "#02353C", color: "white"}}>New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{backgroundColor: '#02353C', color: "white"}}>
                    <Form>
                        <Form.Group className='mb-3' controlId='eventTitle'>
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control type='text' placeholder='My party' title="title" onChange={handleFormChange} />
                            <Form.Text className='text-muted' >Title Here</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='eventDate'>
                            <Form.Label>Event Date</Form.Label>
                            <Form.Control type='text' placeholder='YYYY-MM-DD Format ONLY' title="date" onChange={handleFormChange}></Form.Control>
                            <Form.Text className='text-muted'>Date Here</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='eventDesc'>
                            <Form.Label>Event Description</Form.Label>
                            <Form.Control type='textarea' rows={3} placeholder='My party is lit' title="description" onChange={handleFormChange} />
                            <Form.Text className='text-muted'>Description Here</Form.Text>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId='eventTime'>
                            <Form.Label>Event Time</Form.Label>
                            <Form.Control type='text' rows={3} placeholder='3:33pm' title="time" onChange={handleFormChange} />
                            <Form.Text className='text-muted'>Time Here</Form.Text>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer style={{backgroundColor: '#02353C', borderColor: "#02353C", color: "white"}}>
                    <Button style={{ backgroundColor: 'red', borderColor: "red", borderRadius: "15px"}} onClick={handleClose}>Close</Button>
                    <Button style={{ backgroundColor: '#449342', borderColor: "#449342", borderRadius: "15px"}} onClick={handleFormSubmit}>Add Event</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default InviteBtn;