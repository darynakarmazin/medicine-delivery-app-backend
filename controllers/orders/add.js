const { Order } = require("../../models");
const { orderSchema } = require("../../schemas");

const add = async (req, res, next) => {
  try {
    const { error } = orderSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required field",
      });
      return;
    }
    const newOrder = await Order.create(req.body);
    res.status(201).json({
      status: "success",
      code: 201,
      data: { result: newOrder },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
