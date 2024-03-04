const { Schema, model } = require("mongoose");

const medicineSchema = Schema({
  _id: { type: String, required: true },
  title: { type: String, required: true },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "shop",
  },
  amount: { type: String, required: true },
});

const orderSchema = Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    medicines: [medicineSchema],
  },
  { versionKey: false, timestamps: true }
);

const Order = model("order", orderSchema);

module.exports = Order;
