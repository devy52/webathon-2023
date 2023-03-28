import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

// Register a new user
export const register = async (req, res) => {
  try {
    const { username, password, email, designation } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create the new user
    const user = await User.create({ username, password: hashedPassword, email, designation });
    res.status(201).json({ message: 'User created successfully', userId: user.id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// Log in a user
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user with the given username
    const user = await User.findOne({ where: { username } });
    // If the user doesn't exist, return an error
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Compare the password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    // If the password is invalid, return an error
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
