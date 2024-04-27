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
    const user = await User.create({ username, password: hashedPassword });
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

export const Login = async(req, res) => {
  const { username, password } = req.body;

  const existingUser = await User.findOne({ username });

  if(!existingUser) {
    res.status(205).json("Username not found, Login");
  }

  try {
    const validPassword = await bcryptjs.compare(password, existingUser.password);
    if(validPassword){
      const token = createSecretToken(existingUser._id);
      res.cookie("token", token, {
        withCredentials: true,
        httpOnly: false
      });
      res.status(201).json({ message: "User logged in successfully", success: true, existingUser });
    }else{
      res.status(400).json({ message: "Password is incorrect", success: false})
    }
  } catch (error) {
    console.log(error);
  }
}