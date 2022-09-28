const router = require('express').Router();
const { policie_check } = require('../../middlewares');
const categoryController = require('./controller');

router.get('/tags', categoryController.index);
router.post('/tags',
policie_check('create', 'Tag'),
categoryController.store);
router.put('/tags/:id',
policie_check('update', 'Tag'),
categoryController.update);
router.delete('/tags/:id',
policie_check('delete', 'Tag'),
categoryController.destroy);


module.exports = router;