const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser
} = require('../../controllers/user-controller');

// Get All and Post at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// /api/users/:id
router
    .route('/:id')
    .get(getUserById);

module.exports = router;