import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { bookService } from '../services/api';
import './BookDetails.css';

function BookDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchBook();
    }, [id]);

    const fetchBook = async () => {
        try {
            setLoading(true);
            const response = await bookService.getBookById(id);
            setBook(response.data.data);
            setError(null);
        } catch (err) {
            setError('Erreur lors du chargement du livre');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce livre ?')) {
            try {
                await bookService.deleteBook(id);
                navigate('/');
            } catch (err) {
                alert('Erreur lors de la suppression du livre');
                console.error(err);
            }
        }
    };

    if (loading) return <div className="loading">Chargement...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!book) return <div className="error">Livre non trouvé</div>;

    return (
        <div className="book-details">
            <div className="details-header">
                <Link to="/" className="btn btn-secondary">← Retour</Link>
                <h1>Détails du Livre</h1>
            </div>

            <div className="details-card">
                <div className="details-content">
                    <div className="detail-row">
                        <span className="detail-label">Titre:</span>
                        <span className="detail-value">{book.title}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Auteur:</span>
                        <span className="detail-value">{book.author}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">ISBN:</span>
                        <span className="detail-value">{book.isbn || 'N/A'}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Année de publication:</span>
                        <span className="detail-value">{book.publication_year || 'N/A'}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Genre:</span>
                        <span className="detail-value badge">{book.genre || 'N/A'}</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-label">Prix:</span>
                        <span className="detail-value price">{book.price} €</span>
                    </div>
                    <div className="detail-row full-width">
                        <span className="detail-label">Description:</span>
                        <p className="detail-description">{book.description || 'Aucune description disponible'}</p>
                    </div>
                </div>

                <div className="details-actions">
                    <Link to={`/edit/${book.id}`} className="btn btn-warning">Modifier</Link>
                    <button onClick={handleDelete} className="btn btn-danger">Supprimer</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
