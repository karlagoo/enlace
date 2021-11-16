import React, {useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { Form, Row, Button, InputGroup, FormControl } from 'react-bootstrap';
import { render } from '@fullcalendar/common';


const ENDPOINT = 'http://127.0.0.1:3001';


function Chatroom() {
    const [ state, setState ] = useState({message: ''})
    const [ chat, setChat ] = useState([])

    const socketRef = useRef()

    useEffect(() => {
      socketRef.current = io.connect(ENDPOINT)
      socketRef.current.on("message",({message})=>{
        setChat([...chat, { message }])
      })
      return () => socketRef.current.disconnect()
    }, 
    [chat]
    );
  
    const messageInput = (e) =>{
      const {value} = e.target
      setState({...state, [e.target.name]: value})
      console.log(e.target.name)
    }

    const onMessageSubmit = (e) =>{
      const { message } = state
      socketRef.current.emit('message', {message})
      e.preventDefault()
      setState({message:''})
  
    }

    const renderMessages = () => {
      return chat.map(({message}, index)=> (
        <div key={index}>
            
              <span>{message}</span>
          
        </div>
      ))
    }
    return (
   <>
      <div>
        <h3>Chat log:</h3>
        {renderMessages()}
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
      value ={state.message}
      name = "message"
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