const { AuthenticationError } = require('apollo-server-express');
const { Event, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { userName }) => {
      return User.findOne({ userName }).populate('events')
    },

    event: async (parent, { userName }) => {
      const params = userName ? { userName } : {};
      return Event.find(params).sort({ createdAt: -1 });
    }
  },

  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
      const token = signToken(user);
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

      return { token, user };
    },
    addEvent: async(parent, {title, date, time, description})=> {
      const event = await Event.create({title, date, time, description});
      return event;
    },
    removeEvent: async(parent, {eventId})=>{
      return Event.findOneAndDelete({_id: eventId})
    },
  }
};

module.exports = resolvers;
