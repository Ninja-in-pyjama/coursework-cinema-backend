const genericController = require('./generic.controller');
const User = require('../models/User');

module.exports = {
  ...genericController(User),

  async login({ body: {email, password} }, res) {
    try {
      const item = await User.findOne({where: {email, password}});
      return res.status(200).json(item);
    } catch (e) {
      console.log(e);
    }
  },
  async register({ body }, res) {
    try {
      const item = await User.findOne({where: {email: body.email}});
      if (item) {
        return res.status(400).json({message: "Аккаунт з таким логіном вже є"});
      }
      const newItem = await User.create(body);
      return res.status(200).json(newItem);
    } catch (e) {
      console.log(e);
    }
  }
};