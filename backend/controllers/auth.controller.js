import bcrypt from "bcryptjs";
import User from "../models/User.js"
import generateToken from "../utils/generateToken.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import asyncHandler from "../middleware/asyncHandler.js";

// register
export const register = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  if (!name || !email || !phone || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "Email already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    phone,
    password: hashedPassword,
  });

  const userData = user.toObject();
  delete userData.password;

  const token = generateToken(user._id, user.role);

  res.status(201).json(
    new ApiResponse(201, "User registered successfully", {
      user: userData,
      token,
    }),
  );
});


// login
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) {
    throw new ApiError(401, "Invalid email or password");
  }

  const userData = user.toObject();
  delete userData.password;

  const token = generateToken(user._id, user.role);

  res.status(200).json(
    new ApiResponse(200, "Login successful", {
      user: userData,
      token,
    }),
  );
});

// getProfile
export const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");

  if (!user) {
    throw new ApiError(401, "USer not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Profile fetched successfully", user));
});
