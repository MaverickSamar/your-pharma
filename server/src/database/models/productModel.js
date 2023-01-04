const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    desc: [{
        type: Schema.Types.ObjectId, ref: 'desc', require: true
    }],
    banner: String,
    type: String,
    unit: Number,
    price: Number,
    available: Boolean
})

module.exports = mongoose.model('product', ProductSchema);