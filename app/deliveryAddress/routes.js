const { policie_check } = require('../../middlewares');
const deliveryAdressController = require('./controller');

const router = require('express').Router();

router.get('/delivery-addresses', deliveryAdressController.index);

router.post(
    '/delivery-addresses',
    policie_check('create', 'DeliveryAddress'),
    deliveryAdressController.store
)

router.put(
    '/delivery-addresses/:id',
    deliveryAdressController.update
)

router.delete(
    '/delivery-addresses/:id',
    policie_check('view', 'DeliveryAddress'),
    deliveryAdressController.destroy
)
module.exports = router;