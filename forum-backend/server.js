// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Importăm rutele de autentificare
const authRoutes = require('./routes/auth');

// Configurăm variabilele de mediu
dotenv.config();

// Inițializăm aplicația Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Pentru a parsa cererile JSON

// Conectare la MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conexiune la MongoDB realizată cu succes"))
    .catch((err) => console.log("Eroare la conectarea la MongoDB:", err));

// Definim ruta pentru autentificare
app.use('/api/auth', authRoutes);

// Pornim serverul pe portul specificat în variabilele de mediu sau pe portul 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serverul rulează pe portul ${PORT}`);
});
