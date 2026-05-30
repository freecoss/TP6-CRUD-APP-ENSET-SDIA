import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { bookService } from '../services/api';
import './BookForm.css';

function BookForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = Boolean(id);

    const [formData, setFormData] = useState({
        title: '',
        author: '',
        isbn: '',
        publication_year: '',
        genre: '',
        description: '',
        price: ''
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isEditMode) {
            fetchBook();
        }
    }, [id]);

    const fetchBook = async () => {
        try {
            const response = await bookService.getBookById(id);
            setFormData(response.data.data);
        } catch (err) {
            setError('Erreur lors du chargement du livre');
            console.error(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.title || !formData.author) {
            alert('Le titre et l\'auteur sont obligatoires');
            return;
        }

        try {
            setLoading(true);
            if (isEditMode) {
                await bookService.updateBook(id, formData);
            } else {
                await bookService.createBook(formData);
            }
            navigate('/');
        } catch (err) {
            setError('Erreur lors de l\'enregistrement du livre');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="book-form">
            <div className="form-header">
                <Link to="/" className="btn btn-secondary">← Retour</Link>
                <h1>{isEditMode ? 'Modifier le Livre' : 'Ajouter un Livre'}</h1>
            </div>

            {error && <div className="error">{error}</div>}

            <form onSubmit={handleSubmit} className="form-card">
                <div className="form-group">
                    <label htmlFor="title">Titre *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        placeholder="Entrez le titre du livre"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="author">Auteur *</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                        placeholder="Entrez le nom de l'auteur"
                    />
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="isbn">ISBN</label>
                        <input
                            type="text"
                            id="isbn"
                            name="isbn"
                            value={formData.isbn}
                            onChange={handleChange}
                            placeholder="978-XXXXXXXXXX"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="publication_year">Année de publication</label>
                        <input
                            type="number"
                            id="publication_year"
                            name="publication_year"
                            value={formData.publication_year}
                            onChange={handleChange}
                            placeholder="2024"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="genre">Genre</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            value={formData.genre}
                            onChange={handleChange}
                            placeholder="Fiction, Science-Fiction, etc."
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="price">Prix (€)</label>
                        <input
                            type="number"
                            step="0.01"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="19.99"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Entrez une description du livre"
                    />
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Enregistrement...' : (isEditMode ? 'Mettre à jour' : 'Ajouter')}
                    </button>
                    <Link to="/" className="btn btn-secondary">Annuler</Link>
                </div>
            </form>
        </div>
    );
}

export default BookForm;
