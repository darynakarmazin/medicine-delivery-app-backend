const express = require("express");
const router = express.Router();

const { orders: ctrl } = require("../../controllers");

router.get("/", ctrl.add);

module.exports = router;
