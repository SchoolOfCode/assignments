const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: String,
  password: {
    type: String
  },
  image: String
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
