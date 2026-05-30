const express = require('express');
const cors = require('cors');
require('dotenv').config();

const bookRoutes = require('./routes/bookRoutes');
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', bookRoutes);

// Route de test
app.get('/', (req, res) => {
    res.json({ message: 'API de gestion de livres - Bienvenue!' });
});

// Test de connexion à la base de données
db.query('SELECT 1')
    .then(() => {
        console.log('✅ Connexion à la base de données réussie');
        app.listen(PORT, () => {
            console.log(`🚀 Serveur démarré sur le port ${PORT}`);
            console.log(`📚 API disponible sur http://localhost:${PORT}/api`);
        });
    })
    .catch((err) => {
        console.error('❌ Erreur de connexion à la base de données:', err.message);
        process.exit(1);
    });
