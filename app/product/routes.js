const router = require('express').Router();
const multer = require('multer');
const os = require('os');
const { policie_check } = require('../../middlewares');

const productControler = require('./controller');

router.get('/products', productControler.index);
router.post('/products', multer({dest: os.tmpdir()}).single('image'), 
policie_check('create', 'Product'),
productControler.store);
router.put('/products/:id', multer({dest: os.tmpdir()}).single('image'), 
policie_check('update', 'Product'),
productControler.update);
router.delete('/products/:id',
policie_check('delete', 'Product'),
productControler.destroy);

module.exports = router;