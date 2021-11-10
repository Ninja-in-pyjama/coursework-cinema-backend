const express = require("express");
const cors = require("cors");
const sequelize = require("./models/sequelize");
const models = require("./models");
const routes = require("./routes");

//
const PORT = process.env.PORT || 3000;

//
const app = express();
app.use(cors());
app.use(express.json());
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
