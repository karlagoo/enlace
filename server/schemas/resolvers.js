const { AuthenticationError } = require('apollo-server-express');
const { Event, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('events')
    },

    users: async (parent, { email }) => {
      return User.find({ email: {$in: email } }).populate('events')
    },

    allUsers: async () => {
      return User.find({}).populate('pendingInvites')
    },

    event: async (parent, { title }) => {
      return Event.findOne( { title: title } )
    },


    events: async (parent, { _id })=>{
      return await Event.find({ users: {$in: [_id]}}).populate('users');
    },

    pendingInvites: async (parent, { _id }, context) => {
      const pending = await User.findOne({ _id: _id }).populate({path: 'pendingInvites'});

      console.log(_id)
      return pending;
    },

    plannedEvents:  async (parent, { _id }, context) => {
      const planned =  await User.findOne({ _id: _id }).populate('plannedEvents');
  
      console.log(_id)
      return planned;
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

    addEvent: async (parent, { title, date, time, description, users }) => {
      const event = await Event.create({title, date, time, description, users});
     
      return event ;
    },

    updateEventUsers: async (parent, { userId, _id }) => {
      const update = await Event.findOneAndUpdate(
        {_id: _id},
        {
          $push:  { users: userId }
        },
        {
          new: true,
          runValidators: true
        }
      )
      return update;
    },

    declineInvite: async (parent, { email, _id}) => {
      const decline = await User.findOneAndUpdate(
        {email: email},
        {
          $pull: { pendingInvites: {$in: [_id]}}
        },
        {
          new: true,
          runValidators: true
        }
      )
      return decline;
    },

    sendInvite: async (parent, { userId, _id }) => {
      const send = await User.findOneAndUpdate(
        {_id: userId},
        {
          $push: { pendingInvites:  _id}
        },
        {
        new: true,
        runValidators: true
        }
      )
      return send;
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
