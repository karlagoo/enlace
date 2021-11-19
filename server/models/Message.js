const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const messageSchema = new Schema({

    message: {
        type: String,
    },

    timeStamp: {
        type: String,
        default: Date.now
    },
    sender: {
        type: String
    },
    roomName: {
        type: String
    }

});


const Message = model('Message', messageSchema);

module.exports = Message;