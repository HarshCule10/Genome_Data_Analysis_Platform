// routes/auth.js
import express from 'express';
import loginRoutes from './login.js'; // Import the login routes
import registerRoutes from './register.js'; // Import the registration routes

const router = express.Router();

// Use the authentication routes
router.use('/login', loginRoutes); // Prefixing login route
router.use('/register', registerRoutes); // Prefixing registration route

export default router;
