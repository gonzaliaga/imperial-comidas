const {Schema, model} = require("mongoose");

const OrderSchema = new Schema({
  products: [
    {
      type: String,
      required: true
    }
  ],
  total: {
    type: Number,
    required: true
  },
  client: {
    type: String,
    required: true
  }
});

module.exports = model("Order", OrderSchema);
