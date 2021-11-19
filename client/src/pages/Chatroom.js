import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Form, Row, InputGroup, FormControl } from 'react-bootstrap';
import {CREATE_MESSAGE, CREATE_CHATROOM, UPDATE_CHATROOM} from '../utils/mutations';
import {QUERY_CHAT_MESSAGES} from '../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import Auth from '../utils/auth';
// import { render } from '@fullcalendar/common';

const ENDPOINT = process.env.PORT || `http://127.0.0.1:3001`;


function Chatroom(props) {
  const [createChatroom, {err}] = useMutation(CREATE_CHATROOM);
  const [createMessage, {error}] = useMutation(CREATE_MESSAGE);
  const [updateChatroom, {er}] = useMutation(UPDATE_CHATROOM);
  const [state, setState] = useState({ message: '' });
  const [chat, setChat] = useState([]);
  const socketRef = useRef();
  const timestamp = Date.now(); 
  const editedTimestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp);
  const roomTitle = props.history.location.state.datas.chatroom.roomName;

  const {data} = useQuery(QUERY_CHAT_MESSAGES,
    {
      variables:
      {
        roomName: roomTitle
      }
    });

  const userToken = Auth.getToken();
  const userInfo = Auth.getUserInfo(userToken);
  const userName = userInfo.data.email;

  useEffect(() => {
    socketRef.current = io.connect(ENDPOINT)
    socketRef.current.on("message", ({ message }) => {
      setChat([...chat, { message }])
      console.log(message)
    })
    return () => socketRef.current.disconnect()
  },
    [chat]
  );

  useEffect(() =>{
    // console.log(data.chatroomMessages);
    if(data){
      const initialChat = data.chatroomMessages
    setChat([...chat, ...initialChat ])
    }
  },[data]);

  const messageInput = (e) => {
    const { value } = e.target
    setState({ ...state, [e.target.name]: value })
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

  const renderMessages = () => {
    return chat.map(({ message }, index) => (
      <div key={index}>
        <span>{message}</span>
        <p style={{
          color : "gray",
          fontSize: "12px" 
        }}>{editedTimestamp}</p>
      </div>
    ))
  }
  

  return (
    <>
      <div>
        <h3>Chat log:</h3>
        <div style={{
          color:"blue",
          textAlign:"right"
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
              onChange={e => messageInput(e)}
              value={state.message}
              name="message"
              placeholder="Message"
              aria-label="Message"
              aria-describedby="basic-addon2"
            />

            {/* button */}
            <button variant="primary" id="send-message">
              Send
    </button>

          </InputGroup>
        </Form.Group>

      </Form>
    </>
  );
}


export default Chatroom;