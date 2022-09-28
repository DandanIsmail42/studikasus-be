const router = require('express').Router();
const { policie_check } = require('../../middlewares');
const cartController = require('./controller');

router.put('/carts', 
policie_check('update', 'Cart'),
cartController.update
)

router.get('/carts', 
policie_check('view', 'Cart'),
cartController.index
)

module.exports = router;