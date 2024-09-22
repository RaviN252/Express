const express = require("express");
const app = express();

const mongoose = require("mongoose");
const usemodel = require("./Schema/3usermodal");

// mongo db connection

mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then((res) => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// Post functionality
app.post("/api/post", async (req, res) => {
  try {
    const postData = await usermodel.create(req.body);
    res.json({
      message: "Data Posted Successfully",
      postData,
    });
  } catch (err) {
    res.json({
      message: "Data not Posted",
      err,
    });
  }
});

// strating appp with poer number

app.listen(5002, "127.0.0.1", () => {
  console.log("Server Started");
});
