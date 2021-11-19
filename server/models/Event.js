
const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,       
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,

    },
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ] 
});

const Event = model('Event', eventSchema);

module.exports = Event;