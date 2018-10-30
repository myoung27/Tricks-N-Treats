const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Users = new Schema({
    name: String,
    age: Number,
})

module.exports = mongoose.model('Users', Users)