// EXPRESS
const express = require("express");

// LOADING ENVIRONMENT VARIABLES - PORT_USED
require("dotenv").config({
  path: "./config/.env",
});

// PATH TO ROUTES
const routesModelCars = require("./modelcars/routes");
const routesPictureCars = require("./modelpictures/routes");
const routesUsers = require("./users/routes");
const routesPosts = require("./posts/routes");

// MYSQL / SEQUELIZE
const sequelize = require("./config/database");
// Synchronization of models
require("./modelcars/models");
require("./modelpictures/models");
require("./users/models");
require("./posts/models");

sequelize.sync({ force: true });

// HELMET
const helmet = require("helmet");

const app = express();

const cors = require("cors");
app.use(cors());

app.use("/pictures", express.static(__dirname + "/pictures"));

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json());

// ROUTES CALLING
app.use("/api/modelCars", routesModelCars);
app.use("/api/carsPicture", routesPictureCars);
app.use("/api/user", routesUsers);
app.use("/api/post", routesPosts);

// EXPORTS
module.exports = app;
