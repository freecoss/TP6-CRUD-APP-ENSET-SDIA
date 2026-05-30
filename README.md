# 📚 Application de Gestion de Livres - CRUD Full Stack

## 📋 Description du Projet

Application web complète de gestion de bibliothèque permettant d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur une collection de livres. Ce projet a été réalisé dans le cadre d'un travail pratique du **Master SDIA** à l'**ENSET**.

## 🎯 Objectifs Pédagogiques

- Maîtriser le développement Full Stack avec des technologies modernes
- Comprendre l'architecture client-serveur
- Implémenter une API RESTful
- Gérer une base de données relationnelle
- Créer une interface utilisateur réactive et moderne

## 🛠️ Technologies Utilisées

### Backend
- **Node.js** - Environnement d'exécution JavaScript
- **Express.js** - Framework web minimaliste
- **MySQL** - Système de gestion de base de données
- **mysql2** - Driver MySQL avec support des Promises
- **CORS** - Gestion des requêtes cross-origin
- **dotenv** - Gestion des variables d'environnement

### Frontend
- **React.js** - Bibliothèque JavaScript pour l'interface utilisateur
- **React Router DOM** - Navigation entre les pages
- **Axios** - Client HTTP pour les requêtes API
- **CSS3** - Styles modernes et responsive

### Base de Données
- **MySQL 8.0** - Base de données relationnelle
- **phpMyAdmin** - Interface de gestion de base de données

## 📁 Structure du Projet

```
projet-livres/
│
├── backend/
│   ├── config/
│   │   └── database.js         # Configuration de connexion MySQL
│   ├── controllers/
│   │   └── bookController.js   # Logique métier CRUD
│   ├── routes/
│   │   └── bookRoutes.js       # Définition des routes API
│   ├── .env                    # Variables d'environnement
│   ├── server.js               # Point d'entrée du serveur
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookList.js     # Liste des livres
│   │   │   ├── BookDetails.js  # Détails d'un livre
│   │   │   └── BookForm.js     # Formulaire ajout/modification
│   │   ├── services/
│   │   │   └── api.js          # Service de communication avec l'API
│   │   ├── App.js              # Composant principal
│   │   └── index.js
│   └── package.json
│
└── README.md                   # Ce fichier
```

## ⚙️ Fonctionnalités

### 1. Afficher la Liste des Livres
- Affichage de tous les livres en grille
- Informations visibles : titre, auteur, genre, année, prix
- Design moderne avec cartes interactives

### 2. Voir les Détails d'un Livre
- Vue complète des informations d'un livre
- ISBN, description, dates de création/modification
- Navigation facile vers modification ou suppression

### 3. Ajouter un Nouveau Livre
- Formulaire complet avec validation
- Champs : titre, auteur, ISBN, année, genre, description, prix
- Retour automatique à la liste après ajout

### 4. Modifier un Livre
- Formulaire pré-rempli avec les données existantes
- Mise à jour en temps réel
- Confirmation visuelle de la modification

### 5. Supprimer un Livre
- Confirmation avant suppression
- Suppression immédiate de la base de données
- Mise à jour automatique de l'affichage

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (v14 ou supérieur)
- MySQL (v8.0 ou supérieur)
- phpMyAdmin (optionnel)
- npm ou yarn

### Étape 1 : Configuration de la Base de Données

1. Démarrer MySQL et phpMyAdmin
2. Ouvrir phpMyAdmin : `http://localhost/phpmyadmin`
3. Importer le fichier `database/schema.sql`
4. Vérifier que la base `books_db` est créée avec la table `books`

### Étape 2 : Installation du Backend

```bash
cd backend
npm install
```

Configurer le fichier `.env` si nécessaire :
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=books_db
DB_PORT=3306
```

Démarrer le serveur :
```bash
npm start
```

Le serveur démarre sur `http://localhost:5000`

### Étape 3 : Installation du Frontend

```bash
cd frontend
npm install
```

Démarrer l'application React :
```bash
npm start
```

L'application s'ouvre sur `http://localhost:3000`

## 🔌 API REST Endpoints

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/books` | Récupérer tous les livres |
| GET | `/api/books/:id` | Récupérer un livre par ID |
| POST | `/api/books` | Créer un nouveau livre |
| PUT | `/api/books/:id` | Mettre à jour un livre |
| DELETE | `/api/books/:id` | Supprimer un livre |

### Exemple de Requête POST

```json
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

## 📊 Modèle de Données

### Table `books`

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire auto-incrémentée |
| title | VARCHAR(255) | Titre du livre (obligatoire) |
| author | VARCHAR(255) | Auteur du livre (obligatoire) |
| isbn | VARCHAR(20) | Numéro ISBN unique |
| publication_year | INT | Année de publication |
| genre | VARCHAR(100) | Genre littéraire |
| description | TEXT | Description du livre |
| price | DECIMAL(10,2) | Prix en euros |
| created_at | TIMESTAMP | Date de création |
| updated_at | TIMESTAMP | Date de modification |

## 🎨 Captures d'Écran

### Interface Principale
- Navigation intuitive avec barre de menu
- Grille responsive de cartes de livres
- Boutons d'action colorés et accessibles

### Formulaires
- Design moderne et épuré
- Validation des champs
- Messages d'erreur clairs

## 👨‍🎓 Contexte Académique

**Établissement :** École Normale Supérieure de l'Enseignement Technique (ENSET)  
**Formation :** Master SDIA (Sciences de Données et Intelligence Artificielle)  
**Type de Projet :** Travail Pratique (TP)  
**Objectif :** Développement d'une application Full Stack CRUD

## 📝 Compétences Développées

- ✅ Architecture MVC (Model-View-Controller)
- ✅ Développement d'API RESTful
- ✅ Gestion de base de données relationnelle
- ✅ Programmation asynchrone avec Promises/Async-Await
- ✅ Gestion d'état dans React
- ✅ Routing côté client avec React Router
- ✅ Communication client-serveur avec Axios
- ✅ Design responsive et moderne
- ✅ Gestion des erreurs et validation des données

## 🔧 Améliorations Possibles

- [ ] Authentification et autorisation des utilisateurs
- [ ] Recherche et filtrage avancés
- [ ] Pagination des résultats
- [ ] Upload d'images de couverture
- [ ] Système de notation et commentaires
- [ ] Export des données (PDF, Excel)
- [ ] Mode sombre
- [ ] Internationalisation (i18n)

## 📞 Support

Pour toute question ou problème :
- Vérifier que MySQL est démarré
- Vérifier que le backend tourne sur le port 5000
- Vérifier que le frontend tourne sur le port 3000
- Consulter les logs dans la console

## 📄 Licence

Ce projet est réalisé à des fins éducatives dans le cadre du Master SDIA à l'ENSET.

---

**Développé avec ❤️ pour le Master SDIA - ENSET**
