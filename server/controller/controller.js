let PokeDB = require("../model/model");

//Create and save new product
exports.create = (req, res) => {
  //Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  //New product
  const product = new PokeDB({
    title: req.body.title,
    price: req.body.price,
  });

  //Save user in DB
  product
    .save(product)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while creating a new product",
      });
    });
};

//Find product
exports.find = (req, res) => {
  PokeDB.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error ocurred" });
    });
};

//Update product
exports.update = (req, res) => {};

//Delete product with product ID
exports.delete = (req, res) => {};
