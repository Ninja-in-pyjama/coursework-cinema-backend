const genericController = require('./generic.controller');
const Movie = require('../models/Movie');

module.exports = genericController(Movie);