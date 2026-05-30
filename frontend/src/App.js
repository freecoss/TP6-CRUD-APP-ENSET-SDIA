import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import BookForm from './components/BookForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="container">
            <Link to="/" className="logo">📚 Gestion de Livres</Link>
            <div className="nav-links">
              <Link to="/">Liste des livres</Link>
              <Link to="/add" className="btn-add">+ Ajouter un livre</Link>
            </div>
          </div>
        </nav>

        <div className="container main-content">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/add" element={<BookForm />} />
            <Route path="/edit/:id" element={<BookForm />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </div>

        <footer className="footer">
          <p>© 2026 Application de Gestion de Livres</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
