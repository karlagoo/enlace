import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($email: String!){
    user(email: $email){
      email
      userName
      password
      plannedEvents { 
        _id
      }
    }
  }
`;

export const QUERY_EVENT = gql`
  query getEvent($title: String!){
    event(title: $title){
      title
      _id
      date
      time
      description
      users {
        _id
      }
    }
  }
`;

export const QUERY_EVENTS = gql`
  query getEvents{
    events{
      title
      description
      date
      time
      _id

    }
  }
  `;

  export const QUERY_CHATROOM = gql`
  query getChatroom($title:String!){
    chatroom(title:$title){
      roomName
      messages{
        message
      }
    }
  }`;

  export const QUERY_CHAT_MESSAGES = gql`
  query chatroomMessages($roomName:String!){
    chatroomMessages(roomName:$roomName){
      roomName
      message
      timeStamp
      sender
    }
  }`;