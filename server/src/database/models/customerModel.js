const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    email: String,
    passsword: String,
    salt: String,
    phone: String,
    address:[
        {type: Schema.Types.ObjectId, ref: 'address', require: true}
    ],
    cart: [
        {
            product: {
                type: Schema.Types.ObjectId, ref: 'product', require: true
            },
            unit: {
                type: Number, require:true
            }
        }
    ],
    orders: [
        {
            type: Schema.Types.ObjectId, ref:'order', require: true
        }
    ]
},{
    toJSON:{
        transform(doc, ret){
            delete ret.passsword;
            delete ret.salt;
            delete ret.__v;
        }
    },
    timestamps: true
});

module.exports = mongoose.model('customer', CustomerSchema);