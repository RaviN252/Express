const usermodel = require("../Schema/usermodel3");
const bcrypt = require("bcrypt");

// functionality for post data

exports.postData = async (req, res) => {
  try {
    const postData = await usermodel.create(req.body);
    res.status(200).json({
      message: "Data Posted Successfully",
      postData,
    });
  } catch (err) {
    res.json({
      message: "Data not Posted",
      err,
    });
  }
};

// functionality for get data

exports.getAllData = async (req, res) => {
  try {
    const getAllData = await usermodel.find();
    console.log(getAllData);
    res.status(200).json({
      message: "Data Received Successfully",
      getAllData,
    });
  } catch (err) {
    res.json({
      message: "Data Not Received",
      err: err,
    });
  }
};

// functionality for get One Data
exports.getOneData = async (req, res) => {
  try {
    const getOneData = await usermodel.findOne({ email: req.query.email });
    res.status(200).json({
      message: "Data Received Succesufully",
    });
  } catch (err) {
    res.status(400).json({
      message: "Data Not Received ",
      err,
    });
  }
};

// function for find by id api

exports.getOneData = async (req, res) => {
  try {
    const getOneData = await usermodel.findById(req.params.id);
    res.status(200).json({
      message: "Data Received Succesufully",
    });
  } catch (err) {
    res.status(400).json({
      message: "Data Not Received ",
      err,
    });
  }
};

// function update
exports.updatedDataByQuery = async (req, res) => {
  try {
    const updateUser = await usermodel.findOneAndUpdate(
      { email: req.query.email },
      req.body,
      { new: true }
    );

    if (updateUser) {
      res.status(201).json({
        message: "Data Updated Successfully",
        updateUser,
      });
    } else {
      res.status(404).json({
        message: "Data Not Updated",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Data Not url error",
      err,
    });
  }
};

// update function by id
exports.updateDataById = async (req, res) => {
  try {
    const updateData = await usermodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updateData) {
      res.status(201).json({
        message: "Data Updated SuccessFully",
        updateData,
      });
    } else {
      req.status(404).json({
        message: "Data Not Able to Update",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Data Not found to update",
    });
  }
};

// function Delete
exports.deleteDataByQuery = async (req, res) => {
  try {
    const deleteUserQuery = await usermodel.findOneAndDelete({
      email: req.query.email,
    });

    if (deleteUserQuery) {
      res.status(200).json({
        message: "Data Deleted Successfully",
      });
    } else {
      res.status(404).json({
        message: "Data Not Deleted",
      });
    }
  } catch (err) {
    console.error("Error deleting data:", err);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// delete function by id

exports.deleteDataById = async (req, res) => {
  try {
    const deleteUserId = await usermodel.findByIdAndDelete(req.params.id);
    if (deleteUserId) {
      res.status(200).json({
        message: "Data Deleted Success Fully",
      });
    } else {
      res.status(404).json({
        message: "Data Not Deleted by Id",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// login without Password Hashing

exports.signin = async (req, res) => {
  try {
    const DBdata = await usermodel.findOne({ email: req.body.email });

    if (DBdata) {
      if (DBdata.password === req.body.password) {
        res.status(200).json({
          message: "Login Successfully",
        });
      } else {
        res.status(400).json({
          message: "Incorrect Password",
        });
      }
    } else {
      res.status(404).json({
        message: "Invalid Email Id",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// login  with hashing
exports.hashsignin = async (req, res) => {
  try {
    const DBdata = await usermodel.findOne({ email: req.body.email });

    if (DBdata) {
      if (await bcrypt.compare(req.body.password, DBdata.password)) {
        res.status(200).json({
          message: "Login Successfully",
        });
      } else {
        res.status(400).json({
          message: "Incorrect Password",
        });
      }
    } else {
      res.status(404).json({
        message: "Invalid Email Id",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
