import React, { useState } from 'react';
import AdminNav from '../../Components/AdminNav'; 
import '../../Css/Admin/AddMovie.css';

const AddMovies = () => {
  const apiUrl = "http://localhost:4000";
  const [formData, setFormData] = useState({
    movieName: '',
    IMDB_score: '',
    Released_year: '',
    Duration: '',
    Genre: '',
    Cast: '',
    type:'',
    Production: '',
    image: null, // Initialize as null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file selected
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('movieName', formData.movieName);
    formDataToSend.append('IMDB_score', formData.IMDB_score);
    formDataToSend.append('Released_year', formData.Released_year);
    formDataToSend.append('Duration', formData.Duration);
    formDataToSend.append('Genre', formData.Genre);
    formDataToSend.append('Cast', formData.Cast);
    formDataToSend.append('Production', formData.Production);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('image', formData.image); // Append the file

    try {
      const response = await fetch(`${apiUrl}/add-movie`, {
        method: 'POST',
        body: formDataToSend,
      });
      console.log(response);
      if(response.ok){
        setFormData({
          movieName: '',
          IMDB_score: '',
          Released_year: '',
          Duration: '',
          Genre: '',
          Cast: '',
          Production: '',
          type: '',
          image: null,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="add-movies-container">
        <h2>Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="movieName">Movie Name:</label>
            <input type="text" id="movieName" name="movieName" value={formData.movieName} onChange={handleChange} placeholder="Enter movie name" required />
          </div>
          <div className="form-group">
            <label htmlFor="IMDB_score">IMDB Score:</label>
            <input type="number" id="IMDB_score" name="IMDB_score" value={formData.IMDB_score} onChange={handleChange} placeholder="Enter IMDB score" required />
          </div>
          <div className="form-group">
            <label htmlFor="Released_year">Released Year:</label>
            <input type="date" id="Released_year" name="Released_year" value={formData.Released_year} onChange={handleChange} placeholder="Select release date" required />
          </div>
          <div className="form-group">
            <label htmlFor="Duration">Duration (minutes):</label>
            <input type="number" id="Duration" name="Duration" value={formData.Duration} onChange={handleChange} placeholder="Enter duration" required />
          </div>
          <div className="form-group">
            <label htmlFor="Genre">Genre:</label>
            <input type="text" id="Genre" name="Genre" value={formData.Genre} onChange={handleChange} placeholder="Enter genre" required />
          </div>
          <div className="form-group">
            <label htmlFor="Cast">Cast:</label>
            <input type="text" id="Cast" name="Cast" value={formData.Cast} onChange={handleChange} placeholder="Enter cast members" required />
          </div>
          <div className="form-group">
            <label htmlFor="Production">Production:</label>
            <input type="text" id="Production" name="Production" value={formData.Production} onChange={handleChange} placeholder="Enter production company" required />
          </div>
          <div className="form-group">
            <label htmlFor="type">Type:</label>
            <select id="type" name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Select type</option>
              <option value="Movie">Movie</option>
              <option value="TV-Show">TV-Show</option>
              <option value="Series">Series</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="image">Image File:</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleFileChange} required />
          </div>
          <button type="submit">Add Movie</button>
        </form>
      </div>
    </>
  );
};

export default AddMovies;
