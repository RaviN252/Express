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
app.put("/api/UpdateData", controller.updatedDataByQuery);
//  127.0.0.1:5002/api/UpdateData?email=user1@gmail.com

// update function by i
app.put("/api/updateDataById/:id", controller.updateDataById);

// delete function
app.delete("/api/DeleteDataByQuery", controller.deleteDataByQuery);
// 127.0.0.1:5002/api/DeleteData?email=ram@gmail.com

// delete function by id
app.delete("/api/DeleteDataById/:id", controller.deleteDataById);

// user login check password
app.post("/api/signin", controller.signin);


// user login with hashing
app.post("/api/hashsignin", controller.hashsignin);

// strating appp with port number
app.listen(5005, "127.0.0.1", () => {
  console.log("Server Started at 5005");
});
