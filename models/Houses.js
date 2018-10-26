const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Houses = new Schema({
    name: String,
    price: Number,
})

module.exports = mongoose.model('Houses', Houses)