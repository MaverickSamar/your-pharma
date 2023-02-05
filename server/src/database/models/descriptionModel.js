const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DescriptionSchema = new Schema({
    description: String,
    drugs: String,
    doses: String,
    // sideeffects: String,
    usage: String
});

module.exports = mongoose.model('desc', DescriptionSchema);