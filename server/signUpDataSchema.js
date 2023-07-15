const mongoose = require("mongoose");

const ReactFormDataSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  passWord: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", ReactFormDataSchema);
module.exports = User;
