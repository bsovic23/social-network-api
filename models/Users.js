const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
    username: {
        type: String
    },
    email: {
        type: String
    },
    thoughts: [
       {
       type: Schema.Types.ObjectId,
       ref: 'Thoughts'
      }
    ],
    friends: []
}
);


// Creating the User Model
const User = model('User', userSchema);

// Exporting the User Model
module.exports = User;