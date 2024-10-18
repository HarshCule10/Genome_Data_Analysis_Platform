// server.js
import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js'; // Import the auth routes
import searchSpeciesRoutes from './routes/searchSpecies.js'; // Import the search species routes
import connection from './db.js'; // Import the database connection


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(cors());
app.use(express.json());

// Use the authentication routes
app.use('/api', authRoutes); // Prefixing with /api
app.use('/api/searchSpecies', searchSpeciesRoutes); // Prefixing with /api/searchSpecies


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
