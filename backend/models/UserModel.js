import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true
    },
    password: {
      type: String,
      require: true,
      min: 6
    },
    myMovies: {
      type: Array
    }
  },
  {timestamps: true}
);

const User = mongoose.model("Users", UserSchema);

export default User;