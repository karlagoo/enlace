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

  type Chat {
    roomName:String!
    messages:[Message]
  }

  type Message {
    message: String!
    timeStamp: String!
    sender: String!
    roomName: String!
  }

  type Query {
    user(email: String!): User
    users(email: [String]!): [User]
    allUsers: [User]
    event(title: String!): Event

    events:[Event]
    me: User
    chatroom(title:String!): Chat
    chatroomMessages(roomName:String!): [Message]

    events(_id: ID!):[Event]
    pendingInvites(_id: ID!): User
    plannedEvents(_id: ID!): User

  }

  type Mutation {
    addUser(userName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addMessage(message: String!, sender:String!, roomName:String!): Message
    createChatroom(title: String!): Chat
    updateChat(title:String!, message:[ID]!): Chat
    addEvent(title: String!, date: String!, time: String!, description: String!): Event

    addEvent(title: String!, date: String!, time: String!, description: String!, users: [ID]!): Event
    updateEventUsers(userId: [ID]!, _id: ID!): Event
    declineInvite(_id: ID!, email: String!): User

    removeEvent(_id: ID!): [Event]
    removeUser: User
    sendInvite(userId: ID!, _id: ID!): User
  }
`;

module.exports = typeDefs;
