const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Houses = new Schema({
    address: String,
    candy: Boolean,
    streetlight: Boolean
})

module.exports = mongoose.model('Houses', Houses)