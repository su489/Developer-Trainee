const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const crudSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CrudModel = mongoose.model("Crud", crudSchema);

module.exports = CrudModel;
