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