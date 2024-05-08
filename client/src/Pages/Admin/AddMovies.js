import React, { useState } from 'react';
import '../../Css/Admin/AddMovie.css';
import AdminNav from '../../Components/AdminNav';

const AddMovies = () => {
  const [formData, setFormData] = useState({
    movieName: '',
    IMDB_score: '',
    Released_year: '',
    Duration: '',
    Genre: '',
    Cast: '',
    Production: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <>
    <AdminNav />
    <div className="add-movies-container">
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Name:</label>
          <input type="text" name="movieName" value={formData.movieName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>IMDB Score:</label>
          <input type="number" name="IMDB_score" value={formData.IMDB_score} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Released Year:</label>
          <input type="date" name="Released_year" value={formData.Released_year} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Duration (minutes):</label>
          <input type="number" name="Duration" value={formData.Duration} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Genre:</label>
          <input type="text" name="Genre" value={formData.Genre} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Cast:</label>
          <input type="text" name="Cast" value={formData.Cast} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Production:</label>
          <input type="text" name="Production" value={formData.Production} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} required />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
    </>
  );
};

export default AddMovies;
