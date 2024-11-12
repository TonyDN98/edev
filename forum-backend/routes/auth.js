// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Înregistrare utilizator nou
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Verificăm dacă utilizatorul există deja
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "Utilizatorul există deja" });
        }

        // Criptăm parola
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creăm noul utilizator
        user = new User({
            username,
            email,
            password: hashedPassword
        });
        await user.save();

        // Creăm un token
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token });
    } catch (err) {
        res.status(500).send("Eroare de server");
    }
});

// Login utilizator
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Găsim utilizatorul
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Utilizatorul nu există" });
        }

        // Verificăm parola
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Parolă invalidă" });
        }

        // Generăm un token JWT
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token });
    } catch (err) {
        res.status(500).send("Eroare de server");
    }
});

module.exports = router;
