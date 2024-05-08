// routes/auth.js

import express from 'express';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

// User registration
router.post('/signup', signup);

// User login
router.post('/login', login);

export default router;
