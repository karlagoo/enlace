const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Event {
    _id: ID!
    title: String!
    date: String!
    time: String!
    description: String!
    users: [User]
}
  type User {
    _id: ID!
    userName: String!
    password: String!
    email: String!
    creationDate: String
    plannedEvents: [Event]
    pendingInvites: [Event]
  }

  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    user(email: String!): User
    users(email: [String]!): [User]
    allUsers: [User]
    event(title: String!): Event
    events(_id: ID!):[Event]
    pendingInvites(_id: ID!): User
    plannedEvents(_id: ID!): User
  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(title: String!, date: String!, time: String!, description: String!, users: [ID]!): Event
    updateEventUsers(userId: [ID]!, _id: ID!): Event
    declineInvite(_id: ID!, email: String!): User
    removeEvent(_id: ID!): [Event]
    removeUser: User
    sendInvite(userId: ID!, _id: ID!): User
  }
`;

module.exports = typeDefs;
