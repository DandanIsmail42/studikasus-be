const { subject } =  require('@casl/ability');
const Invoice = require('../invoice/model');
const { policyFor } = require('../../utils');
const ObjectId = require('mongodb').ObjectId
const show = async(req, res, next) => {
    console.log(req);
    try{
        let policy = policyFor(req.user);
        
        let {order_id} = req.params;
        let invoice = 
        await Invoice
        .findOne({order: ObjectId(order_id)})
        .populate('order')
        .populate('user');
        let subjectInvoice = subject('Invoice', {...invoice, user_id: invoice.user._id});
        if(!policy.can('read', subjectInvoice)){
            return res.json({
                error: 1,
                message: `Anda tidak memiliki akses untuk melihat invoice ini.`
            });
        }
        return res.json(invoice);
    } catch (err) {
        return res.json({
            error: 1,
            message: `Error when getting invoice`
        });

    }
}

module.exports = {
    show
}