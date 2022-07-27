//Required modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

dotenv.config({
  path: "config.env",
});
const PORT = process.env.PORT;

//Log requests
app.use(morgan("tiny"));

//Parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//Set view engine
app.set("view engine", "ejs");
//app.set("views", path.resolve(__dirname, "views/ejs"));

//Load assets
app.use(
  "/css/style.css",
  express.static(path.resolve(__dirname, "assets/css"))
);
app.use("/images", express.static(path.resolve(__dirname, "assets/images")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});