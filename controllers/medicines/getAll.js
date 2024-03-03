const { Medicine } = require("../../models");

const getAll = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const medicines = await Medicine.find({ owner: _id }).populate(
      "owner",
      "_id,  name"
    );
    res.json(
      res.json({
        status: "success",
        code: 200,
        data: { result: medicines },
      })
    );
  } catch (error) {
    next(error);
  }
};

module.exports = getAll;
