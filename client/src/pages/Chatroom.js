import React, {useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
// import { Form, Button } from 'react-bootstrap';


//const socket = io.connect('http://localhost:3001')
const ENDPOINT = 'http://127.0.0.1:3001';

function Chatroom() {
    const [response, setResponse] = useState("");
  
    useEffect(() => {
      const socket = socketIOClient(ENDPOINT);
      socket.on("FromAPI", data => {
        setResponse(data);
      });
    }, []);
  
    return (
      <div>
      <div id="messageContainer"></div>
        <form id="form">
          <label for="messageInput">Message</label>
          <input type="text" id="messageInput"></input>
          <button type="submit" id="sendButton">Send</button>

          <label for="roomInput">Room</label>
          <input type="text" id="roomInput"></input>
          <button type="buttom" id="roomButton">Join</button>
        </form>
        </div>
    );
  }
  

export default Chatroom;