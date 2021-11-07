
const { Schema, model } = require('mongoose');

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,       
    },
    date: {
        type: Date,
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
});

const Event = model('Event', eventSchema);

module.exports = Event;