import { Users } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Token from "../models/token.js";

// user registration
export const Register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    // Hash/Encrypt user password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user account with hashed password
    const newUser = await Users.create({
      name,
      email,
      password: hashedPassword,
    });

    // return response
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// user login
export const Login = async (req, res, next) => {
  try {
    // User Login
    const { email, password } = req.body;

    // Find user by email
    const user = await Users.findOne({ email });

    // Check if user exists and password is correct
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate access token for user using jsonwebtoken
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1m",
    });

    // Save access token in database
    const tokenExpiration = 60 * 1000; // 1 minute in milliseconds
const newToken = new Token({
  userId: user._id,
  token,
  expiresAt: new Date(Date.now() + tokenExpiration),
});
await newToken.save();


    // Return response with token
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

// user logout 
export const Logout = (req, res, next) => {
  try {
    // Delete all user access tokens from the database or perform logout actions
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};

// Get profile for logged-in user
export const Profile = async (req, res, next) => {
  try {
    // Extract user information from request 
    const user = req.user;

    // Return user profile
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};