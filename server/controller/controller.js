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
      //res.send(data);
      res.redirect("/add-product");
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while creating a new product",
      });
    });
};

//Find all products / Find single product
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    PokeDB.findById(id)
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: `Could not find product with id:${id}` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: `Error retrieving product with id: ${id}` });
      });
  } else {
    PokeDB.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error ocurred" });
      });
  }
};

//Update product
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Updated data cannot be empty" });
  }
  const id = req.params.id;
  PokeDB.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot update the product with id: ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error when updating product" });
    });
};

//Delete product with product ID
exports.delete = (req, res) => {
  const id = req.params.id;
  PokeDB.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete with id: ${id}. Check for mistakes in the id.`,
        });
      } else {
        res.send({ message: "Product was deleted successfully" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Could not delete product with id: ${id}` });
    });
};
