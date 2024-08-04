const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  enrolledCourses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

const User = model("User", userSchema);

module.exports = User;
