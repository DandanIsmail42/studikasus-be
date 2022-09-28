const router = require('express').Router();
const { policie_check } = require('../../middlewares');
const categoryController = require('./controller');

router.get('/categories', categoryController.index);
router.post('/categories',
 policie_check('create', 'Category'),
categoryController.store);
router.put('/categories/:id',
policie_check('update', 'Category'),
categoryController.update);
router.delete('/categories/:id',
policie_check('delete', 'Category'),
categoryController.destroy);


module.exports = router;