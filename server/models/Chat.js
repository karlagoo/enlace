const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const chatSchema = new Schema({
    
        // roomId: {
        //         type: String,
        //         required:true
        //     },
        roomName: {
                type: String,
                required: "There is no chatroom for this event yet"
            },
        messages: [
               {
                   type: Schema.Types.ObjectId,
                   ref: 'Message'
               }
            ],
 
    
});

const Chat = model('Chat', chatSchema);

module.exports = Chat;