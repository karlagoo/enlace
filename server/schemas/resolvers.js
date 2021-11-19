const { AuthenticationError } = require('apollo-server-express');
const { Event, User, Chat, Message } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('events')
    },

    event: async (parent, { title }) => {
      return Event.findOne( { title: title } )
    },


    events: async()=>{
      return await Event.find();
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
        
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    chatroom: async(parent, {title})=>{
      return Chat.findOne({roomName:title}).populate('messages')
    },

     chatroomMessages: async (parent, {roomName}) =>{
       return await Message.find({roomName:{$in:roomName}})
     }
  },


  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
      const token = signToken(user);
      console.log(token);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      console.log(token);
      return { token, user };
    },

    addEvent: async (parent, { title, date, time, description }, context) => {
      const event = await Event.create({title, date, time, description,});
      if(context.user){
         return User.findOneAndUpdate(
          {_id: context.user._id},
          {
            $push:  {plannedEvents: event._id}
          },
          {
            new: true,
            runValidators: true
          }
        )
      }
      console.log(context.user)
      return event ;
    },

    createChatroom: async (parent, {title})=>{
      const addRoom = await Chat.create({roomName: title});

      console.log(addRoom)
      return addRoom ;
    },

    updateChat: async (parent, {title, message})=>{
      const updateChat = await Chat.findOneAndUpdate(
        {roomName:title},
        {
          $push:{messages:message}
        },
        {
          new: true,
          runValidators: true
        }
      )
      return updateChat
    },

    addMessage: async (parent, {message, sender, roomName})=>{
      const newMessage = await Message.create({message, sender, roomName});
      
      return newMessage
    },

    removeEvent: async (parent, { _id }) => {
      console.log(_id)
      return Event.findOneAndDelete({_id: _id})
    },

    removeUser: async (parent, args, context) => {
      if(context.user){
        return User.findOneAndDelete({_id: context.user._id});
      }
    },
  }
};

module.exports = resolvers;
