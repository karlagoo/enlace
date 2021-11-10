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
      email
      password
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