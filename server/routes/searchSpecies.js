// routes/searchSpecies.js
import express from 'express';
import connection from '../db.js';

const router = express.Router();

router.post('/', (req, res) => {
    const { common_name, scientific_name, class: className, phylum, kingdom } = req.body;

    // Build query dynamically based on provided parameters
    let query = 'SELECT * FROM Species WHERE 1=1';
    const params = [];

    if (common_name) {
      query += ' AND common_name LIKE ?';
      params.push(`%${common_name}%`);
    }
    if (scientific_name) {
      query += ' AND scientific_name LIKE ?';
      params.push(`%${scientific_name}%`);
    }
    if (className) {
      query += ' AND class LIKE ?';
      params.push(`%${className}%`);
    }
    if (phylum) {
      query += ' AND phylum LIKE ?';
      params.push(`%${phylum}%`);
    }
    if (kingdom) {
      query += ' AND kingdom LIKE ?';
      params.push(`%${kingdom}%`);
    }

    connection.query(query, params, (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error fetching species' });
      }
      res.json(results); // Return the results
    });
});

export default router;
