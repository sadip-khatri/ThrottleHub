import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error('Register error:', err); 
    res.status(500).json({ error: 'Server error' });
  }
};


export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const secret = process.env.JWT_SECRET || 'secret';
    const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1d' });

    res.json({ token, user: { name: user.name, email: user.email } });
;
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
