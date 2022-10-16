const { registerUser, authUser, allUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = require('express').Router();

router.route('/').post(registerUser).get(protect, allUsers);
router.route('/login').post(authUser)

module.exports = router;