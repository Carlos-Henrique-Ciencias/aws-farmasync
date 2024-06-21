// src/controllers/appointmentController.js
const connection = require('../db');

exports.createAppointment = (req, res) => {
    const { userId, date, time, description } = req.body;
    connection.query('INSERT INTO appointments (userId, date, time, description) VALUES (?, ?, ?, ?)', [userId, date, time, description], (err, results) => {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.send('Appointment created');
    });
};

exports.getAppointments = (req, res) => {
    const { userId } = req.query;
    connection.query('SELECT * FROM appointments WHERE userId = ?', [userId], (err, results) => {
        if (err) {
            return res.status(500).send('Server error');
        }
        res.json(results);
    });
};
