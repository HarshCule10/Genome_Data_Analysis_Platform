// routes/register.js
import express from 'express';
import connection from '../db.js';

const router = express.Router();

// Registration Endpoint
router.post('/', (req, res) => {
    const { name, email, password, clientId, scientistId, institutionId } = req.body;

    // Determine if it's a Client or Scientist registration
    if (clientId) {
        const query = `
            INSERT INTO User (name, email, password) VALUES (?, ?, ?);
        `;
        connection.query(query, [name, email, password], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Server error during registration' });
            }

            const userId = result.insertId; // Get the inserted user ID

            const clientQuery = `
                INSERT INTO Client (client_id, user_id, status) VALUES (?, ?, 'active');
            `;
            connection.query(clientQuery, [clientId, userId], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Server error while creating client' });
                }
                res.json({ success: true, message: 'Client registered successfully!' });
            });
        });
    } else if (scientistId && institutionId) {
        const query = `
            INSERT INTO User (name, email, password) VALUES (?, ?, ?);
        `;
        connection.query(query, [name, email, password], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Server error during registration' });
            }

            const userId = result.insertId; // Get the inserted user ID

            const scientistQuery = `
                INSERT INTO Scientist (scientist_id, user_id, institution_id) VALUES (?, ?, ?);
            `;
            connection.query(scientistQuery, [scientistId, userId, institutionId], (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: 'Server error while creating scientist' });
                }
                res.json({ success: true, message: 'Scientist registered successfully!' });
            });
        });
    } else {
        res.status(400).json({ success: false, message: 'Client ID or Scientist ID required' });
    }
});

export default router;
