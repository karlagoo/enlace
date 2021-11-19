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

export const QUERY_USERS = gql`
query getUsersByEmail($email: [String]!){
  users(email:$email){
    userName
    _id
    email
  }
}
`;

export const QUERY_ALL_USERS = gql`
query getAllUsers{
  allUsers{
    userName
    _id
    email
    pendingInvites{
      _id
      title
      time
      date
      description
    }
  }
}`

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
 query getEvents($_id:ID!){
  events(_id:$_id){
		_id
    title
    description
    time
    date
    users {
      _id
      userName
      email
    }
  }
}`;

export const QUERY_PENDING = gql`
query pendingEvents($_id: ID!) {
  pendingInvites(_id: $_id) {
    pendingInvites{
      _id
      title
      description
      date
      time
    }
  }
}`;

export const QUERY_ACCEPTED = gql`
query acceptedEvents($_id: ID!) {
  plannedEvents(_id: $_id) {
    plannedEvents{
      _id
      title
      description
      date
      time
    }
  }
}`;