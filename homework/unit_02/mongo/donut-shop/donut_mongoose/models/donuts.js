//requirements: require mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create your donut schema:

var DonutSchema = new Schema({
    name: String,
    description: String,
    img: String,
    price: Number,
    qty: Number
});
var Donuts = mongoose.model('Donut', DonutSchema);
//export your donut with module.exports()
module.exports = Donuts;