const controller = require('../controllers/users');
const { upload } = require('../util/fileUpload');
const router = require('express').Router();

// /users
router.get('/', controller.getUsers); // /users
router.get('/:userId', controller.getUser); // /users/:userId
router.post('/', upload.single('image') , controller.createUser); // /users

module.exports = router;