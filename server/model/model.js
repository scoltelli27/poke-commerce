const mongoose = require("mongoose");
const { Schema } = mongoose;

const pokeSchema = new Schema({
  title: { String },
  price: { Number },
});

const PokeDB = mongoose.model("pokedb", pokeSchema);

module.exports = PokeDB;
