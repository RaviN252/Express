const express = require("express");
const controller = require("./Controller/controller");
const app = express();

const mongoose = require("mongoose");

// mongo db connection

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/RAVIN")
  .then((res) => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// crud applictaion Create = post, Read = get, Update = (Put, Patch), Delete = delete

// Post function
app.post("/api/post", controller.postData);

// Read function get All Data
app.get("/api/getAllData", controller.getAllData);

// Read Function get one data
app.get("/api/getOneData", controller.getOneData);

// function for find by id api
app.get("/api/getOneData/:id", controller.getOneData);

// update function
app.put("/api/UpdateData", controller.updateData);
//  127.0.0.1:5002/api/UpdateData?email=ram@gmail.com

// update function by id
app.put("api/UpdateData/:id");

// delete function
app.delete("api/DeleteData", controller.deleteData);
// 127.0.0.1:5002/api/DeleteData?email=ram@gmail.com

// delete function by id

// strating appp with port number
app.listen(5002, "127.0.0.1", () => {
  console.log("Server Started");
});
