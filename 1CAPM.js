// create api Post Method in Express

const express = require("express");
const app = express();

app.post("/api/postdata", (request, response) => {
  console.log("request Came successfully");
  response.end("App Is Working fine....!");
});
app.listen(5002, "127.0.0.1", () => {
  console.log("Server Started at port 5002");
});
