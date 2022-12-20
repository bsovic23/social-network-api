const { User, Thoughts } = require('../models');

const thoughtContoller = {
    
    // Get all Thoughts
    getAllThoughts(rec, res) {
        Thoughts.find({})
            .then(thoughtData => res.json(thoughtData))
            .catch(err => res.status(400).json(err));
    },

    // Get Thought by ID


    // Post new Thought
    addThought({ params, body }, res) {
        Thoughts.create(body)
          .then(({ _id }) => {
            return User.findOneAndUpdate(
              { _id: params.userId },
              { $push: { thoughts: body } },
              { new: true }
            );
          })
          .then(userData => {
            if (!userData) {
              res.status(404).json({ message: 'No user found with this id!' });
              return;
            }
            res.json(userData);
          })
          .catch(err => res.json(err));
      }


    // Update Thought by ID


    // Delete Thought by ID

};

module.exports = thoughtContoller;