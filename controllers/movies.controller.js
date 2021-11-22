const genericController = require("./generic.controller");
const Movie = require("../models/Movie");
const path = require("path");

module.exports = {
  ...genericController(Movie),
  async getSessionByMovieId({ params: { id } }, res) {
    const movie = await Movie.findByPk(id);
    const sessions = await movie.getSessions();
    return res.status(200).json(sessions);
  },

  moviePicture({ files: {picture} }) {
    const fileName = picture.name;
    const filePath = path.resolve( "static", "img", fileName);
    console.log(filePath)
    picture.mv(filePath);
  },
};
