# Configuration de la Base de Données

## Instructions pour créer la base de données dans phpMyAdmin

1. **Ouvrir phpMyAdmin** dans votre navigateur : `http://localhost/phpmyadmin`

2. **Méthode 1 - Importer le fichier SQL** (Recommandé) :
   - Cliquez sur l'onglet "Importer" en haut
   - Cliquez sur "Choisir un fichier"
   - Sélectionnez le fichier `schema.sql` de ce dossier
   - Cliquez sur "Exécuter"

3. **Méthode 2 - Copier/Coller le SQL** :
   - Cliquez sur l'onglet "SQL" en haut
   - Ouvrez le fichier `schema.sql`
   - Copiez tout le contenu
   - Collez-le dans la zone de texte de phpMyAdmin
   - Cliquez sur "Exécuter"

## Vérification

Après l'exécution, vous devriez voir :
- Une nouvelle base de données nommée `books_db`
- Une table `books` avec 8 colonnes
- 3 livres de test insérés

## Configuration de connexion

Les informations de connexion par défaut :
- **Host** : localhost
- **Port** : 3306
- **Database** : books_db
- **User** : root
- **Password** : (vide par défaut ou votre mot de passe)

## Structure de la table `books`

| Colonne           | Type          | Description                    |
|-------------------|---------------|--------------------------------|
| id                | INT           | Clé primaire auto-incrémentée  |
| title             | VARCHAR(255)  | Titre du livre                 |
| author            | VARCHAR(255)  | Auteur du livre                |
| isbn              | VARCHAR(20)   | ISBN unique                    |
| publication_year  | INT           | Année de publication           |
| genre             | VARCHAR(100)  | Genre du livre                 |
| description       | TEXT          | Description du livre           |
| price             | DECIMAL(10,2) | Prix du livre                  |
| created_at        | TIMESTAMP     | Date de création               |
| updated_at        | TIMESTAMP     | Date de modification           |
