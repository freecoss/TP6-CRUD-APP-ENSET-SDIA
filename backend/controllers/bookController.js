const db = require('../config/database');

// Obtenir tous les livres
exports.getAllBooks = async (req, res) => {
    try {
        const [books] = await db.query('SELECT * FROM books ORDER BY created_at DESC');
        res.json({ success: true, data: books });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Obtenir un livre par ID
exports.getBookById = async (req, res) => {
    try {
        const [books] = await db.query('SELECT * FROM books WHERE id = ?', [req.params.id]);
        if (books.length === 0) {
            return res.status(404).json({ success: false, message: 'Livre non trouvé' });
        }
        res.json({ success: true, data: books[0] });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Créer un nouveau livre
exports.createBook = async (req, res) => {
    try {
        const { title, author, isbn, publication_year, genre, description, price } = req.body;
        
        if (!title || !author) {
            return res.status(400).json({ success: false, message: 'Titre et auteur sont requis' });
        }

        const [result] = await db.query(
            'INSERT INTO books (title, author, isbn, publication_year, genre, description, price) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [title, author, isbn, publication_year, genre, description, price]
        );

        res.status(201).json({ 
            success: true, 
            message: 'Livre créé avec succès',
            data: { id: result.insertId, ...req.body }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Mettre à jour un livre
exports.updateBook = async (req, res) => {
    try {
        const { title, author, isbn, publication_year, genre, description, price } = req.body;
        
        const [result] = await db.query(
            'UPDATE books SET title = ?, author = ?, isbn = ?, publication_year = ?, genre = ?, description = ?, price = ? WHERE id = ?',
            [title, author, isbn, publication_year, genre, description, price, req.params.id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Livre non trouvé' });
        }

        res.json({ success: true, message: 'Livre mis à jour avec succès' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Supprimer un livre
exports.deleteBook = async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM books WHERE id = ?', [req.params.id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: 'Livre non trouvé' });
        }

        res.json({ success: true, message: 'Livre supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
