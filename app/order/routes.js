const router = require('express').Router();
const { policie_check } = require('../../middlewares');
const orderController = require('./controller');

router.post(
    '/orders',
    policie_check('create', 'Order'),
    orderController.store
);

router.get(
    '/orders',
    policie_check('view', 'Order'),
    orderController.index
);

module.exports = router;