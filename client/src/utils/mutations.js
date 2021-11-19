import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation($userName: String!, $email: String!, $password: String! ){
    addUser(userName: $userName, email: $email, password: $password){
      user{
        userName
        email
        password
      }
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation ($title: String!, $date: String!, $time: String!, $description: String!){
    addEvent(title: $title, date: $date, time: $time, description: $description){
      title
      date
      time
      description
    }
  }
`;

export const USER_LOGIN = gql`
  mutation ($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      user{
        email
        password
    }
    }
  }
`;

export const DELETE_EVENT = gql`
  mutation deleteEvent($_id: ID!){
    removeEvent(_id: $_id){
      _id
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser{
    removeUser{
      _id
      email
    }
  }
`;

export const CREATE_MESSAGE = gql`
mutation ($message:String!, $sender:String!, $roomName:String!){
  addMessage (message:$message, sender:$sender, roomName:$roomName){
    message
    sender
    roomName
  }
}
`;

export const CREATE_CHATROOM = gql`
mutation($roomName:String!,$roomId:String!){
  createChatroom(roomName:$roomName, roomId:$roomId){
    roomName
    roomId
  }
}
`;

export const UPDATE_CHATROOM = gql`
mutation updateChat($title:String!, $message:[ID]!){
  updateChat(title:$title, message:$message){
    roomName
  }
}`;