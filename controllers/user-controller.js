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
    },


    // Update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(userData => {
                if (!userData) {
                    res.status(404).json({ message: 'There is no user with this ID'});
                    return;
                }
                res.json(userData);
            })
            .catch(err => res.json(400).json(err));
    },

    // Delete user by id
    deleteUser({ params }, res ) {
        User.findOneAndDelete({ _id: params.id })
            .then(userData => {
                if (!userData) {
                    res.status(400).json({ message: 'There is no user with this ID' });
                    return;
                }
                res.json(userData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = userController;