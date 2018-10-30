const Users = require("../models/Users");

const usersController = {
  new: (req, res) => {
    res.render(`users/new`)
  },
  create: (req, res) => {
    Users.create(req.body)
        .then((uu) => {
            res.render(`users/index`,{
              uu:uu
            })
        })
}
}

module.exports = usersController;