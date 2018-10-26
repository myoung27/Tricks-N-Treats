const neighborhoods = require("../models/Neighborhoods");
const houses = require("../models/Houses");
const user = require("../models/User");

const userController = {
  index: (req, res) => {
    res.render('users/index');
  }
};

module.exports = userController;
