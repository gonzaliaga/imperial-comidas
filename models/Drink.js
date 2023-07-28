const {Schema, model} = require("mongoose");

const DrinkSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
});

module.exports = model("Drink", DrinkSchema);
