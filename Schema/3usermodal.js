const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  mblnum: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const usemodel = mongoose.model("New Collection", schema);
module.exports = usemodel;
