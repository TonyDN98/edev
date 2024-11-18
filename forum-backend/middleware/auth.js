// middleware/auth.js
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Configurăm variabilele de mediu
dotenv.config();

module.exports = function (req, res, next) {
    // Obținem token-ul din header-ul de autorizare
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];

    // Verificăm dacă token-ul există
    if (!token) {
        return res.status(401).json({ msg: "Acces interzis: Token inexistent" });
    }

    try {
        // Verificăm token-ul
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Adăugăm utilizatorul la request pentru a-l putea folosi în ruta următoare
        req.user = decoded.user;

        // Trecem la următorul middleware sau la controller
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token invalid" });
    }
};
