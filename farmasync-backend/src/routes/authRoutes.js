const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
require('dotenv').config();

// Register
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log('Recebendo dados de registro:', { name, email, password });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).send('User created');
  } catch (err) {
    console.error('Error creating user:', err.message);
    res.status(500).send('Error creating user');
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (err) {
    console.error('Error logging in:', err.message);
    res.status(500).send('Error logging in');
  }
});

// Rota de teste
router.get('/test', (req, res) => {
  res.status(200).send('Test endpoint is working!');
});

module.exports = router;
