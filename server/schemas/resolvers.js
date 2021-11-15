const { AuthenticationError } = require('apollo-server-express');
const { Event, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('events')
    },

    event: async (parent, { title }) => {
      return Event.findOne( { title: title } )
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
        
      }
      throw new AuthenticationError('You need to be logged in!');
    },
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
