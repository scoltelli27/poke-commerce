const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
route.get("/", services.homeRoutes);

//API
route.post("api/products", controller.create);
route.get("api/products", controller.find);
route.delete("api/products/:id", controller.delete);
module.exports = route;
