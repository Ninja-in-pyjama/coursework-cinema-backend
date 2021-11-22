const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const sequelize = require("./models/sequelize");
require("./models");
const routes = require("./routes");

//
const PORT = process.env.PORT || 3000;

//
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use(express.static("static"));
app.use(express.urlencoded({ extended: false }));

routes.forEach(item => {
  app.use(`/api/${item}`, require(`./routes/${item}`));
});
//
const start = async () => {
  try {
    await sequelize.sync({ alter: true });
    await sequelize.authenticate();

    app.listen(PORT);
  } catch (e) {
    console.log(e);
  }
};
start();
