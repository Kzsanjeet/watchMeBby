import React, { useState } from 'react';
import AdminNav from '../../Components/AdminNav';
import '../../Css/Admin/AddTrendingMovies.css'; 

const AddTrendingMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState(new Array(5).fill(false));

  const handleButtonClick = (index) => {
    const updatedSelection = [...selectedMovies];
    updatedSelection[index] = !updatedSelection[index];
    setSelectedMovies(updatedSelection);
  };

  return (
    <>
      <AdminNav />
      <div className="add-trending-movies">
        <h2>Add Trending Movies</h2>
        <div className="movie-buttons">
          {selectedMovies.map((isSelected, index) => (
            <button
              key={index}
              className={`movie-button ${isSelected ? 'selected' : ''}`}
              onClick={() => handleButtonClick(index)}
            >
              {`Trending Movie ${index + 1}`}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddTrendingMovies;
