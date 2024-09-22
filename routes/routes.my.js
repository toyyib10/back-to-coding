const router = require("express").Router();

const myController = require('../controllers/myController');

router.get('/', myController.method1);

module.exports = router;