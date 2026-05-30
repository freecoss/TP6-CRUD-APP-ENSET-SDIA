# Backend API - Gestion de Livres

API REST construite avec Express.js et MySQL pour gérer une bibliothèque de livres.

## Installation

1. Installer les dépendances :
```bash
cd backend
npm install
```

2. Configurer les variables d'environnement :
   - Vérifiez le fichier `.env`
   - Modifiez `DB_PASSWORD` si nécessaire

3. Démarrer le serveur :
```bash
npm start
```

Ou en mode développement avec auto-reload :
```bash
npm run dev
```

## Endpoints API

Base URL : `http://localhost:5000/api`

### 📚 Livres

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/books` | Obtenir tous les livres |
| GET | `/books/:id` | Obtenir un livre par ID |
| POST | `/books` | Créer un nouveau livre |
| PUT | `/books/:id` | Mettre à jour un livre |
| DELETE | `/books/:id` | Supprimer un livre |

## Exemples de requêtes

### GET - Tous les livres
```
GET http://localhost:5000/api/books
```

### GET - Un livre
```
GET http://localhost:5000/api/books/1
```

### POST - Créer un livre
```
POST http://localhost:5000/api/books
Content-Type: application/json

{
  "title": "Le Seigneur des Anneaux",
  "author": "J.R.R. Tolkien",
  "isbn": "978-2266154345",
  "publication_year": 1954,
  "genre": "Fantasy",
  "description": "Une épopée fantastique",
  "price": 25.99
}
```

### PUT - Mettre à jour un livre
```
PUT http://localhost:5000/api/books/1
Content-Type: application/json

{
  "title": "Le Petit Prince (Édition spéciale)",
  "author": "Antoine de Saint-Exupéry",
  "isbn": "978-2070612758",
  "publication_year": 1943,
  "genre": "Fiction",
  "description": "Un conte philosophique et poétique - Édition illustrée",
  "price": 15.50
}
```

### DELETE - Supprimer un livre
```
DELETE http://localhost:5000/api/books/1
```

## Structure du projet

```
backend/
├── config/
│   └── database.js       # Configuration MySQL
├── controllers/
│   └── bookController.js # Logique métier
├── routes/
│   └── bookRoutes.js     # Définition des routes
├── .env                  # Variables d'environnement
├── .gitignore
├── package.json
├── server.js             # Point d'entrée
└── README.md
```

## Technologies utilisées

- **Express.js** - Framework web
- **MySQL2** - Driver MySQL avec support des Promises
- **CORS** - Gestion des requêtes cross-origin
- **dotenv** - Gestion des variables d'environnement
- **Nodemon** - Auto-reload en développement
