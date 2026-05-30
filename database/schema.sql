-- Base de données pour l'application CRUD de livres
-- Créer la base de données
CREATE DATABASE IF NOT EXISTS books_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE books_db;

-- Table des livres
CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) UNIQUE,
    publication_year INT,
    genre VARCHAR(100),
    description TEXT,
    price DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insérer quelques données de test
INSERT INTO books (title, author, isbn, publication_year, genre, description, price) VALUES
('Le Petit Prince', 'Antoine de Saint-Exupéry', '978-2070612758', 1943, 'Fiction', 'Un conte philosophique et poétique', 12.50),
('1984', 'George Orwell', '978-0451524935', 1949, 'Science-Fiction', 'Un roman dystopique classique', 15.99),
('L\'Étranger', 'Albert Camus', '978-2070360024', 1942, 'Fiction', 'Un roman existentialiste', 10.00);
