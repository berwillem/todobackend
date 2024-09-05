const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const todoroutes = require("./routes/todo");
app.use(express.json());
const PORT = process.env.PORT || 5000;
app.use("/api/todos", todoroutes);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("connected to DB"))
  .catch((err) => console.log(err));
