const { Schema, model }= require('mongoose');

const deliveryAdressSchema = Schema({
    nama: {
        type: String,
        minlength: [true, 'Nama alamat wajib diisi'],
        required: [255, 'Panjang nama alamat maximal 255 karakter']
    },
    kelurahan: {
        type: String,
        required: [true, 'Nama kelurahan wajib diisi'],
        maxlength: [255, 'Panjang nama kelurahan maximal 255 karakter']
    },
    kecamatan: {
        type: String,
        required: [true, 'Nama kecamatan wajib diisi'],
        maxlength: [255, 'Panjang nama kecamatan maximal 255 karakter']
    },
    kabupaten: {
        type: String,
        required: [true, 'Nama kabupaten wajib diisi'],
        maxlength: [255, 'Panjang nama kabupaten maximal 255 karakter']
    },
    provinsi: {
        type: String,
        required: [true, 'Nama provinsi wajib diisi'],
        maxlength: [255, 'Panjang nama provinsi maximal 255 karakter']
    },
    detail: {
        type: String,
        required: [true, 'Nama detail alamat wajib diisi'],
        maxlength: [255, 'Panjang nama detail alamat maximal 255 karakter']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true});

module.exports = model('DeliveryAddress', deliveryAdressSchema)