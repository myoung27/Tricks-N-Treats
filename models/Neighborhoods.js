const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Neighborhood = new Schema({
    name: String,
    houses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Houses'
        }
    ]
})

module.exports = mongoose.model('Neighborhoods', Neighborhood)