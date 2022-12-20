const { Schema, model } = require('mongoose');

const thoughtsSchema = new Schema (
    {
        thoughtText: {
            type: String
        },
        createdAt: {
            type: String,
            default: Date.now
        },
        username: {
            type: String
        },
        reactions: []   // check requirements for this
    }
);

// Creating the Thoughts model
const Thoughts = model('Thoughts', thoughtsSchema);

// Exporting the Thoughts model
module.exports = Thoughts;