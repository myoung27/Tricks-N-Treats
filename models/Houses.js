const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Houses = new Schema({
    address: String,
    candy: String,
    streetlight: String
})

module.exports = mongoose.model('Houses', Houses)