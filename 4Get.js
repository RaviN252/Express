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

// get all details from moongo db

app.get("/app/getAllData", async (req, res) => {
  try {
    const getAllData = await usemodel.find();
    console.log(getAllData);
    res.json({
      message: "Data Received Successfully",
      getAllData,
    });
  } catch (err) {
    res.json({
      message: "Data Not Received",
      err: err,
    });
  }
});

// strating appp with poer number

app.listen(5002, "127.0.0.1", () => {
  console.log("Server Started");
});
