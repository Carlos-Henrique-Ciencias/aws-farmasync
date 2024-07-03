const express = require('express');
const router = express.Router();
const Pharmacist = require('../models/Pharmacist');
const Patient = require('../models/Patient');

// Registrar farmacêutico
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const pharmacist = await Pharmacist.create({ name, email, password });
        res.status(201).json(pharmacist);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Adicionar paciente
router.post('/:pharmacistId/patients', async (req, res) => {
    const { pharmacistId } = req.params;
    const { name, email } = req.body;
    try {
        const patient = await Patient.create({ name, email, pharmacist_id: pharmacistId });
        res.status(201).json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Exibir lista de pacientes
router.get('/:pharmacistId/patients', async (req, res) => {
    const { pharmacistId } = req.params;
    try {
        const patients = await Patient.findAll({ where: { pharmacist_id: pharmacistId } });
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
