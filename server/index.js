require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "Helloooooooooooo!" });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
