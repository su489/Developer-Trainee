const express = require('express');
const router = express.Router();



const {
  createUser,
  readAllUsers,
  readUserById,
  updateUser,
  deleteUser
} = require('../Controller/crudController.js');

// Routes
router.post('/createuser', createUser);
router.get('/readalluser', readAllUsers);
router.get('/read/:id', readUserById);
router.put('/updateuser/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
