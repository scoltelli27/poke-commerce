const mongoose = require("mongoose");
const { Schema } = mongoose;

// Pokemon products creation
const pokeSchema = new Schema({
  title: String,
  price: Number,
  imageurl: String,
});

const PokeDB = mongoose.model("pokedb", pokeSchema);

module.exports = PokeDB;
