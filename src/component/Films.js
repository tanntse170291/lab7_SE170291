import React,{ useState} from 'react';
import filmsData from './ListOfFilms';
import FilmDetailModal from './FilmDetailModal';
import './Films.css'
const Films = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedFilm, setSelectedFilm] = useState(null);

    // Open the modal to show film details
    const openModal = (filmsData) => {
      setSelectedFilm(filmsData);
      setShowModal(true);
    };
  
    // Close the modal
    const closeModal = () => {
      setSelectedFilm(null);
      setShowModal(false);
    };
  
    return (
        <div>
      <div className="films-container">
        {filmsData.map((film) => (
          <div key={film.id} className="film-card">
            <img src={film.image} alt={film.title} />
            <div className="film-info">
              <div className="film-Title">{film.title}</div>
              <p>Year: {film.year}</p>
              <p>Nation: {film.nation}</p>
              <button onClick={() => openModal(film)}>Detail</button>
            </div>
          </div>
        ))}
      </div>
      {showModal && <FilmDetailModal film={selectedFilm} closeModal={closeModal} />}
      </div>
    );
  };
  
  export default Films;
  