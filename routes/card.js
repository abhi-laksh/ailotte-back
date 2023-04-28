const controller = require('../controllers/card');
const { upload } = require('../util/fileUpload');
const router = require('express').Router();

// /card
router.get('/', controller.getAllCards); // /card
router.post('/', upload.single('image'), controller.createCard); // /card

module.exports = router;