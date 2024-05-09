import React, { useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/AddFeaturedMovies.css';

const AddFeatureMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState(new Array(5).fill(false));

  const handleButtonClick = (index) => {
    const updatedSelection = [...selectedMovies];
    updatedSelection[index] = !updatedSelection[index];
    setSelectedMovies(updatedSelection);
  };

  return (
    <>
      <AdminNav />
      <div className="add-feature-movies">
        <h2>Add Featured Movies</h2>
        <div className="movie-buttons">
          {selectedMovies.map((isSelected, index) => (
            <button
              key={index}
              className={`movie-button ${isSelected ? 'selected' : ''}`}
              onClick={() => handleButtonClick(index)}
            >
              {index + 1}. Featured Movie
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddFeatureMovies;
