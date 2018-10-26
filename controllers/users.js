
const neighborhoods = require('../models/Neighborhoods')
const houses = require('../models/Houses')

const userController = {
    index: (req, res) => {
        res.send("Hey whats up this is app index")
    }
}

module.exports = userController