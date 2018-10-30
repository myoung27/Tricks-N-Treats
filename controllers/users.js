const neighborhoods = require("../models/Neighborhoods");
const houses = require("../models/Houses");
const user = require("../models/Users");

const usersController = {
  new: (req, res) => {
    res.render(`user/new`)
  },
  create: (req, res) => {
    Users.create(req.body)
        .then(() => {
            res.redirect(`/neighborhoods`)
        })
}
}

module.exports = usersController;