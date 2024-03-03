const { Shop } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const shops = await Shop.find({});
    res.json(
      res.json({
        status: "success",
        code: 200,
        data: { result: shops },
      })
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
