import React, { useState } from 'react';
import AdminNav from '../../Components/AdminNav'; 
import '../../Css/Admin/AddForYouMovies.css'; 

const AddForYouMovies = () => {
  const [selectedMovies, setSelectedMovies] = useState(new Array(5).fill(false));

  const handleButtonClick = (index) => {
    const updatedSelection = [...selectedMovies];
    updatedSelection[index] = !updatedSelection[index];
    setSelectedMovies(updatedSelection);
  };

  return (
    <>
      <AdminNav />
      <div className="add-for-you-movies">
        <h2>Add For You Movies</h2>
        <div className="movie-buttons">
          {selectedMovies.map((isSelected, index) => (
            <button
              key={index}
              className={`movie-button ${isSelected ? 'selected' : ''}`}
              onClick={() => handleButtonClick(index)}
            >
              {`For You Movie ${index + 1}`}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default AddForYouMovies;
