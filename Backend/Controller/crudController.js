const CrudModel = require("../Models/Crud"); 

// Create User
const createUser = async (req, res) => {
  try {
    const bodyData = req.body;
    const user = new CrudModel(bodyData); 
    const userData = await user.save();
    res.status(201).json(userData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Read All Users
const readAllUsers = async (req, res) => {
  try {
    const userData = await CrudModel.find({}); 
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Read Single User by ID
const readUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await CrudModel.findById(id); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await CrudModel.findByIdAndUpdate(id, req.body, { new: true }); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await CrudModel.findByIdAndDelete(id); 
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  readAllUsers,
  readUserById,
  updateUser,
  deleteUser
};
