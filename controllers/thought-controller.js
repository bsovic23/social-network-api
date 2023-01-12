const { User, Thoughts } = require('../models');

const thoughtContoller = {
    
    // Get all Thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
            .then(thoughtData => res.json(thoughtData))
            .catch(err => res.status(400).json(err));
    },

    // Get Thought by ID
    getThoughtById({ params }, res) {
      Thoughts.findOne({ _id: params.id })
        .then(thoughtData => {
          if (!thoughtData) {
            res.status(400).json({ message: 'There is no thought with this ID'});
            return;
          } else {
            res.json(thoughtData);
          }
        })
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });
    },

    // Post new Thought
    addThought({ body }, res) {
      Thoughts.create(body)
          .then(thoughtData => res.json(thoughtData))
          .catch(err => res.status(400).json(err));
  },

    // Update Thought by ID
    updateThought({ params, body }, res) {
      Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then(thoughtData => {
          if (!thoughtData) {
              res.status(404).json({ message: 'There is no thought with this ID'});
              return;
          }
          res.json(thoughtData);
      })
      .catch(err => res.json(400).json(err));
},


    // Delete Thought by ID

};

module.exports = thoughtContoller;