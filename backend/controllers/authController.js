import User from "../models/UserModel.js";
import { createSecretToken } from "../config/verifyToken.js";
import bcryptjs from "bcryptjs";

export const SignUp = async(req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });

  if(existingUser) {
    res.status(205).json("Username is taken.")
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const user = await User.create({ username, hashedPassword });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false
    });

    res.status(201).json({ message: "User created successfully", success: true, user });
  } catch (error) {
    console.log(error);
  }
} 