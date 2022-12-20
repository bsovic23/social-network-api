const router = require('express').Router();
const {
    //getAllThoughts,
    addThought
} = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

     /* 
router
    .route('/:id')
    .get()
    .put()
    .delete();
    */

module.exports = router;
