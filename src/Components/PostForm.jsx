
import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  // Stato iniziale dei campi del form
  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    isPublic: false
  });

  // Gestione cambi nei campi
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Gestione invio
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts',
        formData
      );

      alert('Post creato con successo!');
      console.log('Risposta API:', response.data);

      setFormData({
        author: '',
        title: '',
        body: '',
        isPublic: false
      });
    } catch (error) {
      console.error('Errore durante l invio del post:', error);
      alert('Errore durante l invio del post');
    }
  };

  
  return (
    <div className="container">
      <h1 className="mb-4 text-center">Crea un nuovo Post</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo Autore */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="author" className="form-label">Autore</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Inserisci il tuo nome"
              required
            />
          </div>
        </div>

        {/* Campo Titolo */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="title" className="form-label">Titolo</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Inserisci il titolo del post"
              required
            />
          </div>
        </div>

        {/* Campo Contenuto */}
        <div className="row mb-3">
          <div className="col">
            <label htmlFor="body" className="form-label">Contenuto</label>
            <textarea
              className="form-control"
              id="body"
              name="body"
              rows="4"
              value={formData.body}
              onChange={handleChange}
              placeholder="Scrivi il contenuto del post..."
              required
            ></textarea>
          </div>
        </div>

        {/* Checkbox */}
        <div className="row mb-4">
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="isPublic"
                name="isPublic"
                checked={formData.isPublic}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="isPublic">
                Rendi il post pubblico
              </label>
            </div>
          </div>
        </div>

        {/* Pulsante Invia */}
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary">Invia</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
