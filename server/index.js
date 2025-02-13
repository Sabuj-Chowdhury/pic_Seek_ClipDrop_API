require("dotenv").config();

const app = require("./src/app");
const { connectDB } = require("./src/utils/connectDB");
const port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running at ${port}`);
      console.log(`MongoDB Connected`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
