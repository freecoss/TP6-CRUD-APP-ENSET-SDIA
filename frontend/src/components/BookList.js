import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bookService } from '../services/api';
import './BookList.css';

function BookList() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            setLoading(true);
            const response = await bookService.getAllBooks();
            setBooks(response.data.data);
            setError(null);
        } catch (err) {
            setError('Erreur lors du chargement des livres');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
            try {
                await bookService.deleteBook(id);
                fetchBooks();
            } catch (err) {
                alert('Erreur lors de la suppression du livre');
                console.error(err);
            }
        }
    };

    if (loading) return <div className="loading">Chargement...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="book-list">
            <h1>Liste des Livres</h1>
            
            {books.length === 0 ? (
                <div className="no-books">
                    <p>Aucun livre disponible</p>
                    <Link to="/add" className="btn btn-primary">Ajouter le premier livre</Link>
                </div>
            ) : (
                <div className="books-grid">
                    {books.map(book => (
                        <div key={book.id} className="book-card">
                            <div className="book-header">
                                <h3>{book.title}</h3>
                                <span className="book-genre">{book.genre}</span>
                            </div>
                            <p className="book-author">Par {book.author}</p>
                            <p className="book-year">Année: {book.publication_year}</p>
                            <p className="book-price">{book.price} €</p>
                            <div className="book-actions">
                                <Link to={`/book/${book.id}`} className="btn btn-info">Détails</Link>
                                <Link to={`/edit/${book.id}`} className="btn btn-warning">Modifier</Link>
                                <button onClick={() => handleDelete(book.id)} className="btn btn-danger">Supprimer</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default BookList;
