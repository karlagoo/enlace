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
  mutation ($title: String!, $date: String!, $time: String!, $description: String!, $users: [ID]!){
    addEvent(title: $title, date: $date, time: $time, description: $description, users: $users){
      title
      date
      time
      description
      users {
        _id
      }
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

export const UPDATE_EVENT_USER = gql`
 mutation updateEvent($userId: [ID]!, $_id: ID!){
    updateEventUsers(userId: $userId, _id: $_id){
    	_id
      title
    	description
    	time
    	date
    	users{
      	_id
      }
    }
  }
`;

export const UPDATE_PENDING = gql`
 mutation updatePending($userId: ID!, $_id: ID!){
    sendInvite(userId: $userId, _id: $_id){
    	_id
    	userName
    	email
    }
  }
`;

export const DECLINE_INVITE = gql`
mutation declineInvite($email: String!, $_id:ID!){
  declineInvite(email:$email, _id: $_id){
    email
    _id
  }
}
`;