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

// CREATE image through clipDrop API
app.post("/create-image", async (req, res) => {
  const { email, prompt, userName, userImg, category } = req.body;
  if (!email || !prompt || !userImg || !userName || !category) {
    return res.status(400).send({
      status: 400,
      message: "Please provide email,prompt,userName,userImg,category",
    });
  }
  // TODO
  // 1. create final prompt
  // 2. generate image Buffer
  // 3. Upload Image and get Image URL
  // 4. insert imageURL in the db
  // 5. send response
  res.send({});
});

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Helloooooooooooo!",
  });
});

module.exports = app;
