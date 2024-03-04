const express = require("express");
const router = express.Router();

const { orders: ctrl } = require("../../controllers");

router.post("/", ctrl.add);

module.exports = router;
