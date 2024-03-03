const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const shopsRouter = require("./routes/api/shops");
const medicinesRouter = require("./routes/api/medicines");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/shops", shopsRouter);
app.use("/api/medicines", medicinesRouter);

module.exports = app;
