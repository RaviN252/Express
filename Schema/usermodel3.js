const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
    unique: true,
  },
  mblnum: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// const saltRounds = 12;
// schema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, saltRounds);
// });

const usermodel = mongoose.model("New Collection", schema);

module.exports = usermodel;
