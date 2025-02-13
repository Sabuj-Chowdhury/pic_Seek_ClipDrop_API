// definitions
const express = require("express");
const app = express();
const cors = require("cors");
const logger = require("./middlewares/logger");

// middlewares
app.use(express.json());
app.use(cors());
app.use(logger);

// playground

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Helloooooooooooo!",
  });
});

module.exports = app;
