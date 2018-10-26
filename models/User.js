const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    age: Number,
})

module.exports = mongoose.model('User', User)