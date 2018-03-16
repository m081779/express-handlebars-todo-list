const router = require('express').Router();
const taskController = require('../controller/taskController');

router.get('/', taskController.findAll)

module.exports = router;
