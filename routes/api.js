const router = require('express').Router();
const taskController = require('../controller/taskController');

// router
// .route('/task/:id')
// .get(taskController.findOne)
// .put(taskController.complete)
// .delete(taskController.deleteOne)

router.get('/edit/:id', taskController.findOne);

router.put('/complete/:id', taskController.complete);

router.delete('/delete/:id', taskController.deleteOne);

router.post('/create', taskController.create);

router.post('/update', taskController.updateName);

module.exports = router;