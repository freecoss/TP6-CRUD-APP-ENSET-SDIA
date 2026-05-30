import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const bookService = {
    getAllBooks: () => api.get('/books'),
    getBookById: (id) => api.get(`/books/${id}`),
    createBook: (bookData) => api.post('/books', bookData),
    updateBook: (id, bookData) => api.put(`/books/${id}`, bookData),
    deleteBook: (id) => api.delete(`/books/${id}`)
};

export default api;
