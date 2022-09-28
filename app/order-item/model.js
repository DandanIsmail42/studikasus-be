const mongoose = require('mongoose');
const { model, Schema} = mongoose;

const orderItemSchema = Schema({
    name: {
        type: String,
        minlength: [5, 'Panjang nama makanan minimal 5 karakter'],
        required: [true, 'Nama item harus diisi']
    },
        price: {
        type: Number,
        required: [true, 'Harga wajib diisi']
    },

    qty: {
        type: Number,
        required: [true, 'Kuantitas harus diisi'],
        min: [1, 'qty minimal 1']
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }
    ,
    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
});

module.exports = model('OrderItem', orderItemSchema);