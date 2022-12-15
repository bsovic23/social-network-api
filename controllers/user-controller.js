const { User } = require('../models');

const userController = {

    // Get all users
    getAllUser(req, res) {
        User.find({})
            .then(userData => res.json(userData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Get user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(userData => {
                if (!userData) {
                    res.status(400).json({ message: 'No user with this id'});
                    return;
                } else {
                    res.json(userData);
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // Post new user
    createUser({ body }, res) {
        User.create(body)
            .then(userData => res.json(userData))
            .catch(err => res.status(400).json(err));
    }


    // Update user by id


    // Delete user by id
};

module.exports = userController;