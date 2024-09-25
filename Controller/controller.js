const usermodel = require("../Schema/usermodel3");

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
exports.updateData = async (req, res) => {
  try {
    const updateUser = await usermodel.findOneAndUpdate(
      { email: req.query.email },
      req.body,
      {
        new: true,
      }
    );

    if (updateUser) {
      res.status(201).json({
        message: "Data Updated Successfully",
        updateUser,
      });
    } else {
      res.status(404).json({
        message: "Data Not Found",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Data Not Updated",
      err,
    });
  }
};

// update function by id
exports.updateData = async (req, res) => {
  try {
    const updateUser = await usermodel.findById(req.params.id, { new: true });
    if (updateUser) {
      res.status(201).json({
        message: "Data Updated SuccessFully",
        updateUser,
      });
    } else {
      req.status(404).json({
        message: "Data Not Founf",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: "Data Not Found",
    });
  }
};

// function Delete
exports.deleteData = async (req, res) => {
  try {
    const deleteUser = await usermodel.findOneAndDelete({
      email: req.query.email,
    });

    if (deleteUser) {
      res.status(200).json({
        message: "Data Deleted Successfully",
      });
    } else {
      res.status(404).json({
        message: "Data Not Found",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
};

// delete function by id

exports.deleteData = async (req, res) => {
  try {
    const deleteUser = await usermodel.findById(res.params.id);
    if (deleteUser) {
      res.status(200).json({
        message: "Data Deleted Success Fully",
      });
    } else {
      res.status(404).json({
        message: "Data Not Found ",
      });
    }
  } catch (err) {
    res.status(404).json({
      message: "Data Not Found",
    });
  }
};
