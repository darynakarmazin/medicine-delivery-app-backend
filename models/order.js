const { Schema, model } = require("mongoose");

const orderSchema = Schema(
  {
    name: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = Order;
