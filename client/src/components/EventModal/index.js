import { useState } from 'react'
import { Button, Modal, Form, ListGroup } from 'react-bootstrap'
import { QUERY_ALL_USERS } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_PENDING } from '../../utils/mutations';
import { useHistory } from 'react-router-dom';


const EventModal = (props) => {
  const history = useHistory();
  const title = props.pass.title;

  const [userState, setUserState] = useState([
    {
      id: ''
    }
  ]);

  const { data } = useQuery(QUERY_ALL_USERS)
  const [updateUsers, { error }] = useMutation(UPDATE_PENDING)
 
    const testChat = (e)=>{
      e.preventDefault();
      history.push({
        pathname: '/chatroom',
        state: title,
        
      })
      console.log(props.pass.title)
 
    }



  const invite =  (e) => {
    e.preventDefault();
    console.log(userState)
    const eventId = e.target.id;
    console.log("test invite", eventId, userState)

    try {
      userState.forEach((user) => {
        console.log(eventId, user)
        const update = updateUsers(
          {
            variables:
            {
              _id: eventId,
              userId: user
            }
          }
        )
      })    
    }
    catch (err) {
      console.log(err)
    }


    props.handleClose();
  };

  const handleFormSelect = (e) => {
    e.preventDefault();

    setUserState([].slice.call(e.target.selectedOptions).map((user) => user.value))

  }



  if (props.show) {
    console.log(props.pass);

    return (
      <>

        <div>

          <Modal show={props.show} >
            <Modal.Header style={{ backgroundColor: '#02353C', borderColor: "#02353C", color: 'white'}} closeButton onClick={props.handleClose}>
              <Modal.Title>{props.pass.title} {props.pass.extendedProps.date}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ backgroundColor: '#02353C', color: 'white'}}>
              <ListGroup >
                <ListGroup.Item style={{backgroundColor: '#449342', color: "white", fontWeight: "bold"}}>Time:</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: '#449342', color: "white", fontStyle: "italic"}}>{props.pass.extendedProps.time}</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: '#449342', color: "white", fontWeight: "bold"}} >Description:</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: '#449342', color: "white", fontStyle: "italic"}}><p>{props.pass.extendedProps.description}</p></ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: '#449342', color: "white", fontWeight: "bold"}}>Attendees:</ListGroup.Item>
                <ListGroup.Item style={{backgroundColor: '#449342', color: "white", fontStyle: "italic"}}>
                  <ul>
                    {props.pass.extendedProps.users.map((user) =>
                      <li key={user._id}>{user.userName}</li>)}
                  </ul>
                </ListGroup.Item>
              </ListGroup>
              <Form.Group controlId="my_multiselect_field"  style={{ backgroundColor: '#02353C', borderColor: "#02353C", color: 'white'}}>
                <hr/>
              <Modal.Title>Select Users to Invite</Modal.Title>
              <hr/>
              <Form.Control as="select"style={{ backgroundColor: '#449342', borderColor: "#02353C", color: 'white'}} multiple onChange={handleFormSelect}>
                {data.allUsers.map((user) =>
                  <option key={user._id} value={user._id}>{user.userName}</option>
                )}
              </Form.Control>
              <Form.Text className="text-muted">
                Hold CTRL and click user names to select multiple users.
              </Form.Text>
            </Form.Group>
            </Modal.Body>
            <Modal.Footer style={{ backgroundColor: '#02353C', borderColor: "#02353C", color: 'white'}}>
              <Button style={{ backgroundColor: '#449342', borderColor: "#449342", borderRadius: "15px"}} id={props.pass.extendedProps._id} onClick={invite} >
                Invite
              </Button>
              <Button onClick={testChat} style={{ backgroundColor: '#449342', borderColor: "#449342", borderRadius: "15px"}}>Event Chat</Button>
            </Modal.Footer>
          </Modal>))


        </div>
      </>
    )
  }
  else {
    return null;
  }
}

export default EventModal
