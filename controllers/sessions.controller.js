const genericController = require('./generic.controller');
const Session = require('../models/Session');

module.exports = {
  ...genericController(Session),
};