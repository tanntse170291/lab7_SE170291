import React from 'react';
import filmsData from './ListOfFilms';

const FilmDetailModal = ({ film, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={closeModal}>Close</button>
        <h2>{film.title}</h2>
        <p>Year: {film.year}</p>
        <p>Nation: {film.nation}</p>
        <img src={film.image} alt={film.title} />
      
      </div>
    </div>
  );
};

export default FilmDetailModal;
