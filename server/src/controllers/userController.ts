import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

// GET /api/user/profile
export const getProfile = async (req: Request, res: Response) => {
  const userId = (req as any).userId;

  try {
    const user = await User.findById(userId).select("name email");

    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("Get profile error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

// PUT /api/user/profile
export const updateProfile = async (req: Request, res: Response) => {
  const userId = (req as any).userId;
  const { name, email, password } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (name) user.name = name;
    if (email) user.email = email;

    if (password) {
      const hashed = await bcrypt.hash(password, 10);
      user.password = hashed;
    }

    await user.save();

    res.json({ message: "Profile updated", user: { name: user.name, email: user.email } });
  } catch (err) {
    console.error("Update profile error:", err);
    res.status(500).json({ error: "Server error" });
  }
};
