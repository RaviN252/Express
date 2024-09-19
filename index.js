// connecting node with mongodb

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then((res) => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5002, "127.0.0.1", () => {
  console.log("Server Started");
});
