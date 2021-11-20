import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Form, Row, InputGroup, FormControl } from 'react-bootstrap';
import { CREATE_MESSAGE } from '../utils/mutations';
import { QUERY_CHAT_MESSAGES } from '../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import { render } from '@fullcalendar/common';

const ENDPOINT = process.env.PORT || `http://127.0.0.1:3001`;


function Chatroom(props) {
  const [createMessage, { error }] = useMutation(CREATE_MESSAGE);
  const [state, setState] = useState({ message: '' });
  const [chat, setChat] = useState([]);
  const socketRef = useRef();
  const timestamp = Date.now();
  const editedTimestamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);
  const roomTitle = props.history.location.state;
  const [validated, setValidated] = useState(false);

  const { data } = useQuery(QUERY_CHAT_MESSAGES,
    {
      variables:
      {
        roomName: roomTitle
      }
    });

  const userToken = Auth.getToken();
  const userInfo = Auth.getUserInfo(userToken);
  const userName = userInfo.data.email;
  const loggedIn = Auth.loggedIn();

  

  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT)
    socketRef.current.on("message", ({ message }) => {
      setChat([...chat, { message, }])
      console.log(loggedIn)

    })
    return () => socketRef.current.disconnect()
  },
    [chat]
  );

  useEffect(() => {
    console.log(roomTitle);
    if (data) {
      const initialChat = data.chatroomMessages
      setChat([...chat, ...initialChat])
      console.log(data)
    }
  }, [data]);

  const messageInput = (e) => {
    const { value } = e.target
    setState({ ...state, [e.target.name]: value })
    const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.stopPropagation();
        }
        setValidated(true);
    console.log(e.target.name)
  }

  const onMessageSubmit = async (e) => {
    const { message } = state;
    e.preventDefault();
    socketRef.current.emit('message', { message });
    console.log(userName, message, roomTitle)
    try {
      const create = await createMessage(
        {
          variables:
          {
            message: message,
            sender: userName,
            roomName: roomTitle
          }
        }
      )
      // setState({ message: '' })
      console.log()
    }
    catch (err) {
      console.log(err)
    }
  };

  // const userNameCheck = (messageSender) => {
  //     if (userName === messageSender){
  //       return 
  //     }
  //     else {

  //     }
  // }

  const renderMessages = () => {
    return chat.map((message, index) => (
      <div key={index} style={{ alignContent: "left" }}>
        {userName===message.sender ? 
        <div>
          <div className="col-7 offset-5" style={{ backgroundColor: '#449342', borderColor: "#449342", borderRadius: "15px", textAlign: "left", padding: "1rem" }}>
            <span style={{ color: "white" }}>{message.message}</span>
          </div>
          <p style={{
            color: "gray",
            fontSize: "12px",
            textAlign: "right"
          }}>Sent by: {message.sender}</p>
        </div>
        
        :
        <div>
          <div className="col-7" style={{ backgroundColor: '#3fd0c9', borderColor: "#449342", borderRadius: "15px", textAlign: "left", padding: "1rem" }}>
            <span style={{ color: "white" }}>{message.message}</span>
          </div>
          <p style={{
            color: "gray",
            fontSize: "12px",
            textAlign: "left"
          }}>Sent by: {message.sender}</p>
        </div>
  }
      </div>
    ))
  }

  const handleFormChange = (e) => {

  }


  return (
    <>
      <Navbar />
      <div>
        <hr />
        <h1><span style={{ fontStyle: "italic" }}>{roomTitle}</span> chat:</h1>
        <hr />
        <div style={{
          color: "blue",
        }}>{renderMessages()}</div>

      </div>

      <Form onSubmit={onMessageSubmit}>
        {/* Label */}
        <Form.Group as={Row} className="mb-3" controlId="messageForm">

          <Form.Label column sm="2">
            Message
          </Form.Label>

          {/* input */}
          <InputGroup className="mb-3">
            <FormControl
              onChange={messageInput}
              value={state.message}
              name="message"
              placeholder="Message"
              aria-label="Message"
              aria-describedby="basic-addon2"
            />
            
            <button style={{ backgroundColor: '#3fd0c9', borderColor: "#449342", borderRadius: "15px", text: "white"}} id="send-message">
              Send Message
            </button>
          </InputGroup>
            <button style={{ backgroundColor: '#3fd0c9', borderColor: "#449342", borderRadius: "10px", color: "white"}}onClick={() => window.location.assign('/profiles')}>
              Return to profile
            </button>
        </Form.Group>

      </Form>
      <Footer />
    </>
  );
}


export default Chatroom;