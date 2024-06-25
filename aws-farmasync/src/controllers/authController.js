const User = require('../models/userModel');

const authController = {
    register: (req, res) => {
        const userData = {
            email: req.body.email,
            password: req.body.password // Você deve hash a senha antes de salvar
        };
        User.create(userData, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(201).send('User registered successfully');
        });
    },
    login: (req, res) => {
        const email = req.body.email;
        const password = req.body.password;
        User.findByEmail(email, (err, results) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (results.length === 0) {
                return res.status(404).send('User not found');
            }
            const user = results[0];
            if (user.password !== password) { // Compare a senha hash aqui
                return res.status(401).send('Invalid password');
            }
            res.status(200).send('User logged in successfully');
        });
    }
};

module.exports = authController;
